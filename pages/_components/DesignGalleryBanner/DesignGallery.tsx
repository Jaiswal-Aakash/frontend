import * as React from "react";
import css1 from "./DesignGallery.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from "../../../services/ApicallInit";
import Form from "../HomeSlider/Form";

const DesignGalleryBanner: React.FC = () => {
    const [modularIcon, setModularicon] = React.useState("");
    const [modularImage, setModularimage] = React.useState("");
    const [title, setTitle] = React.useState("");

    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;    

    React.useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api
            .then((data: any) => {
                setModularicon(`${assetpath}${data.data.settings.designGalleryBanner.modularIcon}`);
                setModularimage(`${assetpath}${data.data.settings.designGalleryBanner.modularImage}`);
                setTitle(`${assetpath}${data.data.settings.designGalleryBanner.modularText}`);
            })
            .catch((error) => {
                console.log(error);
            });
            
    }, [assetpath]);

    return (
        <React.Fragment>
            <div className={css1.designGallery}>
                
                <div className={css1.galleryTitle}>
                    <b>  Modular Kitchen </b> makes your home Modular
                </div>
                <div className={css1.contentBox}>
                    <div className={css1.side1}>
                        <div className={css1.contentPart}>
                        <div className={css1.iconPart1}>
                                <img src={modularIcon} alt="kitchenIcon" />
                            </div>
                            <div className={css1.container}>
                                <div className={css1.imagePart}>
                                    <img src={modularImage} alt="kitchenbanner" />
                                </div>
                               <div className={css1.shadow}></div>
                            </div>
                            <div className={css1.iconPart2}>
                                <img src={modularIcon} alt="kitchenIcon" />
                            </div>
                        </div>
                    </div>
                    <div className={css1.side2}>
                    <div className={css1.topLevel}>
                            <div className={css1.iconPart3}>
                                <img src={modularIcon} alt="kitchenIcon" />
                            </div>
                            <div className={css1.iconPart4}>
                                <img src={modularIcon} alt="kitchenIcon" />
                            </div>
                        </div>
                        <div className={css1.bottomLevel}>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default DesignGalleryBanner;
