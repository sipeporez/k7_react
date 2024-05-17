import GalleryCard from './GalleryCard'
import { useState, useEffect, useRef } from 'react'
import ButtonC from '../ui/ButtonC'

export default function Gallery() {
    const [gallData, setGallData] = useState();
    const [cards, setCards] = useState();
    const keyword = useRef();

    const getFetchData = (u) => {
        fetch(u)
            .then(resp => resp.json())
            .then(data => setGallData(data.response.body.items.item))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        let url = "https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1?"
        url += `serviceKey=${process.env.REACT_APP_GALLERY_KEY}`
        url += '&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&_type=json'
        getFetchData(url)
    }, [])

    useEffect(() => {
        if (!gallData) return;
        let tm = gallData.map((item) =>
            <GalleryCard imgURL={item.galWebImageUrl}
                title={item.galTitle}
                content={item.galPhotographyLocation}
                spTag={item.galSearchKeyword}
                key={item.galTitle} />)
        setCards(tm)
    }, [gallData])

    // 확인 버튼 클릭 함수
    const handleClick = () => {
        if (!keyword.current.value) {
            alert("값을 입력하세요.");
            keyword.current.focus();
            return;
        }
        console.log(keyword.current.value)
    }
    // 취소 버튼 클릭 함수
    const handleClick2 = () => {
        keyword.current.value = ''
    }

    return (
        <div className='flex flex-col w-full h-full items-center'>
            <div className='flex w-3/5 items-center justify-center gap-5 my-5'>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 
                text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                block w-3/5 p-2.5" type="text" id='txt1' ref={keyword}></input>
                <ButtonC label={'확인'} bcolor={'blue'} handleClick={handleClick} />
                <ButtonC label={'취소'} bcolor={'blue'} handleClick={handleClick2} />
            </div>
            <div className='flex gap-5 w-full h-full flex-wrap justify-center'>
                {gallData && cards}
            </div>
        </div >
    )
}
