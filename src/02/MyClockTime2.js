import { useState } from "react";

function MyClockTime() {
    const nowTime = () => {
        let now = new Date();
        let hr = String(now.getHours()).padStart(2,"0");
        let min = String(now.getMinutes()).padStart(2,"0");
        let sec = String(now.getSeconds()).padStart(2,"0");
        return `${hr}:${min}:${sec}`
    }
    const [clock,setclock] = useState(nowTime);

    setInterval(()=>setclock(nowTime),1000);

    return (
        <h2>
        {clock}
        </h2>
    );
}
export default MyClockTime;