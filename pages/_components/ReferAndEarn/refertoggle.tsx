import React from "react";
import css from "./refertoggle.module.scss";
import { Tab } from '@headlessui/react';
import ReferEarnForm from "./referearnform";
import ReferEarnForm2 from "./referearnform2";
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const Toggle =()=>{
    return(
        <>
        <div className={css.referearn_bg}>
          <div className={`px-2 py-4 sm:px-0 ${css.referearn_toggle}`}>
         <Tab.Group>
      <Tab.List  className={`flex space-x-1 rounded-full bg-[#F5F5F5] p-1 ${css.togglechnage}`}>
      <Tab
              
              className={({ selected }) =>
                classNames(
                  'w-full rounded-full h-10 py-2.5 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-[#4D6797] shadow text-white'
                    : 'text-black hover:bg-white/[0.12]'
                )
              }
            >
              <p className={css.referform_button_content}>Referral Link</p>
            
            </Tab>
            <Tab
              
              className={({ selected }) =>
                classNames(
                  'w-full rounded-full py-2.5 h-10 text-sm font-medium leading-5 text-blue-700',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-[#4D6797] shadow text-white'
                    : 'text-black hover:bg-white/[0.12]'
                )
              }
            >
              <p className={css.referform_button_content}>Send Invite</p>
            </Tab>
       
        {/* <Tab className={css.referform_button1}>Referral Link</Tab>
        <Tab className={css.referform_button2}>Send Invite</Tab> */}
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel><ReferEarnForm/></Tab.Panel>
        <Tab.Panel><ReferEarnForm2/></Tab.Panel>
        
      </Tab.Panels>
    </Tab.Group>
    </div>
    </div>
        </>
    )
}
export default Toggle;