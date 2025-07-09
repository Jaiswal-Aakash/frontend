import React ,{FC,MouseEventHandler } from "react";
import css2 from "./HighLights.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from "next/router";

interface CustomLeftArrowProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const CustomLeftArrow: FC<CustomLeftArrowProps> = ({ onClick }) => {

  const router = useRouter();
    const arrowColor = router.pathname ==="/designgallery" ?"#7B7B7B" : router.pathname === "/cities" ?"#7B7B7B" : "#222";

  return (
    <button 
      onClick={onClick}
      className={`react-multiple-carousel__arrow ${css2.leftBtn} `}
      >
     <FontAwesomeIcon icon={faChevronLeft} className={css2.Arrow} style={{color:arrowColor}} />
    </button>
  );
};

export default CustomLeftArrow;