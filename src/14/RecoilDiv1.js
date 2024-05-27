import RecoilDiv2 from "./RecoilDiv2";
import { Atomx,Atomx2 } from "./AtomN";
import { useRecoilValue, useRecoilState } from "recoil";
import { useEffect } from "react";

export default function RecoilDiv1() {
    // const n = useRecoilValue(Atomx);
    // 로컬에 저장된 값을 useEffect로 버튼클릭 없이 바로 불러오기
    const [n,setN] = useRecoilState(Atomx);
    useEffect(()=>{
        if (!localStorage.getItem("n")) return;
        setN(parseInt(localStorage.getItem("n")))
    },[])
    const n2 = useRecoilValue(Atomx2);
    return (
        <div>
            <div className="flex flex-col justify-center items-center text-2xl font-bold">
                RecoilDiv1 n={n}, n*2 = {n2}
            </div>
            <RecoilDiv2/>
        </div>
    )
}
