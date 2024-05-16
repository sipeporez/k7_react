import { useState, useEffect } from "react";
import TraficButton from "./TrafficButton";

export default function TraficMain() {
    //Fetch 함수로 데이터 가져오기
    //비동기 이므로 then chaining을 사용하여 싱크를 맞춤
    // 프로그램 두번째 실행 부분
    const [tdata, setTdata] = useState();
    const [tlist, setTlist] = useState();

    const getFetchData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setTdata(data.data))
            .catch(err => console.log(err))
    }

    // 컴포넌트 생성 시 1번 실행 ([])
    // 프로그램 첫 실행 부분
    useEffect(() => {
        let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:00e5cb5a-ecdf-4190-a499-ba3a6b2a8db9??page=1&perPage=17&serviceKey=';
        url = `${url}${process.env.REACT_APP_API_KEY}`;
        // Fetch 함수 호출
        getFetchData(url);
    }, []);

    // tdata가 변경되면 {} 블록 내의 코드를 실행 ([tdata])
    // 프로그램 세 번째 실행 부분
    useEffect(() => {
        // tdata가 있는 경우에만 실행, 아직 불러오지 못한 경우 return
        if (!tdata) return;
        setTlist([...new Set(tdata.map(item => item["사고유형_대분류"]))])
    }, [tdata]);

    // useEffect(() => {
    //     // tlist가 있는 경우에만 실행, 아직 불러오지 못한 경우 return
    //     if (!tlist) return;
    //     // console.log(tlist)
    // }, [tlist])
    return (
        <div className="flex w-full h-full justify-center items-start">
            <div className="flex flex-col w-1/3 h-full justify-center items-center">
                <div className="h-full justify-center items-center">
                    교통사고 대분류
                </div>
                <div className="h-full justify-center items-center">
                    교통사고 중분류
                </div>
            </div>
            <div className="flex w-full h-full items-start justify-end ">
                <TraficButton tData={tdata} tList={tlist} />
            </div>
        </div>
    )
}
