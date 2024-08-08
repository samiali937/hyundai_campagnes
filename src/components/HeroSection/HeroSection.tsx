import { FaArrowRight } from "react-icons/fa6";

let featuredImage = require('../../assets/images/FeaturedImage.png');


export const HeroSection = () => {
    return (
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-10 mt-8">
            <div className="flex flex-1 md:flex-col lg:flex-row items-center justify-between lg:items-start">

                <div className="my-8 pt-[6.5rem] pr-4 w-full lg:w-1/2 ">
                    <div className='py-2'>
                        <span className="bg-[#F0F0F0] text-slate-900 h-[49px] w-[80px] p-2 font-bold rounded-md inline-block mb-4 text-center text-xs md:text-sm lg:text-base">
                            NIEUW
                        </span>
                        <h1 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] xl:text-[60px] font-bold leading-[36px] sm:leading-[45px] md:leading-[50px] lg:leading-[60px] xl:leading-[70px] text-[#002E6B] mb-4">
                            De vernieuwde Hyundai i10
                        </h1>
                        <h2 className="text-[18px] sm:text-[24px] md:text-[28px] lg:text-[34px] xl:text-[42px] font-bold leading-[24px] sm:leading-[30px] md:leading-[35px] lg:leading-[40px] xl:leading-[50px] text-[#002E6B] mb-4">
                            Maak een groots statement
                        </h2>
                    </div>
                    <div className='py-8 xl:py-14'>
                        <h1 className="font-semibold text-slate-900 mb-2 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">
                            Profiteer nu van een zeer scherpe aanbieding op de rijk uitgeruste i10 Comfort
                        </h1>
                        <h1 className="font-bold text-slate-900 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]">
                            Je stapt al in vanaf €275 per maand*
                        </h1>
                    </div>

                    <div className='xl:mt-20 mt-10 w-1/2 absolute py-6 flex flex-col sm:flex-row justify-between items-center shadow-2xl p-4 z-50 bg-white rounded-lg border'>
                        <h1 className='w-full sm:w-2/3 text-wrap font-bold text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-gray-800 mb-4 sm:mb-0'>
                            Private Lease nu tijdelijk vanaf €275 p/m*
                        </h1>
                        <button className='flex items-center bg-[#002E6B] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#003b8e] transition duration-300'>
                            Vraag offerte aan
                            <FaArrowRight className='ml-2 transform group-hover:translate-x-1 transition duration-300' />
                        </button>
                    </div>

                </div>

                <div className="w-full lg:w-1/2 absolute -top-4 right-0 -z-10">
                    <img
                        src={featuredImage}
                        alt="Featured"
                        className="h-[900px] xl:h-[1250px] w-auto "
                    />

                </div>
            </div>
        </div>
    );
};
