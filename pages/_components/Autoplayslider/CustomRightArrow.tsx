import React,{FC,MouseEventHandler} from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import css2 from './Autoplay.module.scss'


interface CustomRightArrowProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  carouselRef: React.RefObject<any>;
}
  
  const CustomRightArrow: FC<CustomRightArrowProps> = ({ onClick,carouselRef }) => {

    const handleForwardClick = () => {
      if (carouselRef && carouselRef.current && carouselRef.current.next) {
        carouselRef.current.next();
      }
    }
    return (
      <button 
        onClick={handleForwardClick}
        className={`react-multiple-carousel__arrow ${css2.customRArrowStyle}`}
      >
        <i className="bi-arrow-right-short"></i>
      </button>
    );
  };
  
  export default CustomRightArrow;