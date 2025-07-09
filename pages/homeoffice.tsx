import React from "react";
import css from "../styles/homeoffice.module.scss";
import * as config from "../next.config.js";
import { simpleCallInitAPI } from "../services/ApicallInit";
import PageHeader from "./_components/PageHeader";
import HomeOfficeBaner from "./_components/HomeOfiice/homeoffficebaner";
import Link from "next/link";
import Ideas from "./_components/MeetDesigner/ideas";
import Autoplay from "./_components/Autoplayslider/Autoplayslider";
import ReferNowPage from "./_components/ReferNow/ReferNowPage";
import Warranty from "./_components/warranty/Warranty";
import FAQPage from "./_components/Faq/FAQPage";
import Guranted from "./_components/Guranted/Guranted";
import Footer from "./_components/Footer/Footer";
import DynamicIterableComponent from "./_components/IterableComponent/DynamicIterableComponent";


const HomeOffice: React.FC = () => {
  const [homeOffice,setHomeoffice]=React.useState([])

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
  }, [handleResize, handleResized,assetpath]);

  React.useEffect(() => {
    let api = simpleCallInitAPI(`${assetpath}/assets/homeoffice.json`);
    api.then((data:any)=>{
      setHomeoffice(data.data.homeOffice);
    });     
},[assetpath]);



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

    return(
    
        <React.Fragment>
            <div className="animate-fade-in">
                <div className={css.lhomePage}>
                <div className={hidden ? "hidden" : ""}>
                        <PageHeader screenwidth={screenwidth} screenheight={screenheight} assetpath={assetpath} hidden={false} />
                    </div>

                    <div ref={page} onScroll={pageheaderMonitor} className={hidden ? css.LhomeBottom1 : css.LhomeBottom}>
                        <div><HomeOfficeBaner/></div>
                     
                                
                                <div className={css.homeoffice_bgclr}>
                <div className={css.homeoffice_filter_home}>
                <div className="pt-4">
                  <span className={css.homeoffice_filter_link_span1}><Link href={{ pathname: "/" }} className={css.homeoffice_filter_link}>home</Link></span>
                  <span className={css.homeoffice_filter_slash}>/</span>
                  <span className={css.homeoffice_filter_link_span2}><Link href={{ pathname: "/homeoffice" }} className={css.homeoffice_filter_link}>homeoffice</Link></span>
                </div>
                <div className={css.homeoffice_filter_header_content}>HomeOffice</div>
                <div className="row ">
                <div className="col-lg-3 "> </div>

                <div className={"col-lg-6 px=[15px] " + css.homeoffice_filter_content}><p className={css.homeoffice_filter_additional_content}>Create a productive sanctuary with home office design that balances functionality and aesthetics.
                 Tailored for focus and comfort, it`&#39`s where efficiency meets style in the heart of your home.</p>
                  </div>
                  <div className="col-lg-3 "></div>
                  
                  </div>
                  </div>
                  </div>
                              
                              <div className={css.mainIdea}>
                              <Ideas prop="Home office" color="red" space="home_office"/>
                              </div>
                              <div className="mt-[-5%]"><DynamicIterableComponent  data={homeOffice} categoryId='17'/></div>
                              <div className="mb-[-50px]"><Autoplay living={living} /></div>
                           <div><ReferNowPage/></div>
                           <div><Warranty/></div>
                           <div><FAQPage/></div>
                           <div><Guranted/></div>
                           <div><Footer/></div>



                    </div>
                    </div>
                    </div>
        </React.Fragment>
    )
}
export default HomeOffice;