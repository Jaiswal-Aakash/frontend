
import React, { useRef } from 'react';
import { useEffect, useState } from 'react';
import css from './Category.module.scss';
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';

const MainCategory: React.FC = () => {
    const [screenwidth, setScreenWidth] = useState(window.innerWidth);
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    const knowaboutsubholder = useRef<HTMLDivElement>(null);
    const division1 = useRef<HTMLDivElement>(null);
    const division2 = useRef<HTMLDivElement>(null);
    const [happyhomeimage, setHappyHomeImage] = React.useState("");
    const [expertimage, setExpertImage] = React.useState("");
    const [warrantyimage, setWarrantyImage] = React.useState("");
    const [calenderimage, setCalendarImage] = React.useState("");
    const [calimage, setCalImage] = React.useState("");
    const [desimage, setDesImage] = React.useState("");
    const [warrentyimage, setWarrentyImage] = React.useState("");  
    useEffect(() => {
        // Attach ref callbacks when component mounts
        knowaboutsubholder.current.style.position = 'relative';

        // Access offsetWidth after component has mounted
        if (division1.current) {
            const divwidth1 = division1.current.offsetWidth;
            let addvalue = 0;
            if (screenwidth < 770) {
                addvalue += 15;
                // ... Rest of your logic ...
            }
        }

        // Update screen width when window is resized
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screenwidth]);
    React.useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
            setCalendarImage(`${assetpath}${data.data.settings.infoicons.calendarimage}`);
            setHappyHomeImage(`${assetpath}${data.data.settings.infoicons.happyhomeimage}`);
            setExpertImage(`${assetpath}${data.data.settings.infoicons.expertimage}`)//set new state
            setWarrantyImage(`${assetpath}${data.data.settings.infoicons.warrantyimage}`);
            setCalImage(`${assetpath}${data.data.settings.infoicons.whitecalendarimage}`);
            setDesImage(`${assetpath}${data.data.settings.infoicons.caresupport}`);
            setWarrentyImage(`${assetpath}${data.data.settings.infoicons.warrantyimage}`)
        })
        .catch(error => {
            console.log(error);
        });
     }, [assetpath]);
    //const calenderimage =`${config.assetPrefix}/assets/icons/calendaricon.png`; // Provide your image URLs here
    //const expertimage = `${config.assetPrefix}/assets/icons/experticon.png`;
    //const happyhomeimage = `${config.assetPrefix}/assets/icons/happycustomericon.png`;
    //const warrantyimage = `${config.assetPrefix}/assets/icons/warranty.png`;

    // const screenwidth = 770; // Set your screen width threshold

    const deliveryimage = '/assets/icons/delivery.png';
    const priceimage = '/assets/icons/price.png';
    const superiorimage = '/assets/icons/maskgroup.png';
    const safetyimage = '/assets/icons/safety.png';

    return (
      <div ref={knowaboutsubholder} className={css.whythesedetailssubholder}>
      {/* start icon images was changed */}
      <div ref={division1} className={css.division1}>
         <div className={css.title}>
            Why Lhome?
         </div>
         <div className={css.detailsholder}>
            <hr id="verticaldivider" className={css.verticaldivider} />
            <div className={`${css.leftdetailsholder} ${css.leftmoveup}`}>
               <div className={css.calendardetailsparent}>
                  <div className={css.calendaricon}>
                     {calenderimage ?
                        <img loading="lazy" src={calimage} alt="Calendar" />
                        :
                        ''
                     }
                  </div>
                  <div className={css.calendartext}>
                     45 days or we pay you rent
                  </div>
               </div>
               <div className={css.expertdetailsparent}>
                  <div className={css.experticon}>
                     {expertimage ?
                        <img loading="lazy" src={desimage} alt="Happy Home" />
                        :
                        ''
                     }
                  </div>
                  <div className={css.experttext}>
                     1000+ design experts
                  </div>
               </div>
            </div>
            <div className={css.rightdetailsholder}>
               <div className={css.happycustomerhomedetailsparent}>
                  <div className={css.happycustomerhomeicon}>
                     {happyhomeimage ?
                        <img loading="lazy" src={happyhomeimage} alt="Expert" />
                        :
                        ''
                     }
                  </div>
                  <div className={css.happycustomerhometext}>
                     1000+ happy customers
                  </div>
               </div>
               <div className={css.warrantydetailsparent}>
                  <div className={css.warrantyicon}>
                     {warrantyimage ?
                        <img loading="lazy" src={warrentyimage} alt="Warranty" />
                        :
                        ''
                     }
                  </div>
                  <div className={css.warrantytext}>
                     flat 10 year warranty
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* finished icon images was changed */}
      <div ref={division2} className={css.division2}>
         {screenwidth < 770 ?
            <div className={css.title1}>
               Ensure your safety by embracing virtual design methods
            </div>
            :
            <div>
               <div className={css.title1}>
                  Ensure your safety by embracing
               </div>
               <div className={css.title1}>
                  virtual design methods
               </div>
            </div>
         }
         <div className={css.detailsholder}>
            <hr id="verticaldivider" className={css.verticaldivider} />
            <div className={`${css.leftdetailsholder} ${css.leftmovedown}`}>
               <div className={css.contactparent}>
                  <div className={css.contacttitle}>
                     Contactless Experience
                  </div>
                  <div className={css.contacttext}>
                     No stepping out. Design your home interiors from the safety and comfort of your home.
                  </div>
               </div>
               <div className={css.expertiseparent}>
                  <div className={css.expertisetitle}>
                     Online Expertise
                  </div>
                  <div className={css.expertisetext}>
                     Connect with our 600+ designers virtually and explore designs online.
                  </div>
               </div>
            </div>
            <div className={`${css.rightdetailsholder} ${css.rightmoveup}`}>
               <div className={css.threedparent}>
                  <div className={css.threedtitle}>
                     Live 3D Designs
                  </div>
                  <div className={css.threedtext}>
                     Explore life-like 3D designs online that are made for your floor plan.
                  </div>
               </div>
               <div className={css.instantparent}>
                  <div className={css.instanttitle}>
                     Instant Pricing
                  </div>
                  <div className={css.instanttext}>
                     Enjoy complete price transparency and stay within budget.
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id="division3" className={css.division3}>
         <div className={css.title}>
            LHOME GUARANTEE
         </div>
         <div id="detailsholder" className={css.detailsholder}>
            <div className={`${css.leftdetailsholder} ${css.leftmovedown}`}>
               <div className={css.deliveryparent}>
                  <div className={css.deliveryicon}>
                     {deliveryimage ?
                        <img loading="lazy" src={deliveryimage} alt="Delivery" />
                        :
                        ''
                     }
                  </div>
                  <div className={css.deliverytext}>
                     On-time delivery
                  </div>
               </div>
               <div className={css.priceparent}>
                  <div className={css.priceicon}>
                     {priceimage ?
                        <img loading="lazy" src={priceimage} alt="Expert" />
                        :
                        ''
                     }
                  </div>
                  <div className={css.pricetext}>
                     Best Price
                  </div>
               </div>
            </div>
            <div className={`${css.rightdetailsholder} ${css.rightmoveup}`}>
               <div className={css.superiorparent}>
                  <div className={css.superiorparent}>
                     <div className={css.superioricon}>
                        {superiorimage ?
                           <img loading="lazy" src={superiorimage} alt="Superior Quality" />
                           :
                           ''
                        }
                     </div>
                     <div className={css.superiortext}>
                        Superior Quality
                     </div>
                  </div>
               </div>
               <div className={css.safetyparent}>
                  <div className={css.safetyparent}>
                     <div className={css.safetyicon}>
                        {safetyimage ?
                           <img loading="lazy" src={safetyimage} alt="Safety Assured" />
                           :
                           ''
                        }
                     </div>
                     <div className={css.safetytext}>
                        Safety Assured
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
    );
};

export default MainCategory;
