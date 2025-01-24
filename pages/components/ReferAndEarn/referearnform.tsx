import React from "react";
import css from "./referearnform.module.scss";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { toast } from "react-toastify";


const ReferEarnForm = () => {
    const [inputValue, setInputValue] = React.useState("");
    const [copied , setCopied] = React.useState(false);
  
    const handleCopyClick = () => {
      if(inputValue != ''){
        navigator.clipboard.writeText(inputValue)
        .then(() => {
          setCopied(true);
          setTimeout(()=>{
              setCopied(false)
              setInputValue('')
          }, 2000)
        })
        .catch(err => {
          console.error('Failed to copy:', err);
        });
    }else{
        toast('Generate a Link to copy')
    }
    };
  
    const handleGenerateLinkClick = () => {
        setInputValue("https://www.lhome.co.in"); 
    };
    return (
        <>
            <div className={css.referearn_form}>
                <label className={css.referearnform_label}>Generate your referral link:</label>
                <div className={css.input_field}>
                    <input value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        className={`placeholder-shown: border-[#D0D0D0]-200 p-3 ${css.referearnform_input}`}
                    />
                    <button className={copied ? css.copied : css.referearnform_copy_button} onClick={handleCopyClick}>{ copied ?"COPIED":"COPY LINK"}</button>
                </div>
                <div className={css.referearnform_button}>
                    <button className={css.referearnform_button_content} onClick={handleGenerateLinkClick}><p className={css.referearnform_button_text}>GENERATE LINK</p></button>
                </div>
                <div className={css.referearnform_additional_content1}>
                    <p className={css.referearnform_additional_content2}>Share the good word</p>
                </div>
                <div className={css.referearn_icondiv}>
                    <div className={css.socialMedia}>
                        <div className={css.socialMedia_icons}><FaFacebookF /></div>
                        <div className={css.socialMedia_icons}><FaInstagram /></div>
                        <div className={css.socialMedia_icons}><FaWhatsapp /></div>
                        <div className={css.socialMedia_icons}><FaXTwitter /></div>
                    </div>
                </div>
            </div>


        </>
    )
}
export default ReferEarnForm;