"use client"
import { FilterIcon } from "@/assets/icons"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data ={
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
}

const Analytics = () => {
 

    return(
        <div className="bg-[#F8F9FB] text-[#343A40] p-[3rem]">
            <div className="flex w-full justify-between mb-[3rem]">
                <p className="text-[1.25rem] font-semiBold ">Dashboard</p>
                <div className="flex gap-x-[1rem] cursor-pointer p-[0.6rem] px-[1rem]  bg-[#fff] rounded-[1.25rem] border border-[rgba(0, 0, 0, 0.20)]">
                    <FilterIcon width="" height="" color=""/>
                    <p className="">Filter</p>
                </div>
            </div>
            <div className="flex gap-x-[1.2rem] gap-y-[1.2rem]  flex-wrap w-full">
            <div className="bg-[#fff] border border-[rgba(0, 0, 0, 0.20);] p-[1rem] w-[17rem]">
                    <p className="text-[1rem] ">Profit</p>
                    <p className="text-[1.7rem] text-bold text-[#63ABFF]">N500M</p>
                </div>
                <div className="bg-[#fff] border border-[rgba(0, 0, 0, 0.20);] p-[1rem] w-[17rem]">
                    <p className="text-[1rem] ">Profit</p>
                    <p className="text-[1.7rem] text-bold text-[#63ABFF]">N500M</p>
                </div>
                <div className="bg-[#fff] border border-[rgba(0, 0, 0, 0.20);] p-[1rem] w-[17rem]">
                    <p className="text-[1rem] ">Profit</p>
                    <p className="text-[1.7rem] text-bold text-[#63ABFF]">N500M</p>
                </div>
                <div className="bg-[#fff] border border-[rgba(0, 0, 0, 0.20);] p-[1rem] w-[17rem]">
                    <p className="text-[1rem] ">Profit</p>
                    <p className="text-[1.7rem] text-bold text-[#63ABFF]">N500M</p>
                </div>
                <div className="bg-[#fff] border border-[rgba(0, 0, 0, 0.20)] p-[1rem] w-[17rem]">
                    <p className="text-[1rem] ">Profit</p>
                    <p className="text-[1.7rem] text-bold text-[#63ABFF]">N500M</p>
                </div>
                <div className="bg-[#fff] border border-[rgba(0, 0, 0, 0.20)] p-[1rem] w-[17rem]">
                    <p className="text-[1rem] ">Profit</p>
                    <p className="text-[1.7rem] text-bold text-[#63ABFF]">N500M</p>
                </div>
                <div className="bg-[#fff] border border-[rgba(0, 0, 0, 0.20)] p-[1rem] w-[17rem]">
                    <p className="text-[1rem] ">Profit</p>
                    <p className="text-[1.7rem] text-bold text-[#63ABFF]">N500M</p>
                </div>
            </div>

            <div  className="flex my-8 gap-x-[2rem] h-[27rem]">
            <div className="bg-[#fff] flex-1 p-8  " >
                    <div className="flex w-full justify-between">
                        <p className="">Analysis</p>
                        <select className="bg-[#fff]  border p-2 px-5 rounded-[1.25rem] border-[rgba(0, 0, 0, 0.20)]">
                            <option >Day</option>
                        </select>
                    </div>
                        <Pie data={data} />       
               </div>
                <div className="bg-[#fff] flex-[1]  " ></div>
            </div>
        </div>
    )
}



export default Analytics






