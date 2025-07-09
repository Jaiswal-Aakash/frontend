import React, { useState, useEffect } from "react";
import css from "./designjournal.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import Link from "next/link";


const DesignJorunaalBanner: React.FC = () => {
    const [designjournalbanner, setDesignjournalBanner] = useState([]);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;

    useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            let banerImage = [];
            data.data.settings.designjournalbanner.forEach((datas: any) => {
                let lc: any = {};
                lc.designjournalbanner = `${assetpath}${datas.image}`;
                lc.toptext = datas.toptext;
                banerImage.push(lc);
            });
            setDesignjournalBanner(banerImage);
        });
    }, [assetpath]);

    return (

        <React.Fragment>

            <div>
                {designjournalbanner.map((datas: any, index: number) => (
                    <div key={`${datas.toptext}_${index}_${index}`} className={css.designjournalContainer}>
                        <img src={datas.designjournalbanner} alt="bannerImage" className={css.designjournalimage} />
                        <div className={css.designjournalbannercontent}>
                            <h4 className={css.designjournal_tagline1}>Best Guide </h4> <h2 className={css.designjournal_tagline1}>For Interiors </h2>
                       <Link href={{pathname: '/Colorplay'}}>
                            <button className={css.bannerbtn} >
                        To know more about Colors                   
                      </button></Link>
                        </div>
                    </div>
                ))}

            </div>

        </React.Fragment>
    );
}

export default DesignJorunaalBanner;
