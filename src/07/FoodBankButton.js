// 운영주체 분류로 버튼 생성
import FoodDataTotal from './fooddata.json'
import FoodBankCard from './FoodBankCard';
import ButtonC from '../ui/ButtonC';

export default function FoodBankButton({ setCreateList }) {
    // json 파일 불러오기
    let datamap = FoodDataTotal.map(item => item["운영주체 분류"]);
    // new Set 으로 중복 제거
    // Set 타입으로 저장되기 때문에 [...] 사용하여 배열로 변환 
    let datalist = [...new Set(datamap)];

    // 클릭 이벤트 처리용 함수
    const handleData = (c) => {
        // json의 "운영주체 분류"가 c(datalist)와 일치하는 것만 (필터)
        let tm = FoodDataTotal.filter(item => item['운영주체 분류'] === c)
            // 필터된 값을 map을 사용하여 배열로 바꾼 뒤 Card에 전달
            .map(item => <FoodBankCard FoodData={item} key={item.사업장명} />);
        // setCreateList에 최종 값 전달
        setCreateList(tm);
    }
    // 리스트에는 key 값이 필수
    // item은 datalist 배열에 저장된 값들 ("운영주체 분류")
    let createB = datalist.map(item => <ButtonC
        key={item}
        label={item}
        bcolor={'blue'}
        handleClick={() => handleData(item)}
    />);

    return (
        <>
            {createB}
        </>
    )
}
