import Ball from './Ball';
import ButtonC from '../ui/ButtonC';
import { useState } from 'react';

export default function Lotto() {
    const [tags, setTags] = useState();

    const handleClick = () => {
        let arr = [];
        while (arr.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1;
            if (!arr.includes(n))
                arr.push(n)
        }

        let tm = arr.map(item => <Ball n={item} key={item} />);

        tm.splice(6, 0, <span className='text-black text-4xl mx-2' key='sp'>+</span>);

        setTags(tm);
    }

    return (
        <div className='w-full flex flex-col 
        justify-center items-center'>
            <div>
                {tags}
            </div>
            <div>
                <ButtonC
                    label={'번호 생성'}
                    bcolor={'blue'}
                    handleClick={handleClick} />
            </div>
        </div>
    )
}
