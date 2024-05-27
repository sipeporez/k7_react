import RecoilDiv3 from "./RecoilDiv3"
import { Atomx2 } from "./AtomN";
import { useRecoilValue } from "recoil";

export default function RecoilDiv2() {  
  const n = useRecoilValue(Atomx2);
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-2xl font-bold">
        RecoilDiv2 n*2 = {n}
      </div>
      <RecoilDiv3/>
    </div>
  )
}
