import React from "react";
import css from "./bathroombanner.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from "../../../services/ApicallInit";
import Form from "../HomeSlider/Form";

const BathroomBaner: React.FC = () => {
  const [bathroomBaner, setbathroomBaner] = React.useState([]);
  let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;

  React.useEffect(() => {
    let api = simpleCallInitAPI(`${assetpath}/assets/settings.json`);
    api.then((data: any) => {
      let bathroomBanerImage = [];
      data?.data?.settings?.bathroombaner?.forEach((datas: any) => {
        let lc: any = {};
        lc.homeoficebaner = `${assetpath}${datas.image}`;
        lc.toptext = datas.toptext;
        bathroomBanerImage.push(lc);
      });
      setbathroomBaner(bathroomBanerImage);
    });
  }, [assetpath]);

  return (
    <>
      <React.Fragment>
        <div>
          {bathroomBaner.map((datas: any, index: number) => (
            <div
              key={`${datas.toptext}_${index}_${index}`}
              className={css.bathroomimageContainer}
            >
              <img
                src={datas.homeoficebaner}
                alt="bannerImage"
                className={css.bathroomimage}
              />
              <div className={css.bathroombannercontent}>
                <h4 className={css.bathroom_tagline}>Design your own</h4>{" "}
                <h2 className={css.bathroom_tagline1}>Bathroom with </h2>
                <h2 className={css.bathroom_tagline1}>our experts!</h2>
              </div>
              <div className={css.bathroombannerform}>
                <div className={css.bathroomform}>
                  <Form />
                </div>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    </>
  );
};
export default BathroomBaner;
