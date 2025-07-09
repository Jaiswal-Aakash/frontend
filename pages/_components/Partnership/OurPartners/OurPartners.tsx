import React, { useState, useEffect } from "react";
import css from "./OurPartners.module.scss";
import * as config from "../../../../next.config.js";
import { simpleCallInitAPI } from '../../../../services/ApicallInit';

const OurPartners: React.FC = () => {
    const [ourpartner, setOurpartner] = useState([]);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;

    useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/partnership.json`);
        api.then((data: any) => {
            let ourpartners = [];
            data.data.partnership.ourpartners.forEach((partner: any) => {
                let lc: any = {};
                lc.image = `${assetpath}${partner.image}`;
                lc.icon = `${assetpath}${partner.icon}`;
                lc.head1 = partner.head1;
                lc.head2 = partner.head2;
                lc.text = partner.text;
                ourpartners.push(lc);
            });
            setOurpartner(ourpartners);
        })
            .catch(error => {
                console.log(error);
            });
    }, [assetpath]);

    return (

        <React.Fragment>
                <div className={css.ourpartnerOuter}>
                    <div className={css.ourpartnertitle}>Our partners&apos; success stories</div>
                    <div className={css.ourpartnerContainer}>
                        {ourpartner.map((partner: any, index: number) =>
                            <div key={index} style={{width:'100%'}}>
                                <div className={css.boxIcon_Content_parent}>
                                <div className={css.boxIcon_Content}><img src={partner.icon} className={css.boxIcon} alt="img"/></div>
                                </div>
                                <div className={css.ourPartners}>
                                    <div className={css.ourPartnersHead1}>{partner.head1}</div>
                                    <div className={css.ourPartnersHead2}>{partner.head2}</div>
                                    <div className={css.ourPartnersText}>{partner.text}</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
        </React.Fragment>
    );
}

export default OurPartners;