import React from "react";
import css from "./visituscommon.module.scss";
import Link from "next/link.js";

const VisitCommon = ({}) => {
    
    return (
        <div className="sm:pl-20 sm:pr-20">
            <div className={ css.visitus_bgclr}>
            <div className={css.filter_home}>

                <div className="pt-3">
                    <span className={css.visitus_filter_link_span1}><Link href={{ pathname: "/" }} className={css.visitus_filter_link}>Home</Link></span>
                    <span className={css.visitus_filter_slash}>/</span>
                    <span className={css.visitus_filter_link_span2}><Link href={{ pathname: "/visitus" }} className={css.visitus_filter_link}>Visit Us</Link></span>
                </div>
                <p className={"pt-2 " + css.visitus_filter_header_content}>Contemporary Style Interior Design and Execution</p>
                {/* <div className={css.visitus_filter_content}><span className={css.visitus_filter_additional_content}>First of all, the design by LHOMES  is always in accordance with the latest trends in contemporary style. Our interior designers in Chennai consider the interests and requirements of the clients in great detail. They visit the site and discuss with clients to choose the best possible design style. Also, the design is always considering the practicality and specifications for smooth execution. Systematic manufacturing and assembling procedures ensure the best output to match the designs as per the client requirement. Therefore, a client is sure to achieve the results as per the plan and discussions with the designer. In addition to this, there is a wide scope for selection of colors and finishes suitable for modern apartments or houses. We listen to your wants, needs, and aspirations to provide the support needed to ensure your new home meets your objectives. All our products are exclusively manufactured at our state-of-the-art factories spanning 1,25,000 sq. ft. for the timeless aesthetics.</span></div> */}
                <div className="row ">
                <div className="col-lg-1 "> </div>

                <div className={"col-lg-10 " + css.visitus_filter_content}><p className={"pt-2 pl-3 pr-3 " + css.visitus_filter_additional_content}>First of all, the design by LHOMES is always in accordance with the latest trends in contemporary style. Our interior designers in Chennai consider the interests and requirements of the clients in great detail. They visit the site and discuss with clients to choose the best possible design style. Also, the design is always considering the practicality and specifications for smooth execution. Systematic manufacturing and assembling procedures ensure the best output to match the designs as per the client requirement. Therefore, a client is sure to achieve the results as per the plan and discussions with the designer. In addition to this, there is a wide scope for selection of colors and finishes suitable for modern apartments or houses. We listen to your wants, needs, and aspirations to provide the support needed to ensure your new home meets your objectives. All our products are exclusively manufactured at our state-of-the-art factories spanning 1,25,000 sq. ft. for the timeless aesthetics.</p>
                  </div>
                  <div className="col-lg-1 "></div>
                  
                  </div>
                     </div>
                     </div>
        </div>
    )
}
export default VisitCommon;
