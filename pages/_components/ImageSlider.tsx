
import { useRouter } from 'next/router';
import * as React from "react";
import css from '../../styles/ImageSlider.module.scss';
import { simpleCallInitAPI } from '../../services/ApicallInit';
import * as config from "../../next.config.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

let slidercounter = 0;
let totalsliderimages: any = [];
let totalsliderimagesalt: any = [];
interface Sliderproperties {
  screenwidth: number;
  screenheight: number;
  swidth: number;
  sheight: number;
}
const ImageSlider: React.FC<Sliderproperties> = ({ screenwidth, screenheight, swidth, sheight }) => {
  const [height, setHeight] = React.useState(screenheight);
  const [width, setWidth] = React.useState(screenwidth);
  const [wishlistimage, setWishListImage] = React.useState("");
  const [wishlistalt, setWishListAlt] = React.useState("");
  const [shareiconimage, setShareIconImage] = React.useState("");
  const [sharealt, setShareAlt] = React.useState("");
  const sliderref = React.useRef(null);
  const sliderleftblock = React.useRef(null);
  const sliderrightblock = React.useRef(null);
  const sliderimage = React.useRef(null);
  const sliderimages = React.useRef(null);
  const sliderright = React.useRef(null);
  const sliderleft = React.useRef(null);
  const [sliderimagename, setSliderImageName] = React.useState("");
  const [sliderimagealt, setSliderImageAlt] = React.useState("");
  let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;



  React.useEffect(() => {
    let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
    api.then((data: any) => {      
      totalsliderimages = data.data.settings.sliderimages;
      totalsliderimagesalt = data.data.settings.sliderimagesalt;
      sliderleftblock.current.style.position = "absolute";
      let reduce = 0;
      if (screenwidth < 300) {
        reduce = 25;
      }
    
      let slleft = `${swidth * .07}px`;
      let sltop = `${sheight * .10}px`;
      let silleft = `${(swidth * .07) + 20}px`;
      let siltop = `${(sheight * .10) + 20}px`;
      let srleft = `${(window.innerWidth < 992 ? 0 : (swidth * .20)) + swidth - (swidth * .07) - sliderleftblock.current.offsetWidth - reduce}px`;
      let siwidth = parseFloat(srleft.split("px")[0]) - parseFloat(silleft.split("px")[0]) + sliderrightblock.current.offsetWidth - 20;
      let srtop = `${sheight - (sheight * .21) - sliderleftblock.current.offsetHeight}px`;
      let siheight = parseFloat(srtop.split("px")[0]) - parseFloat(siltop.split("px")[0]) + sliderrightblock.current.offsetHeight - 20;
      if(screenwidth<=600){
        siheight -=40;
        siwidth +=40;
        silleft = `${(swidth * .07)}px`;

      }
      sliderleftblock.current.style.left = slleft;
      sliderleftblock.current.style.top = sltop;
      sliderrightblock.current.style.position = "absolute"
      sliderrightblock.current.style.left = srleft
      sliderrightblock.current.style.top = srtop
      sliderimage.current.style.position = "absolute"
      sliderimage.current.style.left = silleft;
      sliderimage.current.style.top = siltop;
      sliderimage.current.style.width = `${siwidth}px`;
      sliderimage.current.style.height = `${siheight+50}px`;
      sliderimages.current.style.width = `${siwidth}px`;
      sliderimages.current.style.height = `${siheight+50}px`;
      sliderleft.current.style.position = "absolute";
      sliderleft.current.style.top = `47.5%`;
      sliderleft.current.style.left = "10px";
      sliderleft.current.style.width = "20px";
      sliderleft.current.style.height = "20px";
      sliderright.current.style.top = `47.5%`;
      sliderright.current.style.left = `${siwidth - 40}px`
      sliderright.current.style.position = "absolute";
      sliderright.current.style.width = "20px";
      sliderright.current.style.height = "20px";
      setSliderImageName(`${assetpath}${totalsliderimages[slidercounter]}`);
      setSliderImageAlt(totalsliderimagesalt[slidercounter])
      setWishListImage(`${assetpath}${data.data.settings.wishlistimage}`);
      setWishListAlt(`${assetpath}${data.data.settings.wishlistAlt}`);
      setShareIconImage(`${assetpath}${data.data.settings.shareiconimage}`);
      setShareAlt(`${assetpath}${data.data.settings.shareAlt}`);
    })
      .catch(error => {
        console.log(error);
      });
  }, [ sheight, swidth, screenwidth,assetpath]);

  const prevItem = () => {
    slidercounter--;
    if (slidercounter < 0) {
      slidercounter = totalsliderimages.length - 1;
    }
    setSliderImageName(totalsliderimages[slidercounter]);
    setSliderImageAlt(totalsliderimagesalt[slidercounter])
  }


  const nextItem = () => {
    slidercounter++;
    if (slidercounter >= totalsliderimages.length) {
      slidercounter = 0;
    }
    setSliderImageName(totalsliderimages[slidercounter]);
    setSliderImageAlt(totalsliderimagesalt[slidercounter])
  }

  return (
    <React.Fragment>
      <div className={css.boxHolder}>
        <div id="leftblock" ref={sliderleftblock} className={css.slidersmallboxleft} />
        <div id="rightblock" ref={sliderrightblock} className={css.slidersmallboxright} />
        <div id="sliderimages" ref={sliderimage} className={css.sliderimages}>
          <img ref={sliderimages} src={sliderimagename} loading="lazy" alt={sliderimagealt} />
          <div ref={sliderleft}>
            <FontAwesomeIcon onClick={prevItem} className={css.hover} icon={faChevronLeft} style={{ fontSize: '30px' }} />
          </div>
          <div ref={sliderright}>
            <FontAwesomeIcon onClick={nextItem} className={css.hover} icon={faChevronRight} style={{ fontSize: '30px' }} />
          </div>
          <div className={css.customlist}>
            <div className={css.customname}>
              {/* {datas.name} */}
              <span className={css.wishlistholder}>
                <img
                  loading="lazy"
                  className={"me-2 " + css.baner_wishlist}
                  src={wishlistimage}
                  alt={wishlistalt}
                />
              </span>
              <span className={css.shareholder}>
                <img
                  loading="lazy"
                  className={css.baner_share}
                  src={shareiconimage}
                  alt={sharealt}
                />
              </span>
            </div>
            <label className={css.customtext}>
              {/* {datas.size} */}
            </label>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ImageSlider;