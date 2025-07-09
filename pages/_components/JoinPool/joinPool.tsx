'use client'
import * as React from "react";
import css from './joinPool.module.scss';
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import { useRouter } from "next/router";

const JoinPool: React.FC = () => {
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

   const handleClick = () => {
      router.push({
         pathname: '/joinOverpage',
         query: { hideDiv: 'true',selectCat:"true" }
         
      });
   }

   return (
      <React.Fragment>
         <div className={css.referNow} >
            <div className={ css.referNowOuter} >
               <div className={css.division}>
                  <div>
                  <div className={css.refermanmaintext1}>Join Talent Pool</div>
                  <div className={css.refermansubtext}>Join our talent pool by simply submitting your resume. We’ll inform
                     you about the new jobs matching your profile and update you
                     if you are the best fit for one of our open positions.</div>
                     </div>
               </div>
               <div className={css.refermanbuttonholder}>
                  <button
                     onClick={() => handleClick()}
                  >
                     Submit resume
                  </button>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default JoinPool;