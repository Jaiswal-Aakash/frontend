import * as React from "react";
import * as config from "../next.config.js";
import "react-multi-carousel/lib/styles.css";
import PageHeader from "./_components/PageHeader";
import TopPicksForKitchen from "./_components/HighLights/topics";
import Wardrobes from "./_components/HighLights/wardrobes";
import css from "../styles/designgallery.module.scss";
import StylishHomeProducts from "./_components/StylishHomeProducts/StylishHomeProducts";
import { useRouter } from 'next/router';
import Footer from "./_components/Footer/Footer";
import GetQuoteContent from "./_components/getQuote/getQuote_content";
import { Grid } from "@mui/material";


 const contentDatas =  [
    {
        title : 'Essential Interiors',
        subtitle : 'When it comes to choosing your BHK',
        price : '₹5.55L*',
        image: '/assets/images/getQuote/getQuote_1.png'
    },
    {
        title : 'Comfort Interiors',
        subtitle : 'For the first-time homeowners',
        price : '₹6.65L*',
        image: '/assets/images/getQuote/getQuote_2.png'
    },
    {
        title : 'Luxury Interiors',
        subtitle : 'Best of design and style',
        price : '₹7.75L*',
        image: '/assets/images/getQuote/getQuote_3.png'
    },
 ]

const GetQuote:React.FC = ()=>{
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
  
    const page =React.useRef<HTMLDivElement>(null);;

    const [prevPosition, setPrev] = React.useState(0);
    const [hidden, setHidden] = React.useState(false);
    const [screenwidth, setWidth] = React.useState(window.innerWidth);
    let hgtt = 0;
    if (window.innerWidth < 600) {
        hgtt = window.innerHeight - 210;
        if (window.innerWidth > 490 && window.innerWidth < 512) {
            hgtt += 10;
        }
    } else {
        hgtt = window.innerHeight - 160;
    }
    const [screenheight, setHeight] = React.useState(hgtt);


    const handleResize = React.useCallback(() => {
        setWidth(window.innerWidth);
        let hgtt = 0;
        if (window.innerWidth < 600) {
            hgtt = window.innerHeight - 210;
            if (window.innerWidth > 490 && window.innerWidth < 512) {
                hgtt += 10;
            }
            if (window.innerWidth > 571 && window.innerWidth < 599) {
                hgtt += 50;
            }
            if (window.innerWidth > 570 && window.innerWidth < 572) {
                hgtt += 45;
            }
            if (window.innerWidth > 509 && window.innerWidth < 571) {
                hgtt += 25;
            }
            if (window.innerWidth > 500 && window.innerWidth < 510) {
                hgtt += 15;
            }
            if (window.innerWidth < 500) {
                hgtt -= 10;
            }
        } else {
            hgtt = window.innerHeight - 160;
        }
        setHeight(hgtt);
    }, []);

    const handleResized = React.useCallback(() => {
        setTimeout(() => {
            handleResize();
        }, 1000);
    }, [handleResize]);

    
    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResized);
    }, [handleResize, handleResized]);

    React.useEffect(() => {
        setTimeout(() => {
            handleResize();
        }, 500);
    }, [handleResize]);
  
    const pageheaderMonitor = () => {
        if (page.current.scrollTop > prevPosition) {
            setPrev(page.current.scrollTop)
            setHidden(true)
        } else {
            setHidden(false)
            setPrev(page.current.scrollTop)
  
        }
    }
    const router = useRouter();
    

    return (
        <React.Fragment>
            <div className="animate-fade-in">
                <div className={css.lhomePage}>
                    
                    <div className={hidden ? "hidden" : ""}>
                        <PageHeader screenwidth={screenwidth} screenheight={screenheight} assetpath={assetpath} hidden={false} />
                    </div>

                    <div ref={page} onScroll={pageheaderMonitor} className={hidden ? css.LhomeBottom1 : css.LhomeBottom}>
                        <div className="text-[#222222] text-[12px] sm:text-[24px] larger:text-[1.5vw] py-[1.5%] text-center leading-7 font-semibold">Below are your estimates to book a free consultation</div>
                        <Grid container justifyContent={"center"} paddingY={2} paddingX={{xs : 2 , sm:10}} gap={10}  >
                        {
                            contentDatas.map((data , index)=>(
                                <Grid item lg={3} md={3.8} sm={12} key={index}>
                                    <GetQuoteContent data={data} />
                                    </Grid>
                                    ))
                                }
                                </Grid>
                        <div className={"mb-3 " + css.ToppicsdivforDesignGallery}>
                            <TopPicksForKitchen Citie="" Currentpage={router.pathname} />
                            <Wardrobes Citie="" Currentpage={router.pathname} />
                        </div>
                        <div><StylishHomeProducts Citie="" /></div>
                        <div><Footer /></div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default GetQuote;