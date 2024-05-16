import ButtonC from '../ui/ButtonC'
import { useState, useEffect } from "react";

export default function TraficButton({ tData, tList }) {
    const [totaldata, setTotaldata] = useState();
    const [sel1data, setSel1data] = useState(); // 선택된 대분류
    const [sel2data, setSel2data] = useState(); // 선택된 중분류
    const [datainfo, setDatainfo] = useState(); // 상세정보

    // 총 데이터 훅
    useEffect(() => {
        // tdata가 있는 경우에만 실행, 아직 불러오지 못한 경우 return
        if (!tData) return;
        setTotaldata(tData)
    }, [tData]);

    // 중분류 훅
    useEffect(() => {
        // totaldata가 있는 경우에만 실행, 아직 불러오지 못한 경우 return
        if (!totaldata) return;
        // 선택한 대분류가 일치하는 경우 해당 대분류의 중분류를 배열화
        let tm = totaldata.filter(item => item["사고유형_대분류"] === sel1data).map(item => item["사고유형_중분류"])
        setSel2data(tm)

        let info = totaldata.filter(item => item['사고유형_대분류'] === sel1data && item["사고유형_중분류"] === datainfo)
        console.log(info)

    }, [sel1data]);
    // 중분류 버튼 클릭 이벤트
    const handleClick2 = (c) => {
        setDatainfo(c)
    }

    // 대분류 버튼 클릭 이벤트
    const handleClick = (c) => {
        setSel1data(c)
    }
    // sel2data가 로딩 안된 경우 error 발생하므로
    // sel2data && 로 로딩 확인
    // 중분류 버튼 출력 함수
    let buttons2 = sel2data && sel2data.map(item =>
        <ButtonC
            key={item}
            label={item}
            bcolor={'blue'}
            handleClick={() => handleClick2(item)}
        />)
    // tlist가 로딩 안된 경우 error 발생하므로
    // tlist && 로 로딩 확인
    // 대분류 버튼 출력 함수
    let buttons = tList && tList.map(item =>
        <ButtonC
            key={item}
            label={item}
            bcolor={'blue'}
            handleClick={() => handleClick(item)}
        />)
    return (
        <div className='flex flex-col'>
            <div className='flex w-full justify-between items-center mt-2 mr-5'>
                {buttons}
            </div>
            <div className='flex justify-between items-center mt-10'>
                {buttons2}
            </div>
            <div className='flex justify-between items-center mt-10'>

            </div>
        </div>
    )
}
