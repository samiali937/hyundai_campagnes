// PricingTable.js
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';

const PricingTables = () => {
  return (
    <div className="flex-col">
      <div className='mt-5 flex items-center justify-center'>
        <h1 className='mt-5 py-10 text-[#002e6b] font-bold lg:text-4xl'>Prijzentabel i10 Comfort</h1>
      </div>
      <div className='mx-auto flex justify-center'>
        <div className="relative overflow-x-auto">
          <table className="w-full max-w-4xl text-sm text-left text-black border-separate border-spacing-4">
            <thead className="text-xs text-black uppercase bg-[#f9f9f9]">
              <tr>
                <th scope="col" className="px-8 py-6 bg-[#002e6b] text-slate-100 rounded-md font-bold border border-gray-300">
                  Aantal maanden
                </th>
                <th scope="col" className="px-8 py-6 bg-[#f9f9f9] rounded-md font-bold border border-gray-300">
                  Aantal km
                </th>
                <th scope="col" className="px-8 py-6 bg-[#f9f9f9] rounded-md font-bold border border-gray-300">
                  Maandbedrag
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b border-gray-300">
                <td className="px-8 py-6 border border-gray-300">
                  60 maanden
                </td>
                <td className="px-8 py-6 border border-gray-300">
                  10.000
                </td>
                <td className="px-8 py-6 border border-gray-300">
                  €319 p/m
                </td>
              </tr>
              <tr className="bg-white border-b border-gray-300">
                <td className="px-8 py-6 border border-gray-300">
                  60 maanden
                </td>
                <td className="px-8 py-6 border border-gray-300">
                  20.000
                </td>
                <td className="px-8 py-6 border border-gray-300">
                  €367 p/m
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-8 py-6 border border-gray-300">
                  48 maanden
                </td>
                <td className="px-8 py-6 border border-gray-300">
                  10.000
                </td>
                <td className="px-8 py-6 border border-gray-300">
                  €349 p/m
                </td>
              </tr>
              <tr className="bg-white">
                <td className="px-8 py-6 border border-gray-300">
                  48 maanden
                </td>
                <td className="px-8 py-6 border border-gray-300">
                  20.000
                </td>
                <td className="px-8 py-6 border border-gray-300">
                  €393 p/m
                </td>
              </tr>
            </tbody>
          </table>
          <div className="w-full flex justify-center mt-4 sm:mt-0">
            <button className='flex items-center bg-[#002e6b] text-white px-6 py-6 rounded-md font-bold hover:bg-blue-800 transition duration-300'>
              Vraag offerte aan
              <FaArrowRight className='ml-2 transform transition-transform duration-300' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTables;
