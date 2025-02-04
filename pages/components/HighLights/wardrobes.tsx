import React from "react";
import css from "./HighLights.module.scss"
import { simpleCallInitAPI } from "../../../services/ApicallInit";
import * as config from "../../../next.config.js";
import CustomLeftArrow from "./CustomLeftArrow";
import CustomRightArrow from "./CustomRightArrow";
import Carousel from "react-multi-carousel";
import { BsHeart, BsHeartFill, BsHeartPulseFill } from "react-icons/bs";
import { FaRegShareFromSquare } from 'react-icons/fa6'
import { FaAngleRight } from 'react-icons/fa6';
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal'
import { AiFillCloseCircle } from 'react-icons/ai';
import DetailsOfimg from '../../DetailsOfimg';
import { AxiosService } from "../../../services/ApiService";
import { getUserId } from "../../../services/sessionProvider";
import { toast } from "react-toastify";
import Share from "../../Share";

interface propproperty {
    Citie: any;
    Currentpage: string
}

const Wardrobes: React.FC<propproperty> = ({ Citie, Currentpage }) => {
    //assetspath 
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;

    //wishlist image 
    const [wishlistimage, setWishListImage] = React.useState("");
    const [wishlistalt, setWishListAlt] = React.useState("");

    //sharelist image
    const [shareiconimage, setShareIconImage] = React.useState("");
    const [sharealt, setShareAlt] = React.useState("");
    const [res , setRes] = React.useState([]);

    //data of top picks
    const [wardrobefly, setWordrobeFly] = React.useState([]);
    const [show, setShow] = React.useState(false);



    //use effect for getting data from api
    React.useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);

        api
            .then((data: any) => {
                setWishListImage(`${assetpath}${data.data.settings.wishlistimage}`);
                setWishListAlt(`${assetpath}${data.data.settings.wishlistAlt}`);
                setShareIconImage(`${assetpath}${data.data.settings.shareiconimage}`);
                setShareAlt(`${assetpath}${data.data.settings.shareAlt}`);
                let lwardrobefly = [];
                data.data.settings.warddrobefly.forEach((datas: any) => {
                    let lc: any = {};
                    lc.image = `${assetpath}${datas.image}`;
                    lc.name = datas.name;
                    lc.subname = datas.subname;
                    // lc.size = datas.size;
                    lc.para = datas.para
                    lwardrobefly.push(lc);
                });
                setWordrobeFly(lwardrobefly);

            }
            )
            .catch((error) => {
                console.log(error)
            })
            let fetchData = async () => {
                try {
                     const response = await AxiosService.post('/wishes', {
                       loginId: getUserId(),
                       categoryId : '3'
                     });
                     setRes(Array.isArray(response.data?.wishlist) ? response.data?.wishlist : []);
                 
                } catch (error) {
                  console.error('Error:', error.message);
                }
              };
          
              fetchData();
    }, [assetpath , show])
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

    const handlelike = async(index) => {        
        try {
            if(getUserId()){
                const resp = await AxiosService.post(`/wish/${index}`, {loginId: getUserId() , categoryId : '3'})
    
                if(resp?.status === 200){
                    const response = await AxiosService.post('/wishes', {
                        loginId: getUserId(),
                        categoryId : '3'
                      });
                      setRes(Array.isArray(response.data?.wishlist) ? response.data?.wishlist : []);            }
            }else{
                toast('please login to use');
            }

        } catch (error) {
            console.log(error)
        }
    }

    const updatedWardrobe = wardrobefly.map((element, index) => {
        const matchingItem = res.find(item => item.index == index);
        if (matchingItem) {
          return { ...element, liked: true };
        }
        return element;
      });
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


    return (
        <React.Fragment>
            <div className={css.wardrobesfly}>
                <div className={css.listingOuterLayer}>
                    <div className='d-flex justify-content-between  align-items-center'>
                        <div className={css.warddrobeflytitle}>
                            Wardrobes That Fly Off the Shelves {Citie}
                        </div>
                        {
                            Currentpage === "/designgallery" && (
                                <Link href={{ pathname: "/wardrobe" }} className={css.seeallLink}>
                                    <button className={css.compactBtn}>
                                        see all <FaAngleRight className={css.right_Arrow} />
                                    </button>
                                </Link>)
                        }

                    </div>
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

                            {updatedWardrobe.map((datas: any, index: number) => (
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
                                                        </div>                                                        </span>
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
                            <DetailsOfimg data={wardrobefly} selectedItem={selectedItem} index={selectedIndex} categoryId='3' handleImageClick={handleImageClick}/>
                        </Modal>
                        <Modal show={shareShow} onHide={handleShareClose} className={css.share_Modal}>
                            <Modal.Header >
                                Share<AiFillCloseCircle onClick={handleShareClose} />
                            </Modal.Header>
                            <Share />
                        </Modal>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}

export default Wardrobes;