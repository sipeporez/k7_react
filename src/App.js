import './App.css';
import { AiFillHome } from "react-icons/ai";
// import MyClock from './02/MyClock';
// import MyDiv from './03/MyDiv';
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
// import BoxOffice from './06/BoxOffice';
// import FoodBankMain from './07/FoodBankMain';
// import TrafficMain from './08/TrafficMain';
// import TrafficNav from './08_1/TrafficNav';
import Traffic from './08_1/Traffic';

function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overscroll-y-auto">
      <header className="flex justify-between items-center text-2xl font-bold p-10 bg-slate-200">
        <div>리액트 실습</div>
        <p><AiFillHome className='text-3xl text-zinc-700' /></p>
      </header>
      <main className='grow flex justify-center items-center  overflow-y-auto'>
        {/* <div className='flex justify-center items-center w-1/3 h-1/2'>
          <img src={logo} alt="logo" />
        </div> */}
        {/* <MyClock /> */}
        {/* <MyDiv /> */}
        {/* <MyList /> */}
        {/* <Lotto /> */}
        {/* <BoxOffice/> */}
        {/* <FoodBankMain /> */}
        {/* <TraficMain /> */}
        {/* <TraficNav /> */}
        <Traffic />
      </main>
      <footer className="flex justify-center items-center text-white bg-slate-700 h-20">
        ⓒ 2024 kimseongwoo. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
