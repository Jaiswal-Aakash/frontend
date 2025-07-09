import * as React from "react";
import * as config from "../next.config.js";
import PageHeader from "./_components/PageHeader";
import css from "../styles/customstories.module.scss";
import Footer from "./_components/Footer/Footer";
import Autoplay from "./_components/Autoplayslider/Autoplayslider";
import ReferNowPage from "./_components/ReferNow/ReferNowPage";
import Warranty from "./_components/warranty/Warranty";
import Guranted from "./_components/Guranted/Guranted";
import FAQPage from "./_components/Faq/FAQPage";
import { simpleCallInitAPI } from "../services/ApicallInit";
import DynamicIterableComponent from "./_components/IterableComponent/DynamicIterableComponent";
import Link from "next/link.js";
import Ideas from "./_components/MeetDesigner/ideas";
// import LivingRoomBanner from "./_components/LivingRoom/LivingBanner";
import Autoplayservice from "./_components/Customstories/Autoplayservice";
import ContentedLiving from "./_components/contentedLiving/ContentedLiving";
import JoinPool from "./_components/JoinPool/joinPool";
import Recentprojectnav from "./_components/Tabsimage/recentprojectnav";
import RecentProject from "./_components/Recentbanner/Recentprojectbanner";

const CustomStoriesPage: React.FC = () => {
    const living = React.useRef(null);
    const [screenwidth, setWidth] = React.useState(window.innerWidth);
    const [LivingRoom, setLivingRoom] = React.useState([]);

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
        let api = simpleCallInitAPI(`${assetpath}/assets/livingroom.json`);
        api.then((data: any) => {
            setLivingRoom(data.data.livingRoom);
        });
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResized);
    }, [ handleResize, handleResized,assetpath])

    

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
                        <div>
                            <RecentProject />
                        </div>
                        <div className={css.customstories}>
                            <div><Autoplayservice header="Last Month Projects" /></div>
                            <div><Autoplayservice header="Last 2 Month Projects" /></div>
                            <div><Autoplayservice header="6 months ago" /></div>
                            <div><ContentedLiving /></div>
                            <div><Warranty /></div>
                            <div><Footer /></div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CustomStoriesPage;