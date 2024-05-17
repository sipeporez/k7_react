import { FaMinus } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export default function BoxOfficeTbody({ dailylist, setselMv }) {
    function rankIcon(ranknum) {
        return ranknum > 0 ? <FaChevronUp className="text-red-500" /> : ranknum < 0 ? <FaChevronDown className="text-blue-500" /> : <FaMinus />;
    }

    // setselMv를 전달받은 값으로 저장
    const handleMvSelect = (mv) => {
        setselMv(mv)
    }

    const mvlist = dailylist.map(item =>
        <tr key={item.movieCd}
            // tr 1행 클릭 시 item 전체를 handleMvSelect 함수에 전달
            onClick={() => handleMvSelect(item)}
            className="w-full border-b border-neutral-200 hover:bg-neutral-100">
            <td className="whitespace-nowrap px-1 py-4 font-medium text-center">{item.rank}</td>
            <td className="whitespace-nowrap px-6 py-4">{item.movieNm}</td>
            <td className="whitespace-nowrap px-6 py-4 text-right">{item.salesAcc.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</td>
            <td className="whitespace-nowrap px-6 py-4 text-right">{item.audiAcc.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}명</td>
            <td className="whitespace-nowrap px-6 py-4 justify-center items-center flex font-bold">
                <span>{rankIcon(item.rankInten)}</span>{item.rankInten !== '0' && Math.abs(item.rankInten)}
            </td>
        </tr>);

    return (
        <tbody>
            {mvlist}
        </tbody>
    )
}
