import React, { useRef, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaCalendarAlt } from 'react-icons/fa';

const CarouselDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const inputDateRef = useRef<HTMLInputElement | null>(null);


  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    console.log(date);
  };

  const handleInputDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(event.target.value);
    setSelectedDate(date);
    console.log(date);
  };

  const handleBoxClick = (date: Date) => {
    setSelectedDate(date);
    console.log(date);
  };
  const handleIconClick = () => {
    if (inputDateRef.current) {
      inputDateRef.current.click();
    }
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '60px',
  };

  const dateList = [
    new Date(),
    new Date(new Date().setDate(new Date().getDate() + 1)),
    new Date(new Date().setDate(new Date().getDate() + 2)),
    new Date(new Date().setDate(new Date().getDate() + 3)),
    new Date(new Date().setDate(new Date().getDate() + 4)),
    new Date(new Date().setDate(new Date().getDate() + 5)),
    new Date(new Date().setDate(new Date().getDate() + 6)),
  ];

  const getMonthName = (date: Date) => {
    const options = { month: 'long' as const };
    return date.toLocaleDateString('en-US', options);
  };

  const getDayOfWeek = (date: Date) => {
    const options = { weekday: 'long'as const };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="mb-2 flex justify-end w-full">
        <label className="relative">
          <input
            type="date"
            className="bg-green-light w-6 h-6 cursor-pointer"
            ref={inputDateRef}
            onChange={handleInputDateChange}
          />
          
        </label>
      </div>
      <div className="w-full">
        <Slider {...settings}>
          {dateList.map((date) => (
            <div className="" key={date.getTime()}>
              <div
                className={` h-24 w-22 m-1  border border-[2px] text-gray-400 border-gray-300  ${
                  selectedDate?.getTime() === date.getTime() ? 'bg-green-700 text-black' : 'bg-transparent'
                }`}
                onClick={() => handleBoxClick(date)}
              >
                <p className="text-lg text-center">{getDayOfWeek(date)}</p>
                <p className="font-bold text-3xl text-center">{date.getDate()}</p>
                <p className="text-lg text-center">{getMonthName(date)}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselDatePicker;
