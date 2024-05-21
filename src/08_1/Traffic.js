import TrafficNav from "./TrafficNav";
import { useState, useEffect } from "react";

export default function Traffic() {
    const [tdata, setTdata] = useState(); // 전체 데이터 (FetchData)

    const [c1, setC1] = useState();       // 대분류 데이터
    const [selC1, setselC1] = useState(); // 선택된 대분류

    const [c2, setC2] = useState();       // 중분류 데이터
    const [selC2, setselC2] = useState(); // 선택된 중분류

    const [info, setInfo] = useState();   // 선택된 중분류에 대한 데이터

    // useEffect - DOM 완성시 무조건 1번 실행 ([])
    useEffect(() => {
        let url = `https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9?page=1&perPage=17&returnType=json&serviceKey=${process.env.REACT_APP_TRAFFIC_KEY}`;
        //함수로 url 전달
        getFetchData(url);
    }, [])

    // useEffect - tdata 변경 될때 실행 ([tdata])
    useEffect(() => {
        // 첫 선언때 undifiend 불러오는것 방지
        if (!tdata) return;
        let tm = [...new Set(tdata.map(item => item['사고유형_대분류']))]
        setC1(tm)
    }, [tdata])

    // 대분류를 선택하면 (selC1) => c2 생성 (중분류 추출)
    useEffect(() => {
        if (!tdata || !c1 || !selC1) return;
        let tm = tdata.filter(item => item['사고유형_대분류'] === selC1)
            .map(item => item['사고유형_중분류']);
        setC2(tm)
        setInfo('')
    }, [selC1])

    // 중분류를 선택하면 (selC2) => info 생성 (세부정보 추출)
    useEffect(() => {
        if (!tdata || !c1 || !selC1 || !selC2) return;
        let tm = tdata.filter(item => item['사고유형_대분류'] === selC1
            && item['사고유형_중분류'] === selC2)
        const infoKey = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수'];
        tm = tm[0]
        tm = infoKey.map(item => <div key={item} className="flex flex-col">
            <div className="flex justify-center items-center 
                        bg-slate-500 py-3 mt-5 text-white font-bold text-xl rounded-tr-xl rounded-tl-xl">
                {item}
            </div>
            <div className="flex justify-center items-center
                         bg-slate-200 h-20 text-xl font-bold rounded-br-xl rounded-bl-xl">
                {parseInt(tm[item]).toLocaleString()}
            </div>
        </div>)
        setInfo(tm)
    }, [selC2])

    // url 처리를 위한 fetch API 함수 (비동기 .then)
    const getFetchData = (u) => {
        // fetch 내장함수로 받은 주소를 Promise 객체로 변환
        fetch(u)
            // 반환된 Promise객체를 fetchedData에 json형식으로 변환하여 저장
            .then(fetchedData => fetchedData.json())
            // 저장된 json의 구분자가 data이기 때문에 data.data
            // 해당 데이터를 state변수의 set에 전달 -> 최종적으로 tdata에 저장됨
            .then(data => setTdata(data.data))
            // 비동기 방식은 catch 필수, 예외 발생시 콘솔에 출력
            .catch(err => console.log(err))
    }
    return (
        <div className="w-full h-full flex flex-col
                        justify-start items-center">
            <div className="w-full">
                {c1 &&
                    <TrafficNav
                        title="대분류"
                        c={c1}
                        sel={selC1}
                        setSel={setselC1} />}
            </div>
            <div className="w-full">
                {c2 &&
                    <TrafficNav
                        title="중분류"
                        c={c2}
                        sel={selC2}
                        setSel={setselC2} />}
            </div>
            <div className="w-full grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
                {info}
            </div>
        </div>
    )
}
