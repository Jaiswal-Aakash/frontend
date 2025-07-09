import React from 'react';
import css from './whyLhome.module.scss';
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import Grid from '@mui/material/Grid';


interface WhyLhomeproperties {
    screenwidth: number;
    screenheight: number;
 }

 const WhyLhome: React.FC<WhyLhomeproperties> = ({ screenwidth, screenheight }) => {
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
   const [calenderimage, setCalendarImage] = React.useState("");
   const [calimage, setCalImage] = React.useState("");//create new state
   const [expertimage, setExpertImage] = React.useState("");
   const [desimage, setDesImage] = React.useState(""); //create new state
   const [happyhomeimage, setHappyHomeImage] = React.useState("");
   const [warrantyimage, setWarrantyImage] = React.useState("");
   const [warrentyimage, setWarrentyImage] = React.useState("");//create new state
   const [deliveryimage, setDeliveryImage] = React.useState("");
   const [priceimage, setPriceImage] = React.useState("");
   const [superiorimage, setSuperiorImage] = React.useState("");
   const [safetyimage, setSafetyImage] = React.useState("");


    React.useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
        api.then((data: any) => {
           setCalendarImage(`${assetpath}${data.data.settings.infoicons.calendarimage}`);
           setCalImage(`${assetpath}${data.data.settings.infoicons.whitecalendarimage}`);//set new state
           setHappyHomeImage(`${assetpath}${data.data.settings.infoicons.happyhomeimage}`);
        //    setDesignImage(`${assetpath}${data.data.settings.infoicons.whiteexpertimage}`); //set new state
           setDesImage(`${assetpath}${data.data.settings.infoicons.caresupport}`); //set new state
           setExpertImage(`${assetpath}${data.data.settings.infoicons.expertimage}`)//set new state
           setWarrentyImage(`${assetpath}${data.data.settings.infoicons.warrantyimage}`)
           setWarrantyImage(`${assetpath}${data.data.settings.infoicons.whitewarrantyimage}`)
           setDeliveryImage(`${assetpath}${data.data.settings.infoicons.deliveryimage}`)
           setPriceImage(`${assetpath}${data.data.settings.infoicons.priceimage}`)
           setSuperiorImage(`${assetpath}${data.data.settings.infoicons.maskgroupimage}`)
           setSafetyImage(`${assetpath}${data.data.settings.infoicons.safetyimage}`)
  
        })
           .catch(error => {
              console.log(error);
           });
     }, [screenwidth,assetpath]);

  return (
      <div className=' px-[4%] py-[3%]'>
                     <Grid container  rowSpacing={{ xs: 8, sm: 4, md: 3 }} columnSpacing={{ xs: 4, sm: 2, md: 3 }} justifyContent="space-evenly"
  alignItems="center" sx={{position:'relative'}}
                     >
                        <hr className={css.verticaldivider} />   
                        <hr className={css.verticaldivider2} />   

                        <Grid item md={3.5} sm={6} xs={12} container direction='column'   justifyContent="space-between" rowSpacing={2}

                        >
                           <div className={css.title}>
                              Why Lhome?
                           </div>
                           <div className={
                               ' grid grid-cols-2 gap-8 sm:gap-[3rem] pt-[4rem] ' + css.nullifyPaddingTop}>
                                 <div 
                                 className='flex gap-2 items-center justify-content-end'
                                 >
                                    <div
                                     >
                                       {calenderimage ?
                                          <img className={css.icons} loading="lazy" src={calimage} alt="Calendar" />
                                          :
                                          ''
                                       }
                                    </div>
                                    <div className={css.firstText}>
                                       45 days or we pay you rent
                                    </div>
                                 </div>
                                 <div 
                                 className='flex gap-2 items-center'
                                 >
                                    <div 
                                    >
                                       {expertimage ?
                                          <img className={css.icons} loading="lazy" src={desimage} alt="Happy Home" />
                                          :
                                          ''
                                       }
                                    </div>
                                    <div className={css.firstText}>
                                       1000+ design experts
                                    </div>
                                 </div>
                                 <div 
                                 className='flex gap-2 items-center justify-content-end'
                                 >
                                    <div 
                                    >
                                       {happyhomeimage ?
                                          <img className={css.icons} loading="lazy" src={happyhomeimage} alt="Expert" />
                                          :
                                          ''
                                       }
                                    </div>
                                    <div className={css.firstText}>
                                       1000+ happy customers
                                    </div>
                                 </div>
                                 <div 
                                 className='flex gap-2 items-center'
                                 >
                                    <div 
                                    >
                                       {warrantyimage ?
                                          <img className={css.icons} loading="lazy" src={warrentyimage} alt="Warranty" />
                                          :
                                          ''
                                       }
                                    </div>
                                    <div className={css.firstText}>
                                       flat 10 year warranty
                                    </div>
                                 </div>
                           </div>
                        </Grid>
                        <Grid  item md={5} sm={6} xs={12}>
                              <div className={css.title + " mt-[-1.5rem] " + css.nullifyMargin}>
                                 Ensure your safety by embracing virtual design methods
                              </div>
                           <div 
                           className={'grid grid-cols-2 gap-8 pt-[2.5rem] px-[2rem] '+ css.nullifyPaddingTop}
                           >
                                 <div 
                                 className='flex flex-column gap-1 items-center'
                                 >
                                    <div className={css.subTitle}>
                                       Contactless Experience
                                    </div>
                                    <div className={css.secondText}>
                                       No stepping out. Design your home interiors from the safety and comfort of your home.
                                    </div>
                                 </div>
                                 <div 
                                 className='flex flex-column gap-1 items-center'
                                 >
                                    <div className={css.subTitle}>
                                       Online Expertise
                                    </div>
                                    <div className={css.secondText}>
                                       Connect with our 600+ designers virtually and explore designs online.
                                    </div>
                                 </div>
                                 <div 
                                 className='flex flex-column gap-1 items-center'
                                 >
                                    <div className={css.subTitle}>
                                       Live 3D Designs
                                    </div>
                                    <div className={css.secondText}>
                                       Explore life-like 3D designs online that are made for your floor plan.
                                    </div>
                                 </div>
                                 <div 
                                 className='flex flex-column gap-1 items-center'
                                 >
                                    <div className={css.subTitle}>
                                       Instant Pricing
                                    </div>
                                    <div className={css.secondText}>
                                       Enjoy complete price transparency and stay within budget.
                                    </div>
                                 </div>
                           </div>
                        </Grid>
                        <Grid  item md={3.5} sm={12} xs={12}
                        >
                           <div className={css.title}>
                              Lhome Guarantee
                           </div>
                           <div id="detailsholder" 
                           className={'grid grid-cols-2 gap-4 pt-[3.5rem] ' + css.nullifyPaddingTop}
                           >
                                 <div 
                                 className='flex flex-column gap-2 items-center'
                                 >
                                    <div 
                                    >
                                       {deliveryimage ?
                                          <img className={css.icons} loading="lazy" src={deliveryimage} alt="Delivery" />
                                          :
                                          ''
                                       }
                                    </div>
                                    <div className={css.thirdText}>
                                       On-time delivery
                                    </div>
                                 </div>
                                 <div
                                 className='flex flex-column gap-2 items-center' 
                                 >
                                    <div 
                                    >
                                       {priceimage ?
                                          <img className={css.icons} loading="lazy" src={priceimage} alt="Expert" />
                                          :
                                          ''
                                       }
                                    </div>
                                    <div className={css.thirdText}>
                                       Best Price
                                    </div>
                                 </div>
                                    <div 
                                    className='flex flex-column gap-2 items-center'
                                    >
                                       <div 
                                       >
                                          {superiorimage ?
                                             <img className={css.icons} loading="lazy" src={superiorimage} alt="Superior Quality" />
                                             :
                                             ''
                                          }
                                       </div>
                                       <div className={css.thirdText}>
                                          Superior Quality
                                       </div>
                                    </div>
                                    <div 
                                    className='flex flex-column gap-2 items-center'
                                    >
                                       <div 
                                      >
                                          {safetyimage ?
                                             <img className={css.icons} loading="lazy" src={safetyimage} alt="Safety Assured" />
                                             :
                                             ''
                                          }
                                       </div>
                                       <div className={css.thirdText}>
                                          Safety Assured
                                       </div>
                                    </div>
                           </div>
                        </Grid>
                     </Grid>
                  </div>
  )

}
export default WhyLhome;
