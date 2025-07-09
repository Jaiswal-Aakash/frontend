
import * as React from "react";
import css from './joinPool.module.scss';
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import { useRouter } from "next/router";

const Joinpoolcom: React.FC = () => {
   let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
   const [referboyimage, setReferBoyImage] = React.useState("");
   const [referboyalt, setReferBoyAlt] = React.useState("");

   React.useEffect(() => {
      let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
      api.then((data: any) => {
         setReferBoyImage(`${assetpath}${data.data.settings.referboyimage}`);
         setReferBoyAlt(`${assetpath}${data.data.settings.referboyalt}`);
      })
         
      .catch(error => {
            console.log(error);
         });
   }, [assetpath]);

   const router = useRouter();

  

   return (
      <React.Fragment>
         <div className={css.referNow1} >
            <div className={css.referNowOuter} >
               <div>
                  <div className={css.refermanmaintext2}>Join Talent Pool</div>
                  <div className={css.refermansubtext1}>Join our talent pool by simply submitting your resume. We’ll inform
                     you about the new jobs matching your profile and update you
                     if you are the best fit for one of our open positions.</div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default Joinpoolcom;