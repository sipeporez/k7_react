import './App.css';
// import MyClock from './02/MyClock';
import MyDiv from './03/MyDiv';
import logo from './logo.svg'
import { AiFillHome } from "react-icons/ai";



function App() {
  return (
    <div className="flex flex-col w-full max-w-screen-xl mx-auto h-screen overscroll-y-auto">
      <header className="flex justify-between items-center text-2xl font-bold p-10 bg-slate-200">
        <div>리액트 실습</div>
        <div><AiFillHome className='text-3xl text-zinc-700' /></div>
      </header>
      <main className="grow">
        <div className="flex justify-center items-center">
          <img src={logo} className="App-logo" alt="logo"/>
        </div>
      </main>
      <footer className="flex justify-center items-center text-white bg-slate-700 h-20">
        ⓒ 2024 kimseongwoo. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
