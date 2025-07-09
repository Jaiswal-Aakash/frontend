
import * as React from "react";
import css from './InteriorDesign.module.scss';
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';

const InteriorDesign: React.FC = () => {
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    const [interiorListTopText, setInteriorListTopText] = React.useState([]);
    const [interiorListBottomText, setInteriorListBottomText] = React.useState([]);
    React.useEffect(() => {
    let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
    api.then((data: any) => {
        let linteriorTopTexts = [];
        data.data.settings.interior.forEach((cats: any) => {
           let lc: any = {};
           lc.topimage = `${assetpath}${cats.image}`;
           lc.toptext = cats.toptext;
           linteriorTopTexts.push(lc);
        });
        setInteriorListTopText(linteriorTopTexts);
        let linteriorBottomTexts = [];
        data.data.settings.interiorBottom.forEach((cats: any) => {
           let lc: any = {};
           lc.bottomimage = `${assetpath}${cats.image}`;
           lc.bottomtext = cats.bottomtext;
           linteriorBottomTexts.push(lc);
        });
        setInteriorListBottomText(linteriorBottomTexts);
    })
    .catch(error => {
        console.log(error);
    });
 }, [assetpath]);

   return (
      <React.Fragment>
         <div className={css.interiorDesign}>
        <div className={css.interiorDesignOuter}>
            <div className={css.guaranteedHeader}>Full-service Interior Design</div>
            <div className={css.interiorDesignLayer}>
            <div className={`${css.interiorDesignTop} ${css.interiorDesignTopOuter}`} >
                {
                    interiorListTopText.map((datas: any, index: number) =>
                    <div className={css.interiorDesignTopText} key={`${datas.toptext}_${index}_${index}`} >
                        {datas.toptext}
                    </div>
                    )
                }
            </div>
            <div className={css.interiorDesignTop} >
                {
                    interiorListTopText.map((datas: any, index: number) =>
                    <div className={css.interiorIconsBack} key={`${datas.toptext}_${index}_${index}`} >
                        <img src={datas.topimage} alt="" />
                    </div>
                    )
                }
            </div>
            <div className={css.interiorDesignBottom} >
                {
                    interiorListBottomText.map((datas: any, index: number) =>
                    <div className={css.interiorIconsBottomBack} key={`${datas.toptext}_${index}_${index}`} >
                        <img src={datas.bottomimage} alt="" />
                    </div>
                    )
                }
            </div>
            <div className={`${css.interiorDesignBottom} ${css.interiorDesignBottomOuter}`}  >
                {
                    interiorListBottomText.map((datas: any, index: number) =>
                    <div className={css.interiorDesignbottomText} key={`${datas.bottomtext}_${index}_${index}`} >
                        {datas.bottomtext}
                    </div>
                    )
                }
            </div>
            </div>
        </div>
        </div>
      </React.Fragment>
   )
}

export default InteriorDesign;