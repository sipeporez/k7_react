import ButtonC from "../ui/ButtonC"

export default function TraficNav({ title, c, sel, setSel }) {
    const cTag = c.map((item) => <ButtonC
        label={item}
        key={item}
        bcolor={sel === item ? 'orange' : 'blue'}
        handleClick={() => buttonClicked(item)} />)

    // 버튼클릭 함수
    const buttonClicked = (item) => {
        setSel(item)
    }
    return (
        <div className="w-full h-full flex justify-start items-start mt-3">
            <div className="flex w-1/5 justify-center items-center mt-3">
                교통사고 {title}
            </div>
            <div className="grid grid-cols-4 gap-4 w-4/5">
                {cTag}
            </div>
        </div>
    )
}
