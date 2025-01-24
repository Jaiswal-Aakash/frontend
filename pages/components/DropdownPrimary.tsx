import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  createTheme,
  ThemeProvider,
  Slide,
  Grow,
  IconButton,
} from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDropdown } from "react-icons/io";
import { useRouter } from "next/router";
import CitiesDropDownMenu from "./CitiesDropDown";
import css from '../../styles/DropDownMenu.module.scss';


interface DropDownProps {
  options: string[];
  cities: string[]
}

// const ToggleDropDown = React.forwardRef<HTMLElement, DropDownProps>(({ children, onClick }, ref: any) => (
//   <div className={css.drpdownicon}>
//     <a
//       href=""
//       ref={ref}
//       onClick={(e: any) => {
//         e.preventDefault();
//         onClick(e);
//       }}
//       className={css.ddropdown}
//     >
//       <GiHamburgerMenu />
//     </a>
//   </div>
// ));
// ToggleDropDown.displayName = "Drop Down Event";

// const DropDownMenu = (options: any) => {
//   const [citiesDropdown, setCitiesDropdown] = React.useState(false);
//   const [setAssestpath] = React.useState();
//   const [other, setOther] = React.useState(["Customstories", "Unknown"]);

//   console.log(options.options)
//   const router = useRouter();
//   const handleNav = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     switch (e.target.innerText) {
//       case 'Home':
//         router.push('/');
//         break;
//       case 'Design Gallery':
//         router.push('/designgallery');
//         break;
//       case 'Modular Kitchen':
//         router.push('/modularkitchen');
//         break;
//       case 'Wardrobe':
//         router.push('/wardrobe');
//         break;
//       case 'Bedroom':
//         router.push('/bedroom');
//         break;
//       case 'Living Room':
//         router.push('/livingroom');
//         break;
//       case 'Bath Room':
//         router.push('/bathroom');
//         break;
//       case 'Space Saving Furniture':
//         router.push('/spacesavingfurniture');
//         break;
//       case 'Home Office':
//         router.push('/homeoffice');
//         break;
//       case 'Customer stories':
//         router.push('/customstories')
//         break;
//       case 'Unknown':
//         router.push('/unknow');
//         break;
//       case 'Partner With LHome':
//         router.push('/partnership');
//         break;

//       case 'Refer and Earn':
//         router.push('/referandearn');
//         break;

//       case 'Join Us':
//         router.push('/joinuspage');
//         break;


//       case 'Visit Us':
//         router.push('/visitus');
//         break;

//       case 'Customer Support':
//         router.push('/CustomersupportPage');
//         break;


//     }
//   }
//   return (
//     <div>
//       <Dropdown>
//         <Dropdown.Toggle as={ToggleDropDown} />
//         <Dropdown.Menu title="">
//           <div className={options.fontclass.length > 0 ? css.modifiedfont : ''}>
//             {options.options.map((option: any, index: number) => {
//               return option.toUpperCase() === "CITIES" ?
//                 <div key={`{key_${index}`} className={css.dropdowngroup}>
//                   <MenuItem onClick={handleNav} key={`menu-${option}`}>
//                     {option}
//                   </MenuItem>
//                   <div key={`{key_${index}`} className={css.dropdowngroupmove}><CitiesDropDownMenu options={options.cities} />
//                   </div>
//                 </div>
//                 : <MenuItem onClick={handleNav} key={`menu-${option}`}>{option}</MenuItem>
//             })}

//           </div>
//         </Dropdown.Menu>
//       </Dropdown>

//     </div>
//   );
// }
// DropDownMenu.displayName = "Drop Down";

// export default DropDownMenu;

const DropDownMenuPrimary: React.FC<DropDownProps> = ({ options, cities }) => {
  const theme = createTheme({
    typography: {
      allVariants: {
        fontFamily: "Montserrat",
      },
    },
  });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const router = useRouter();

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  const handleNav = (option: string) => {
    console.log("Navigating to:", option);
    switch (option) {
      case 'Home':
        router.push('/');
        break;
      case 'Design Gallery':
        router.push('/designgallery');
        break;
      case 'Modular Kitchen':
        router.push('/modularkitchen');
        break;
      case 'Wardrobe':
        router.push('/wardrobe');
        break;
      case 'Bedroom':
        router.push('/bedroom');
        break;
      case 'Living Room':
        router.push('/livingroom');
        break;
      case 'Bath Room':
        router.push('/bathroom');
        break;
      case 'Space Saving Furniture':
        router.push('/spacesavingfurniture');
        break;
      case 'Home Office':
        router.push('/homeoffice');
        break;
      case 'Customer stories':
        router.push('/customstories');
        break;
      case 'Unknown':
        router.push('/unknown');
        break;
      case 'Partner With LHome':
        router.push('/partnership');
        break;
      case 'Refer and Earn':
        router.push('/referandearn');
        break;
      case 'Join Us':
        router.push('/joinuspage');
        break;
      case 'Visit Us':
        router.push('/visitus');
        break;
      case 'Customer Support':
        router.push('/customersupportpage');
        break;
      default:
        console.log("Unhandled option:", option);
        break;
    }
    handleMenuClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <div>
        <IconButton onClick={handleMenuOpen}>
          <IoIosArrowDropdown size={'20px'} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          TransitionComponent={Grow}
          TransitionProps={{
            style: { transformOrigin: "top center" },
          }}
        >
          {
            options.map((options: any, index: number) => {
              return options.toUpperCase() === "CITIES" ? (
                <div key={`{key_ ${index}}`} className={css.dropdowngroup1} >
                  <MenuItem onClick={() => handleNav(options)} key={`menu_${options}`}>
                    {options}
                  </MenuItem>
                  <div key={`key_${index}`} className={css.dropdowngroupmove}>
                    <CitiesDropDownMenu options={cities}  />
                  </div>
                </div>
              ) : (
                <div key={`key_${index}`} className={css.iteralItemstyl}>
                  <MenuItem key={`menu-${options}`} onClick={() => handleNav(options)}>
                    {options}
                  </MenuItem>
                </div>
              )
            })
          }
        </Menu>
      </div>
    </ThemeProvider>
  );
};

export default DropDownMenuPrimary;