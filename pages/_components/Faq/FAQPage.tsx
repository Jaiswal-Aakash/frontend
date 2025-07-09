import * as React from "react";
import css from "../Faq/FAQPage.module.scss";
import * as config from "../../../next.config";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {ImPlus} from 'react-icons/im';

const FAQPage: React.FC = () => {
  let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
  const [faq, setFaq] = React.useState([]);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [showFaqHead, setShowFaqHead] = React.useState(true);

  React.useEffect(() => {
    let api = simpleCallInitAPI(`${assetpath}/assets/faq.json`);

    api.then((data: any) => {
        let sectionOne = [];
        let process = [];

        if (window.location.pathname === '/designgallery/') {
          process = data.data.FAQs.designGallery;
        } 
        else if (window.location.pathname === '/modularkitchen/') {
          process = data.data.FAQs.modularKitchen;
        }
        else if (window.location.pathname === '/wardrobe/') {
          process = data.data.FAQs.wardrobe;
        }
        else if (window.location.pathname === '/bathroom/'){
          process = data.data.FAQs.bathroom;
        }
        else if (window.location.pathname === '/bedroom/') {
          process = data.data.FAQs.bedroom;
        }
        else if (window.location.pathname === '/livingroom/') {
          process = data.data.FAQs.livingRoom;
        }
        else if (window.location.pathname === '/spacesavingfurniture/') {
          process = data.data.FAQs.spaceFurniture;
        }
        else if (window.location.pathname === '/homeoffice/') {
          process = data.data.FAQs.homeOffice;
        }
         else if (window.location.pathname === '/customstories/') {
          process = data.data.FAQs.customerStories;
        }
        else if (window.location.pathname === '/partnership/') {
          process = data.data.FAQs.partnership;
        }
        else if (window.location.pathname === '/CustomersupportPage/') {
          process = data.data.FAQs.customerfaq;
          setShowFaqHead(false); 
        }

        // 320 to 480 
        // 480  720
        // 720 1024
        // 1024
        

        process.forEach((faqs: any) => {
            let faq: any = {};
            faq.question = faqs.question;
            faq.answer = faqs.answer;
            sectionOne.push(faq);
        });
        setFaq(sectionOne)
    });

}, [assetpath]);



  const toggleAnswer = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <React.Fragment>
       
      <div className={css.faqContainer}>
      {showFaqHead && <div className={css.faqHead}>Frequently Asked Questions</div>}
      {/* <div className="container "> */}
        <div className={showFaqHead ?css.faqInnerLayer: css.faqInnerLayer_CS}>
          {faq.map((faqItem, index) => (
            <div key={index}>
              <div className={css.faqBox} onClick={() => toggleAnswer(index)}>
                <div className={css.faqQuestion}>{faqItem.question}</div>
                <div className={`${css.faqIcon} ${activeIndex === index ? css.rotate : ''}`}>
                  <ImPlus/>
                </div>
              </div>
              <div className={`${css.faqAnswer} ${activeIndex === index ? css.open : ''}`}>
                {faqItem.answer}
              </div>
            </div>
          ))}
        </div>
      {/* </div> */}
      </div>
    </React.Fragment>
  )
}

export default FAQPage;
