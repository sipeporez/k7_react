import MyClockImage from "./MyClockImage";
import MyClockTime from "./MyClockTime";

function MyClock() {
    return (
        <header className="App-header">
            <div>
        <MyClockImage/>
        <MyClockTime/>
        </div>
        </header>
    );
}

export default MyClock;