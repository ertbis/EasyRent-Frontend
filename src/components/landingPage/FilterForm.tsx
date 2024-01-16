import { FC, useEffect, useState } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import { getFilterProperty } from "../../../utils/data/endpoints";
import FilterResult from "./FilterResult";
import Loading from "../Loading";
import ErrorModal from "../ErrorModal";

interface FilterFormProp {
    setShowFilterCard: (show: boolean) => void;
}


const FilterForm: FC<FilterFormProp> = ({ setShowFilterCard }) => {
    const [filterQuery, setFilterQuery] = useState<any>({bedroom: 0});
    const [bedroom, setBedroom] = useState(0)
    const [searchResult, setSearchResult] = useState<any>(null)
    const [showSearch, setShowSearch] = useState(true)
    const [loading , setLoading]  = useState(false)
    const [error , setError]  = useState<string | null >(null)
    const [errorModal, setErrorModal] = useState<boolean>(false)
  
  
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

    //handle bedroom number
    const  HandleSetBedroom = (param: number) => {
        setFilterQuery({
            ...filterQuery,
            bedroom : filterQuery?.bedroom + param 
        });
    }
    

    // Handle form submission
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true)
        
        try {
            const resp = await getFilterProperty(filterQuery)
            setLoading(false)
            setShowSearch(true)
            setSearchResult(resp.data.properties)
        } catch (e:any) {
            setErrorModal(true)
            console.log(e)
            setLoading(false)
            setError( e?.response?.data?.message || "Try Again");
        }
    };

    return (
        <>        {(searchResult && showSearch)  ? <FilterResult houses={searchResult} setShowSearch={setShowSearch}/> :
        
        
        <div className="fixed z-[500]  top-0 bg-[#a7a4a4b5] w-screen h-[100vh] flex justify-center items-center">
            <div data-aos="zoom-in" className="relative bg-white rounded-lg z-[10000] p-4 w-screen h-screen md:w-[20rem] md:h-[24rem]">
                <AiOutlineLeft size={18} onClick={() => setShowFilterCard(false)} className="absolute text-gray-700 left-4 top-4 cursor-pointer" />
                <h3 className="text-blue-800 text-center font-bold text-lg">Filter</h3>
                <hr />
                { (error && errorModal)  &&    <ErrorModal setErrorModal={setErrorModal} text={error}/>}
                {loading  && <Loading/>}
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
                            onClick={()=>HandleSetBedroom(-1)}
                            className="flex-1 p-2 rounded-lg  border  border-gray-300"
                            >
                            -
                            </button>
                            <span className="flex-1  rounded-lg text-center p-2">{filterQuery?.bedroom}</span>
                            <button
                            type="button"
                                   onClick={() =>HandleSetBedroom(1)}
                            className="flex-1  p-2  rounded-lg border border-gray-300"
                            >
                            +
                            </button>
                    </div>
                </div>


                        <div className="my-4 mb-8">
                            <p className="font-bold text-grey-light text-sm">House Type</p>
                            <div className="flex  mt-2 w-full space-x-2  text-xs text-grey-light items-center">
                            <span
                                    className={`p-4 border border-gray-300 rounded-lg ${filterQuery.houseType === 'Duplex' ? 'bg-green-200' : ''}`}
                                    onClick={() => handleHouseTypeChange('Duplex')}
                                >
                                   Duplex
                                </span>
                                <span
                                    className={`p-4 border border-gray-300 rounded-lg ${filterQuery.houseType === 'Self Contain' ? 'bg-green-200' : ''}`}
                                    onClick={() => handleHouseTypeChange('Self Contain')}
                                >
                                    Self Contain
                                </span>
                                <span
                                    className={`p-4 border border-gray-300 rounded-lg ${filterQuery.houseType === 'Flat' ? 'bg-green-200' : ''}`}
                                    onClick={() => handleHouseTypeChange('Flat')}
                                >
                                    Flat
                                </span>
                                <span
                                    className={`p-4 border border-gray-300 rounded-lg ${filterQuery.houseType === 'Single Room' ? 'bg-green-200' : ''}`}
                                    onClick={() => handleHouseTypeChange('Single Room')}
                                >
                                    Single Room
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="flex h-[15rem] items-end space-x-8 text-xs">
                        <button type="submit" className="p-2 py-4 mb-12 bg-green-700 text-white w-full rounded-lg">
                            Show
                        </button>
                    </div>
                </form>
            </div>
        </div>
        }
        </>
    );
}

export default FilterForm;
