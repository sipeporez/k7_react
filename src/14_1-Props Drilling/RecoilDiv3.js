import ButtonC from '../ui/ButtonC';

export default function RecoilDiv3({ n, setN}) {
  const upclick = () => {
    setN(n + 1);
  }
  const downclick = () => {
    setN(n - 1);
  }

  return (
    <div className="flex flex-col justify-center text-2xl font-bold">
      <div className="flex flex-col justify-center items-center text-left">
        RecoilDiv3 n={n}
      </div>
      <div className="flex justify-center items-center gap-2">
        <ButtonC bcolor={'blue'} label={"Div3 Button - 증가"} handleClick={upclick} />
        <ButtonC bcolor={'blue'} label={"Div3 Button - 감소"} handleClick={downclick} />
      </div>
    </div>

  )
}