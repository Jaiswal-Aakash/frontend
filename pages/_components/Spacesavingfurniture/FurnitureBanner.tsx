import React, { useState, useEffect } from "react";
import css from "./Furniture.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import Form from "../HomeSlider/Form";

const FurnitureBaner: React.FC = () => {
    const [Furniturebaner, setFurnitureBaner] = useState([]);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;

    useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            let banerImage = [];
            data?.data?.settings?.banerfurniture?.forEach((datas: any) => {
                let lc: any = {};
                lc.furniturebaner = `${assetpath}${datas.image}`;
                lc.toptext = datas.toptext;
                banerImage.push(lc);
            });
            setFurnitureBaner(banerImage);
        });
    }, [assetpath]);

    return (
    
        <React.Fragment>


<div>
         
         {Furniturebaner.map((datas: any, index: number) => ( 
             <div key={`${datas.toptext}_${index}_${index}`} className={css.furnitureimageContainer}>
                 <img src={datas.furniturebaner} alt="bannerImage" className={css.furnitureimage} />
                 <div className={css.furniturebannercontent}>
                     <h4 className={css.furniture_tagline}>Design your own</h4> <h2 className={css.furniture_tagline1}>Furniture with</h2><h2 className={css.furniture_tagline1}>our experts!</h2>
                 </div>
                 <div className={css.furniturebannerform}>
                     <div className={css.furnitureform}><Form /></div>
                 </div>
             </div>
         ))}

     </div>
        </React.Fragment>
    );
}

export default FurnitureBaner;
