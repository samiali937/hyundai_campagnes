let logo = require('../../assets/logo/logo.svg').default;
let NavbarRightLogo = require('../../assets/logo/image.png');

export const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-28 shadow-md z-50 bg-white">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-10 flex justify-between items-center h-full">
                <div className="flex flex-shrink-0 items-center">
                    <img
                        alt="hyundai_logo"
                        src={logo}
                        className="h-[30px] md:h-[30px]  w-auto"
                    />
                </div>
                <div className='flex flex-shrink-0'>
                    <img
                        alt="Your Company"
                        src={NavbarRightLogo}
                        className=" h-[30xp] md:h-[60px] w-auto"
                    />
                </div>
            </div>
        </div>
    );
};
