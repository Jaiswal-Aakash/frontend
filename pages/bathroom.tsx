import React from "react";
import css from "../styles/bathroom.module.scss";
import * as config from "../next.config.js";
import { simpleCallInitAPI } from "../services/ApicallInit";
import PageHeader from "./_components/PageHeader";
import Link from "next/link";
import Ideas from "./_components/MeetDesigner/ideas";
import Autoplay from "./_components/Autoplayslider/Autoplayslider";
import ReferNowPage from "./_components/ReferNow/ReferNowPage";
import Warranty from "./_components/warranty/Warranty";
import FAQPage from "./_components/Faq/FAQPage";
import Guranted from "./_components/Guranted/Guranted";
import Footer from "./_components/Footer/Footer";
import DynamicIterableComponent from "./_components/IterableComponent/DynamicIterableComponent";
import BathroomBaner from "./_components/bathroom/bathroombanner";


const HomeOffice: React.FC = () => {

  const [homeOffice, setHomeoffice] = React.useState([])

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
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResized);
  }, [handleResize, handleResized])

  React.useEffect(() => {
    let api = simpleCallInitAPI(`${assetpath}/assets/bathroom.json`);
    api.then((data: any) => {
      setHomeoffice(data.data.bathroom);
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
            <div><BathroomBaner /></div>

            <div className={css.bathroom_bgclr}>
              <div className={css.bathroom_filter_home}>
                <div className="pt-4">
                  <span className={css.bathroom_filter_link_span1}><Link href={{ pathname: "/" }} className={css.bathroom_filter_link}>home</Link></span>
                  <span className={css.bathroom_filter_slash}>/</span>
                  <span className={css.bathroom_filter_link_span2}><Link href={{ pathname: "/bathroom" }} className={css.bathroom_filter_link}>bathroom</Link></span>
                </div>
                <div className={css.bathroom_filter_header_content}>Bathroom</div>
                <div className="row ">
                  <div className="col-lg-3 "> </div>

                  <div className={"col-lg-6 px-[15px] " + css.bathroom_filter_content}><p className={css.bathroom_filter_additional_content}>Craft a spa-like oasis in your bathroom, where sleek design meets luxurious functionality.
                   Transform daily routines into indulgent experiences with modern fixtures and serene aesthetics.</p>
                  </div>
                  <div className="col-lg-3 "></div>

                </div>
                <div><Ideas prop="Bathroom" color="red" space="bathroom"/></div>
              </div>
            </div>
            <div className="mt-[-5%]"><DynamicIterableComponent data={homeOffice} categoryId='15'/></div>
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
export default HomeOffice;