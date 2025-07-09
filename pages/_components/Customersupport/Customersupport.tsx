import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import css from "./Customersupport.module.scss";
import RaiseIssue from './Raiseissue';
import MyIssue from './Myissues';
import ContactUs from './Contactus';
import FAQPage from '../Faq/FAQPage';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Customsupport({prop}) {
    return (
        <div className="d-flex justify-content-center flex-column">
            <Tab.Group defaultIndex={Number(prop)}>
                <Tab.List className={"flex container space-x-1 rounded-xl bg-gray-100 p-0 "+ css.containerForLG} >
                    <Tab
                        className={({ selected }) =>
                            classNames(
                                'w-50 rounded-xl h-10 larger:h-16 py-2.5 text-sm font-medium leading-5 text-blue-700',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                
                                selected
                                    ? 'bg-[#4D6797]  text-white'
                                    : 'text-black hover:bg-white/[0.12]'
                            )
                        }
                    >
                        <p className={css.referform_button_content}> Raise Issue</p>

                    </Tab>
                    <Tab
                        className={({ selected }) =>
                            classNames(
                                'w-50 rounded-xl h-10 larger:h-16 py-2.5 text-sm font-medium leading-5 text-blue-700',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-[#4D6797]  text-white'
                                    : 'text-black hover:bg-white/[0.12]'
                            )
                        }
                    >
                        <p className={css.referform_button_content}>My Issues</p>

                    </Tab>
                    <Tab
                        className={({ selected }) =>
                            classNames(
                                'w-50 rounded-xl h-10 larger:h-16 py-2.5 text-sm font-medium leading-5 text-blue-700',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-[#4D6797]  text-white'
                                    : 'text-black hover:bg-white/[0.12]'
                            )
                        }
                    >
                        <p className={css.referform_button_content}>Contact Us</p>

                    </Tab>
                    <Tab
                        className={({ selected }) =>
                            classNames(
                                'w-50 rounded-xl h-10 larger:h-[4rem] py-2.5 text-sm font-medium leading-5 text-blue-700 ',
                                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                                selected
                                    ? 'bg-[#4D6797] text-white'
                                    : 'text-black hover:bg-white/[0.12]'
                            )
                        }
                    >
                        <p className={css.referform_button_content}>FAQs</p>
                    </Tab>

                </Tab.List>
                <Tab.Panels className="mt-2">
                    <>
                        <Tab.Panel
                            className={classNames(
                                'rounded-xl bg-white p-3',
                            )}
                        >
                            <RaiseIssue />
                        </Tab.Panel>
                        <Tab.Panel
                            className={classNames(
                                'rounded-xl bg-white p-3',
                            )}>
                            <MyIssue />
                        </Tab.Panel>
                        <Tab.Panel
                            className={classNames(
                                'rounded-xl bg-white p-3',
                            )}
                        >
                            <ContactUs />
                        </Tab.Panel>
                        <Tab.Panel
                            className={classNames(
                                'rounded-xl bg-white p-3',
                            )}
                        >
                            <FAQPage/>
                        </Tab.Panel>
                    </>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
