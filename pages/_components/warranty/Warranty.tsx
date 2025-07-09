
import * as React from "react";
import css from './Warranty.module.scss';
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';

const Warranty: React.FC = () => {
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    const [calenderimage, setCalendarImage] = React.useState("");
    const [warrantyimage, setWarrantyImage] = React.useState("");
    const [expertimage, setExpertImage] = React.useState("");
    const [designimage, setDesignImage] = React.useState("")
    React.useEffect(() => {
    let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
    api.then((data: any) => {
        setCalendarImage(`${assetpath}${data.data.settings.infoicons.calendarimage}`);
        setWarrantyImage(`${assetpath}${data.data.settings.infoicons.whitewarrantyimage}`);
        setExpertImage(`${assetpath}${data.data.settings.infoicons.expertimage}`);
        setDesignImage(`${assetpath}${data.data.settings.infoicons.whiteexpertimage}`); 
    })
    .catch(error => {
        console.log(error);
    });
 }, [assetpath]);

   return (
      <React.Fragment>
         <div className={css.warranty}>
        <div className={css.warrantyInnerLayer}>
            <div className={css.warrantyInnerTopContent}>
                <div className={css.warrantyInnerLeftContent}>
                    <div className={css.warrantyTextIcons}>
                    {warrantyimage ?
                        <img loading="lazy" className={css.warrantyiconChanges} src={warrantyimage} alt="Warranty" />
                        :
                        ''
                    }
                    </div>
                    <div className={css.warrantyHeader}>Flat 10 year warranty</div>
                    <div className={css.warrantySubText}>Opt for interiors built with the finest materials,<br />
                    leaving no space for imperfections.</div>
                </div>
                {/* icon images changed  start */}
                <div className={css.warrantyInnerRightContent}>
                    <div className={css.warrantyTextIcons}>
                    {calenderimage ?
                        <img loading="lazy" className={css.warrantyiconChanges} src={calenderimage} alt="Calendar" />
                        :
                        ''
                    }
                    </div>
                    <div className={css.warrantyHeader}>45-day delivery</div>
                    <div className={css.warrantySubText}>Get your dream interiors in just 45 days<br />
                    our commitment to on-time delivery.</div>
                </div>
            </div>
            <div className={css.warrantyInnerBottomContent}>
                <div className={css.warrantyInnerLeftContent}>
                    <div className={css.warrantyTextIcons}>
                    {expertimage ?
                        <img loading="lazy" className={css.warrantyiconChanges} src={designimage} alt="Happy Home" />
                        :
                        ''
                    }
                    </div>
                    <div className={css.warrantyHeader}>600+ design experts</div>
                    <div className={css.warrantySubText}>Unleash your creativity and collaborate with our<br />
                     experienced designers to craft your dream home</div>
                </div>
                <div className={css.warrantyInnerRightContent}>
                    <div className={css.warrantyTextIcons}>
                    {expertimage ?
                        <img loading="lazy" className={css.warrantyiconChanges} src={expertimage} alt="Happy Home" />
                        :
                        ''
                    }
                    </div>
                    <div className={css.warrantyHeader}>Aftercare and Support</div>
                    <div className={css.warrantySubText}>Achieve peace of mind with our dedicated care team<br />
                    supporting you throughout your design journey.</div>
                </div>
            </div>
        </div>
      </div>
      </React.Fragment>
   )
}

export default Warranty;