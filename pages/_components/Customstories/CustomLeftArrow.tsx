import React ,{FC,MouseEventHandler } from "react";
import css2 from './AutoplayCS.module.scss';


interface CustomLeftArrowProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const CustomLeftArrow: FC<CustomLeftArrowProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`react-multiple-carousel__arrow ${css2.customLArrowStyle}`}
      style={{  marginTop: "150px",backgroundColor:"transparent",fontSize:"20px",fontWeight:"bold",position:"absolute",left:"2" }}
    >
       &#10094;
    </button>
  );
};

export default CustomLeftArrow;
