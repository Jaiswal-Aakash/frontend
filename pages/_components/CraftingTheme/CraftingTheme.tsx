import React, { useState, useEffect } from "react";
import css from "./CraftingTheme.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import Link from "next/link";


const CraftingThemeBanner: React.FC = () => {
    const [craftingthemebanner, setColorplayBanner] = useState([]);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;

    useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            let banerImage = [];
            data.data.settings.craftingthemebanner.forEach((datas: any) => {
                let lc: any = {};
                lc.craftingthemebanner = `${assetpath}${datas.image}`;
                lc.toptext = datas.toptext;
                banerImage.push(lc);
            });
            setColorplayBanner(banerImage);
        });
    }, [assetpath]);

    return (

        <React.Fragment>

            <div>
                {craftingthemebanner.map((datas: any, index: number) => (
                    <div key={`${datas.toptext}_${index}_${index}`} className={css.craftingthemeContainer}>
                        <img src={datas.craftingthemebanner} alt="bannerImage" className={css.craftingthemeimage} />
                        <div className={css.craftingthemebannercontent}>
                        
                        <h4 className={css.craftingtheme_tagline}>Crafting a theme for  </h4> <h2 className={css.craftingtheme_tagline1}>a dream house </h2>
                       <Link href={{pathname: '/Unlockartistry'}}>
                        <button className={css.bannerbtn} >
                        To know more about Space
                      </button></Link>
                        </div>
                       
                    </div>
                ))}
    
            </div>

        </React.Fragment>
    );
}

export default CraftingThemeBanner;
