import { useState, useEffect } from "react";

export default function MyListItem({title, imgUrl, content}) {
  const [cnt, setCnt] = useState(0);

  const handleClick = () => {
    setCnt(cnt + 1);
    console.log(cnt);
  }

  useEffect(() => {
    console.log(title, '생성');
  },[]);
  
  // state 변수가 변경
  useEffect(()=> {
    console.log(title, "변경 cnt = ", cnt)
  },[cnt]);
  
  useEffect(() => {
    console.log(title, '변경됨');
  })

  return (
    <div className="flex w-full h-full justify-center items-start p-2 bg-slate-100">
      <div className="flex w-1/3 m-2">
        <img src={imgUrl} alt={title} />
      </div>
      <div className="flex flex-col justify-between w-2/3 h-full m-2 p-2">
        <div>
          <h1 className="text-xl font-bold">{title}</h1>
          <p>{content}</p>
        </div>
        <div className="flex justify-end items-center">
          <span onClick={handleClick}>❤️</span>
          <span className="inline-flex mx-2 font-bold">좋아요</span>
          <span className="font-bold text-xl">{cnt}</span>
        </div>
      </div>
    </div>
  )
}
