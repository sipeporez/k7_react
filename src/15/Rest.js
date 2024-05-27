import { useEffect, useState } from "react"

export default function Rest() {
  const [tdata, setTdata] = useState();
  const [printdata, setPrintdata] = useState();

  // const getFetch = (url) => {
  //   fetch(url)
  //     .then(resp => resp.json())
  //     .then(data => setTdata(data))
  //     .catch(err => console.log(err))
  // }
  const getFetch = async (url) => {
    const resp = await fetch(url)
    const data = await resp.json();
    setTdata(data)
  }

  useEffect(() => {
    if (!tdata) return;
    let tm = tdata.map(item =>
      <li className="text-slate-600" key={item.id}>
        Title : {item.title}
        <br>
        </br>
        Author : {item.author}
      </li>
    );
    setPrintdata(tm);
  }, [tdata])

  useEffect(() => {
    let url = "http://localhost:3005/posts"
    getFetch(url)
  }, []);

  return (
    <div>
      <ul>
        {printdata}
      </ul>
    </div>
  )
}
