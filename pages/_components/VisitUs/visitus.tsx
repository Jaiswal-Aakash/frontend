import React from "react";
import css from "./visitus.module.scss"
import Image from "next/image";
import VisitCommon from "./visituscommon";


const VisitUS = ({data}: any) => {
    return (
        <React.Fragment>
            <div className={css.visitus_coimbatore}>
                <div className={css.visitus_co_header}>
                    <p className={css.visitus_co_tagline}>{`We are the best interior design company in ${data?.title}`}</p>
                </div>
                <div  className={css.visitus_co_common}><VisitCommon/></div>
                <div className={css.visitus}>
                <div className={css.visitus_arrow1}>
                    <img src={data?.arrow1} alt="" width={500} height={500} className={css.visitus_arrow1_image} />
                </div>
                <div className={css.visitus_main_components}>
                    <div className={"row " + css.visitus_main_component1}>
                        {/* <div className={"col-md-1 "}></div> */}
                        <div className={"col-md-6 " + css.visitus_main_image1}>
                            <img src={data?.image} alt="" width={500} height={500} className={css.visitus_office1_image} />

                        </div>
                        <div className={"col-md-6 " + css.visitus_main_content1}>
                            <p className={css.visitus_main_content1_header}>{data?.header1}</p>
                            <span className={css.visitus_content1}>{data?.content1}</span>
                        </div>
                        {/* <div className="col-md-1 "></div> */}
                    </div>
                    <div className={css.visitus_arrow2}>
                    <img src={data?.arrow2} alt="" width={500} height={500}  className={css.visitus_arrow2_image} />
                </div>
                    <div className={"row mt-5 " }>
                        <div className={"col-md-6 " } style={{paddingLeft:'5%'}}>
                        <p className={css.visitus_main_content2_header}>{data?.header2}</p>
                            <span className={css.visitus_content2}>{data?.content2}</span>
                        </div>
                        <div className={"col-md-6 " }>
                           
                            <img src={data?.image} alt="" width={500} height={500} className={css.visitus_office2_image} />
                        
                        </div>
                    </div>


                </div>
</div>
            </div>


        </React.Fragment>
    )
}
export default VisitUS;