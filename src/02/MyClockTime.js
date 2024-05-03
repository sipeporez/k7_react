import "./MyClock.css";
import style from './My.module.css';


function MyClockTime() {
    const now = new Date();
    const nowStr = now.toLocaleTimeString();
    const gubun = nowStr.substring(0, 2);
    // const st = {
    //     color:"yellow",
    //     fontWeight: "bold"
    // };

    return (
        <>
            {/* <div className={(gubun == "오전")? "div1": "div2"}> */}
                {/* <div style={st}> */}
                    <div className={style.c1}> {nowStr}</div>
                {/* </div> */}
            {/* </div> */}
        </>
    );
}
export default MyClockTime;