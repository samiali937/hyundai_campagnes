import { FaArrowRight } from "react-icons/fa6";

let featuredImage = require('../../assets/images/FeaturedImage.jpg');

export const HeroSection = () => {
    return (
        <div className="relative lg:mb-40">
            <div className="bg-white overflow-hidden">
                <div className="container lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start">
                        {/* Text Section */}
                        <div className="py-12 px-4 lg:py-20 flex flex-col justify-around lg:w-1/2 z-10">
                            <div>
                                <span className="bg-gray-200 text-slate-900 px-4 py-2 font-bold rounded-md inline-block mb-4 text-center text-xs sm:text-sm lg:text-base">
                                    NIEUW
                                </span>
                                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-[#002e6b] mb-4">
                                    De vernieuwde Hyundai i10
                                </h1>
                                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-[#002e6b] mb-4">
                                    Maak een groots statement
                                </h2>
                                <p className="mt-6 text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                                    Profiteer nu van een zeer scherpe aanbieding op
                                    <br />
                                    de rijk uitgeruste i10 Comfort.
                                    <br />
                                    <b>Je stapt al in vanaf €275 per maand*</b>
                                </p>
                            </div>
                            <div className='z-50 lg:absolute lg:-bottom-20 lg:mt-16 flex flex-col sm:flex-row justify-between items-center shadow-md px-6 py-4 bg-white rounded-md border border-gray-300'>
                                <div className="w-full sm:w-1/2 flex">
                                    <h1 className='text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-4'>
                                        Private Lease nu tijdelijk vanaf €275 p/m*
                                    </h1>
                                </div>
                                <div className="w-full sm:w-1/2 flex justify-center sm:justify-end mt-4 sm:mt-0">
                                    <button className='flex items-center bg-[#002e6b] text-white px-5 py-3 rounded-md font-bold hover:bg-blue-800 transition duration-300'>
                                        Vraag offerte aan
                                        <FaArrowRight className='ml-2 transform transition-transform duration-300' />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Image Section */}
                        <div className="lg:absolute lg:top-0 lg:right-0 w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
                            <img
                                src={featuredImage}
                                alt="Featured"
                                className="w-full h-auto lg:h-[650px] lg:max-w-none lg:rounded-bl-[100px] "
                                style={{ marginRight: '0', marginTop: '0' }} // Ensure no margin
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
