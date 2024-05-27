import RecoilDiv3 from "./RecoilDiv3"

export default function RecoilDiv2({ n , n2, setN}) {

  return (
    <div>
      <div className="flex flex-col justify-center items-center text-2xl font-bold">
        RecoilDiv2 n*2 = {n2}
      </div>
      <RecoilDiv3 n={n} setN={setN} n2={n2} />
    </div>
  )
}
