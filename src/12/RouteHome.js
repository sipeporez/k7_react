import { Link } from "react-router-dom"

export default function RouteHome() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">
                RouteHome
            </h1>
            <div className="w-full flex justify-center items-center gap-20 m-20">
                <div>
                    {/* Page1 = useParams를 통해 전달 */}
                    <h2 className="text-xl font-bold">Page1</h2>
                    <ul >
                        <li>
                            <Link to='/p1/🍎'>사과🍎</Link>
                        </li>
                        <li>
                            <Link to='/p1/🍌'>바나나🍌</Link>
                        </li>
                        <li>
                            <Link to='/p1/🥕'>당근🥕</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    {/* Page2 = QueryString을 통해 전달 */}
                    <h2 className="text-xl font-bold">Page2</h2>
                    <ul>
                        <li>
                            <Link to='/p2?item=🍎'>사과🍎</Link>
                        </li>
                        <li>
                            <Link to='/p2?item=🍌'>바나나🍌</Link>
                        </li>
                        <li>
                            <Link to='/p2?item=🥕'>당근🥕</Link>
                        </li>
                        <li>
                            <Link to='/p2?item1=🍎&item2=🍌&item3=🥕&item4=🍉'>사과🍎 바나나🍌 당근🥕 수박🍉</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
