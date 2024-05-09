import { useState, useEffect } from "react";

import BoxOfficeInfo from "./BoxOfficeInfo";
import BoxOfficeTbody from "./BoxOfficeTbody";
import BoxOfficeThead from "./BoxOfficeThead";
import BoxData from "./BoxOffice.json";

export default function BoxOffice() {
  const [dailylist, setdailylist] = useState([]);
  const [selMv, setselMv] = useState();

  useEffect(() => {
    setdailylist(BoxData.boxOfficeResult.dailyBoxOfficeList);
},[]);

  useEffect(() => {
    setselMv(dailylist[0]);
  },[dailylist]);

  return (
    <div className="w-full h-full mt-10">
      <div className="flex flex-col">
      <table
          className="min-w-full text-left text-sm font-light text-surface">
         <BoxOfficeThead/>
         <BoxOfficeTbody dailylist = {dailylist} setselMv = {setselMv}/>
        </table>
        {/* selMv값이 있는 경우에만 값을 전달 */}
         {selMv && <BoxOfficeInfo selMv = {selMv}/>}
      </div>
    </div>
  )
}
