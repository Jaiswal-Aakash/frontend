import React, { useState, useEffect } from "react";
import css from "./colorplay.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import Link from "next/link";

const ColorPlayBanner: React.FC = () => {
    const [colorplaybanner, setColorplayBanner] = useState([]);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;

    useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            let banerImage = [];
            data.data.settings.colorplaybanner.forEach((datas: any) => {
                let lc: any = {};
                lc.colorplaybanner = `${assetpath}${datas.image}`;
                lc.toptext = datas.toptext;
                banerImage.push(lc);
            });
            setColorplayBanner(banerImage);
        });
    }, [assetpath]);

    return (

        <React.Fragment>

            <div>
                {colorplaybanner.map((datas: any, index: number) => (
                    <div key={`${datas.toptext}_${index}_${index}`} className={css.colorplayContainer}>
                        <img src={datas.colorplaybanner} alt="bannerImage" className={css.colorplayimage} />
                        <div className={css.colorplaybannercontent}>
                            <h4 className={css.colorplay_tagline}>Color plays a vital  </h4> <h2 className={css.colorplay_tagline1}>role in interiors </h2>
                       <Link href={{pathname: '/CraftingTheme'}}>
                            <button className={css.bannerbtn} >
                        To know more about Themes
                      </button></Link>
                        </div>
                    </div>
                ))}

            </div>

        </React.Fragment>
    );
}

export default ColorPlayBanner;
