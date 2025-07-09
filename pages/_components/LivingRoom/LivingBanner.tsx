import React, { useState, useEffect } from "react";
import css from "../LivingRoom/LivingBanner.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import Form from "../HomeSlider/Form";

const LivingRoomBanner: React.FC = () => {
    const [livingBanner, setLivingBanner] = React.useState([]);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;

    React.useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            let banerImage = [];
            data?.data?.settings?.livingRoomBanner?.forEach((datas: any) => {
                let lc: any = {};
                lc.livingBanner = `${assetpath}${datas.image}`;
                lc.toptext = datas.toptext;
                banerImage.push(lc);
            });
            setLivingBanner(banerImage);
        });
    }, [assetpath]);

    return (
    
        <React.Fragment>
            <div>
         
         {livingBanner.map((datas: any, index: number) => ( 
             <div key={`${datas.toptext}_${index}_${index}`} className={css.homeofficeimageContainer}>
                 <img src={datas.livingBanner} alt="bannerImage" className={css.homeofficeimage} />
                 <div className={css.homeofficebanercontent}>
                     <h4 className={css.homeoffice_tagline}>Design your own</h4> <h2 className={css.homeoffice_tagline1}>Living Room with</h2><h2 className={css.homeoffice_tagline1}>our experts!</h2>
                 </div>
                 <div className={css.homeofficebanerform}>
                     <div className={css.homeofficeform}><Form /></div>
                 </div>
             </div>
         ))}

     </div>
        </React.Fragment>
    );
}

export default LivingRoomBanner;
