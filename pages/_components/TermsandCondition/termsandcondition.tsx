import React, { useEffect } from "react";
import css from "./termsandcondition.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
const TermsAndCondition = () => {
    const [termsAndCondition, setTermsAndCondition] = React.useState([]);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/termsandcondition.json`);
        api.then((data: any) => {
            let TermsandCondition = []
            data?.data?.termsandcondition?.forEach((datas: any) => {
                let term: any = {}
                term.text = `${datas.text}`;

                TermsandCondition.push(term)

            });
            setTermsAndCondition(TermsandCondition)
        })

    }, [assetpath])

    return (
        <>
        <div>
            <div className={css.termsandcondition}>
                <div className={css.termcon_header}>
                    <p className={css.termcom_title}>Terms and Conditions</p>
                </div>
                {termsAndCondition?.map((datas: any, index: number) => (
                    <div className={css.termcon_body} key={index}>
                        <div className={css.termcon_content} key={index}>{index + 1}.{datas.text}</div>
                    </div>


                ))}


            </div>
            </div>
        </>
    )
}
export default TermsAndCondition