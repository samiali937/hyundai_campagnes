import React from 'react';

const Footer = () => {
    return (
        <div className="mt-10 py-10 mb-2">
          
            <div className="container mx-auto px-4 flex flex-col items-center">
                <p className="text-secondary text-base md:text-sm lg:text-base text-center mt-4 mb-2">
                    Het Keurmerk Private Lease is toegekend aan Hyundai Private lease. Het Keurmerk geeft je de garantie dat je veilig, verantwoord en vertrouwd een auto leaset. De voorwaarden zijn in samenwerking met de Consumentenbond ontwikkeld.
                    <br /><br />
                    * Prijzen zijn op basis van een Hyundai i10 Comfort. Genoemde vanafprijs van €319 is op basis van Hyundai Private Lease, inclusief BTW, op basis van 60 maanden looptijd en 10.000 kilometer per jaar.
                    <br /><br />
                    Hyundai Private Lease wordt aangeboden in samenwerking met Arval. Arval is voorzien van het Keurmerk Private Lease. Kijk voor de voorwaarden op <a href="https://Hyundai.nl" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Hyundai.nl</a>.
                </p>
            </div>
            <p className="text-center text-secondary text-base pt-2 pb-2">
                Bekijk de <a href="#" className="text-primary hover:underline">Privacy</a> &amp; <a href="#" className="text-primary hover:underline">voorwaarden</a> van deze actie.
            </p>
        </div>
    );
}

export default Footer;
