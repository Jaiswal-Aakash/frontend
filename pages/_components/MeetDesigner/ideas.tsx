
// import * as React from "react";
// import css from "./ideas.module.scss";
// import * as config from "../../../next.config.js";
// import { simpleCallInitAPI } from '../../../services/ApicallInit';

// interface headProps {
//     prop: string;
//     color:string;
// }

// const Ideas: React.FC <headProps> = ({prop , color}) => {
//     let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
//     const [Kitchencontent, setKitchencontent] = React.useState([]);

//     React.useEffect(() => {
//         let api = simpleCallInitAPI(`${assetpath}/assets/meetdesign.json`);
//         api.then((data: any) => {
//             let sectionOne = [];
//             data.data.values.forEach((ideas: any) => {
//                 let idea: any = {};
//                 idea.text = ideas.text;
//                 sectionOne.push(idea);
//             });
//             setKitchencontent(sectionOne);
//         })
//     }, [assetpath]);

//     return (
//         <React.Fragment>
//             <div className={color=='blue' ? css.blueComponent : css.redComponent}>
//             <div className={css.Wholecontainer}>
//                     <h1 className={css.Head}>4 Ideas {prop} </h1>
//                     <div className={css.InnerLayer}>
//                         {Kitchencontent.map((idea, index) => (
//                             <div className={css.greybox} key={index}>
//                                 <div className={css.Box}  key={index}>
//                                     <div className={css.content}>{idea.text}</div>
//                                 </div>
//                                 </div>
//                         ))
//                         }
//                     </div>
//             </div>
//             </div>
//         </React.Fragment>
//     )
// }

// export default Ideas;

import * as React from "react";
import css from "./ideas.module.scss";
import * as config from "../../../next.config.js";
import { simpleCallInitAPI } from '../../../services/ApicallInit';

interface IdeasProps {
    prop: string;
    color: string;
    space: string; // Added a space prop to identify the type of space (e.g., kitchen, wardrobe, bedroom, etc.)
}

const Ideas: React.FC<IdeasProps> = ({ prop, color, space }) => {
    let assetpath = config.assetPrefix ? `${config.assetPrefix}` : ``;
    const [content, setContent] = React.useState([]);
    React.useEffect(() => {
        let api = simpleCallInitAPI(`${assetpath}/assets/ideas.json`);
        api.then((data: any) => {
            let section = [];
            if (data.data.modularKitchens[space]) {
                section = data.data.modularKitchens[space].map((idea: any) => {
                    return { text: idea.text };
                });
            }else if (data.data[space]) {

                section = data.data[space].map((idea: any) => {
                    return { text: idea.text };
                });
            }

            setContent(section);
        });
    }, [assetpath, space]);
    return (
        <React.Fragment>
            <div className={color === 'blue' ? css.blueComponent : css.redComponent}>
                <div className={css.Wholecontainer}>
                    <h1 className={css.Head}>{`4 Ideas ${prop}`}</h1>
                    <div className={css.InnerLayer}>
                        {content.map((idea, index) => (
                            <div className={css.greybox} key={index}>
                                <div className={css.Box} key={index}>
                                    <div className={css.content}>{idea.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Ideas;

