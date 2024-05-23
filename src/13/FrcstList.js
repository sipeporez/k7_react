import { useSearchParams, Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import TailSelect from "../ui/TailSelect";
import getCode from './getcode.json'
import FrcstTbody from "./FrcstTbody";
import FrcstThead from "./FrcstThead";


export default function FrcstList() {
    const [frcData, setFrcData] = useState();
    const [resultData, setResultData] = useState();
    const [params] = useSearchParams();
    const [codeName, setCodeName] = useState();
    const [category, setCategory] = useState();
    // 셀렉트박스 선택용 ref
    const selRef = useRef();

    // 페이지 로드시 1번 실행
    // 셀렉트박스 목록 필터
    useEffect(() => {
        let tm = getCode.filter(item => param[3] === '단기'
            ? item["예보구분"] === '단기예보'
            : item["예보구분"] === '초단기예보')
            .map(item => item["항목명"]);
        setCodeName(tm);
        getFetchData(url)
    }, [])

    // 패치 함수
    const getFetchData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setFrcData(data.response.body.items.item))
            .catch(err => console.log(err))
    }

    // 셀렉트박스 선택 이벤트
    const handleChange = () => {
        let tm = getCode.filter(item => param[3] === '단기'
            ? item["예보구분"] === '단기예보' && item["항목명"] === selRef.current.value
            : item["예보구분"] === '초단기예보' && item["항목명"] === selRef.current.value);
        setCategory(tm[0]);
    }

    // 셀렉트박스 선택 이후 실행
    useEffect(() => {
        if (!category) return;
        const re = frcData.filter(item => item.category === category.항목값)
        setResultData(re)
    }, [category])

    // main의 navigater로 item값 받아서 param 배열에 저장 (fetch url 생성)
    let param = []
    let url = ''
    params.forEach((item) => param.push(item))
    // 초단기, 단기 구분
    if (param[3] === '초단기') url += `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?`
    else url += `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?`
    url += `serviceKey=${process.env.REACT_APP_FRCST_KEY}`
    url += '&pageNo=1&numOfRows=1000&'
    url += `dataType=json&base_date=${param[0]}&base_time=0500&nx=${param[1]}&ny=${param[2]}`

    return (
        <div className="flex flex-col justify-start items-center w-4/5 h-full">
            <div className="flex items-center gap-10 my-5">
                <div>
                    <h2 className="flex text-2xl font-bold">{param[0].replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')} {param[4]} {param[3]}예보</h2>
                </div>
                <div className="flex">
                    {codeName &&
                        <TailSelect
                            id="op"
                            ops={codeName}
                            useref={selRef}
                            initlabel="--예보 목록--"
                            handleChange={() => handleChange()} />}
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-300">
                                    <FrcstThead />
                                    {(resultData && category) && <FrcstTbody datalist={resultData} category={category} />}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
