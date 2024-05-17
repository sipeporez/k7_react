import { useState, useEffect, useRef } from "react";

import BoxOfficeInfo from "./BoxOfficeInfo";
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeThead from "./BoxOfficeThead";

export default function BoxOffice() {
  const [dailylist, setdailylist] = useState([]);
  const [selMv, setselMv] = useState();
  const selDate = useRef();

  // 오늘 날짜 생성
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  const yyyymmdd = parseInt(`${year}${month}${day}`);


  // 날짜 선택시
  const handleSelect = (e) => {
    e.preventDefault();
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json`
    url += `?key=${process.env.REACT_APP_BOXOFFICE_KEY}`
    url += `&targetDt=${selDate.current.value.replaceAll('-', '')}`
    // 오늘 이후의 날짜 선택시
    selDate.current.value.replaceAll('-', '') >= yyyymmdd
      ? alert("오늘 이전의 날짜를 선택해주세요.")
      : getFetchData(url)
  }

  const getFetchData = (u) => {
    fetch(u)
      .then(resp => resp.json())
      .then(data => setdailylist(data.boxOfficeResult.dailyBoxOfficeList))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    setselMv(dailylist[0]);
  }, [dailylist]);

  return (
    <div className="w-full h-full mt-10">
      <div className="flex flex-col">
        <form>
          <div className="flex justify-end items-center mb-3 mr-10">
            <label htmlFor="datepick" className="mr-5">날짜 선택</label>
            <input
              type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5"
              id="datepick"
              ref={selDate}
              onChange={handleSelect}></input>
          </div>
        </form>
        <table
          className="w-full text-left text-sm font-light text-surface">
          <BoxOfficeThead />
          <BoxOfficeTbody dailylist={dailylist} setselMv={setselMv} />
        </table>
        {/* selMv값이 있는 경우에만 값을 전달 */}
        {selMv && <BoxOfficeInfo selMv={selMv} />}
      </div>
    </div >
  )
}
