import "./MyClock.css";
import { useEffect, useState } from "react";

function MyClockTime() {
    const now = new Date();

    const [ctime, setCtime] = useState(now);

    useEffect(() => {
        const tm = setInterval(() => setCtime(new Date()), 1000);

        return () => {
            clearInterval(tm);
        }
    }, [])


    return (
        <div className="flex justify-center items-center">
            <div className="text-white font-bold text-4xl mt-10">
                {ctime.toLocaleTimeString()}
            </div>
        </div>
    );
}
export default MyClockTime;