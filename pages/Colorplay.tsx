import * as React from "react";
import * as config from "../next.config.js";
import PageHeader from "./_components/PageHeader";
import css from "../styles/colorplay.module.scss";
import Footer from "./_components/Footer/Footer";
import { simpleCallInitAPI } from "../services/ApicallInit";
import ColorPlayBanner from "./_components/ColorPlay/colorplay";
import { log } from "console";

const ColorPlay: React.FC = () => {
    const living = React.useRef(null);
    const [colorplaypoints, setPoints] = React.useState([]);
    const [colorplayheading, setHeadings] = React.useState();
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
        let api = simpleCallInitAPI(`${assetpath}/assets/designJournal.json`);
        api.then((data: any) => {
            let colorplay = [];
            console.log(data.data.desginJournalRows.Colors.points)
            // data.data.desginJournalRows.Colors.points.forEach((datas: any) => {
            //     let lc: any = {};
            //     lc.points = `${assetpath}${datas.points}`;
            //     // lc.points = datas.points;
            //     colorplay.push(lc);
            // });
            setPoints(data.data.desginJournalRows.Colors.points);
            setHeadings(data.data.desginJournalRows.Colors.boldHeading);
            setsummary(data.data.desginJournalRows.Colors.summary);
        });

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResized);
    }, [handleResize, handleResized, assetpath]);
    console.log(colorplaypoints);

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
                        <div><ColorPlayBanner /></div>
                       
                            <div className={css.points}>
                                <div className={css.boldheading}><b>{colorplayheading}</b></div><br />
                                <div>{colorplaypoints.map((datas: any, index: number) => (
                                    <div key={`${datas.heading}_${index}_${index}`} className={css.heading} >
                                        <b className={css.heading1}>{datas.heading} </b> {datas.discription}<br /><br />

                                    </div>
                                ))}
                                </div>
                                <div className={css.heading}>{summary}</div>
                            </div>
                        
                        <div><Footer /></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default ColorPlay;
