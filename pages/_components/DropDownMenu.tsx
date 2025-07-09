

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

import { RiArrowDropDownLine } from "react-icons/ri";
import { useRouter } from "next/router";

interface DropDownProps {
  options: string[];
}

const DropDownMenu: React.FC<DropDownProps> = ({ options }) => {
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
          <RiArrowDropDownLine size={"25px"}>
          </RiArrowDropDownLine>
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
          {options.map((option, index) => (
            <MenuItem key={index} onClick={() => handleNav(option)}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </ThemeProvider>
  );
};

export default DropDownMenu;