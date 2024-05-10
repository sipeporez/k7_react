import bank from './img/bank.png'
import busan from './img/busan.png'
import market from './img/market.png'
import { useState } from 'react'

export default function FoodBankCard({ FoodData }) {
    // 전화번호 클릭시 표시/비표시 전환용 state, 기본값은 비표시
    const [isShow, setisShow] = useState(false);
    // 클릭 이벤트 처리용 함수
    const handleShow = () => {
        setisShow(!isShow);
    }
    // 이미지 구분 - 광역지원센터 / 기초푸드뱅크 / 기초푸드마켓
    return (
        <div className='flex justify-start items-center'>
            <div className='w-36 mr-2 min-w-36' >
                <img src={
                    FoodData.구분 === "광역지원센터" ? busan :
                        FoodData.구분 === "기초푸드뱅크" ? bank : market
                } alt='bank' />
            </div>
            <div className='flex flex-col justify-center'>
                <div className='text-2xl font-bold text-neutral-600'>
                    {FoodData.사업장명}
                </div>
                <div className='font-bold text-neutral-700  my-1'>
                    {FoodData.운영주체명}
                </div>
                <div className='font-light text-sm text-neutral-700'>
                    {FoodData["사업장 소재지"]}
                </div>
                <div className='w-40 text-opacity-90 text-white bg-slate-500 mt-2' onClick={handleShow}>
                    Tel. {isShow && FoodData['연락처(대표번호)']}
                </div>
            </div>
        </div>
    )
}
