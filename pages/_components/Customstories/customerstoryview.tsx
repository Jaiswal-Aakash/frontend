import React from "react";
import css from "./customerstoryview.module.scss";
// import circleimage from "../../../public/assets/Homeoffice/homeoffice.png";
import Image from "next/image";
import Recentprojectnav from "../Tabsimage/recentprojectnav";
import StarRatings from 'react-star-ratings';
import { FaStar } from 'react-icons/fa';
const CustomerStoryView = ({ data }: any) => {
    return (
        <React.Fragment>

            <div className={css.customerstory}>
                <div className={css.customerstorylayer}>
                    <div className={css.sliderwrapper}>

                        <div className={css.customerstory_content}>
                            <div className={css.customerstory_image}>
                                <Image src={data?.image} width={500} height={500} alt="" className={css.customerstory_circleimage} />
                            </div>
                            <div className={css.story_contents}>
                                <p className={css.customerstory_title}>{data?.heading}</p>
                                <p className={css.customerstory_sub_title}>{data?.type}</p>
                                <p className={css.customerstory_state}>{data?.place}</p>
                                <p className={css.customerstory_additional_content}>{data?.content}</p>
                            </div>
                            <div className={css.Bottom_Rating}>
                            <div className={css.Bottom_Rating_User}>
                                <div className={css.Bottom_star}>
                                    <StarRatings
                                        rating={5}
                                        starRatedColor="#FFD600"
                                        changeRating={3}
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension="15px"
                                        starHoverColor={false}
                                        starSpacing="3px"
                                    />                            
                                    </div>
                                    <div className={css.Rating_UserName}><p className={css.customerstory_username}>-Jonhson</p></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Recentprojectnav />
            </div>

        </React.Fragment>
    )
}

export default CustomerStoryView;