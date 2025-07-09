import React,{FC,MouseEventHandler} from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import css2 from './AutoplayCS.module.scss'


interface CustomRightArrowProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
  }
  
  const CustomRightArrow: FC<CustomRightArrowProps> = ({ onClick }) => {
    return (
      <button 
        onClick={onClick}
        className={`react-multiple-carousel__arrow ${css2.customRArrowStyle}`}
        style={{ marginTop: "150px",backgroundColor:"transparent",fontSize:"20px",fontWeight:"bold",position:"absolute",right:"0" }}
      >
         &#10095;
      </button>
    );
  };
  
  export default CustomRightArrow;