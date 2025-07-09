import * as React from "react";
import * as config from "../next.config";
import PageHeader from "./_components/PageHeader";
import css from "../styles/texture.module.scss";
import Footer from "./_components/Footer/Footer";
import Warranty from "./_components/warranty/Warranty";
import { simpleCallInitAPI } from "../services/ApicallInit";
import TextureBanner from "./_components/Texture/Texture";

const Texture: React.FC = () => {
    const living = React.useRef(null);
    const [Texturepoints, setPoints] = React.useState([]);
    const [textureheading, setHeadings] = React.useState();
    const [summary, setsummary] = React.useState();
    const [screenwidth, setWidth] = React.useState(window.innerWidth);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    let hgtt = 0;
    if (window.innerWidth < 600) {
        hgtt = window.innerHeight - 210;
        if (window.innerWidth > 490 && window.innerWidth < 512) {
            hgtt += 10;
        }
    } else {
        hgtt = window.innerHeight - 160;
    }
    const [screenheight, setHeight] = React.useState(hgtt);


    const handleResize = React.useCallback(() => {
        setWidth(window.innerWidth);
        let hgtt = 0;
        if (window.innerWidth < 600) {
            hgtt = window.innerHeight - 210;
            if (window.innerWidth > 490 && window.innerWidth < 512) {
                hgtt += 10;
            }
            if (window.innerWidth > 571 && window.innerWidth < 599) {
                hgtt += 50;
            }
            if (window.innerWidth > 570 && window.innerWidth < 572) {
                hgtt += 45;
            }
            if (window.innerWidth > 509 && window.innerWidth < 571) {
                hgtt += 25;
            }
            if (window.innerWidth > 500 && window.innerWidth < 510) {
                hgtt += 15;
            }
            if (window.innerWidth < 500) {
                hgtt -= 10;
            }
        } else {
            hgtt = window.innerHeight - 160;
        }
        setHeight(hgtt);
    }, []);

    const handleResized = React.useCallback(() => {
        setTimeout(() => {
            handleResize();
        }, 1000);
    }, [handleResize]);

    React.useEffect(() => {
        let api1 = simpleCallInitAPI(`${assetpath}/assets/designJournal.json`);
        api1.then((data: any) => {
            // let texture = [];
            console.log(data.data.desginJournalRows.Texture)
            // data.data.desginJournalRows.Colors.map((datas: any) => {
            //     let lc: any = {};
            //     lc.boldHeading = `${assetpath}${datas.boldHeading}`;
            //     lc.points = datas.points;
            //     texture.push(lc);
            // });

            setPoints(data.data.desginJournalRows.Texture.points);
            setHeadings(data.data.desginJournalRows.Texture.boldHeading);
            setsummary(data.data.desginJournalRows.Texture.summary);

        });

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResized);
    }, [handleResize, handleResized, assetpath]);
    console.log(textureheading);

    const page = React.useRef(null);
    const [prevPosition, setPrev] = React.useState(0);
    const [hidden, setHidden] = React.useState(false)

    const pageheaderMonitor = () => {
        if (page.current.scrollTop > prevPosition) {
            setPrev(page.current.scrollTop)
            setHidden(true)
        } else {
            setHidden(false)
            setPrev(page.current.scrollTop)

        }
    }

    return (
        <React.Fragment>
            <div className="animate-fade-in">
                <div className={css.lhomePage}>
                    <div className={hidden ? "hidden" : ""}>
                        <PageHeader screenwidth={screenwidth} screenheight={screenheight} assetpath={assetpath} hidden={false} />
                    </div>
                    <div ref={page} onScroll={pageheaderMonitor} className={hidden ? css.LhomeBottom1 : css.LhomeBottom}>
                        <div><TextureBanner /></div>
                        <div className="container">
                            <div className={css.points}>
                                <div className={css.boldheading}><b>{textureheading}</b></div><br/>
                                <div>{Texturepoints.map((datas: any, index: number) => (
                                    <div key={`${datas.heading}_${index}_${index}`} className={css.heading} >
                                        <b className={css.heading1}>{datas.heading} </b> {datas.discription}<br /><br />
                                    </div>
                                ))}
                                </div>

                                <div className={css.heading}>{summary}</div>
                            </div>
                        </div>
                        <div><Warranty /></div>
                        <div><Footer /></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Texture;
