import React from "react";
import Carousel from "react-multi-carousel";
import css from "./AutoplayCS.module.scss"
import * as config from "../../../next.config.js";
import CustomLeftArrow from "./CustomLeftArrow";
import CustomRightArrow from "./CustomRightArrow";
import "react-multi-carousel/lib/styles.css";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import CustomerStoryView from "./customerstoryview";

interface properties {
  header: string
}

const Autoplayservice: React.FC<properties> = ({ header }) => {

  let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;

  const [openRev, setopenRev] = React.useState(false)

  const reviewRef = React.useRef(null);

  const [activeSlide, setActiveSlide] = React.useState(0);
  const [centerImageIndex, setCenterImageIndex] = React.useState<number>(1);
  const [Client, setClient] = React.useState([]);
  const [showData, setShowData] = React.useState();

  React.useEffect(() => {
    let api = simpleCallInitAPI(`${assetpath}/assets/reviewStory.json`);
    api.then((data: any) => {
      let sectionOne = [];
      let stories = data.data[header];

      stories.map((connects: any) => {
        let connect: any = {};
        connect.image = `${assetpath}${connects.image}`;
        connect.place = connects.place;
        connect.heading = connects.heading;
        connect.type = connects.type;
        connect.content = connects.content;
        connect.icon=connects.icon;
        sectionOne.push(connect);
      });
      setClient(sectionOne);
    });
  }, [ header,assetpath]);


  const responsive = {
    desktop: {
      breakpoint: { max: Infinity, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 767, min: 601 },
      items: 1,
      slidesToSlide: 1,
    },
    mini: {
      breakpoint: { max: 600, min: 200 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const handleSlideChange = (currentSlide: number) => {
    setActiveSlide(currentSlide);
    let centerIndex = (currentSlide + 3) % Client.length;
    setCenterImageIndex(centerIndex);
  };

  const handleReadMore = (data: any) => {
    setopenRev(prevOpenRev => !prevOpenRev);
    setShowData(data);
    setTimeout(() => {
      reviewRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  return (
    <React.Fragment>


      <div className={css.bottomcarousel}>
        {openRev && (
          <div ref={reviewRef} className={css.contentStoryView}>
            <CustomerStoryView data={showData} />
          </div>
        )}

        <div className={css.heading}>
          <h3 className="text-center">{header}</h3>
        </div>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          partialVisible={true}
          autoPlaySpeed={2000}

          customLeftArrow={<CustomLeftArrow onClick={() => { }} />}
          customRightArrow={<CustomRightArrow onClick={() => { }} />}
          afterChange={handleSlideChange}
        >
          {
            Client.map((data, index) => {
              return (
                <>
                  <div key={index} onClick={() => handleReadMore(data)}>
                    <div className={`${css.autoplayCS} ${index === centerImageIndex ? css.centeredImage : ""}`} >
                      <div>
                        <div className={css.autoplayImgContent}>
                          <img src={data.image} key={index} className={css.autoplayImg} alt="Lhome picks"></img>
                        </div>
                        <div className={css.autoplayContent}>
                          <div>
                            <h4 className={css.autoplayH4}>{data.heading}</h4>
                          </div>
                          <div>
                            <p className={css.autoplayPara}>{data.content}</p>
                            <button className={css.autoplayBtn} onClick={() => handleReadMore(data)}>read more.,</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
          }

        </Carousel>
      </div>


    </React.Fragment>
  )
}

export default Autoplayservice;