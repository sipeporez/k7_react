import './App.css';
import { AiFillHome } from "react-icons/ai";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import MyClock from './02/MyClock';
// import MyDiv from './03/MyDiv';
// import MyList from './04/MyList';
import Lotto from './05/Lotto';
import BoxOffice from './06/BoxOffice';
import FoodBankMain from './07/FoodBankMain';
import Traffic from './08_1/Traffic';
// import MyRef from './09/MyRef';
import Gallery from './10/Gallery'
import BusanFestival from './11/BusanFestival';
// import RouteMain from './12/RouteMain';
import FrcstMain from './13/FrcstMain';
import FrcstList from './13/FrcstList';
import RecoilMain from './14/RecoilMain';
import Rest from './15/Rest';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overscroll-y-auto">
        <header className="flex justify-between items-center font-bold max-sm:p-4 max-md:p-6 p-8 bg-slate-200">
          <div className='flex max-md:text-xl text-2xl'>리액트 실습</div>
          <div className='flex justify-end w-4/5 mr-5'>
            <ul className='flex w-full items-center justify-between max-[320px]:text-xs max-sm:text-sm max-md:text-base text-xl '>
              <li className='hover:text-slate-400 '>
                <Link to='/'>시계</Link>
              </li>
              <li className='hover:text-slate-400'>
                <Link to='/lotto'>복권</Link>
              </li>
              <li className='hover:text-slate-400'>
                <Link to='/boxoffice'>박스오피스</Link>
              </li>
              <li className='hover:text-slate-400'>
                <Link to='/foodbank'>푸드뱅크</Link>
              </li>
              <li className='hover:text-slate-400'>
                <Link to='/traffic'>사고통계</Link>
              </li>
              <li className='hover:text-slate-400'>
                <Link to='/gallery'>갤러리</Link>
              </li>
              <li className='hover:text-slate-400'>
                <Link to='/busanFest'>부산축제</Link>
              </li>
              <li className='hover:text-slate-400'>
                <Link to='/Frcst'>단기예보</Link>
              </li>
              <li className='hover:text-slate-400'>
                <Link to='/recoil'>Recoil</Link>
              </li>
              <li className='hover:text-slate-400'>
                <Link to='/rest'>Rest</Link>
              </li>
            </ul>
          </div>
          <p><Link to='/'><AiFillHome className='text-3xl text-zinc-700 hover:text-zinc-400' /></Link></p>
        </header>
        <main className='grow flex justify-center items-center  overflow-y-auto'>
          {/* <div className='flex justify-center items-center w-1/3 h-1/2'>
          <img src={logo} alt="logo" />
        </div> */}

          <Routes>
            {/* 라우팅을 위한 경로 정보 저장 */}
            <Route path='/' element={<MyClock />}></Route>
            {/* <MyDiv /> */}
            {/* <MyList /> */}
            {/* <MyRef /> */}
            <Route path='/lotto' element={<Lotto />}></Route>
            <Route path='/boxoffice' element={<BoxOffice />}></Route>
            <Route path='/foodbank' element={<FoodBankMain />}></Route>
            <Route path='/traffic' element={<Traffic />}></Route>
            <Route path='/gallery' element={<Gallery />}></Route>
            <Route path='/busanFest' element={<BusanFestival />}></Route>
            <Route path='/Frcst' element={<FrcstMain />}></Route>
            <Route path='/FrcstLi' element={<FrcstList />}></Route>
            <Route path='/recoil' element={<RecoilMain />}></Route>
            <Route path='/rest' element={<Rest />}></Route>
            {/* <RouteMain /> */}
          </Routes>
        </main >
        <footer className="flex justify-center items-center text-white bg-slate-700 h-20">
          2024 kimseongwoo
        </footer>
      </div >
    </BrowserRouter>
  );
}

export default App;
