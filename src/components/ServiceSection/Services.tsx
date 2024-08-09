import React from 'react';

let serviceImage = require('../../assets/images/service.jpg');

export const Services = () => {
    return (
        <section className="bg-[#f2f8ff] lg:py-20 lg:mt-16 relative flex-grow">
            <div className="flex flex-col-reverse lg:flex-row -mx-4 relative py-10 flex-grow">
                <div className="relative w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                    <img
                        src={serviceImage}
                        alt="Service Image"
                        className="w-full h-auto max-h-[780px] object-cover"
                    />
                </div>
                <div className="w-full lg:w-1/2 px-4 flex flex-col items-start py-14">
                    <div className="text-left lg:mx-0 pl-4 lg:pl-10">
                        <p className="text-[#002e6b] font-bold text-base md:text-lg lg:text-xl mt-3 lg:mt-2 mb-0">
                            Hyundai i10
                        </p>
                        <h1 className="text-[#002e6b] text-2xl md:text-3xl lg:text-4xl font-bold my-2 lg:my-3">
                            All-inclusive genieten met <br /> Hyundai Private Lease
                        </h1>
                        <ul className="list-disc list-inside py-4 lg:py-8 text-[#000] text-sm md:text-base lg:text-base">
                            <li>Vast maandbedrag inclusief alle kosten, behalve laadkosten</li>
                            <li className="mt-1">Nieuwe auto met inbegrepen rente en afschrijving</li>
                            <li className="mt-1">Pechhulp in binnenland en Europa</li>
                            <li className="mt-1">Motorrijtuigenbelasting inbegrepen</li>
                            <li className="mt-1">Bandenvervanging, schadeherstel en glasreparatie gedekt</li>
                            <li className="mt-1">Afleveringskosten en verwijderingsbijdrage inclusief</li>
                            <li className="mt-1">Onderhoud inbegrepen</li>
                            <li className="mt-1">Volle tank brandstof bij aflevering</li>
                        </ul>
                    </div>

                    <div className="py-2 absolute left-0 right-0 -bottom-60 lg:bottom-16 md:bottom-[-14rem] sm:bottom-[-14rem] mt-16 pt-10 px-4 flex flex-wrap justify-center gap-4 z-50 overflow-x-auto">
                        <div className="bg-white border-0 rounded-xl shadow-md p-4 md:p-6 flex flex-col items-center w-full sm:w-[300px] md:w-[400px] lg:w-[235px]">
                            <div className="mb-2">
                                <img
                                    src="https://hyundai-i10.web.app/static/media/steering%20wheel%201.49c3e71e785a748462a4b18c1c12a2b6.svg"
                                    alt="Steering Wheel"
                                    className="w-8 h-8"
                                />
                            </div>
                            <p className="text-[#002e6b] text-lg text-center font-bold mt-2 mb-2">Rijden in een nieuwe Hyundai</p>
                        </div>
                        <div className="bg-white border-0 rounded-xl shadow-md p-4 md:p-6 flex flex-col items-center w-full sm:w-[300px] md:w-[400px] lg:w-[235px]">
                            <div className="mb-2">
                                <img
                                    src="https://hyundai-i10.web.app/static/media/coins%201.585d59198049c350213bff04a8713d53.svg"
                                    alt="Coins"
                                    className="w-8 h-8"
                                />
                            </div>
                            <p className="text-[#002e6b] text-lg text-center font-bold mt-2 mb-2">Aantrekkelijk vast bedrag p/m</p>
                        </div>
                        <div className="bg-white border-0 rounded-xl shadow-md p-4 md:p-6 flex flex-col items-center w-full sm:w-[300px] md:w-[400px] lg:w-[235px]">
                            <div className="mb-2">
                                <img
                                    src="https://hyundai-i10.web.app/static/media/car%20insuranced%201.f78ee9a0811916b50cd843ba6b788822.svg"
                                    alt="Insurance"
                                    className="w-8 h-8"
                                />
                            </div>
                            <p className="text-[#002e6b] text-lg text-center font-bold mt-2 mb-2">Incl. verzekering en reparatie</p>
                        </div>
                        <div className="bg-white border-0 rounded-xl shadow-md p-4 md:p-6 flex flex-col items-center w-full sm:w-[300px] md:w-[400px] lg:w-[235px]">
                            <div className="mb-2">
                                <img
                                    src="https://hyundai-i10.web.app/static/media/emergency%201.b6f63ac8422c748e61c21dd31bb3953f.svg"
                                    alt="Emergency"
                                    className="w-8 h-8"
                                />
                            </div>
                            <p className="text-[#002e6b] text-lg text-center font-bold mt-2 mb-2">Schadeherstel en onderhoud</p>
                        </div>
                        <div className="bg-white border-0 rounded-xl shadow-md p-4 md:p-6 flex flex-col items-center w-full sm:w-[300px] md:w-[400px] lg:w-[235px]">
                            <div className="mb-2">
                                <img
                                    src="https://hyundai-i10.web.app/static/media/card%20wallet%201.ec6434768f818d51293a5a21b15dff9d.svg"
                                    alt="No Hidden Costs"
                                    className="w-8 h-8"
                                />
                            </div>
                            <p className="text-[#002e6b] text-lg text-center font-bold mt-2 mb-2">Geen verborgen kosten</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
