import React, { useRef } from "react";
import css from './Recentproject.module.scss';
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import Card from 'react-bootstrap/Card';



const RecentProject: React.FC = () => {
  
    const [Toolimage, setToolimage] = React.useState([]);
    const [middleIndex] = React.useState(1);

    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;

    React.useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            setToolimage(data.data.settings.recentproject);
        });
    }, [assetpath]);
    const [isAnimationPaused, setIsAnimationPaused] = React.useState(false);
    const handleMouseEnter = () => {
        setIsAnimationPaused(false);
        setTimeout(() => {
            setIsAnimationPaused(true)
        }, 3500);
    };

    const handleMouseLeave = () => {
        setIsAnimationPaused(true);
    };
    return (
        <>
            <div>
                <div className={css.recenttitle}>
                    Recent Projects
                </div>
                <div className={css.connectfilmrole}>
                    {Toolimage.map((connects: any, index: number) =>
                        <>
                            <div className={css.detailsholder}>
                                <div style={{ backgroundColor: "#FFF;" }} key={`${connects.image}${index}${index}`} className={css.division1}>
                                    <img key={`${connects.image}_${index}`} loading="lazy"
                                        src={isAnimationPaused ? connects.image : connects.image1}  alt={connects.name} className={index ===2 ? (css.recentimg + ' ' + css.scaledown) : css.recentimg} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}/>
                                    <div className={css.interiorname}>
                                        <div className={css.recentcount}>{connects.count}</div>
                                        <div className={css.recentpara}>{connects.para}</div>
                                    </div>
                                </div>
                            </div>

                            {index <= middleIndex ? (
                                <div className= {css.line}>
                                    <div className="vr" style={{height: "100%" }}></div>
                                </div>
                            ) : null}
                        </>
                    )}
                </div>
            </div>
        </>
    )
};

export default RecentProject;