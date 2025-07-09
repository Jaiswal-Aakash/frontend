import React from "react";
import css from "./Customersupport.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
const ContactUs = () => {
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    const [Conductus, setConductus] = React.useState([]);
    React.useEffect(() => {
        let api1 = simpleCallInitAPI(`${assetpath}/assets/conduct.json`);
        api1.then((data: any) => {
            let lcategories = [];
            data.data.value.forEach((cats: any) => {
                let lc: any = {};
                lc.Url = cats.Url;
                lc.head = cats.head;
                lc.text = cats.text;
                lc.no = cats.head;

                lcategories.push(lc);
            });
            setConductus(lcategories);
        })
            .catch(error => {
                console.log(error);
            });
    },[assetpath])
    return (
        <>
            {/* <div className="container"> */}
                <div className={css.interiorfilmrole}>
                    {Conductus.map((cats: any, index: number) =>
                        <div key={`${cats.category}${index}${index}`}
                            className={css.division1}>
                            <div className={css.divisionchild}>
                                <div className={css.category}>
                                    <div className={css.interiorname}>{cats.head}</div>
                                    <div className={css.interiortext}>{cats.text}</div>
                                    <div className={css.interiortext}>{cats.no}</div>
                                </div>
                                <div className={css.interiorimage}>
                                    <iframe key={`${cats.category}_${index}`} loading="lazy"
                                        src={cats.Url} className={css.interioriframe} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            {/* </div> */}


        </>
    )
}
export default ContactUs;





















































































