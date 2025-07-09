import * as React from "react";
import * as config from "../next.config.js";
import "react-multi-carousel/lib/styles.css";
import PageHeader from "./_components/PageHeader";
import CitiesBanner from "./_components/CitiesBanner/citiesbanner";
import Zigzag from "./_components/zigzag/Zigzag";
import TopPicksForKitchen from "./_components/HighLights/topics";
import Wardrobes from "./_components/HighLights/wardrobes";
import css from "../styles/cities.module.scss";
import Footer from "./_components/Footer/Footer";
import Warranty from "./_components/warranty/Warranty";
import Guranted from "./_components/Guranted/Guranted";
import Interior from "./_components/Designinterior/Interior";
import HightLights from "./_components/StylishHomeProducts/StylishHomeProducts";
import { useRouter } from 'next/router';
import Link from "next/link.js";

const Citiespage: React.FC = () => {

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
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResized);
    }, [handleResize, handleResized]);

    React.useEffect(() => {
        setTimeout(() => {
            handleResize();
        }, 500);
    }, [handleResize]);

    const routechanged = (e) => {
        setTimeout(() => {
            handleResize();
        }, 1000);
    }

    const router = useRouter();
    const { City } = router.query;

    console.log(City);
    const page = React.useRef(null);
    const [prevPosition, setPrev] = React.useState(0);
    const [hidden, setHidden] = React.useState(false)

    const pageheaderMonitor = () => {
        if (page?.current?.scrollTop > prevPosition) {
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
                        <div><CitiesBanner Citie={City} /></div>
                        <div className={css.ideabr + " mb-4"}>

                            <div className={css.filter_home1}>
                                <span><Link href={{ pathname: "/" }}>home</Link></span>
                                <span>/</span>
                                <span><Link href={{ pathname: "/cities" }}>{City}</Link></span>
                            </div>
                            <p className={css.filter_header_content}>We are the best interior design<br />company in {City}  </p>
                            <div className={css.filter_content}>If you’re on the lookout for simple home interior designs, look no further<br />
                                than LHOMES for end- to-end interior design services.
                            </div>
                        </div>
                        <div className={"mb-3 " + css.ToppicsdivforDesignGallery}>
                            <TopPicksForKitchen Citie={City} Currentpage={router.pathname} />
                            <Wardrobes Citie={City} Currentpage={router.pathname} />
                        </div>
                        <div>
                            <p className={css.filter_header_content1}>Full-service Interior Design Service in {City} </p>
                            <div className={css.filter_content1}>LHome, a leading provider of home interior designs in {City},
                                offers luxury interior design services for homeowners who want to <br />create opulent and sophisticated living spaces.
                                With a team of highly skilled and experienced interior designers in {City},<br /> Lhomes creates personalized design plans that cater to each homeowner’s unique style and preferences
                            </div>
                            <div>
                                <Zigzag />
                            </div>
                        </div>
                        <div> <HightLights Citie={City} /></div>
                        <div><Interior /></div>
                        <div><Warranty /></div>
                        <div><Guranted /></div>
                        <div><Footer /></div>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}
export default Citiespage;