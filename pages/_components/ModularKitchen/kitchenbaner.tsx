import React, { useState, useEffect } from "react";
import css from "./baner.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import Form from "../HomeSlider/Form";          

const KitchenBaner: React.FC = () => {
    const [kitchenbaner, setKitchenBaner] = useState([]);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;

    useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            let banerImage = [];
            data?.data?.settings?.banerkitchen?.forEach((datas: any) => {
                let lc: any = {};
                lc.kitchenbaner = `${assetpath}${datas.image}`;
                lc.toptext = datas.toptext;
                banerImage.push(lc);
            });
            setKitchenBaner(banerImage);
        });
    }, [assetpath]);

    return (
    
        <React.Fragment>


<div>
   
   {kitchenbaner.map((datas: any, index: number) => ( 
       <div key={`${datas.toptext}_${index}_${index}`} className={css.kitchenimageContainer}>
           
           <img src={datas.kitchenbaner} alt="bannerImage" className={css.kitchenimage} />
           <div className={css.kitchenbanercontent}>
               <h4 className={css.kitchen_tagline}>Design your own</h4> <h2 className={css.kitchen_tagline1}>kitchen with our experts!</h2>
           </div>
           <div className={css.kitchenbanerform}>
               <div className={css.kitchenform}><Form/></div>
           </div>
       </div>
   ))}

</div>
        </React.Fragment>
    );
}

export default KitchenBaner;
