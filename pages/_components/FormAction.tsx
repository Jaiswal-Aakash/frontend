import * as React from "react";
import css from '../../styles/FormActionPage.module.scss';

interface props {
   handleSubmit:(e:any)=> void;
   handleClear:(e:any)=> void;
   type:string;
   action?: 'button';
   text:string;
   iconapply:any;
   iconclear:any;
};

const FormAction : React.FC<props> = ({ handleSubmit,handleClear,type='Button',action='submit',text,iconapply,iconclear}) =>{

    return(
        <>
        {
         type==='Button' ?
          <div className={`flex justify-center items-center ${css.contentsmove}`}>
            <div className="pr-10">
              <button
                  className="group relative w-full py-2 px-4 flex justify-center items-center border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10 pr-10 flex space-x-2"
                  onClick={handleSubmit}
              >
                  <span className={`${css.iconsize}`}>{iconapply}</span>
                  <span className='text-center ontent-center'>{text}</span>
              </button>
            </div>
            <div>
              <button
                  className="group relative w-full py-2 px-4 flex justify-center  items-center border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10 text-center flex space-x-2"
                  onClick={handleClear}
              >
                <span className={`${css.iconsize}`}>{iconclear}</span>
                <span className='text-center ontent-center'>Clear</span>
              </button>
            </div>
          </div>
          :
          ''
        }
        </>
    )
}

export default FormAction;