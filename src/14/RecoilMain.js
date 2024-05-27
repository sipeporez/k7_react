import { RecoilRoot } from 'recoil';
import RecoilDiv1 from './RecoilDiv1.js';

export default function RecoilMain() {
    return (
        <RecoilRoot>
            <div>
                <RecoilDiv1 />
            </div>
        </RecoilRoot>
    )
}
