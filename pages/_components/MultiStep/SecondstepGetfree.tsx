import * as React from 'react';
import css from '../../../styles/getfreeEstimate.module.scss';
import Counter from './Counter';


export default function SecondstepGetfree({BHK}) {

    
    const [living,setLiving] = React.useState(1);
    const [kitchen, setKitchen] = React.useState(1);
    const [bedroom, setBedroom] = React.useState(Number(BHK));
    const [bathroom, setBathroom] = React.useState(BHK);
    const [dining, setDining] = React.useState(1);
    

    const handleCountChange = (newCount) => {
        setLiving(newCount);
        setKitchen(newCount);
        setBedroom(newCount);
        setBathroom(newCount);
        setDining(newCount);
    };
    return (
        <div className={css.GetfreeEstimate_content_value}>
            <p className={css.GetfreeEstimate_head}>Tell Us What You Need</p>
            <p className={css.GetfreeEstimate_para}>When it comes to choosing your BHK (Bedroom, Hall, Kitchen) type, consider the diversity of options that cater to your specific needs and preferences. Our range includes 1BHK, 2BHK, and 3BHK configurations, each offering a unique blend of space and functionality.</p>
            <p className={css.radio_button_Heading}>Your requirements for {BHK} BHK*</p>
            <div className={css.Count_content_component}>
                <div><Counter count={living} onCountChange={handleCountChange} countName="Living"/></div>
                <div><Counter count={kitchen} onCountChange={handleCountChange} countName="Kitchen"/></div>
                <div><Counter bhk={Number(BHK)} count={bedroom} onCountChange={handleCountChange} countName="Bedroom"/></div>
                <div><Counter bhk={Number(BHK)} count={bathroom} onCountChange={handleCountChange} countName="Bathroom"/></div>
                <div><Counter count={dining} onCountChange={handleCountChange} countName="Dining"/></div>
            </div>
        </div>
    );
}
