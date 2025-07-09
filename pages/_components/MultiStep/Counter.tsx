import { useState } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import css from '../../../styles/getfreeEstimate.module.scss';
interface CounterProps {
    count: number;
    countName: string;
    onCountChange: (newCount: number) => void;
    bhk?: number
}

const Counter: React.FC<CounterProps> = ({ count: initialCount, onCountChange,countName , bhk }) => {
    const [count, setCount] = useState<number>(initialCount);

    const incrementCount = () => {
        const newCount = count + 1;
        setCount(newCount);
        onCountChange(newCount);
    };

    const decrementCount = () => {
        const newCount = count - 1;
        setCount(newCount);
        onCountChange(newCount);
    };

    return (
        <>
        
            <div className={css.Count_content}>
                <button disabled={count==0} onClick={decrementCount} className={count==0 ? css.increment :css.decrement} ><AiFillMinusCircle /></button>
                <span className={css.number_count}>{count}</span>
                <button disabled={bhk? count == bhk :count==1} onClick={incrementCount} className={ (bhk? count == bhk :count==1 ) ? css.increment :css.decrement} ><AiFillPlusCircle /></button>
                <p className={css.Count_name}>{countName}</p>
            </div>
        </>
    );
};

export default Counter;
