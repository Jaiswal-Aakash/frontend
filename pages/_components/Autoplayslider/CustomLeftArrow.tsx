import React ,{FC,MouseEventHandler } from "react";
import css2 from './Autoplay.module.scss';
import Carousel from "react-multi-carousel";



interface CustomLeftArrowProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  carouselRef: React.RefObject<any>;

}

const CustomLeftArrow: FC<CustomLeftArrowProps> = ({ onClick, carouselRef }) => {

  const handleBackwardClick = () => {
    if (carouselRef && carouselRef.current && carouselRef.current.previous) {
      carouselRef.current.previous();
    }
  }

  return (
    <button 
      onClick={handleBackwardClick}
      className={`react-multiple-carousel__arrow ${css2.customLArrowStyle}`}
    >
      <i className="bi-arrow-left-short"></i>
    </button>
  );
};

export default CustomLeftArrow;