import BusanFestivalCard from './BusanFestivalCard'
import TailSelect from '../ui/TailSelect';
import { useState, useEffect, useRef } from 'react'

export default function BusanFestival() {
    const [FestData, setFestData] = useState();
    const [cards, setCards] = useState();
    const [selgu, setSelGU] = useState();
    const selRef = useRef();

    // 셀렉트박스 리스트를 불러오기 위해 최초 1번 패치 실행
    useEffect(() => {
        let url = "https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?"
        url += `serviceKey=${process.env.REACT_APP_FESTIVAL_KEY}`
        url += `&pageNo=1&numOfRows=37&resultType=json`
        getFetchData(url);
    }, [])

    // 패치 함수
    const getFetchData = (u) => {
        fetch(u)
            .then(resp => resp.json())
            .then(data => setFestData(data.getFestivalKr.item))
            .catch(err => console.log(err))
    }

    // FestData 변경시 실행 (Fetch 끝난 뒤에 실행)
    useEffect(() => {
        if (!FestData) return;
        let gulist = [...new Set(FestData.map((item) => item.GUGUN_NM))].sort()
        setSelGU(gulist)
    }, [FestData])

    // 셀렉트박스 선택 함수 -> 지역구 이름으로 필터링후 맵으로 카드에 뿌려줌
    const handleChange = () => {
        let tm = FestData.filter((item) => item["GUGUN_NM"] === selRef.current.value)
            .map(item =>
                <BusanFestivalCard
                    imgURL={item.MAIN_IMG_THUMB}
                    title={item.TITLE}
                    content={item.GUGUN_NM}
                    date={item.USAGE_DAY_WEEK_AND_TIME}
                    spTag={item.PLACE}
                    key={item.TITLE} />)
        setCards(tm)
    }
    return (
        <div className='flex flex-col w-full h-full items-center'>
            <div className='flex w-3/5 items-center justify-center gap-5 my-5'>
                {selgu &&
                    <TailSelect
                        id="op"
                        ops={selgu}
                        useref={selRef}
                        initlabel="--지역구 선택--"
                        handleChange={() => handleChange()} />}
            </div>
            <div className='flex gap-5 w-full h-full flex-wrap justify-center'>
                {FestData && cards}
            </div>
        </div >
    )
}
