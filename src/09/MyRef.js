import { useRef } from "react";
import ButtonC from "../ui/ButtonC"
import { useState, useEffect } from "react"

export default function MyRef() {
    // Comp 변수 선언
    let cValue = 0
    // State 변수 선언
    const [sValue, setsValue] = useState(0);
    // Ref 변수 선언
    const rValue = useRef(0)

    // 계산기 input부분 변수 => input 태그 안에 ref={변수명} 으로 지정
    const x1 = useRef();
    const x2 = useRef();
    const x3 = useRef();

    // Component 밸류
    const clickedComp = () => {
        cValue++
        console.log("컴포넌트 밸류 : " + cValue)
    }

    // State 밸류 - useState, Effect 사용
    // 값이 바뀔때마다 화면에 뿌려줌
    const clickedState = () => {
        setsValue(sValue + 1)
    }
    useEffect(() => {
        console.log("State 밸류 : " + sValue)
    }, [sValue])

    // Ref 밸류 - 값을 저장했다가 렌더링 시 값을 뿌려줌
    const clickedRef = () => {
        rValue.current = rValue.current + 1
        console.log("Ref 밸류 : " + rValue.current)
    }
    // input 태그에 걸어둔 ref 속성들을 버튼 클릭시 처리하는 함수
    const clickedRefCalc = () => {
        if (!x1.current.value) {
            alert("값을 입력하세요.");
            x1.current.focus();
            return;
        }
        else if (!x2.current.value) {
            alert("값을 입력하세요.");
            x2.current.focus();
            return;
        }
        console.log("x1 밸류 : " + x1.current.value)
        console.log("x2 밸류 : " + x2.current.value)
        x3.current.value = parseInt(x1.current.value) + parseInt(x2.current.value)
        console.log("x3 밸류 : " + x3.current.value)
    }
    return (
        <div className="flex flex-col first:justify-center items-center">
            <div className="flex h-20 p-5 font-bold text-xl gap-10">
                <div>
                    컴포넌트 변수: {cValue}
                </div>
                <div>
                    state 변수: {sValue}
                </div>
                <div>
                    {/* Ref 변수는 .current로 접근해야 함 */}
                    ref 변수: {rValue.current}
                </div>
            </div>
            <div className="flex gap-5">
                <div>
                    <ButtonC label={"컴포넌트 변수"} bcolor={'blue'} handleClick={clickedComp}></ButtonC>
                </div>
                <div>
                    <ButtonC label={"state 변수"} bcolor={'blue'} handleClick={clickedState}></ButtonC>
                </div>
                <div>
                    <ButtonC label={"ref 변수"} bcolor={'blue'} handleClick={clickedRef}></ButtonC>
                </div>
            </div>
            <div className="mt-3 flex justify-center items-center gap-3">

                <input className="bg-gray-50 border border-gray-300 text-gray-900 
                text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                block w-3/5 p-2.5" type="number" id='txt1' ref={x1} />

                <span className="text-xl">+</span>

                <input className="bg-gray-50 border border-gray-300 text-gray-900 
                text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                block w-3/5 p-2.5" type="number" id='txt2' ref={x2} />

                <ButtonC label={"="} bcolor={'orange'} handleClick={clickedRefCalc} />

                <input className="bg-gray-50 border border-gray-300 text-gray-900
                text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
                block w-3/5 p-2.5" type="number" id='txt3' ref={x3} readOnly />
            </div>
        </div >
    )
}
