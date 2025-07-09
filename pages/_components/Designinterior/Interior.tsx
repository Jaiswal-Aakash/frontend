import * as React from "react";
import css from "../Designinterior/Interior.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import { TbArrowWaveRightDown } from 'react-icons/tb';
const Interior: React.FC = () => {
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    const [InteriorDiscover, setInteriorDiscover] = React.useState([]);
    const [InteriorDesign, setInteriorDesign] = React.useState([]);
    const [InteriorMovein, setInteriorMovein] = React.useState([]);
    const [Arrow, setArrow] = React.useState([]);

    React.useEffect(() => {
        let api1 = simpleCallInitAPI(`${assetpath}/assets/easyway.json`);
        api1.then((data: any) => {
            let lcategories = [];
            data.data.categories.discover.forEach((cats: any) => {
                let lc: any = {};
                lc.image = `${assetpath}${cats.image}`;
                lc.text = cats.text;
                lc.head = cats.head;

                lcategories.push(lc);
            });
            setInteriorDiscover(lcategories);
        })
            .catch(error => {
                console.log(error);
            });


        let api2 = simpleCallInitAPI(`${assetpath}/assets/easyway.json`);
        api2.then((data: any) => {
            let lcategories = [];
            data.data.categories.design.forEach((cats: any) => {
                let lc: any = {};
                lc.image = `${assetpath}${cats.image}`;
                lc.text = cats.text;
                lc.head = cats.head;
                lcategories.push(lc);
            });
            setInteriorDesign(lcategories);
        })
            .catch(error => {
                console.log(error);
            });


        let api3 = simpleCallInitAPI(`${assetpath}/assets/easyway.json`);
        api3.then((data: any) => {
            let lcategories = [];
            data.data.categories.movein.forEach((cats: any) => {
                let lc: any = {};
                lc.image = `${assetpath}${cats.image}`;
                lc.text = cats.text;
                lc.head = cats.head;
                lcategories.push(lc);
            });
            setInteriorMovein(lcategories);
        })
            .catch(error => {
                console.log(error);
            });

        let api4 = simpleCallInitAPI(`${assetpath}/assets/easyway.json`);
        api4.then((data: any) => {
            let lcategories = [];
            data.data.categories.arrow.forEach((cats: any) => {
                let lc: any = {};
                lc.image1 = `${assetpath}${cats.image}`;
                lcategories.push(lc);
            });
            setArrow(lcategories);
        })
            .catch(error => {
                console.log(error);
            });

    }, [assetpath]);

    return (
        <React.Fragment>
            <div className={css.interiorcategory}>
                <div className={css.interiorcategoryOuterLayer}>
                    <div className={css.interiortitle}>Complete home interior in 3 easy steps</div>
                    <div className={css.interiorcategoryinterLayer}>

                        <div className={css.interiorfilmrole}>

                            {InteriorDiscover.map((cats: any, index: number) =>
                                <div key={`${cats.category}${index}${index}`}
                                    className={css.division1}>
                                    <div className={css.box_text}>1</div>
                                    <div className={"pe-3 " + css.divisionchild}>
                                        <div className={css.category}>
                                            <div className={css.interiorname}>{cats.head}</div>
                                            <div className={css.interiortext}>{cats.text}</div>
                                        </div>
                                        <div className={css.interiorimage}>
                                            <img key={`${cats.category}_${index}`} loading="lazy"
                                                src={cats.image} alt={cats.head} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        {Arrow.map((cats: any, index: number) =>
                            <div className={css.arrowimage} key={index}>
                                {/* <img key={`${cats.category}_${index}`} loading="lazy"
                                    src={cats.image1} alt={cats.head} /> */}
                                <TbArrowWaveRightDown />
                            </div>
                        )}
                        <div className={css.interiorfilmrole}>

                            {InteriorDesign.map((cats: any, index: number) =>
                                <div key={`${cats.category}${index}${index}`}
                                    className={css.division2}>
                                    <div className={css.box_text}>2</div>
                                    <div className={"pe-3 " + css.divisionchild}>
                                        <div className={css.category}>
                                            <div className={css.interiorname}>{cats.head}</div>
                                            <div className={css.interiortext}>{cats.text}</div>
                                        </div>
                                        <div className={css.interiorimage}>
                                            <img key={`${cats.category}_${index}`} loading="lazy"
                                                src={cats.image} alt={cats.head} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {Arrow.map((cats: any, index: number) =>
                            <div className={css.arrowimage1} key={index}>
                                {/* <img key={`${cats.category}_${index}`} loading="lazy"
                                    src={cats.image1} alt={cats.head} /> */}
                                <TbArrowWaveRightDown />
                            </div>
                        )}

                        <div className={css.interiorfilmrole}>

                            {InteriorMovein.map((cats: any, index: number) =>
                                <div key={`${cats.category}${index}${index}`}
                                    className={css.division3}>
                                    <div className={css.box_text}>3</div>
                                    <div className={"pe-3 " + css.divisionchild}>
                                        <div className={css.category}>
                                            <div className={css.interiorname}>{cats.head}</div>
                                            <div className={css.interiortext}>{cats.text}</div>
                                        </div>
                                        <div className={css.interiorimage}>
                                            <img key={`${cats.category}_${index}`} loading="lazy"
                                                src={cats.image} alt={cats.head} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Interior;