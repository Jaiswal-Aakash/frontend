import React from "react";
import css from "./JoinusBanner.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';

const JoinusBanner: React.FC = () => {
    const [JoinusBanner, setJoinusBanner] = React.useState([]);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;

    React.useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            let bannerImage = [];
            data?.data?.settings?.joinusBanner?.forEach((datas: any) => {
                let lc: any = {};
                lc.joinusBanner = `${assetpath}${datas.image}`;
                bannerImage.push(lc);
            });
            setJoinusBanner(bannerImage);
        });
    }, [assetpath]);

    return (

        <React.Fragment>
            <div className={css.lhomelogo}>

            </div>
            <div className={css.joinus}>
                {JoinusBanner.map((datas: any, index: number) => (
                    <div key={`${datas.toptext}_${index}_${index}`} className={css.joinusContainer} >
                        <div className={css.joinusImage}>
                            <img src={datas.joinusBanner} alt="bannerImage" />
                        </div>
                        <div className={css.joinusContent}>
                            <p>A world of<br />delightful <br />possiblities.</p>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    );
}

export default JoinusBanner;
