let logo = require('../../assets/logo/logo.svg').default;
let NavbarRightLogo = require('../../assets/logo/image.png');

export const Navbar = () => {
    return (
        <div className="bg-white mb-1 relative shadow-md z-10">
            <div className="container mx-auto flex items-center justify-between py-3 px-4">
                <div className="flex flex-shrink-0 items-center">
                    <img
                        alt="hyundai_logo"
                        src={logo}
                        className="w-[150px] md:w-[200px] h-auto"
                    />
                </div>
                <div className='flex flex-shrink-0'>
                    <img
                        alt="Your Company"
                        src={NavbarRightLogo}
                        className="md:w-[52px] h-auto"
                    />
                </div>
            </div>
        </div>
    );
};
