
import * as React from "react";
import css from './Guranted.module.scss';
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import { useRouter } from "next/router";
const InteriorDesign: React.FC = () => {
   const router= useRouter();
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    const [googleIcon, setGoogleIcon] = React.useState("");
    const [coimbatore, setCoimbatore] = React.useState("");
   //  const [rajapalayam, setRajapalayam] = React.useState("");
    React.useEffect(() => {
    let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
    api.then((data: any) => {
      //   setRajapalayam(`${assetpath}${data.data.settings.rajapalayam}`);
        setCoimbatore(`${assetpath}${data.data.settings.coimbatore}`);
        setGoogleIcon(`${assetpath}${data.data.settings.google}`);
    })
    .catch(error => {
        console.log(error);
    });
 }, [assetpath]);
 const handleClick= (city: string) =>{
   router.push({ pathname: "/cities", query: { City: city } });
 }

   return (
      <React.Fragment>
         <div  className={css.guaranteed}>
            <div className={css.guaranteedInnerLayer}>
               <div className={css.guaranteedHeader}>Guaranteed Enjoyment</div>
               <div className={css.guaranteedBodyParent}>
               <div className={css.guaranteedBody}>
                  <div className={css.guaranteedBodyBorder}>
                     <img className={css.googleIcon} src={googleIcon} alt="" />
                     <div className={css.likeScore}>5/5 (1000+ Reviews)</div>
                     <div className={css.likeScoreDetail}>02 Cities | 02 Studios</div>
                     <div className={css.likeScoreDetailLocation}> Coimbatore</div>
                  </div>
                  <div className={css.guaranteedBodyLine}><hr id="verticaldivider" className={css.verticaldivider} /></div>
                  {/* <div className={css.guaranteedRjpamText} onClick={()=>handleClick('Rajapalayam')}><img className={css.guaranteedRjpamImg} src={rajapalayam} alt="" /><div className={css.image_textContent}>Rajapalayam</div></div> */}
                  <div className={css.guaranteedCbeText}  onClick={()=>handleClick('Coimbatore')}><img className={css.guaranteedRjpamImg} src={coimbatore} alt="" /><div className={css.image_textContent}>Coimbatore</div></div>
                </div>
               </div>
            </div>
      </div>
      </React.Fragment>
   )
}

export default InteriorDesign;