import { useState } from 'react';
import ButtonC from '../ui/ButtonC';
import { Atomx } from "./AtomN";
import { useRecoilState } from "recoil";


export default function RecoilDiv3() {
  const [n, setN] = useRecoilState(Atomx);
  const [n3, setN3] = useState();

  const upclick = () => {
    setN(parseInt(n) + 1)
  }
  const downclick = () => {
    setN(n - 1)
  }
  const savelocal = () => {
    localStorage.setItem("n", n)
    setN3(localStorage.getItem("n"))
  }
  const loadlocal = () => {
    setN(localStorage.getItem("n"))
  }
  const removelocal = () => {
      localStorage.removeItem("n");
      setN(0);
      setN3(localStorage.getItem("n"))
  }

  return (
    <div className="flex flex-col justify-center text-2xl font-bold">
      <div className="flex flex-col justify-center items-center text-left">
        RecoilDiv3 n={n}, local={n3}
      </div>
      <div className="flex flex-wrap justify-center items-center gap-2">
        <ButtonC bcolor={'blue'} label={"Div3 - 증가"} handleClick={upclick} />
        <ButtonC bcolor={'blue'} label={"Div3 - 감소"} handleClick={downclick} />
        <ButtonC bcolor={'blue'} label={"local 저장"} handleClick={savelocal} />
        <ButtonC bcolor={'blue'} label={"local 로드"} handleClick={loadlocal} />
        <ButtonC bcolor={'blue'} label={"local 삭제"} handleClick={removelocal} />
      </div>
    </div>
  )
}