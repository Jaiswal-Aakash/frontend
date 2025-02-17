import React from "react";
import Carousel from "react-multi-carousel";
import css2 from './Autoplay.module.scss';
import CustomLeftArrow from "./CustomLeftArrow";
import CustomRightArrow from "./CustomRightArrow";
import "react-multi-carousel/lib/styles.css";

interface playproperties {
  living: any
}

const Autoplay: React.FC<playproperties> = ({ living }) => {


  const [activeSlide, setActiveSlide] = React.useState(0);
  const [centerImageIndex, setCenterImageIndex] = React.useState<number>(1);

  const sliderImageUrl = [
    {
      url: "/assets/bottomcarousel/Maskgroup.svg",
      url2: "/assets/icons/play.png",
      heading: "kalai and Family",
      house: "2BHK",
      para: "We’re really happy with the materials that were used and the timeline for the project.The reaction we got from our friends when they first saw our place was priceless."

    },
    {
      url: "/assets/bottomcarousel/Maskgroup.svg",
      url2: "/assets/icons/play.png",
      heading: "sethu and Family",
      house: "3BHK",
      para: "We’re really happy with the materials that were used and the timeline for the project.The reaction we got from our friends when they first saw our place was priceless."

    },
    {
      url: "/assets/bottomcarousel/Maskgroup.svg",
      url2: "/assets/icons/play.png",
      heading: "John and Family",
      house: "5BHK",
      para: "We’re really happy with the materials that were used and the timeline for the project.The reaction we got from our friends when they first saw our place was priceless."

    },
    {
      url: "/assets/bottomcarousel/Maskgroup.svg",
      url2: "/assets/icons/play.png",
      heading: "Prabhu and Family",
      house: "4BHK",
      para: "We’re really happy with the materials that were used and the timeline for the project.The reaction we got from our friends when they first saw our place was priceless."

    },
    {
      url: "/assets/bottomcarousel/Maskgroup.svg",
      url2: "/assets/icons/play.png",
      heading: "Kali and Family",
      house: "3BHK",
      para: "We’re really happy with the materials that were used and the timeline for the project.The reaction we got from our friends when they first saw our place was priceless."

    },
    {
      url: "/assets/bottomcarousel/Maskgroup.svg",
      url2: "/assets/icons/play.png",
      heading: "Selva and Family",
      house: "5BHK",
      para: "We’re really happy with the materials that were used and the timeline for the project.The reaction we got from our friends when they first saw our place was priceless."

    },

  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
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

  // const handleSlideChange = (currentSlide: number) => {
  //   setActiveSlide(currentSlide);
  //   let centerIndex = (currentSlide + 2) % sliderImageUrl.length;
  //   setCenterImageIndex(centerIndex);
  // };


  const carouselRef = React.useRef(null);


  let previousSlide = 0;

  const handleSlideChange = () => {
    if (!carouselRef.current) return;

    const currentSlide = carouselRef.current.state.currentSlide;
    let direction;
    if (currentSlide === 0 && previousSlide === sliderImageUrl.length - 1) {
      direction = 1;
    } else if (currentSlide > previousSlide) {
      direction = 1;
    } else {
      direction = -1;
    }
    let offset = direction >= 0 ? 1 : -2;
    let centerIndex = (currentSlide + offset + sliderImageUrl.length) % sliderImageUrl.length;
    setActiveSlide(currentSlide);
    setCenterImageIndex(centerIndex);

    previousSlide = currentSlide;
  };
  const isMobileDevice = () => {
    return window.innerWidth <= 767;

  };

  const CustomDot: any = ({ onMove, index, onClick, active }) => {
    return (
      <li className={active ? "active" : "inactive"} onClick={() => onClick()} style={{ margin: "-20px 0.5% 0" }}>
        <div className={active ? css2.active_dot : css2.inactive_dot}></div>
      </li>
    );
  };

  return (
    <React.Fragment>
      <div ref={living} className={css2.living}>
        <div className={css2.toppickstitle}>
          Contented Living with Lhome
        </div>
        <div className={css2.bottomcarousel}>
          <Carousel
            ref={carouselRef}
            responsive={responsive}
            autoPlay={false}
            swipeable={true}
            draggable={true}
            showDots={true}
            infinite={true}
            partialVisible={true}

            dotListClass={
              "custom-dot-list-style " + css2.customDotListStyle

            }
            customDot={<CustomDot />}
            customLeftArrow={<CustomLeftArrow carouselRef={carouselRef} onClick={() => { }} />}
            customRightArrow={<CustomRightArrow carouselRef={carouselRef} onClick={() => { }} />}

            afterChange={handleSlideChange}
          >
            {
              sliderImageUrl.map((imageUrl, index) => {

                const isCenterSlide = index === centerImageIndex;
                const isMobile = isMobileDevice();

                return (
                  <div className="slider p-[5%] highlightImage" key={index}>
                    <img
                      className={`${css2.maskgroupimage} ${index === centerImageIndex ? css2.centeredImage : ''}`}
                      src={imageUrl.url}
                      alt="lhome"
                    />
                    {(isCenterSlide || isMobile)  && (
                      <div className={ (isCenterSlide || isMobile)? css2.activeText : ''}>
                        <h3>{imageUrl.heading}</h3>
                        <label>{imageUrl.house}</label>
                        <p className={css2.autoplay_para}>{imageUrl.para}</p>
                      </div>
                    )}
                  </div>

                );
              })
            }

          </Carousel>
        </div>
      </div >
    </React.Fragment >
  )
}

export default Autoplay;