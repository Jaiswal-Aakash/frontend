import * as React from "react";
import css from './HighLights.module.scss';
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import TopPicksForKitchen from "./topics";
import Wardrobes from "./wardrobes";
import CustomLeftArrow from "./CustomLeftArrow";
import CustomRightArrow from "./CustomRightArrow";
import Carousel from "react-multi-carousel";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FaRegShareFromSquare } from 'react-icons/fa6'
import { useRouter } from 'next/router';
import Modal from 'react-bootstrap/Modal'
import { AiFillCloseCircle } from 'react-icons/ai';
import DetailsOfimg from '../../DetailsOfimg';
import { AxiosService } from '../../../services/ApiService'
import { getUserId } from "../../../services/sessionProvider";
import { toast } from "react-toastify";
import Share from "../../Share";


const StylishHomeProducts: React.FC = () => {
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    const [trendings, setTrendings] = React.useState([]);
    const [wishlistimage, setWishListImage] = React.useState("");
    const [wishlistalt, setWishListAlt] = React.useState("");
    const [res , setRes] = React.useState([]);

    const [shareiconimage, setShareIconImage] = React.useState("");
    const [sharealt, setShareAlt] = React.useState("");
    const [show, setShow] = React.useState(false);


    React.useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            let ltrendings = [];
            data.data.settings.trendings.forEach((datas: any) => {
                let lc: any = {};
                lc.image = `${assetpath}${datas.image}`;
                lc.name = datas.name;
                lc.subname = datas.subname;
                // lc.size = datas.size;
                lc.para = datas.para
                ltrendings.push(lc);
            });
            setTrendings(ltrendings);
            setWishListImage(`${assetpath}${data.data.settings.wishlistimage}`);
            setWishListAlt(`${assetpath}${data.data.settings.wishlistAlt}`);
            setShareIconImage(`${assetpath}${data.data.settings.shareiconimage}`);
            setShareAlt(`${assetpath}${data.data.settings.shareAlt}`);
        })
            .catch(error => {
                console.log(error);
            });
            let fetchData = async () => {
                try {
                        const response = await AxiosService.post('/wishes', {
                          loginId: getUserId(),
                          categoryId : '1'
                        });
                        setRes(Array.isArray(response.data?.wishlist) ? response.data?.wishlist : []);

                } catch (error) {
                  console.error('Error:', error.message);
                }
              };
          
              fetchData();
    }, [assetpath , show]);

    

    const [selectedItem, setSelectedItem] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(null);


    const handlePopup = (datas , index) => {
        setSelectedItem(datas);
        setSelectedIndex(index)
        setShow(true);
    };


    const handleClose = () => {
        setShow(false);
    }
    const [shareShow, setShareShow] = React.useState(false);
    const handleShareShow =()=>{
        setShareShow(true);
    }
    const handleShareClose = () =>{
        setShareShow(false);
    }
    const handleImageClick = (item: any, index: number) => {
        setSelectedItem(item);
        setSelectedIndex(index);
    };


    const responsive = {
        desktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 3,
            slidesToSlide: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 650 },
            items: 2,
            slidesToSlide: 1,
        },
        mobile: {
            breakpoint: { max: 650, min: 350 },
            items: 1,
            slidesToSlide: 1,
        },

    };
    const router = useRouter();

    const handlelike = async(index) => {        
        try {
            if(getUserId()){
                const resp = await AxiosService.post(`/wish/${index}`, {loginId: getUserId() , categoryId : '1'})
            

            if(resp?.status === 200){
                const response = await AxiosService.post('/wishes', {
                    loginId: getUserId(),
                    categoryId : '1'
                  });
                  setRes(Array.isArray(response.data?.wishlist) ? response.data?.wishlist : []);   
             }        
            }else {
                toast('please login to use');
             } 

        } catch (error) {
            console.log(error)
        }
    }

    const updatedTrendings = trendings.map((element, index) => {
        const matchingItem = res.find(item => item.index == index);
        if (matchingItem) {
          return { ...element, liked: true };
        }
        return element;
      });
  
    return (
        <React.Fragment>
            <div className={css.mainhighlights}>
                <div className={css.highlights}>

                    <div className={css.listingOuterLayer}>
                        <div className={css.trendingtitle}>Trending</div>
                        <div className={css.carousel_design}>
                            <Carousel
                                responsive={responsive}
                                autoPlay={false}
                                swipeable={true}
                                draggable={true}
                                showDots={false}
                                infinite={true}
                                partialVisible={true}
                                dotListClass={
                                    "custom-dot-list-style "
                                }
                                customLeftArrow={<CustomLeftArrow onClick={() => { }} />}
                                customRightArrow={<CustomRightArrow onClick={() => { }} />}
                            >

                                {updatedTrendings?.map((datas: any, index: number) => (
                                    <div
                                        key={`${datas.subname}_${index}_${index}`}
                                        className={css.customdivision}
                                        
                                    >
                                        <div className={css.customdivisionchild}>
                                            <div className={css.customimage}>
                                                <img
                                                    key={`${datas.subname}_${index}`}
                                                    loading="lazy"
                                                    src={datas.image}
                                                    alt={datas.subname}
                                                    onClick={() => handlePopup(datas , index)}
                                                />
                                                <div className={css.customlist}>
                                                    <div className={css.customname}>
                                                        {datas.name}
                                                        <div className={css.image_bottom_icons}>
                                                            <span className={css.wishlistholder}>
                                                            <div onClick={()=>handlelike(index)}>
                                                            {
                                                                    datas?.liked ? <BsHeartFill style={{color: '#F44336'}} /> : <BsHeart /> 
                                                            }
                                                        </div>
                                                            </span>
                                                            <span className={css.shareholder}>
                                                                <FaRegShareFromSquare onClick={handleShareShow}/>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <label className={css.customtext}>
                                                        {datas.size}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                            <Modal show={show} onHide={handleClose} className={css.Modal_Popup}>
                                <Modal.Header >
                                    <AiFillCloseCircle onClick={handleClose} />
                                </Modal.Header>
                                <DetailsOfimg data={trendings} selectedItem={selectedItem} index={selectedIndex} categoryId = '1' handleImageClick={handleImageClick}/>
                            </Modal>
                            <Modal show={shareShow} onHide={handleShareClose} className={css.share_Modal}>
                                <Modal.Header >
                                    Share<AiFillCloseCircle onClick={handleShareClose} />
                                </Modal.Header>
                                <Share/>
                            </Modal>
                        </div>
                    </div>

                    <div><TopPicksForKitchen Citie="" Currentpage={router.pathname} /></div>
                    <div><Wardrobes Citie="" Currentpage={router.pathname} /></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default StylishHomeProducts;