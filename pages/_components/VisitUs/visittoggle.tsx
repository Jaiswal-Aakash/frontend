import React, { useEffect, useState } from "react";
import css from "./visittoggle.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import VisitUS from "./visitus";
function act(...args) {
  return args.filter((v) => v).join(" ");
}
const VisitToggle = () => {
  const [buttonStatus, setButtonStatus] = useState("coimbatore");
  const [visitToggle, setVisitToggle]: any = React.useState([]);
  let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
  useEffect(() => {
    let api = simpleCallInitAPI(`${assetpath}/assets/visitus.json`);
    api.then((data: any) => {
       let items=[]
       items=data?.data?.visitus?.[0];
       setVisitToggle(items)
    })

  }, [assetpath])

  return (
    <>
      <div className={css.visitus_button_wrap}>
        <button
          className={act(`${css.buttonStatus} ${buttonStatus === "coimbatore" ? css.active : ""}`)}
          onClick={() => setButtonStatus("coimbatore")}
        >
          <span className={css.visitus_button_content}>Coimbatore</span>
        </button>
        <button
          className={act(`${css.buttonStatus} ${buttonStatus === "rajapalayam" ? css.active : ""}`)}
          onClick={() => setButtonStatus("rajapalayam")}
        >
          {/* <span className={css.visitus_button_content}>Rajapalayam</span> */}

        </button>
      </div>
      
      < VisitUS data ={buttonStatus === "coimbatore" ? visitToggle?.coimbatore : visitToggle?.rajapalayam} />

    </>
  )
}
export default VisitToggle;