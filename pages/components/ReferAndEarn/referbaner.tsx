import React, { useEffect } from "react";
import css from "./referbaner.module.scss";
import * as config from "../../../next.config.js";
import Image from "next/image";
// import banner from "../../../public/assets/referandearn/referearn.png"
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import Toggle from "./refertoggle";
// import SwitchToggle from "./referearnform";

const ReferBaner: React.FC = () => {
    const [referBaner, setReferBan] = React.useState([]);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;

    useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            let ReferEarnBaner = [];
            data?.data?.settings?.referearnbaner?.forEach((datas: any) => {
                let lc: any = {};
                lc.referearnbaner1 = `${assetpath}${datas.image1}`;
                lc.referearnbaner2 = `${assetpath}${datas.image2}`;
                ReferEarnBaner.push(lc);
            })
            setReferBan(ReferEarnBaner)
        })
    }, [assetpath])


    return (
        <div className={`${css.referearn_layer}`}>
            <div className={css.referbaner_sliderwrapper}>
                {referBaner?.map((datas: any, index: number) => (
                    <div className="row py-3" id="banner_img" key={index}>
                        <div className={" col-md-6 w-full flex items-center justify-start " + css.referbaner_image} >

                            <div key={`${index}_${index}`} >
                                <div className={css.referearn_imagess }>
                                    <img src={datas.referearnbaner2} className={css.re_banner_img} alt="bannerImage" />
                                    {/* <img src={datas.referearnbaner1 || "/assets/referandearn/referearn.png"} alt="bannerImage" className={css.referearn} width={500} height={500} /> */}
                                    {/* <img src={datas.referearnbaner2} alt="bannerImage" className={css.referman2} width={500} height={500} /> */}
                                </div>
                            </div>

                        </div>
                        <div className={" col-md-6 w-full flex justify-center items-center " + css.referbaner_form}>
                            <div className="">
                            <div className={css.title_main}>
                            <h1 className={css.referearn_title}>Loved us? </h1>
                            <h1 className={css.referearn_title}><span>Now <span className={css.referearn_subtitle}>refer us!</span></span></h1>
                            <p className={css.referearn_content}>Refer and earn ₹ 10,000 every time your<br />friends try Lhome.</p>
                            </div>
                            
                            <div className="h-[550px]" ><Toggle /></div>
                            </div>

                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}
export default ReferBaner;