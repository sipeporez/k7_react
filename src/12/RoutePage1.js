import { useParams } from "react-router-dom"
export default function RoutePage1() {
    const item = useParams().item
    const fruits = ['🍎', '🍌']

    return (
        <div>
            <h1 className="text-3xl font-bold">Page1</h1>
            {fruits.includes(item) ?
                `${item}:  과일입니다.` :
                `${item}:  과일이 아닙니다.`}
        </div>
    )
}
