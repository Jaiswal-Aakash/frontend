import React, { useState, useEffect } from "react";
import css from "./PartnershipBanner.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
// import partner from "../../../public/assets/partnership/Partnerlhome.png"
import Form from "../HomeSlider/Form";
import Image from "next/image";

const PartnershipBanner: React.FC = () => {
    const [partnerBanner, setPartnerBanner] = useState([]);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;

    useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            let banerImage = [];
            data?.data?.settings?.partnershipBanner?.forEach((datas: any) => {
                let lc: any = {};
                lc.partnerImg = `${assetpath}${datas.image}`;
                lc.toptext = datas.name1;
                lc.bottomtext = datas.name2;
                banerImage.push(lc);
            });
            setPartnerBanner(banerImage);
        });
    }, [assetpath]);

    return (
    
        <React.Fragment>
        <div className={css.partnerContainer}>
                {partnerBanner?.map((datas: any, index: number) => ( 
                    <div key={index} className={css.partnerRow}>
                        <div className={css.partnerLeft}>
                            <p className={css.partnertop}>{datas.toptext}<span className={css.partnerbottom}>{datas.bottomtext}</span></p>
                            <div className={css.partnerForm}><Form/></div>
                        </div>
                        <div className={css.partnerRight}>
                       <img src={datas.partnerImg} className={css.partnerImg} alt="partnerBannerImage" />
                            {/* <img src={datas.partnerImg} alt="bannerImage" className={css.partnerImg}/> */}
                        </div>
                    </div>
                ))}

            </div>
        </React.Fragment>
    );
}

export default PartnershipBanner;