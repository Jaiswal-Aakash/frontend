import React, { useState } from "react";
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import css from '../../styles/DropDownMenu.module.scss';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoArrowBackOutline } from "react-icons/io5"
import CitiesDropDownMenu from './CitiesDropDown';
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import Dropdown from "react-bootstrap/Dropdown";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Divider, IconButton, createTheme, styled, useMediaQuery } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

interface DrawerMenuProps {
    options: string[];
    onClick: (event: string) => void;
    cities: string[];
    fontclass: string;
}

const DrawerMenu: React.FC<DrawerMenuProps> = ({ options, cities, onClick }) => {
    const isSmallScreen = useMediaQuery("(max-width:450px)");

    const theme = createTheme({
        typography: {
            allVariants: {
                fontFamily: "Montserrat"
            },
        },
    });

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [showCitiesDropDown, setShowCitiesDropDown] = useState(false);

    const handleToggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleNav = (option: string) => {
        if (option.toUpperCase() === "CITIES") {
            setShowCitiesDropDown(!showCitiesDropDown);
        } else {
            onClick(option);
        }
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <div className={css.drpdownicon}>
                    <a
                        href=""
                        onClick={(e: any) => {
                            e.preventDefault();
                            handleToggleDrawer();
                        }}
                        className={css.ddropdown}
                    >
                        <GiHamburgerMenu color="black" size={isSmallScreen ? "15px" : "20px"} />
                    </a>
                </div>

                <Drawer anchor={isSmallScreen ? "left" : "right"} open={drawerOpen} onClose={() => setDrawerOpen(false)}>

                    <DrawerHeader sx={{
                        display: 'flex',
                        justifyContent: "flex-start"
                    }}>

                        <IconButton onClick={() => setDrawerOpen(false)}>
                            {
                                isSmallScreen ? <IoArrowBackOutline size={25} /> : <IoArrowForwardOutline size={25}/>
                            }
                        </IconButton>

                    </DrawerHeader>

                    <Divider sx={{ borderBottomWidth: '5px', borderColor: '#F44336' }} />

                    <List sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start'

                    }}>
                        {
                            options.map((options: any, index: number) => {
                                return options.toUpperCase() === "CITIES" ? (
                                    <div key={`{key_ ${index}}`} className={css.dropdowngroup}>
                                        <Dropdown.Item onClick={() => handleNav(options)} key={`menu_${options}`}>
                                            {options}
                                        </Dropdown.Item>
                                        <div key={`key_${index}`} className={css.dropdowngroup1}>
                                            <CitiesDropDownMenu options={cities} />
                                        </div>
                                    </div>
                                ) : (
                                    <div className={css.iteralItemstyl}>
                                        <ListItemButton key={`menu-${options}`} onClick={() => handleNav(options)}>
                                            <ListItemText primary={options} />
                                        </ListItemButton>
                                    </div>
                                )
                            })
                        }
                    </List>
                    <Divider sx={{ borderBottomWidth: '5px', borderColor: '#F44336' }} />

                    {showCitiesDropDown && <CitiesDropDownMenu options={cities} />}
                </Drawer>
            </ThemeProvider>

        </>
    );
};

export default DrawerMenu;
