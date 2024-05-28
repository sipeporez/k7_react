import { useEffect, useState, useRef } from "react"
import ButtonC from "../ui/ButtonC";

export default function Rest() {
  const [tdata, setTdata] = useState();
  const [printdata, setPrintdata] = useState();
  const [isUpdate, setIsUpdate] = useState(false);
  const [isUpdateid, setIsUpdateId] = useState();
  const keyword1 = useRef();
  const keyword2 = useRef();

  // const getFetch = (url) => {
  //   fetch(url)
  //     .then(resp => resp.json())
  //     .then(data => setTdata(data))
  //     .catch(err => console.log(err))
  // }

  // async, await을 이용한 fetch 함수
  const getFetch = async (url) => {
    const resp = await fetch(url)
    const data = await resp.json();
    setTdata(data)
  }
  
  // DB 내용이 변경될 때 마다 테이블을 새로 생성
  useEffect(() => {
    if (!tdata) return;
    let tm = tdata.map(item =>
      <tr className="odd:bg-white even:bg-gray-100 hover:bg-gray-100" key={item.id}>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 w-3/5">
          {item.title}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 w-1/5">
          {item.author}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 w-1/5">
          <a href='#!' onClick={() => jsonUpdate(item.id)} className="hover:bg-blue-300 p-2 rounded">[편집]</a>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 w-1/5">
          <a href='#!' onClick={() => jsonDelete(item.id)} className="hover:bg-red-400 p-2.5 rounded">[삭제]</a>
        </td>
      </tr>
    );
    setPrintdata(tm);
  }, [tdata])

  // 페이지 첫 로드시 fetch 함수 호출
  useEffect(() => {
    let url = "http://localhost:3005/posts"
    getFetch(url)
  }, []);
  // 인풋에 엔터 입력시 버튼 클릭 호출
  const handleKeyCheck = (e) => {
    if (e.key === 'Enter') {
      handleclick(e);
    }
  }
  // 버튼 클릭시 jsonPost 호출 (데이터 입력)
  const handleclick = (e) => {
    e.preventDefault();
    if (isUpdate) jsonUpdate2();
    else jsonPost();
  }
  // POST로 DB에 데이터 추가명령 전송 
  const jsonPost = async () => {
    if (keyword1.current.value === "") {
      alert("제목을 입력하세요.")
      keyword1.current.focus();
      return;
    };
    if (keyword2.current.value === "") {
      alert("저자를 입력하세요.")
      keyword2.current.focus();
      return;
    };
    // 오브젝트 객체 생성
    const postdata = {
      title: keyword1.current.value,
      author: keyword2.current.value
    };
    let url = "http://localhost:3005/posts"
    // method = POST, REST, GET ... 
    // headers = 오브젝트 타입으로 생성
    // body = stringify() - 자바스크립트 값을 json 문자열로 변환 
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postdata)
    });
    // fetch로 POST를 보낸 후 응답을 받음
    const data = await resp.json();
    // 응답받은 데이터를 기존 데이터에 append
    setTdata([...tdata, data]);
    keyword1.current.value = '';
    keyword2.current.value = '';
  }

  // DELETE로 DB에 데이터 삭제명령 전송
  const jsonDelete = async (id) => {
    let url = `http://localhost:3005/posts/${id}`;
    await fetch(url, {
      method: 'DELETE'
    });
    // 삭제된 id는 제외하고 남은 것들만 필터링
    setTdata(tdata.filter(item => item.id !== id))
  }

  // PATCH로 DB에 데이터 수정명령 전송
  const jsonUpdate2 = async () => {
    let url = `http://localhost:3005/posts/${isUpdateid}`;
    const postdata = {
      title: keyword1.current.value,
      author: keyword2.current.value
    };
    const resp = await fetch(url, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postdata)
    });
    const data = await resp.json();
    // tdata 매핑하면서 id가 같은경우 data를 갱신, 아닌경우 data를 있는 그대로
    setTdata(tdata.map(item=> item.id === isUpdateid ? data : item));
    // 수정버튼을 입력으로
    setIsUpdate('');
    keyword1.current.value='';
    keyword2.current.value='';
  }
  // GET으로 수정할 데이터를 id값으로 가져오기
  const jsonUpdate = async (id) => {
    let url = `http://localhost:3005/posts/${id}`;
    const resp = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await resp.json();
    // 인풋창에 수정할 데이터 넣기
    keyword1.current.value = data.title;
    keyword2.current.value = data.author;
    // 입력버튼을 수정으로
    setIsUpdate(true)
    // 수정할 데이터 id를 저장
    setIsUpdateId(data.id)
  }

  return (
    <div className="flex flex-col w-4/5 h-full">
      <div className="flex w-full justify-center items-center gap-3 mt-5">
        <p className="text-xl font-bold font-sans text-black text-opacity-75">제목 :</p>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 
                text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                block w-1/5 p-2.5" type="text" id='txt1' ref={keyword1} onKeyDown={handleKeyCheck}>
        </input>
        <p className="text-xl font-bold font-sans text-black text-opacity-75 ml-5">저자 :</p>
        <input className="bg-gray-50 border border-gray-300 text-gray-900 
                text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                block w-1/5 p-2.5" type="text" id='txt2' ref={keyword2} onKeyDown={handleKeyCheck}>
        </input>
        <div className="ml-10">
          <ButtonC label={isUpdate ? "수정" : "입력"} bcolor={'blue'} handleClick={handleclick} />
        </div>
      </div>
      <div className="w-full">
        <table className="min-w-full divide-y divide-gray-300 my-5">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-start text-xs font-semibold text-gray-500">제목</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-semibold text-gray-500">저자</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-semibold text-gray-500">편집</th>
              <th scope="col" className="px-6 py-3 text-start text-xs font-semibold text-gray-500">삭제</th>
            </tr>
          </thead>
          <tbody>
            {printdata}
          </tbody>
        </table>
      </div>
    </div>
  )
}
