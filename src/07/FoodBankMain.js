import { useState } from "react";
import FoodBankButton from "./FoodBankButton";

export default function FoodBankMain() {
    const [createList, setCreateList] = useState([]);

    // FoodBankCard 컴포넌트의 매개변수 FoodData에 대해
    // item 프롭을 FoodDataTotal 배열 순회하면서 전달(map)
    // key는 map을 사용할 때 구분용 이므로 컴포넌트에서 받을 필요 없음

    // const createList = FoodDataTotal.map(item =>
    //     <FoodBankCard FoodData={item} key={item.사업장명}
    //     />);

    return (
        <div className="flex flex-col justify-start items-center w-full h-full">
            <div className="flex w-full justify-between my-4">
                <FoodBankButton setCreateList={setCreateList} />
            </div>
            {/* 리스트가 버튼 클릭할때마다 바뀌어야 되므로 createlist가 state변수로 되어야 함  */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {/* Button 컴포넌트의 setCreateList로 세팅된 CreateList 값을 화면에 뿌려줌 */}
                {createList}
            </div>
        </div>
    )
}
