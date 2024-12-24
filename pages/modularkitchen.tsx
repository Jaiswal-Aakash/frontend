import * as React from "react";
import * as config from "../next.config.js";
import PageHeader from "./components/PageHeader";
import css from "../styles/modularkitchen.module.scss";
import Footer from "./components/Footer/Footer";
import KitchenBaner from "./components/ModularKitchen/kitchenbaner";
import Autoplay from "./components/Autoplayslider/Autoplayslider";
import ReferNowPage from "./components/ReferNow/ReferNowPage";
import Warranty from "./components/warranty/Warranty";
import Guranted from "./components/Guranted/Guranted";
import FAQPage from "./components/Faq/FAQPage";
import { simpleCallInitAPI } from "../services/ApicallInit";
import DynamicIterableComponent from "./components/IterableComponent/DynamicIterableComponent";
import MeetDesigner from "./components/MeetDesigner/MeetDesigner";
import Link from "next/link.js";
import Ideas from "./components/MeetDesigner/ideas";


const ModularKitchenPage: React.FC = () => {
  const living = React.useRef(null);
  const [screenwidth, setWidth] = React.useState(window.innerWidth);
  const [data, setData] = React.useState([]);
  const [data1, setData1] = React.useState([]);
  const [data2, setData2] = React.useState([]);
  const [data3, setData3] = React.useState([]);
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
    let api = simpleCallInitAPI(`${assetpath}/assets/ushapedKitchen.json`);
    api.then((data: any) => {
      setData(data.data.Row1);
    });
    let response = simpleCallInitAPI(`${assetpath}/assets/straightKitchen.json`);
    response.then((data: any) => {
      setData1(data.data.Row1);
    });
    let response1 = simpleCallInitAPI(`${assetpath}/assets/LshapedKitchen.json`);
    response1.then((data: any) => {
      setData2(data.data.Row1);
    });
    let response2 = simpleCallInitAPI(`${assetpath}/assets/IslandKitchen.json`);
    response2.then((data: any) => {
      setData3(data.data.Row1);
    });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResized);
  }, [handleResize, handleResized, assetpath]);

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
            <div><KitchenBaner /></div>

            <div className={css.bgclr}>
              <div className={css.filter_home}>
                <div className="sm:pt-4">
                  <span className={css.filter_link_span1}><Link href={{ pathname: "/" }} className={css.kitchen_filter_link}>home</Link></span>
                  <span className={css.filter_slash}>/</span>
                  <span className={css.filter_link_span2}><Link href={{ pathname: "/modularkitchen" }} className={css.kitchen_filter_link}>modular kitchen</Link></span>
                </div>
                <div className={css.filter_header_content}>Modular Kitchen</div>
                <div className="row ">
                  <div className="col-lg-3 "> </div>

                  <div className={"col-lg-6 px-[15px] " + css.filter_content}><p className={css.filter_additional_content}>Transform your kitchen to the heart of your home with the help of LHome.
                    From coffee dates to dinner parties, our end-to-end design and installation
                    services will turn your kitchen into a stylish and functional space.</p>
                  </div>
                  <div className="col-lg-3  "></div>

                </div>
              </div>

              <div className={css.Shaped}>
                <p
                  className={`${css.shape_content} ${activePage === 'U-Shaped' ? css.active : ''}`}
                  onClick={() => handleClick('U-Shaped')}
                >
                  U-Shaped
                </p>
                <span className={`${css.shaped_slash} hidden sm:block`}>|</span>
                <p
                  className={`${css.shape_content} ${activePage === 'Straight' ? css.active : ''}`}
                  onClick={() => handleClick('Straight')}
                >
                  Straight
                </p>

                <span className={`${css.shaped_slash} hidden sm:block`}>|</span>
                <p
                  className={`${css.shape_content} ${activePage === 'L-Shaped' ? css.active : ''}`}
                  onClick={() => handleClick('L-Shaped')}
                >
                  L-Shaped
                </p>
                <span className={`${css.shaped_slash} hidden sm:block`}>|</span>
                <p
                  className={`${css.shape_content} ${activePage === 'Island Kitchen' ? css.active : ''}`}
                  onClick={() => handleClick('Island Kitchen')}
                >
                  Island Kitchen
                </p>
              </div>
            </div>


            {activePage == 'unset' &&
              <>
                <div>
                  <Ideas color="blue" prop="U-Shaped Kitchen" space="u_shaped" />
                  <div className="mt-5 "> <DynamicIterableComponent data={data}  categoryId ='6'/></div>
                </div>
                <div>
                  <MeetDesigner colour='red' prop="Straight Kitchen" container="meetContainer1" />
                  <DynamicIterableComponent data={data1} categoryId ='7' />
                </div>
                <div>
                  <MeetDesigner colour='blue' prop="L-Shaped Kitchen" container="meetContainer2" />
                  <DynamicIterableComponent data={data2} categoryId ='8' />
                </div>
                <div>
                  <MeetDesigner colour='red' prop="Island Kitchen" container="meetContainer1" />
                  <DynamicIterableComponent data={data3} categoryId ='9' />
                </div>
              </>}
            {activePage == 'U-Shaped' &&
              <div>

                <Ideas color="blue" prop="U-Shaped Kitchen" space="u_shaped"/>
                <DynamicIterableComponent data={data}  categoryId ='6'/>
              </div>}
            {activePage == 'Straight' &&
              <div>
                <Ideas color="blue" prop="Straight Kitchen" space="straight"/>
                <DynamicIterableComponent data={data1} categoryId ='7' />
              </div>}
            {activePage == 'Island Kitchen' &&
              <div>
                <Ideas color="blue" prop="Island Kitchen" space="island"/>
                <DynamicIterableComponent data={data2} categoryId ='8' />
              </div>}
            {activePage == 'L-Shaped' &&
              <div>
                <Ideas color="blue" prop="L-Shaped Kitchen" space="l_shaped"/>
                <DynamicIterableComponent data={data3} categoryId ='9' />
              </div>}
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
