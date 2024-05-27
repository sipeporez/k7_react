import { atom, selector } from "recoil";

export const Atomx = atom({
    key: "Atomx",
    default: 10
});

export const Atomx2 = selector({
    key:"Atomx2",
    get:({get})=>{
        // 값을 가져온 후 조건 추가할 수 있는 영역
        // let tm = get(Atomx) % 2 === 0 ?"짝수":"홀수";
        // return tm;
        return get(Atomx)*2
    }
});