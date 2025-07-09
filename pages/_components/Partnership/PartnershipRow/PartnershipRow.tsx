import React, { useState, useEffect } from "react";
import css from "./PartnershipRow.module.scss";
import * as config from "../../../../next.config.js";
import { simpleCallInitAPI } from '../../../../services/ApicallInit';

interface PartnerProps {
    screenwidth: number;
}

const PartnershipRow: React.FC<PartnerProps> = ({ screenwidth }) => {
    const [partnerRow1, setOurpartnerRow1] = useState([]);
    const [partnerRow2, setOurpartnerRow2] = useState([]);
    const [partnerRow3, setOurpartnerRow3] = useState([]);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;

    useEffect(() => {
        let api1 = simpleCallInitAPI(`${assetpath}/assets/partnership.json`);
        api1.then((data: any) => {
            let partners = [];
            data.data.partnership.row1.forEach((partner: any) => {
                let lc: any = {};
                lc.image = `${assetpath}${partner.image}`;
                lc.text = partner.text;
                lc.btn = partner.btn;
                partners.push(lc);
            });
            setOurpartnerRow1(partners);
        })
            .catch(error => {
                console.log(error);
            });
        let api2 = simpleCallInitAPI(`${assetpath}/assets/partnership.json`);
        api2.then((data: any) => {
            let partners = [];
            data.data.partnership.row2.forEach((partner: any) => {
                let lc: any = {};
                lc.image = `${assetpath}${partner.image}`;
                lc.text = partner.text;
                lc.head = partner.head;
                lc.subhead = partner.subhead;
                partners.push(lc);
            });
            setOurpartnerRow2(partners);
        })
            .catch(error => {
                console.log(error);
            });
        let api3 = simpleCallInitAPI(`${assetpath}/assets/partnership.json`);
        api3.then((data: any) => {
            let partners = [];
            data.data.partnership.row3.forEach((partner: any) => {
                let lc: any = {};
                lc.image = `${assetpath}${partner.image}`;
                lc.text1 = partner.text1;
                lc.text2 = partner.text2;
                lc.subhead = partner.subhead;
                partners.push(lc);
            });
            setOurpartnerRow3(partners);
        })
            .catch(error => {
                console.log(error);
            });

    }, [assetpath]);

    return (

        <React.Fragment>
            <div className={css.partnerRow}>
                {partnerRow1.map((partner: any, index: number) =>
                    <div key={index} className={css.partnerRowbox}>
                        <div className={`${css.partnerRowLeft} ${css.partnerRowLeft1}`}>
                            <div className={css.partnerRowText}>{partner.text}</div>
                            <div className={css.partnerRowBtn}>{partner.btn}</div>
                        </div>
                        <div className={css.partnerRowRight}>
                            <div className={css.partnerImgOuter}>
                                <img src={partner.image} alt="img" className={css.partnerRowImg} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className={css.partnerMidRow}>
                {partnerRow2.map((partner: any, index: number) =>
                    <div key={index} className={css.partnerRowbox}>
                        <div className={css.partnerRowRight}>
                            <div className={css.partnerImgOuter}>
                                <img src={partner.image} alt="img" className={css.partnerRowImg} />
                            </div>
                        </div>
                        <div className={`${css.partnerRowLeft} ${css.partnerRowLeft2}`}>
                            {
                                screenwidth > 650 ?
                                    <div className={css.partenerRowHead}>Build the future of home interiors.<br />Franchise with Lhome.</div>
                                    : <div className={css.partenerRowHead}>Build the future of home interiors.Franchise with Lhome.</div>
                            }
                            <div className={css.partnerSubHead}>{partner.subhead}</div>
                            <div className={css.partnerMidRowText}>{partner.text}</div>
                        </div>

                    </div>
                )}
            </div>
            <div className={css.partnerRow}>
                {partnerRow3.map((partner: any, index: number) =>
                    <div key={index} className={css.partnerRowbox}>
                        <div className={css.partnerRowLeft}>
                            <div className={css.partnerSubHead}>{partner.subhead}</div>
                            <div className={css.partnerRowText}>{partner.text1}</div>
                            <div className={`${css.partnerRowText} ${css.partenerRowText1}`}>{partner.text2}</div>
                        </div>
                        <div className={css.partnerRowRight}>
                            <div className={css.partnerImgOuter}>
                                <img src={partner.image} alt="img" className={css.partnerRowImg} />
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </React.Fragment>
    );
}

export default PartnershipRow;