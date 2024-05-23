export default function FrcstTbody({ datalist, category }) {
    // 오브젝트로 코드값 처리
    const sky = { "1": "맑음", "3": "구름많음", "4": "흐림" }
    const pty = { "0": "없음", "1": "비", "2": "비/눈", "3": "눈", "4": "소나기", "5": "빗방울", "6": "빗방울눈날림", "7": "눈날림" }
    const vec = { 0: "북", 1: "북북동", 2: "북동", 3: "동북동", 4: "동", 5: "동남동", 6: "남동", 7: "남남동", 8: "남", 9: "남남서", 10: "남서", 11: "서남서", 12: "서", 13: "서북서", 14: "북서", 15: "북북서", 16: "북" }


    const bodylist = datalist.map(item =>
        <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100"
            key={item.fcstTime + item.fcstDate}>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                {category.항목명}({category.항목값})</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                {item.baseTime.replace(/(\d{2})(\d{2})/g, '$1시$2분')}</td >
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                {item.fcstDate.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                {item.fcstTime.replace(/(\d{2})(\d{2})/g, '$1시$2분')}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                {category.항목값 === 'SKY' ?
                    sky[item.fcstValue] :
                    category.항목값 === 'PTY' ?
                        pty[item.fcstValue] :
                        category.항목값 === 'VEC' ?
                            vec[Math.floor((parseInt(item.fcstValue) + 11.25) / 22.5)] :
                            `${item.fcstValue} ${category.단위}`
                }
            </td>
        </tr>
    );

    return (
        <tbody>
            {bodylist}
        </tbody>
    )
}
