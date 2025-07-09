import Link from 'next/link';
import React from 'react';

const GetQuoteContent = ({data}) => {
    return (
        <div className='flex flex-column align-items-center'>
            <div className="max-w-lg rounded overflow-hidden shadow-sm mt-4 m-[2%] larger:max-w-xl">
                <img className="w-full" src={data?.image} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className='flex justify-between'>
                        <div>
                            <div className="font-extrabold text-[16px] lg:text-[0.9vw] text-red-500 mb-2">{data?.title}</div>
                            <div className="text-[12px] lg:h-[4vh] lg:text-[0.7vw] mb-2">{data?.subtitle}</div>
                        </div>
                        <div className='text-green-600 text-[24px] lg:text-[1.5vw] font-bold'>{data?.price}</div>
                    </div>
                    <div className='text-red-500 text-[12px] font-semibold lg:text-[0.6vw] mb-2'>included:</div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 pl-[6%] gap-y-1 mt-1'>
                        <p className='text-[16px] lg:text-[0.8vw] flex gap-2 align-items-center text-[#222222]'><img className='lg:h-[1vw]' src='/assets/icons/Living.png' alt='living' />Living room</p>
                        <p className='text-[16px] lg:text-[0.8vw] flex gap-2 align-items-center text-[#222222]'><img className='lg:h-[1vw]' src='/assets/icons/Kitchen.png' alt='kitchen' />Kitchen</p>
                        <p className='text-[16px] lg:text-[0.8vw] flex gap-2 align-items-center text-[#222222]'><img className='lg:h-[1vw]' src='/assets/icons/Bathtub.png' alt='bath' />Bathroom</p>
                        <p className='text-[16px] lg:text-[0.8vw] flex gap-2 align-items-center text-[#222222]'><img className='lg:h-[1vw]' src='/assets/icons/Cooking.png' alt='Dine' />Dining</p>
                        <p className='text-[16px] lg:text-[0.8vw] flex gap-2 align-items-center text-[#222222]'><img className='lg:h-[1vw]' src='/assets/icons/Bed.png' alt='Bed' />Bedroom</p>
                    </div>
                    <p className="text-[#737373] text-[12px] lg:text-[0.7vw]">
                        *This is only an indicative price based on our clients&#39; average spends. The final price can be higher or lower depending on factors like finish material, number of furniture, civil work required (painting. flooring, plumbing, etc.), design elements, and wood type. Don&#39;t worry, our designers can help you understand this better.    </p>
                </div>
            </div>
            <Link href='/Bookfreedesign' className='text-center no-underline text-[#FFFFFF] bg-[#F44336] text-[16px] font-bold py-[3.5%] px-[7%] mt-3 rounded lg:text-[0.8vw]'>BOOK FREE DESIGN SESSION</Link>
        </div>
    )
}

export default GetQuoteContent