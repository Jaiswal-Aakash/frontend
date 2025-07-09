import * as React from "react";
import css from './NRIFriendly.module.scss';
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';

const NRIFriendly: React.FC = () => {
   let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
   const [refergirlimage, setRefergirlImage] = React.useState("");
   const [refergirlalt, setRefergirlAlt] = React.useState(""); 
   React.useEffect(() => {
      let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
      api.then((data: any) => {
         setRefergirlImage(`${assetpath}${data.data.settings.refergirlImage}`);
         setRefergirlAlt(`${assetpath}${data.data.settings.refergirlAlt}`);
      })
         .catch(error => {
            console.log(error);
         });
   }, [assetpath]);

   return (
      <React.Fragment>
         <div className={css.referNow} >
            <div className={css.referNowOuter} >
               <img loading="lazy" src={refergirlimage} className={css.referman} alt={refergirlalt} />
               <div>
                  <div className={css.refermanmaintext}>We are NRI-friendly too.</div>
                  <div className={css.refermansubtext}>Bringing Your Vision to Life, Worldwide<br />
                     NRI-friendly Home Solutions</div>
                  <div className={css.refermanbuttonholder}>
                     {/* <button>Read more</button> */}
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}

export default NRIFriendly;