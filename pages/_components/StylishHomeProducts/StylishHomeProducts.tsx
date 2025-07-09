
import * as React from "react";
import css from './StylishHomeProducts.module.scss';
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import { useRef } from 'react';
import Carousel from "react-multi-carousel";
import CustomLeftArrow from "./CustomLeftArrow";
import CustomRightArrow from "./CustomRightArrow";
import css2 from '../HighLights/HighLights.module.scss';
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { FaRegShareFromSquare } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';
import Link from "next/link";
import Modal from 'react-bootstrap/Modal'
import { AiFillCloseCircle } from 'react-icons/ai';
import DetailsOfimg from '../../DetailsOfimg';
import { AxiosService } from "../../../services/ApiService";
import { getUserId } from "../../../services/sessionProvider";
import { toast } from "react-toastify";
import Share from "../../Share";

interface propproperty {
    Citie: any
}

const HightLights: React.FC<propproperty> = ({ Citie }) => {

    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    const [stylishHomeProducts, setStylishHomeProducts] = React.useState([]);
    const [wishlistimage, setWishListImage] = React.useState("");
    const [wishlistalt, setWishListAlt] = React.useState("");
    const [compactFurniture, setCompactFurniture] = React.useState([]);
    const [shareiconimage, setShareIconImage] = React.useState("");
    const [sharealt, setShareAlt] = React.useState("");
    const [res, setRes] = React.useState([]);
    const [res1, setRes1] = React.useState([]);
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            let lstylishHomeProducts = [];
            data.data.settings.stylishHomeProducts.forEach((datas: any) => {
                let lc: any = {};
                lc.image = `${assetpath}${datas.image}`;
                lc.name = datas.name;
                lc.subname = datas.subname;
                // lc.size = datas.size;
                lc.para = datas.para
                lstylishHomeProducts.push(lc);
            });
            setStylishHomeProducts(lstylishHomeProducts);
            setWishListImage(`${assetpath}${data.data.settings.wishlistimage}`);
            setWishListAlt(`${assetpath}${data.data.settings.wishlistAlt}`);
            setShareIconImage(`${assetpath}${data.data.settings.shareiconimage}`);
            setShareAlt(`${assetpath}${data.data.settings.shareAlt}`);
            let lcompactFurniture = [];
            data.data.settings.compactFurniture.forEach((datas: any) => {
                let lc: any = {};
                lc.image = `${assetpath}${datas.image}`;
                lc.name = datas.name;
                lc.subname = datas.subname;
                // lc.size = datas.size;
                lc.para = datas.para
                lcompactFurniture.push(lc);
            });
            setCompactFurniture(lcompactFurniture);
        })
            .catch(error => {
                console.log(error);
            });
        let fetchData = async () => {
            try {
                const response = await AxiosService.post('/wishes', {
                    loginId: getUserId(),
                    categoryId: '4'
                });
                setRes(Array.isArray(response.data?.wishlist) ? response.data?.wishlist : []);
                const response1 = await AxiosService.post('/wishes', {
                    loginId: getUserId(),
                    categoryId: '5'
                });
                setRes1(Array.isArray(response1.data?.wishlist) ? response1.data?.wishlist : []);
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        fetchData();
    }, [assetpath, show]);

    const handlelike = async (index, categoryId) => {
        try {
            if (getUserId()) {
                const resp = await AxiosService.post(`/wish/${index}`, { loginId: getUserId(), categoryId: categoryId })

                if (resp?.status === 200) {
                    const response = await AxiosService.post('/wishes', {
                        loginId: getUserId(),
                        categoryId: categoryId
                    });
                    categoryId == '4' ? setRes(Array.isArray(response.data?.wishlist) ? response.data?.wishlist : []) : setRes1(Array.isArray(response.data?.wishlist) ? response.data?.wishlist : []);
                }
            } else {
                toast('please login to use')
            }

        } catch (error) {
            console.log(error)
        }
    }

    const updatedstylishHomeProducts = stylishHomeProducts.map((element, index) => {
        const matchingItem = res.find(item => item.index == index);
        if (matchingItem) {
            return { ...element, liked: true };
        }
        return element;
    });
    const updatedcompactFurniture = compactFurniture.map((element, index) => {
        const matchingItem = res1.find(item => item.index == index);
        if (matchingItem) {
            return { ...element, liked: true };
        }
        return element;
    });

    const responsive = {
        desktop: {
            breakpoint: { max: 5000, min: 1024 },
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
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(null);
    const [categoryId, setCategory] = React.useState(null);


    const handlePopup = (datas, index, categoryId) => {
        setSelectedItem(datas);
        setSelectedIndex(index);
        setCategory(categoryId);
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
    return (
        <React.Fragment>
            <div className={css.mainhighlights}>
                <div className={css.highlights}>
                    <div className={css2.listingOuterLayer}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className={css.trendingtitle}>Stylish Home Products {Citie}</div>
                            <Link href={{ pathname: "/spacesavingfurniture" }} className={css.seeallLink}>
                                <button className={css.compactBtn}>
                                    see all <FaAngleRight className={css.right_Arrow} />
                                </button>
                            </Link>
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

                                {updatedstylishHomeProducts.map((datas: any, index: number) => (
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
                                                    onClick={() => handlePopup(datas, index, '4')}
                                                />
                                                <div className={css.customlist}>
                                                    <div className={css.customname}>
                                                        {datas.name}
                                                        <div className={css.image_bottom_icons}>
                                                            <span className={css.wishlistholder}>
                                                                <div onClick={() => handlelike(index, '4')}>
                                                                    {
                                                                        datas?.liked ? <BsHeartFill style={{ color: 'red' }} /> : <BsHeart />
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
                        </div>
                    </div>
                    <div className={css.wardrobesfly}>
                        <div className={css2.listingOuterLayer}>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className={css.warddrobeflytitle}>Compact Furniture {Citie}</div>
                                <Link href={{ pathname: "/spacesavingfurniture" }} className={css.seeallLink}>
                                    <button className={css.compactBtn}>
                                        see all <FaAngleRight className={css.right_Arrow} />
                                    </button>
                                </Link>
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

                                    {updatedcompactFurniture.map((datas: any, index: number) => (
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
                                                        onClick={() => handlePopup(datas, index, '5')}
                                                    />
                                                    <div className={css.customlist}>
                                                        <div className={css.customname}>
                                                            {datas.name}
                                                            <div className={css.image_bottom_icons}>
                                                                <span className={css.wishlistholder}>
                                                                    <div onClick={() => handlelike(index, '5')}>
                                                                        {
                                                                            datas?.liked ? <BsHeartFill style={{ color: 'red' }} /> : <BsHeart />
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} className={css.Modal_Popup}>
                <Modal.Header >
                    <AiFillCloseCircle onClick={handleClose} />
                </Modal.Header>
                <DetailsOfimg data={stylishHomeProducts || compactFurniture} selectedItem={selectedItem} index={selectedIndex} categoryId={categoryId} handleImageClick={handleImageClick}/>
            </Modal>
            <Modal show={shareShow} onHide={handleShareClose} className={css.share_Modal}>
                <Modal.Header >
                    Share<AiFillCloseCircle onClick={handleShareClose} />
                </Modal.Header>
                <Share/>
            </Modal>
        </React.Fragment>
    )
}

export default HightLights;