import * as React from "react";
import css from "../Designinterior/Interior.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import { TbArrowWaveRightDown } from 'react-icons/tb';
const Interior: React.FC = () => {
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    const [Steps3Discover, setSteps3Discover] = React.useState([]);
    const [Steps3Design, setSteps3Design] = React.useState([]);
    const [Steps3Movein, setSteps3Movein] = React.useState([]);
    const [Arrow, setArrow] = React.useState([]);

    React.useEffect(() => {
        let api1 = simpleCallInitAPI(`${assetpath}/assets/steps3.json`);
        api1.then((data: any) => {
            let lcategories = [];
            data.data.categories.discover.forEach((cats: any) => {
                let lc: any = {};
                lc.image = `${assetpath}${cats.image}`;
                lc.text = cats.text;
                lc.head = cats.head;

                lcategories.push(lc);
            });
            setSteps3Discover(lcategories);
        })
            .catch(error => {
                console.log(error);
            });


        let api2 = simpleCallInitAPI(`${assetpath}/assets/steps3.json`);
        api2.then((data: any) => {
            let lcategories = [];
            data.data.categories.design.forEach((cats: any) => {
                let lc: any = {};
                lc.image = `${assetpath}${cats.image}`;
                lc.text = cats.text;
                lc.head = cats.head;
                lcategories.push(lc);
            });
            setSteps3Design(lcategories);
        })
            .catch(error => {
                console.log(error);
            });


        let api3 = simpleCallInitAPI(`${assetpath}/assets/steps3.json`);
        api3.then((data: any) => {
            let lcategories = [];
            data.data.categories.movein.forEach((cats: any) => {
                let lc: any = {};
                lc.image = `${assetpath}${cats.image}`;
                lc.text = cats.text;
                lc.head = cats.head;
                lcategories.push(lc);
            });
            setSteps3Movein(lcategories);
        })
            .catch(error => {
                console.log(error);
            });

        let api4 = simpleCallInitAPI(`${assetpath}/assets/steps3.json`);
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
                    <div className={css.interiortitle}>Refer and Earn in <span className={css.Steps3titleRed}> 3 easy steps</span></div>
                    <div className={css.interiorcategoryinterLayer}>

                        <div className={css.interiorfilmrole}>
                            {Steps3Discover.map((cats: any, index: number) =>
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
                            {Steps3Design.map((cats: any, index: number) =>
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

                            {Steps3Movein.map((cats: any, index: number) =>
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