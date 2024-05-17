export default function GalleryCard({ imgURL, title, content, spTag }) {
    let sptags = (spTag.includes(',') ? spTag.split(', ') : [spTag])
        .map(item => <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            key={item}>#{item}</span>)
    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                {/* 이미지 부분 */}
                <img className="w-full" src={imgURL.replace('http://', 'https://')} alt={title} />
                <div className="px-6 py-4">
                    {/* 제목 부분 */}
                    <div className="font-bold text-xl mb-2">{title}</div>
                    {/* 내용 부분 */}
                    <p className="text-gray-700 text-base">{content}</p>
                </div>
                {/* 태그 부분 */}
                <div className="px-6 pt-4 pb-2">
                    {sptags}
                </div>
            </div>
        </div>
    )
}
