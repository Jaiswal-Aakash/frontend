import * as React from "react";
import css from './Footer.module.scss';
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import Link from "next/link";
import { FaFacebookF,FaWhatsapp ,FaInstagram} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    const [socialMediaList, setSocialMediaList] = React.useState([]);
    const [mobile, setMobile] = React.useState("");
    const [location, setLocation] = React.useState("");
    const [mail, setMail] = React.useState("");
    const [Logo,setLogo]=React.useState("");

    React.useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            let socialMediaIcons = [];
            data.data.settings.socialMediaIcons.forEach((datas: any) => {
                let lc: any = {};
                lc.image = `${assetpath}${datas.iconsList1}`;
                socialMediaIcons.push(lc);
            });

            setSocialMediaList(socialMediaIcons);
            setLogo(`${assetpath}${data.data.settings.logo}`);
            setMobile(`${assetpath}${data.data.settings.mobile}`);
            setLocation(`${assetpath}${data.data.settings.location}`);
            setMail(`${assetpath}${data.data.settings.mail}`);
        })
            .catch(error => {
                console.log(error);
            });
    }, [assetpath]);

    return (
        <React.Fragment>
            <div className={css.footer}>

                <div className={css.footerInnerLayer}>

                    <div className={css.footerLeftContent}>

                        <div id="logo" className={`${css.lhomelogoholder}`}>
                            <div className={css.lhomelogo}>
                                <img  alt="logo" src={Logo} key={"uniqueKey"}/>
                            </div>
                        </div>

                        <div className={css.socialMedia}>
                         <div className={css.socialMedia_icons}><FaFacebookF/></div>
                         <div className={css.socialMedia_icons}><FaInstagram/></div>
                         <div className={css.socialMedia_icons}><FaWhatsapp/></div>
                         <div className={css.socialMedia_icons}><FaXTwitter/></div>
                        </div>

                        <div className={css.footerContentSubContent}>
                            <div><img className={css.footerContentSubContentIcon} src={mobile} alt="M:" />8925-832-070, 8925-832-076</div>
                            <div><img className={css.footerContentSubContentIcon} src={location} alt="L:" />Coimbatore</div>
                            <div><img className={css.footerContentSubContentIcon} src={mail} alt="E-Mail:" />madhu@lhome.co.in</div>
                        </div>

                    </div>
                    
                    <div className={css.footerContent}>
                        <div className={css.footerContentHeader}>Lhome</div>
                        <div className={css.footerContentSubContent}>
                            <div>Team</div>
                            <Link target="_blank" href={{pathname:'/joinuspage'}} className="no-underline text-[#9F9F9F]"><div>Join Us</div></Link>
                            <div>Privacy Policy</div>
                            <Link href={{pathname:'/referandearn'}} className="no-underline text-[#9F9F9F]"><div>Refer and Earn</div></Link>
                            <div>Disclaimer</div>
                        </div>
                    </div>

                    <div className={css.footerContent}>
                        <div className={css.footerContentHeader}>Customer Support</div>
                        <div className={css.footerContentSubContent}>
                            <Link href={{pathname:'/CustomersupportPage' , query:{tab : 0}} } className="no-underline text-[#9F9F9F]"><div>Raise issue</div></Link>
                            <Link href={{pathname:'/CustomersupportPage' , query:{tab : 1}} } className="no-underline text-[#9F9F9F]"><div>My issues</div></Link>
                            <Link href={{pathname:'/CustomersupportPage' , query:{tab : 2}} } className="no-underline text-[#9F9F9F]"><div>Contact us</div></Link>
                            <Link href={{pathname:'/GetfreeEstimate'} } className="no-underline text-[#9F9F9F]"><div>Get Estimate</div></Link>
                            <Link href={{pathname:'/CustomersupportPage' , query:{tab : 3}} } className="no-underline text-[#9F9F9F]"><div>FAQs</div></Link>
                        </div>
                    </div>

                    <div className={css.footerContent}>
                        <div className={css.footerContentHeader}>The Design Journal</div>
                        <div className={css.footerContentSubContent}>
                            <div>Buying Guides</div>
                            <div>Style Your Home</div>
                            <div>Interior 101</div>
                            <div>Interiors By LHome</div>
                            <div>Lhome in Your City</div>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer;
