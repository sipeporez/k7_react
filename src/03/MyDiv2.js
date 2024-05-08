import MyDiv3 from './MyDiv3' ;
export default function MyDiv2({dn1, dn2, dn3}) {
  return (
    <div className="flex flex-col p-5 m-10 
                    w-3/4 h-3/4
                     bg-lime-700 text-white ">
      {`${dn1} > ${dn2}`}
      <MyDiv3  dn1={dn1} dn2={dn2} dn3={dn3} />
    </div>
  )
}
