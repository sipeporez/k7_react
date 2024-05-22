import { useSearchParams, Link } from "react-router-dom"
import { useState, useEffect, useRef } from "react";
import TailSelect from "../ui/TailSelect";
import getCode from './getcode.json'
import TailTable from "../ui/TailTable";


export default function FrcstList() {
    const [frcData, setFrcData] = useState();
    const [resultData, setResultData] = useState();
    const [params] = useSearchParams();
    const [codeName, setCodeName] = useState();
    const [category, setCategory] = useState();
    // 셀렉트박스 선택용 ref
    const selRef = useRef();

    // 셀렉트박스 목록 필터
    useEffect(() => {
        let tm = getCode.filter(item => param[3] === '단기'
            ? item["예보구분"] === '단기예보'
            : item["예보구분"] === '초단기예보')
            .map(item => item["항목명"]);
        setCodeName(tm);
        getFetchData(url)
    }, [])

    // 셀렉트박스 선택시 실행
    const handleChange = () => {
        let tm = getCode.filter(item => param[3] === '단기'
            ? item["예보구분"] === '단기예보' & item["항목명"] === selRef.current.value
            : item["예보구분"] === '초단기예보' & item["항목명"] === selRef.current.value)
            .map(item => item["항목값"]);
        setCategory(tm);

        // const re = frcData.filter(item => item.category == category)
        //     .map(item => <TailTable head={item} body={item} />)
        // setResultData(re)
    }

    // item값 받아서 패치용 url 생성
    let param = []
    let url = ''
    params.forEach((item) => param.push(item))
    const seleFrc = ['UltraSrt', 'Vilage']
    if (param[3] === '초단기') {
        url += `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/get${seleFrc[0]}Fcst?`
    }
    else {
        url += `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/get${seleFrc[1]}Fcst?`
    }
    url += `serviceKey=${process.env.REACT_APP_FRCST_KEY}`
    url += '&pageNo=1&numOfRows=1000&'
    url += `dataType=json&base_date=${param[0]}&base_time=0500&nx=${param[1]}&ny=${param[2]}`

    // 패치 함수
    const getFetchData = (url) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => setFrcData(data.response.body.items.item))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <div>
                {/* <Link to='/Frcst'>단기예보 홈</Link> */}
            </div>
            <div>
                {codeName &&
                    <TailSelect
                        id="op"
                        ops={codeName}
                        useref={selRef}
                        initlabel="--예보 목록--"
                        handleChange={() => handleChange()} />}
            </div>
            <div>
                {resultData}
            </div>
        </div>
    )
}
