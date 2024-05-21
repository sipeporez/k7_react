import { useSearchParams, useLocation } from "react-router-dom"

export default function RoutePage2() {
    const fruits = ['🍎', '🍌', '🍉'];
    const loc = useLocation();
    console.log(loc.pathname, loc.search)

    const [params] = useSearchParams();

    // forEach를 통해서 여러개의 item 값 가져오기
    // params.forEach((item) => console.log(item))

    // 여러개의 item을 배열에 넣은 후 한번에 출력
    let tm = []
    params.forEach((item) => fruits.includes(item) ?
        tm.push(<li key={item}>{item}: 과일입니다.</li>) :
        tm.push(<li key={item}>{item}: 과일이 아닙니다.</li>)
    )
    return (
        <div>
            <h1 className="text-3xl font-bold">Page2</h1>
            <ul>
                {tm}
            </ul>
        </div>
    )
}
