export default function BoxOfficeThead() {

    return (
        <thead className="w-full border-b border-neutral-200 font-bold bg-gray-200">
            <tr>
                <td className="whitespace-nowrap px-1 py-4 font-bold text-center">순위</td>
                <td className="whitespace-nowrap px-6 py-4">영화명</td>
                <td className="whitespace-nowrap px-6 py-4">매출액</td>
                <td className="whitespace-nowrap px-6 py-4">관객수</td>
                <td className="whitespace-nowrap px-6 py-4">증감율</td>
            </tr>
        </thead >
    )
}
