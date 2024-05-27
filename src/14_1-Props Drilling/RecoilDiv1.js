import { useEffect, useState } from "react"
import RecoilDiv2 from "./RecoilDiv2";

export default function RecoilDiv1() {
    const [n, setN] = useState(1);
    const [n2, setN2] = useState();

    useEffect(() => {
        setN2(n * 2)
    }, [n])

    return (
        <div>
            <div className="flex flex-col justify-center items-center text-2xl font-bold">
                RecoilDiv1 n={n}, n*2 = {n2}
            </div>
            <RecoilDiv2 n={n} n2={n2} setN={setN}/>
        </div>
    )
}
