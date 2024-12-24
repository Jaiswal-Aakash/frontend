import React, { useEffect } from "react";
import * as config from "../next.config.js";
import css from "../styles/wardrobe.module.scss"
import PageHeader from "./components/PageHeader";
import WarDrobeBaner from "./components/Wardrobe/wardrobeban";
import Link from "next/link.js";
import Autoplay from "./components/Autoplayslider/Autoplayslider";
import ReferNowPage from "./components/ReferNow/ReferNowPage";
import Warranty from "./components/warranty/Warranty";
import FAQPage from "./components/Faq/FAQPage";
import Footer from "./components/Footer/Footer";
import Guranted from "./components/Guranted/Guranted";
import { simpleCallInitAPI } from "../services/ApicallInit";
import DynamicIterableComponent from "./components/IterableComponent/DynamicIterableComponent";
import Ideas from "./components/MeetDesigner/ideas";
import MeetDesigner from "./components/MeetDesigner/MeetDesigner";



const WardrobePage: React.FC = () => {
    const [data, setData] = React.useState([]);
    const [data1, setData1] = React.useState([]);
    const [data2, setData2] = React.useState([]);
    const living = React.useRef(null);
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
        let api = simpleCallInitAPI(`${assetpath}/assets/ushapedwar.json`);
        api.then((data: any) => {
            setData(data.data.ushapedwar);
        });
        let response = simpleCallInitAPI(`${assetpath}/assets/straightwar.json`);
        response.then((data: any) => {
            setData1(data.data.straightwar);
        });
        let response1 = simpleCallInitAPI(`${assetpath}/assets/lshapedwar.json`);
        response1.then((data: any) => {
            setData2(data.data.lshapedWar);
        });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResized);
    }, [ handleResize, handleResized,assetpath])


    const [activePage, setActivePage] = React.useState<string | null>('unset');
    const handleClick = (pageName: string) => {
        setActivePage(pageName);
    };

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
                        <div><WarDrobeBaner /></div>



                                <div className={css.wardrobe_bgclr}>
                <div className={css.wardrobe_filter_home}>
                <div className="pt-4">
                  <span className={css.wardrobe_filter_link_span1}><Link href={{ pathname: "/" }} className={css.wardrobe_filter_link}>home</Link></span>
                  <span className={css.wardrobe_filter_slash}>/</span>
                  <span className={css.wardrobe_filter_link_span2}><Link href={{ pathname: "/wardrobe" }} className={css.wardrobe_filter_link}>wardrobe</Link></span>
                </div>
                <div className={css.wardrobe_filter_header_content}>Wardrobe</div>
                <div className="row ">
                <div className="col-lg-3 "> </div>

                <div className={"col-lg-6 px-[15px] " + css.wardrobe_filter_content}><p className={css.wardrobe_filter_additional_content}>Elevate your space with meticulously crafted wardrobes,
                 marrying functionality and aesthetics seamlessly. Tailored storage solutions meet modern design,
                 offering a perfect blend of organization and elegance.</p>
                  </div>
                  <div className="col-lg-3 "></div>
                  
                  </div>
                  </div>
                            <div className={css.wardrobe_Shaped}>
                                <p
                                    className={`${css.wardrobe_shape_content} ${activePage === 'U-Shaped' ? css.active : ''}`}
                                    onClick={() => handleClick('U-Shaped')}
                                >
                                    U-Shaped
                                </p>
                                <span className={css.wardrobe_shaped_slash}>|</span>
                                <p
                                    className={`${css.wardrobe_shape_content} ${activePage === 'Straight' ? css.active : ''}`}
                                    onClick={() => handleClick('Straight')}
                                >
                                    Straight
                                </p>

                                <span className={css.wardrobe_shaped_slash}>|</span>
                                <p
                                    className={`${css.wardrobe_shape_content} ${activePage === 'L-Shaped' ? css.active : ''}`}
                                    onClick={() => handleClick('L-Shaped')}
                                >
                                    L-Shaped Wardrobe
                                </p>

                            </div>
                        </div>
                        {activePage == 'unset' &&
                         <>
                            <div>
                                <Ideas color="blue" prop="U-Shaped Wardrobe" space="wardrobe"/>
                                <DynamicIterableComponent data={data}  categoryId='10'/>
                            </div>
                            <div>
                                <MeetDesigner colour='red' prop="Straight Wardrobe" container="meetContainer1" />
                                <DynamicIterableComponent data={data1} categoryId='11' />
                            </div>
                            <div>
                                <MeetDesigner colour='blue' prop="L-Shaped Wardrobe" container="meetContainer2" />
                                <DynamicIterableComponent data={data2} categoryId='12' />
                            </div>
                        </>
                        }

                        {activePage == 'U-Shaped' &&
                            <div>
                                <Ideas color='blue' prop="U-Shaped Wardrobe" space="wardrobe"/>
                                <DynamicIterableComponent data={data}  categoryId='10'/>
                            </div>
                        }

                        {activePage == 'Straight' &&
                            <div>
                                <Ideas color='blue' prop="Straight Wardrobe" space="wardrobe"/>
                                <DynamicIterableComponent data={data1} categoryId='11' />
                            </div>
                        }

                        {activePage == 'L-Shaped' &&
                            <div className="mb-5 ">
                                <Ideas color='blue' prop="L-Shaped Wardrobe" space="wardrobe"/>
                                <DynamicIterableComponent data={data2} categoryId='12' />
                            </div>
                        }

                        <div className="mb-[-50px]"><Autoplay living={living} /></div>
                        <div><ReferNowPage /></div>
                        <div><Warranty /></div>
                        <div><FAQPage /></div>
                        <div><Guranted /></div>
                        <div><Footer /></div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}
export default WardrobePage;