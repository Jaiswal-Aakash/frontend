import React, { useState, useEffect } from "react";
import css from "./designcolorplay.module.scss";
import * as config from "../../../next.config";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import Link from 'next/link';


const DesignColorPlay: React.FC = ({ }) => {
    const [colorplayRowhead, setColorplayRow] = useState();
    const [colorplayRowmainhead, setColorplaymainRow] = useState();
    const [colorplayRowimg, setColorplayRowimg] = useState();
    const [colorplaypoints, setcolorPoints] = React.useState([]);

    const [craftRowhead, setCraftRow] = useState();
    const [craftRowmainhead, setCraftmainRow] = useState();
    const [craftRowimg, setCraftRowimg] = useState();
    const [Craftingpoints, setPoints] = React.useState([]);

    const [unlockartistryRowhead, setunlockartistryRow] = useState();
    const [unlockartistryRowmainhead, setunlockartistrymainRow] = useState();
    const [unlockartistryRowimg, setunlockartistryRowimg] = useState();
    const [unlockartistrypoints, setunlockartistryPoints] = React.useState([]);

    const [artistrylightRowhead, setartistrylightCraftRow] = useState();
    const [artistrylightRowmainhead, setartistrylightmainRow] = useState();
    const [artistrylightRowimg, setartistrylightRowimg] = useState();
    const [artistrylightpoints, setartistrylightPoints] = React.useState([]);

    const [textureRowhead, settextureRow] = useState();
    const [textureRowmainhead, settexturemainRow] = useState();
    const [textureRowimg, settextureRowimg] = useState();
    const [texturepoints, settexturePoints] = React.useState([]);

    const [wallRowhead, setwallRow] = useState();
    const [wallRowmainhead, setwallmainRow] = useState();
    const [wallRowimg, setwallRowimg] = useState();
    const [wallpoints, setwallPoints] = React.useState([]);


    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;


    useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/designJournal.json`);
        api.then((data: any) => {

            setColorplayRow(data.data.desginJournalRows.Colors.boldHeading);
            setColorplaymainRow(data.data.desginJournalRows.Colors.mainHeading);
            setColorplayRowimg(data.data.desginJournalRows.Colors.image);
            setcolorPoints(data.data.desginJournalRows.Colors.points);

            setCraftRow(data.data.desginJournalRows.Theme.boldHeading);
            setCraftmainRow(data.data.desginJournalRows.Theme.mainHeading);
            setCraftRowimg(data.data.desginJournalRows.Theme.image);
            setPoints(data.data.desginJournalRows.Theme.points);

            setunlockartistryRow(data.data.desginJournalRows.Space.boldHeading);
            setunlockartistrymainRow(data.data.desginJournalRows.Space.mainHeading);
            setunlockartistryRowimg(data.data.desginJournalRows.Space.image);
            setunlockartistryPoints(data.data.desginJournalRows.Space.points);

            setartistrylightCraftRow(data.data.desginJournalRows.Light.boldHeading);
            setartistrylightmainRow(data.data.desginJournalRows.Light.mainHeading);
            setartistrylightRowimg(data.data.desginJournalRows.Light.image);
            setartistrylightPoints(data.data.desginJournalRows.Light.points);

            settextureRow(data.data.desginJournalRows.Texture.boldHeading);
            settexturemainRow(data.data.desginJournalRows.Texture.mainHeading);
            settextureRowimg(data.data.desginJournalRows.Texture.image);
            settexturePoints(data.data.desginJournalRows.Texture.points);

            setwallRow(data.data.desginJournalRows.Walls.boldHeading);
            setwallmainRow(data.data.desginJournalRows.Walls.mainHeading);
            setwallRowimg(data.data.desginJournalRows.Walls.image);
            setwallPoints(data.data.desginJournalRows.Walls.points);



        });
    }, [assetpath]);

    return (

        <React.Fragment>

            <div className={css.row1}>
                <div className={css.rowimg}>
                    <img src={colorplayRowimg} />
                </div>
                <div>
                    <div className={css.points}>
                        <h2 dangerouslySetInnerHTML={{ __html: colorplayRowmainhead }}></h2>
                        {/* {colorplayRowmainhead} */}
                        <b>{colorplayRowhead}</b>
                        <div className={css.sam}>
                            <div>{colorplaypoints.map((datas: any, index: number) => (
                                <div key={`${datas.heading}_${index}_${index}`}  >

                                    <b className={css.heading1}>{datas.heading} </b>
                                    <p className={css.description_p}>{datas.discription}
                                        <span> <Link className={css.readmore} href={{ pathname: '/Colorplay' }}>Read More</Link></span>
                                    </p>
                                </div>
                            ))}

                            </div>
                        </div>


                    </div>
                </div>

            </div>




            <div className={css.row1}>
                <div>
                    <div className={css.points}>
                        <h2 dangerouslySetInnerHTML={{ __html: craftRowmainhead }}></h2>
                        <b>{craftRowhead}</b>
                        {Craftingpoints.map((datas: any, index: number) => (
                            <div key={`${datas.heading}_${index}_${index}`}  >
                                <b className={css.heading1}>{datas.heading} </b>
                                <p className={css.description_p}>{datas.discription}
                                    <span> <Link className={css.readmore} href={{ pathname: '/CraftingTheme' }}>Read More</Link></span>
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
                <div className={css.rowimg}>
                    <img src={craftRowimg} />

                </div>

            </div>



            <div className={css.row1}>
                <div className={css.rowimg}>
                    <img src={unlockartistryRowimg} />
                </div>
                <div>
                    <div className={css.points}>
                        <h2 dangerouslySetInnerHTML={{ __html: unlockartistryRowmainhead }}></h2>
                        <b>{unlockartistryRowhead}</b>
                        <div>{unlockartistrypoints.map((datas: any, index: number) => (
                            <div key={`${datas.heading}_${index}_${index}`}  >
                                <b className={css.heading1}>{datas.heading} </b>
                                <p className={css.description_p}>{datas.discription}
                                    <span> <Link className={css.readmore} href={{ pathname: '/Unlockartistry' }}>Read More</Link></span>
                                </p>
                            </div>

                        ))}

                        </div>
                    </div>
                </div>

            </div>




            <div className={css.row1}>
                
                <div>
                    <div className={css.points}>
                        <h2 dangerouslySetInnerHTML={{ __html: artistrylightRowmainhead }}></h2>
                        <b>{artistrylightRowhead}</b>
                        <div>{artistrylightpoints.map((datas: any, index: number) => (
                            <div key={`${datas.heading}_${index}_${index}`}  >
                                <b className={css.heading1}>{datas.heading} </b>
                                <p className={css.description_p}>{datas.discription}
                                    <span> <Link className={css.readmore} href={{ pathname: '/Unlockartistry' }}>Read More</Link></span>
                                </p>
                            </div>

                        ))}

                        </div>
                    </div>
                </div>
                <div className={css.rowimg}>
                    <img src={artistrylightRowimg} />
                </div>

            </div>



            <div className={css.row1}>
                <div className={css.rowimg}>
                    <img src={textureRowimg} />
                </div>
                <div >
                    <div className={css.points}>
                        <h2 dangerouslySetInnerHTML={{ __html: textureRowmainhead }}></h2>
                        <b>{textureRowhead}</b>
                        <div>{texturepoints.map((datas: any, index: number) => (
                            <div key={`${datas.heading}_${index}_${index}`}  >
                                <b className={css.heading1}>{datas.heading} </b>
                                <p className={css.description_p}>{datas.discription}
                                    <span> <Link className={css.readmore} href={{ pathname: '/Texture' }}>Read More</Link></span>
                                </p>

                            </div>

                        ))}

                        </div>
                    </div>
                </div>
            </div>




            <div className={css.row1}>
                <div>
                    <div className={css.points}>
                        <h2 dangerouslySetInnerHTML={{ __html: wallRowmainhead }}></h2>
                        <b>{wallRowhead}</b>
                        {wallpoints.map((datas: any, index: number) => (
                            <div key={`${datas.heading}_${index}_${index}`}  >
                                <b className={css.heading1}>{datas.heading} </b> 
                                <p className={css.description_p}>{datas.discription}
                                    <span> <Link className={css.readmore} href={{ pathname: '/Wall' }}>Read More</Link></span>
                                </p>

                            </div>
                        ))}
                    </div>
                </div>
                <div className={css.rowimg}>
                    <img src={wallRowimg} />

                </div>

            </div>





        </React.Fragment>
    );
}

export default DesignColorPlay;