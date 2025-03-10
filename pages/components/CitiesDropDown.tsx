import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import css from '../../styles/DropDownMenu.module.scss';
import DropDownIcon from '../../public/assets/SVGIcons/DropdownArrow';
import Link from 'next/link';
// import { Link } from "react-router-dom";
import { useRouter } from 'next/router';
import CustomComponent from '@emotion/react';

interface CitiesProps {
  children: object;
  onClick(event: string): void;
}

const CityToggle = React.forwardRef<HTMLElement, CitiesProps>(({ children: any, onClick }, ref: any) => (
  <a
    href=""
    ref={ref}
    onClick={(e: any) => {
      e.preventDefault();
      onClick(e);
    }}
    className={css.cdropdown}
  >
    <div>
      <DropDownIcon transFormX="1" transFormY="4" fillColor={"none"} strokeColor={"blue"} strokeWidth={.5} />
    </div>
  </a>
));
CityToggle.displayName = "Cities Event";

// const CitiesDropDownMenu = (options: any, positionmove: string) => {
//   const router = useRouter();
//   const City = router.query.City as string;
// }
const CitiesDropDownMenu = (options: any, positionmove: string) => {
  const router = useRouter();

  const handleNav = (city: string) => {
    router.push({ pathname: "/cities", query: { City: city } });
    // console.log(city)
  }

  return (
    <React.Fragment>
      <div>
        <Dropdown>
          <Dropdown.Toggle as={CityToggle} />
          <Dropdown.Menu title="">
            <div className={css.dropdownitemsstyle}>

              {options.options && options.options.length > 0 && options.options.map((option: any) => (
                <Dropdown.Item
                  key={option}
                  onClick={() => handleNav(option)}
                  className={css.dropdownitemstyle}
                >
                  {option}
                </Dropdown.Item>
              ))}

              {options && options.length > 0 && options.map((option: any) => (
                <Dropdown.Item
                  key={option}
                  onClick={() => handleNav(option)}
                  className={css.dropdownitemstyle}
                >
                  {option}
                </Dropdown.Item>
              ))}


            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </React.Fragment>
  );
}


CitiesDropDownMenu.displayName = "Cities";
export default CitiesDropDownMenu
