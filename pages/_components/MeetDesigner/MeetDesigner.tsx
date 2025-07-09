import React from "react";
import css from "../MeetDesigner/MeetDesigner.module.scss";
import { useRef } from "react";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';
import { getUserId } from "../../../services/sessionProvider";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
interface ModularkitchenProps{
    colour:string;
    container:string;
    prop:string;
}
const MeetDesigner: React.FC<ModularkitchenProps> = ({colour,container,prop}) => {
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    const [MeetDesigner,setMeetDesigner] = React.useState([]);
    const [Kitchencontent, setKitchencontent] = React.useState([]);
    const router = useRouter();

    React.useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/meetdesign.json`);
        api.then((data: any) => {
            let MeetDesigner = [];
            data.data.meetdesign.forEach((meets: any) => {
               let lc: any = {};
               lc.meetimage = `${assetpath}${meets.image}`;
               lc.meettext = meets.text;
               lc.meetbutton = meets.button;
               MeetDesigner.push(lc);
            });
            setMeetDesigner(MeetDesigner);
            let sectionOne = [];
            data.data.values.forEach((ideas: any) => {
                let idea: any = {};
                idea.text = ideas.text;
                sectionOne.push(idea);
            });
            setKitchencontent(sectionOne);
        })
    },[assetpath])

    const hnadleBookFreeDesign = ()=>{
        if(getUserId()){
            router.push('/Bookfreedesign');
        }else{
            toast(`you've to either login or fill the Meet a designer form to access this page`);
            setTimeout(()=>{
                router.push('/');
            },2000)
        }
    }
    

return(
    <React.Fragment>
            <div className={colour ==="red" ?`${css.red}`: `${css.blue}`}>
            <div className={"container "+css.responsiveLarge} >
                {
                    MeetDesigner.map((datas: any, index: number) =>
                    <div key={`${datas.meettext}_${index}_${index}`} className={container ==="meetContainer1" ?`${css.meetContainer1}`: `${css.meetContainer2}`}>
                    <div className={css.meetImageBox}>                    
                        <img src={datas.meetimage} className={css.meetImage} alt="" />
                    </div>
                      <div className={container ==="meetContainer1" ?`flex flex-col items-start justify-content-center`: `flex flex-col items-end justify-content-center`}>
                      <h1 className={css.meetHead}>{datas.meettext}</h1>
                      <button onClick={hnadleBookFreeDesign} className={colour === "red"?`${css.meetButton}`:`${css.meetButtonBlue}`}>{datas.meetbutton}</button>
                  </div>
                  </div>
                    )
                }
                <div>
                <div className={css.Wholecontainer}>
                <div className={css.Container}>
                    <h1 className={css.Head}>4 Ideas {prop}</h1>
                    <div className={css.InnerLayer}>
                        {Kitchencontent.map((idea, index) => (
                            <div key={index}>
                                <div className={css.Box }>
                                    <p className={css.content}>{idea.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

                </div>
                </div>              
        </div>
    </React.Fragment>
)
}
export default MeetDesigner;