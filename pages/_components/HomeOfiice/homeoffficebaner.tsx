import React, { useEffect, useState } from "react";
import css from './homeofficebaner.module.scss'
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import Form from "../HomeSlider/Form";

const HomeOfficeBaner:React.FC=()=>{
    const[homeOfficeBaner,setHomeOfficeBaner]=useState([]);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    useEffect(()=>{
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            let homeOfficeBanerImage = [];
            data?.data?.settings?.homeofficebaner?.forEach((datas: any) => {
                let lc: any = {};
                lc.homeoficebaner = `${assetpath}${datas.image}`;
                lc.toptext = datas.toptext;
                homeOfficeBanerImage.push(lc);
                
            });
            setHomeOfficeBaner(homeOfficeBanerImage);
        });
    }, [assetpath]);

    return(
        <>
        
        <React.Fragment>


        <div>
         
                {homeOfficeBaner.map((datas: any, index: number) => ( 
                    <div key={`${datas.toptext}_${index}_${index}`} className={css.homeofficeimageContainer}>
                        <img src={datas.homeoficebaner} alt="bannerImage" className={css.homeofficeimage} />
                        <div className={css.homeofficebanercontent}>
                            <h4 className={css.homeoffice_tagline}>Design your own</h4> <h2 className={css.homeoffice_tagline1}>HomeOffice with </h2><h2 className={css.homeoffice_tagline1}>our experts!</h2>
                        </div>
                        <div className={css.homeofficebanerform}>
                            <div className={css.homeofficeform}><Form /></div>
                        </div>
                    </div>
                ))}

            </div>
        
       
        </React.Fragment>
        </>
    )
}

export default HomeOfficeBaner;