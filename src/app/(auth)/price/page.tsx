"use client"

import { useState } from 'react';
import DesktopHeader from '../../../components/DesktopHeader';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { AiOutlineLeft } from 'react-icons/ai';

const uploaddp = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([70000, 600000]);

  const handlePriceRangeChange = (value:any) => {
    setPriceRange(value);
  };

  return (
    <div className='relative bg-cover' style={{ backgroundImage: 'url("/formbg.png")' }}>
      <div className="flex items-center justify-end min-h-screen w-full ">
        <div className="pt-16 md:pt-0 w-full m-0 h-screen md:h-[31rem] md:w-[33%] px-8 py-16 bg-white md:rounded-xl shadow-lg md:mr-16 md:h-full text-grey">
        <div className=' text-grey-light flex  items-center  justify-between mb-2  w-full h-16  '>
                    <a href="/">
                    <AiOutlineLeft size={25} className='text-green-700  '/>
                  </a>
                <a  href='/'>
                <button className='bg-green-700 text-white font-semibold flex justify-center items-center h-4 rounded-3xl  w-20  py-4' >skip</button>

                </a>
            </div>
          
          <div className='flex items-center mb-8'>
            <div className='flex-1'>
              <h2 className="text-blue-800 w-[100%] text-2xl font-bold mt-4">where are you searching</h2>
            </div>
          </div>
          <form  className="flex pb-8 flex-col justify-between h-[85%] w-full md:space-y-4">
             <div className='w-[90%]'>
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                    Price
                    </label>
                <div className="flex justify-center mb-8 items-center space-x-2">

                        <div>
                            <input
                            type="number"
                            className="appearance-none border w-32 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter minimum price"
                            value={priceRange[0]}
                            readOnly
                            />
                        </div>
                        <p className='text-gray-700'>to</p>
                        <div>
                            <input
                            type="number"
                            className="appearance-none border w-32 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter maximum price"
                            value={priceRange[1]}
                            readOnly
                            />
                        </div>
                </div>
            <div className="mb-8   mx-4 w-[100%]">
              <Slider
                range
                min={20000}
                max={1000000}
                value={priceRange}
                railStyle={{ backgroundColor: 'gray', height: 10 }}
                trackStyle={[{ backgroundColor: 'black', height: 10 }]}
                handleStyle={[
                  { borderColor: 'black', height: 18, width: 18, marginTop: -4 },
                  { borderColor: 'black', height: 18, width: 18, marginTop: -4 },
                ]}
                onChange={handlePriceRangeChange}
              />
            </div>
            </div>

            
            <div>
            <p className='font-normal text-center text-sm  text-blue-800 mb-3' >5000 available homes in current location</p>
                <p className='font-normal text-center text-sm  text-grey-light mb-3' >2/2</p>
                <button
                type="submit"
                className="bg-green-700 text-white  rounded-md  px-4 py-4   md:py-2 w-full"
                >
                Verify
                </button>
             </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default uploaddp;
