import React, { useEffect } from "react";
import css from "./wardrobeban.module.scss"
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import Form from "../HomeSlider/Form";
const WarDrobeBaner : React.FC = () => {
    const[wardrobeBigBaner,setWardrobeBigBaner]=React.useState([]);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    
    useEffect(()=>{
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            let WardrobeBanerImage = [];
            data?.data?.settings?.wardrobebaner?.forEach((datas: any) => {
                let lc: any = {};
                lc.wardrobebaner = `${assetpath}${datas.image}`;
                lc.toptext = datas.toptext;
                WardrobeBanerImage .push(lc);
            });
            setWardrobeBigBaner(WardrobeBanerImage );
        });
    }, [assetpath]);


    return(
        <>
    <React.Fragment>


<div>
   
        {wardrobeBigBaner.map((datas: any, index: number) => ( 
            <div key={`${datas.toptext}_${index}_${index}`} className={css.wardrobeimageContainer}>
                
                <img src={datas.wardrobebaner} alt="bannerImage" className={css.wardrobeimage} />
                <div className={css.wardrobebanercontent}>
                    <h4 className={css.wardrobe_tagline}>Design your own</h4> <h2 className={css.wardrobe_tagline1}>Wardrobe with our experts!</h2>
                </div>
                <div className={css.wardrobebanerform}>
                    <div className={css.wardrobeform}><Form/></div>
                </div>
            </div>
        ))}

    </div>


</React.Fragment>
        </>
    )
}
export default WarDrobeBaner;