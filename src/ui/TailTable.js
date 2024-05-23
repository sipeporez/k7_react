export default function TailTable({ head, body }) {
    const thead = head.map(item =>
        <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500" key={item}>{item}</th>)

    const tbody = body.map(item =>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800" key={item}>{item}</td>)


    return (
        <div>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="overflow-hidden">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        {thead}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100">
                                        {tbody}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

