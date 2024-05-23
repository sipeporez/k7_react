import { Link, useNavigate } from "react-router-dom"
import getXY from "./getxy.json" // 셀렉박스로 넘겨줄것 
import { useState, useEffect, useRef } from "react"
import ButtonC from "../ui/ButtonC"
import TailSelect from "../ui/TailSelect"

export default function FrcstMain() {
    // 좌표값용 state
    const [getX, setGetX] = useState();
    const [getY, setGetY] = useState();
    const [getLoc, setGetLoc] = useState();
    // 날짜 state
    const [getDate, setgetDate] = useState();
    // 날짜 선택용 ref
    const selDate = useRef();
    // 셀렉트박스 선택용 ref
    const selRef = useRef();

    const navigate = useNavigate();

    // 클릭시 구분자로 주소 구분하여 실행 (getFetchData 함수 호출을 )


    // 셀렉트박스로 지역 출력
    const xyData = getXY.map(item => item["1단계"])

    // 셀렉트박스 선택시 실행
    const handleChange = () => {
        let nx = getXY.filter((item) => item["1단계"] === selRef.current.value)
            .map(item => item["격자 X"])
        let ny = getXY.filter((item) => item["1단계"] === selRef.current.value)
            .map(item => item["격자 Y"])
        let loc = getXY.filter((item) => item["1단계"] === selRef.current.value)
            .map(item => item["1단계"])

        setGetX(nx)
        setGetY(ny)
        setGetLoc(loc)
    }

    // 오늘 날짜 생성
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const yyyymmdd = parseInt(`${year}${month}${day}`);
    // 날짜 선택으로 base_date 설정
    // 2일 까지만 가능, 0520 선택시 에러

    // 날짜 선택시
    const handleSelect = (e) => {
        e.preventDefault();
        let tm = selDate.current.value.replaceAll('-', '')
        // 오늘 이후의 날짜 선택시
        tm < yyyymmdd - 1
            ? alert("2일 이내의 날짜를 선택해주세요.")
            : tm > yyyymmdd ? alert("오늘 이전의 날짜를 선택해주세요.")
                : setgetDate(tm)
    }
    // 버튼 클릭
    const handleClick = (e) => {
        if (!getDate) {
            alert("올바른 날짜를 선택해주세요")
            selDate.current.focus()
            return;
        }
        else if (!getX || (getX && getY == [])) {
            alert("지역을 선택해주세요")
            selRef.current.focus()
            return;
        }
        else {
            navigate(`/FrcstLi?item1=${getDate}&item2=${getX}&item3=${getY}&item4=${e}&item5=${getLoc}`)
        }
    }

    return (
        <div className="flex flex-col w-4/5 justify-center items-center">
            <div className="flex w-full justify-center gap-10">
                <form>
                    <div className="flex w-full justify-end items-center mb-3">
                        <input
                            type="date" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm 
                            rounded-lg focus:ring-blue-500 focus:border-blue-500  ps-10 p-2.5"
                            id="datepick"
                            ref={selDate}
                            onChange={handleSelect}></input>
                    </div>
                </form>
                {xyData &&
                    <TailSelect
                        id="op"
                        ops={xyData}
                        useref={selRef}
                        initlabel="--지역 선택--"
                        handleChange={() => handleChange()} />}
            </div>
            <div className="flex w-full justify-center gap-10">
                <ButtonC
                    label='초단기예보'
                    bcolor='blue'
                    handleClick={() => { handleClick('초단기') }} />
                <ButtonC
                    label='단기예보'
                    bcolor='blue'
                    handleClick={() => { handleClick('단기') }} />
            </div>
            {/* <Link to={navigate} /> */}
        </div >
    )
}
