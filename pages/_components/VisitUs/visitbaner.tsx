import React, { useEffect } from "react";
import css from "./visitbaner.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import VisitToggle from "./visittoggle";
const VisitBaner = () => {
    const [VisitBaner, setVisitBaner] = React.useState([]);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            let VistBanerImage = []
            data?.data?.settings?.visitusbaner?.forEach((datas: any) => {
                let lc: any = {};
                lc.visitbaner = `${assetpath}${datas.image}`;
                lc.toptext1 = datas.toptext1;
                lc.toptext2 = datas.toptext2;
                VistBanerImage.push(lc);
            });
            setVisitBaner(VistBanerImage);
        });

    }, [assetpath])
    return (
        <>
            {VisitBaner?.map((datas: any, index: number) => (
                <div className={css.ban} key={index}>
                    <div className={css.visitus_image_container}><img src={datas.visitbaner} alt="bannerImage" className={css.visitusimage} /></div>
                    {/* <div className={css.visitus_title}><p className={css.visitus_tagline}>{`We are the best interior design company in ${datas.toptext1}`}  </p></div> */}
                    {/* <div><p>{`We are the best interior design company in ${datas.toptext2}`}  </p></div> */}

                </div>
                 ))}
                 <div className={css.visitus_image_toggle}><VisitToggle/></div>
        </>
    )
}
export default VisitBaner;