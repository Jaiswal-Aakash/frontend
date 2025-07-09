import { useState } from 'react'
import { Tab } from '@headlessui/react'
import css from "./recentprojectnav.module.scss";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')

}


export default function Recentprojectnav() {
    type NavBannerItem = {
        id: number;
        image: string;
        alt: string;
        text: string;
        name: string;
    };

    type NavBanner = Record<string, NavBannerItem>;
    const [navbanner, setNavBanner] = useState<NavBanner>({
        masterbedroom: {
            id: 1,
            image: "/assets/Bedroom/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv.jpg",
            alt: "3d-rendering-beautiful-luxury-bedroom",
            text: "For the master bedroom, john designed an L-shaped armadio wardrobe with a mirror and woodern with a mirror and bronze-tinted finish stylish and functional space. Transform your kitchen to the heart of your home with the help of LHome.",
            name: "Master Bedroom"
        },
        dinningarea: {
            id: 2,
            image: "/assets/modularkitchen/kitchenbaner.png",
            alt: "3d-rendering-beautiful-luxury-dinningarea",
            text: "For the dining area, john designed an L-shaped armadio wardrobe with a mirror and woodern with a mirror and bronze-tinted finish stylish and functional space. Transform your kitchen to the heart of your home with the help of LHome.",
            name: "Dining Area"
        },
        livingroom: {
            id: 3,
            image: "/assets/LivingRoom/livingrm2.jpg",
            alt: "3d-rendering-beautiful-luxury-livingroom",
            text: "For the living room, john designed an L-shaped armadio wardrobe with a mirror and woodern with a mirror and bronze-tinted finish stylish and functional space. Transform your kitchen to the heart of your home with the help of LHome.",
            name: "Living Room"
        },
        studyroom: {
            id: 4,
            image: "/assets/SpaceSvingFurniture/interior-living-room-ikea-store-nonthaburi-thailand.jpg",
            alt: "3d-rendering-beautiful-luxury-studyroom",
            text: "For the study room, john designed an L-shaped armadio wardrobe with a mirror and woodern with a mirror and bronze-tinted finish stylish and functional space. Transform your kitchen to the heart of your home with the help of LHome.",
            name: "Study Room"
        },
        kitchen: {
            id: 5,
            image: "/assets/StraighttypeKitchen/straight8.jpg",
            alt: "3d-rendering-beautiful-luxury-kitchen",
            text: "For the kitchen, john designed an L-shaped armadio wardrobe with a mirror and woodern with a mirror and bronze-tinted finish stylish and functional space. Transform your kitchen to the heart of your home with the help of LHome.",
            name: "Kitchen"
        }
    })

    const [currentTabIndex, setCurrentTabIndex] = useState<number>(0);
    
  const handleLeftClick = () => {
    if (currentTabIndex > 0) {
      setCurrentTabIndex(currentTabIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (currentTabIndex < Object.keys(navbanner).length - 1) {
      setCurrentTabIndex(currentTabIndex + 1);
    }
  };
    return (
        <div className="">
            <Tab.Group selectedIndex={currentTabIndex} onChange={setCurrentTabIndex}>
                <Tab.List className="flex justify-content-center ">
                    {Object.values(navbanner).map((navItem, tabIndex) => (
                        <Tab
                            key={navItem.id}
                            value={navItem.id}
                            className={({ selected }) =>
                                classNames(
                                    'w-50% ms-5  pt-2.5 text-sm font-medium leading-5 text-black-700',
                                    'ring-white ring-opacity-60 ring-offset-2  focus:outline-none focus:ring-2',
                                    selected
                                        ? 'text-red-700 hover:bg-white/[0.12] hover:text-red border-b-2 border-danger'
                                        : 'text-red active:border-bottom-transparent'
                                )
                            }
                        >
                            {navItem.name}
                        </Tab>
                    ))}
 
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {Object.values(navbanner).map((navItem, tabIndex) => (
                    <Tab.Panel
                        className={classNames()} key={navItem.id}>
                        <>
                            <div className={css.recentnavContainer}>
                                <div className={css.sliderwrapper}>

                                        <div className={css.tab_image_content}>
                                            <img loading="lazy"
                                                src={Object.values(navbanner)[currentTabIndex].image} alt={Object.values(navbanner)[currentTabIndex].alt} className={css.imageContainer} />
                                        </div>
                                        <div>
                                            <p className={css.navbannertext}>{Object.values(navbanner)[currentTabIndex].text}</p>
                                        </div>

                                </div>
                            </div>
                        </>
                    </Tab.Panel>
                    ))}


                </Tab.Panels>
            </Tab.Group>

            <div className={css.arrowbutton}>
                <div className={css.leftarrow} >Previous {' '}<ArrowCircleLeftIcon style={{ color: "red", fontSize: "30px" }} onClick={handleLeftClick}></ArrowCircleLeftIcon></div>
                <div className={css.rightarrow} ><ArrowCircleRightIcon style={{ color: "red", fontSize: "30px" }} onClick={ handleRightClick}></ArrowCircleRightIcon>{' '} After</div>
            </div>
            <div className={css.more_rev}>
                <p>More Reviews</p>
            </div>
        </div>
    )
}
