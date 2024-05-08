import MyDiv2 from "./MyDiv2" ;

export default function MyDiv() {
  const dname1 = 'vdiv1' ;
  const dname2 = 'vdiv2' ;
  const dname3 = 'vdiv3' ;

  return (
    <div className="flex flex-col p-5 m-10 
                    justify-center items-center
                    w-2/3 h-2/3 text-2xl
                     bg-lime-900 text-white ">
      
      <div className="w-full">
        {dname1}
      </div>
      <MyDiv2 dn1={dname1} dn2={dname2} dn3={dname3} />
    </div>
  )
}
