// Tbody에서 클릭이벤트로 받은 setselmv -> 메인 js에서 useState로 값이 바뀌는 걸 확인 -> Info에서 새로 뿌려주기
export default function BoxOfficeInfo({ selMv }) {
    return (
        <div>
            <div className="flex py-2 px-0 justify-center items-center w-full h-10 mt-2 bg-slate-600 text-white font-bold">
                영화정보
            </div>
            <div className="flex w-full justify-center">
            <div className="flex bg-blue-200 flex-col justify-center items-center w-9/12 h-full font-medium text-larg text-center">
                영화번호 : [{selMv.movieCd}] 
                영화명 : [{selMv.movieNm}] 
                {selMv.rankOldAndNew === 'OLD' ? <span className="text-black">기존 순위권</span> : <span className="text-yellow-800">신규 순위권</span>}
            </div>
            </div>
        </div>
    )
}
