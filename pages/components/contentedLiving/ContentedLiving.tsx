import * as React from "react";
import css from './ContentedLiving.module.scss';
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';

const ContentedLiving: React.FC = () => {
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    const [content, setContent] = React.useState([]);

    React.useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/contentedLiving.json`);

        api.then((data: any) => {
            setContent(data.data.ContentedLiving);
        });

    }, [assetpath]);


    return (
        <React.Fragment>
            <div className={css.contentedLiving}>
            <div className={css.contentedContainer}>
                    <h1 className={css.contentedLivingHead}>Contented Living with Lhome</h1>
                    <div className={css.contentedLivingInner}>
                        {content.map((livingContent: any, index: number) => (
                            <div key={index}>
                            <div className={css.contentedTop}>
                                <img src={livingContent.image} className={css.contentedImage} alt="lhome" /> 
                            </div>
                            <div className={css.contentedBottom}><img src={livingContent.icon} className={css.contentedIcon} alt="lhome picks"/>
                                <div className={css.contentHead} >{livingContent.heading}</div>
                                <div className={css.contentText}>{livingContent.text}</div>
                            </div>                                
                           </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ContentedLiving;



