import React from "react";
import css from "./filter.module.scss"
import Link from "next/link";
const KitchenFilter: React.FC = () => {
    return (
        <>
            <div className="container">
                <div className={css.filterwrapper}>
                    <div className={css.filter_home}>
                        <span className={css.filter_link_span1}><Link href={{pathname:"/"}} className={css.kitchen_filter_link}>Home</Link></span><span className={css.filter_slash}>/</span><span className={css.filter_link_span2}><Link href={{pathname:"/modularkitchen"}} className={css.kitchen_filter_link}>modular kitchen</Link></span>
                        <div className={css.filter_header}><p className={css.filter_header_content}>Modular Kitchen</p></div>
                        <div className={css.filter_content}><p className={css.filter_additional_content}>Transform your kitchen to the heart of your home with the help of LHome.
                            From coffee dates to dinner parties, our end-to-end design and installation
                            services will turn your kitchen into a stylish and functional space.</p></div>
                    </div>

                    <div className={css.filter_lists}>
                        <div>jefhfj</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default KitchenFilter