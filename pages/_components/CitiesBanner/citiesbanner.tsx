import React, { useState, useEffect } from "react";
import css from "./citiesbanner.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import Form from "../HomeSlider/Form";

interface propproperty {
    Citie:any
}

const CitiesBanner: React.FC<propproperty> = ({ Citie }) => {
    const [citiesbanner, setCitiesBanner] = useState([]);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;

    useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            let bannerImage = [];
            data.data.settings.citiesbanner.forEach((datas: any) => {
                let lc: any = {};
                lc.citiesbanner = `${assetpath}${datas.image}`;
                lc.toptext = datas.toptext;
                bannerImage.push(lc);
            });
            setCitiesBanner(bannerImage);
        });
    }, [assetpath]);

    return (

        <React.Fragment>


            <div>
                {/* <div className={css.sliderwrapper}> */}
                    {citiesbanner.map((datas: any, index: number) => (
                        <div key={`${datas.toptext}_${index}_${index}`} className={css.imageContainer}>
                            <img src={datas.citiesbanner} alt="bannerImage" className={css.citiesimage} />
                            <div className={css.citiesbannercontent}>
                                <p className={css.tagline1}>Are you looking best interior</p>
                                <p className={css.tagline1}>design service in <span className={css.word_bgclr}>{Citie}?</span></p> <p className={css.tagline}>don’t worry we will care your home </p>
                            </div>
                            <div className={css.citiesbannerform}>
                                <div className={css.banerform}><Form /></div>
                            </div>
                        </div>
                    ))}

                
                {/* <div><KitchenFilter /></div> */}
            </div>
        </React.Fragment>
    );
}

export default CitiesBanner;
