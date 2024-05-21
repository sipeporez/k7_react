import ButtonC from '../ui/ButtonC'
import { useNavigate } from 'react-router-dom'
export default function RouteNav() {
    const navigate = useNavigate();

    return (
        <div className="w-full grid grid-cols-3 gap-5">
            <ButtonC
                label='Home'
                bcolor='blue'
                handleClick={() => { navigate('/') }} />
            <ButtonC
                label='Page1'
                bcolor='blue'
                handleClick={() => { navigate('/p1') }} />
            <ButtonC
                label='Page2'
                bcolor='blue'
                handleClick={() => { navigate('/p2') }} />
        </div>
    )
}
