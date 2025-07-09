import React,{FC,MouseEventHandler} from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import css2 from "./HighLights.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from "next/router";

interface CustomRightArrowProps {
    onClick: MouseEventHandler<HTMLButtonElement>;
  }
  
  const CustomRightArrow: FC<CustomRightArrowProps> = ({ onClick }) => {

    const router = useRouter();
    const arrowColor = router.pathname ==="/designgallery" ?"#7B7B7B" : router.pathname === "/cities" ? "#7B7B7B" : "#222";

    return (
      <button 
        onClick={onClick}
        className={`react-multiple-carousel__arrow ${css2.rightBtn} `}
      >
      <FontAwesomeIcon icon={faChevronRight} className={css2.Arrow} style={{color:arrowColor}} />
      </button>
    );
  };

  export default CustomRightArrow;