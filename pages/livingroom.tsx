import * as React from "react";
import * as config from "../next.config.js";
import PageHeader from "./_components/PageHeader";
import css from "../styles/livingroom.module.scss";
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
import LivingRoomBanner from "./_components/LivingRoom/LivingBanner";

const ModularKitchenPage: React.FC = () => {
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
    }, [assetpath]);

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
                        <div><LivingRoomBanner /></div>
                        <div className={css.livingroom_bgclr}>
                            <div className={css.livingroom_filter_home}>
                                <div className="pt-4">
                                    <span className={css.livingroom_filter_link_span1}><Link href={{ pathname: "/" }} className={css.livingroom_filter_link}>home</Link></span>
                                    <span className={css.livingroom_filter_slash}>/</span>
                                    <span className={css.livingroom_filter_link_span2}><Link href={{ pathname: "/livingroom" }} className={css.livingroom_filter_link}>livingroom</Link></span>
                                </div>
                                <div className={css.livingroom_filter_header_content}>Living Room</div>
                                <div className="row ">
                                    <div className="col-lg-3 "> </div>

                                    <div className={"col-lg-6 px-[15px] " + css.livingroom_filter_content}><p className={css.livingroom_filter_additional_content}>Design your living room as a harmonious blend of comfort and contemporary elegance.
                                     Curated furnishings and thoughtful layout create a welcoming space for socializing and relaxation..</p>
                                    </div>
                                    <div className="col-lg-3 "></div>

                                </div>
                                <div><Ideas prop="Living Room" color="red" space="living_room"/></div>
                            </div>
                        </div>
                        <div className="mt-[-5%]"><DynamicIterableComponent data={LivingRoom} categoryId='14'/></div>
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

export default ModularKitchenPage;