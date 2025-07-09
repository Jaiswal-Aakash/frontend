import React, { useState, useEffect } from "react";
import css from "./wall.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import Link from "next/link";


const WallBanner: React.FC = () => {
    const [wallbanner, setWallBanner] = useState([]);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;

    useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            let banerImage = [];
            data.data.settings.wallbanner.forEach((datas: any) => {
                let lc: any = {};
                lc.wallbanner = `${assetpath}${datas.image}`;
                lc.name = datas.text;
                banerImage.push(lc);
            });
            setWallBanner(banerImage);
        });
    }, [assetpath]);

    return (

        <React.Fragment>

            <div>
                {wallbanner.map((datas: any, index: number) => (
                    <div key={`${datas.name}_${index}_${index}`} className={css.wallContainer}>
                        <img src={datas.wallbanner} alt="bannerImage" className={css.wallimage} />
                        <div className={css.wallbannercontent}>
                            <h4 className={css.wall_tagline}>Elevate your space with Walls </h4> <h2 className={css.wall_tagline1}>that do more than enclose     </h2>
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

export default WallBanner;
