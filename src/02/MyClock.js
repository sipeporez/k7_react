import MyClockImage from "./MyClockImage";
import MyClockTime from "./MyClockTime";

function MyClock() {
    return (
        <header className="flex flex-col justify-center items-center bg-slate-600 w-full h-full">
            <div>
        <MyClockImage className="w-full h-full"/>
        <MyClockTime/>
        </div>
        </header>
    );
}

export default MyClock;