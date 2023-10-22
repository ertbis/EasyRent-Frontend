import { FC, useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

interface FilterFormProp {
    setShowFilterCard: (show: boolean) => void;
}

const FilterForm: FC<FilterFormProp> = ({ setShowFilterCard }) => {
    const [filterQuery, setFilterQuery] = useState<any>({});

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    // Handle price range input changes
    const handlePriceRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterQuery({
            ...filterQuery,
            priceRange: {
                ...filterQuery.priceRange,
                [event.target.name]: event.target.value,
            },
        });
    };

    // Handle house type selection
    const handleHouseTypeChange = (type: string) => {
        setFilterQuery({
            ...filterQuery,
            houseType: type,
        });
    };

    // Handle form submission
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Here you can use the filterQuery state to perform some action
        console.log("Filter Criteria:", filterQuery);
    };

    return (
        <div className="fixed z-[500]  top-0 bg-[#a7a4a4b5] w-screen h-[100vh] flex justify-center items-center">
            <div data-aos="zoom-in" className="relative bg-white rounded-lg z-[10000] p-4 w-screen h-screen md:w-[20rem] md:h-[24rem]">
                <AiOutlineLeft size={18} onClick={() => setShowFilterCard(false)} className="absolute text-gray-700 left-4 top-4 cursor-pointer" />
                <h3 className="text-blue-800 text-center font-bold text-lg">Filter</h3>
                <hr />
                <form className="text-gray-500 h-full" onSubmit={handleSubmit}>
                    <div className="flex flex-col justify-between">
                        <div className="my-4 mb-8">
                            <p className="font-bold text-grey-light text-sm">Price Range</p>
                            <div className="flex mt-2 justify-between items-center">
                                <input
                                    placeholder="#20,000"
                                    type="text"
                                    className="h-16 border border-grey-light text-sm text-grey-light p-2 rounded-lg w-[40%]"
                                    name="minPrice"
                                    onChange={handlePriceRangeChange}
                                />
                                <p className="text-xs">to</p>
                                <input
                                    placeholder="#20,000"
                                    type="text"
                                    className="h-16 border border-grey-light text-sm text-grey-light p-2 rounded-lg w-[40%]"
                                    name="maxPrice"
                                    onChange={handlePriceRangeChange}
                                />
                            </div>
                        </div>
                   
                        <div  className="my-4  mb-8">
                        <p className="font-bold text-grey-light text-sm">Bedroom</p>
                        <div className="flex  mt-2  space-x-2  rounded-lg border border-gray-500 border-[1px]">
                                
                            <button
                            type="button"
                            className="flex-1 p-2 rounded-lg  border  border-gray-300"
                            >
                            -
                            </button>
                            <span className="flex-1  rounded-lg text-center p-2">0</span>
                            <button
                            type="button"
                            className="flex-1  p-2  rounded-lg border border-gray-300"
                            >
                            +
                            </button>
                    </div>
                </div>


                        <div className="my-4 mb-8">
                            <p className="font-bold text-grey-light text-sm">House Type</p>
                            <div className="flex mt-2 space-x-2 text-xs text-grey-light items-center">
                                <span
                                    className={`p-4 border border-gray-300 rounded-lg ${filterQuery.houseType === 'Self contain' ? 'bg-green-200' : ''}`}
                                    onClick={() => handleHouseTypeChange('Self contain')}
                                >
                                    Self contain
                                </span>
                                <span
                                    className={`p-4 border border-gray-300 rounded-lg ${filterQuery.houseType === 'Flat' ? 'bg-green-200' : ''}`}
                                    onClick={() => handleHouseTypeChange('Flat')}
                                >
                                    Flat
                                </span>
                                <span
                                    className={`p-4 border border-gray-300 rounded-lg ${filterQuery.houseType === 'One Room' ? 'bg-green-200' : ''}`}
                                    onClick={() => handleHouseTypeChange('One Room')}
                                >
                                    One Room
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex h-[15rem] items-end space-x-8 text-xs">
                        <button type="submit" className="p-2 py-4 bg-green-700 text-white w-full rounded-lg">
                            Show
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FilterForm;
