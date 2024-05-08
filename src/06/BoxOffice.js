import BoxOfficeData from "./BoxOffice.json";

export default function BoxOffice() {
    const dailylist = BoxOfficeData.boxOfficeResult.dailyBoxOfficeList;

    const mvName = dailylist.map(item => <li key={item.movieCd} className="font-bold">{item.rank}. {item.movieNm}<p>개봉일: {item.openDt}</p></li>);
  return (
    <div>
        <ul>
            {mvName}  
        </ul>
    </div>
  )
}
