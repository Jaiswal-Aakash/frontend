import React, { useState, useEffect } from "react";
import css from "./bedroombanner.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import Form from "../HomeSlider/Form";


const BedroomBanner: React.FC = () => {
    const [bedroombanner, setBedroomBanner] = useState([]);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;

    useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            let banerImage = [];
            data.data.settings.bedroombanner.forEach((datas: any) => {
                let lc: any = {};
                lc.bedroombanner = `${assetpath}${datas.image}`;
                lc.toptext = datas.toptext;
                banerImage.push(lc);
            });
            setBedroomBanner(banerImage);
        });
    }, [assetpath]);

    return (
    
        <React.Fragment>


<div>
         
         {bedroombanner.map((datas: any, index: number) => ( 
             <div key={`${datas.toptext}_${index}_${index}`} className={css.bedroomimageContainer}>
                 <img src={datas.bedroombanner} alt="bannerImage" className={css.bedroomimage} />
                 <div className={css.bedroombannercontent}>
                     <h4 className={css.bedroom_tagline}>Design your own</h4> <h2 className={css.bedroom_tagline1}>Bedroom with </h2><h2 className={css.bedroom_tagline1}>our experts!</h2>
                 </div>
                 <div className={css.bedroombannerform}>
                     <div className={css.bedroomform}><Form /></div>
                 </div>
             </div>
         ))}

     </div>
       
        </React.Fragment>
    );
}

export default BedroomBanner;
