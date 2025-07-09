import React, { useState, useEffect } from "react";
import css from "./Texture.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import Link from "next/link";


const TextureBanner: React.FC = () => {
    const [texturebanner, setTexturBanner] = useState([]);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;

    useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            let banerImage = [];
            data.data.settings.texturebanner.forEach((datas: any) => {
                let lc: any = {};
                lc.texturebanner = `${assetpath}${datas.image}`;
                lc.name = datas.text;
                banerImage.push(lc);
            });
            setTexturBanner(banerImage);
        });
    }, [assetpath]);

    return (

        <React.Fragment>

            <div>
                {texturebanner.map((datas: any, index: number) => (
                    <div key={`${datas.name}_${index}_${index}`} className={css.textureContainer}>
                        <img src={datas.texturebanner} alt="bannerImage" className={css.textureimage} />
                        <div className={css.texturebannercontent}>
                            <h4 className={css.texture_tagline}>Incorporating a variety of </h4> <h2 className={css.texture_tagline1}>Textures and Materials for  </h2><h2 className={css.texture_tagline1} >visual interest and tactile appeal</h2>
                       <Link href={{pathname: '/Wall'}}>        
                            <button className={css.bannerbtn} >
                        To know more about Walls
                      </button></Link>
                        </div>
                    </div>
                ))}

            </div>

        </React.Fragment>
    );
}

export default TextureBanner;
