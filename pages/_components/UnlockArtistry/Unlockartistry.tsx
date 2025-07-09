import React, { useState, useEffect } from "react";
import css from "./Unlockartistry.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import Link from "next/link";


const UnlockArtistryBanner: React.FC = () => {
    const [Unlockartistrybanner, setUnlockArtistryBanner] = useState([]);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;

    useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            let banerImage = [];
            data.data.settings.unlockartistrybanner.forEach((datas: any) => {
                let lc: any = {};
                lc.unlockartistrybanner = `${assetpath}${datas.image}`;
                lc.name = datas.text;
                banerImage.push(lc);
            });
            setUnlockArtistryBanner(banerImage);
        });
    }, [assetpath]);

    return (

        <React.Fragment>

            <div>
                {Unlockartistrybanner.map((datas: any, index: number) => (
                    <div key={`${datas.name}_${index}_${index}`} className={css.unlockartistryContainer}>
                        <img src={datas.unlockartistrybanner} alt="bannerImage" className={css.unlockartistryimage} />
                        <div className={css.unlockartistrybannercontent}>
                            <h4 className={css.unlockartistry_tagline}>Unlock the artistry of </h4> <h2 className={css.unlockartistry_tagline1}>Space in interiors  </h2>
                       <Link href={{pathname: '/Artistrylight'}}>
                            <button className={css.bannerbtn} >
                        To know more about Lighting
                      </button></Link>
                        </div>
                    </div>
                ))}

            </div>

        </React.Fragment>
    );
}

export default UnlockArtistryBanner;
