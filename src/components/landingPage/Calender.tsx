import React, { useRef, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaCalendarAlt } from 'react-icons/fa';

const CarouselDatePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedHour, setSelectedHour] = useState<number>(1);
  const [selectedPeriod, setSelectedPeriod] = useState<string>('AM');
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

  const handleHourChange = (hour: number) => {
    setSelectedHour(hour);
    console.log(hour);
  };

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
    console.log(period);
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

  const timeList = ['10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM', '06:00 PM'];

  const getMonthName = (date: Date) => {
    const options = { month: 'long' as const };
    return date.toLocaleDateString('en-US', options);
  };

  const getDayOfWeek = (date: Date) => {
    const options = { weekday: 'long' as const };
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
                className={`h-24 w-22 m-1 border border-[2px] text-gray-400 border-gray-300 ${
                  selectedDate?.getTime() === date.getTime() ? 'bg-green-700 text-black border-green-700' : 'bg-transparent'
                }`}
                onClick={() => handleBoxClick(date)}
              >
                <p className="text-lg text-center">{getDayOfWeek(date).substring(0, 3)}</p>
                <p className="font-bold text-3xl text-center">{date.getDate()}</p>
                <p className="text-lg text-center">{getMonthName(date).substring(0, 3)}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-4 text-gray-400  flex w-full justify-between">
        <p>Time</p>

        <div className='' >

        <label className="relative w-full mr-4">
          <select
            value={selectedHour}
            onChange={(e) => handleHourChange(parseInt(e.target.value, 10))}
            className="bg-green-light  border border-green-700 rounded-lg h-6 cursor-pointer mr-2"
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
        </label>
        <label className="relative w-full ">
          <select
            value={selectedPeriod}
            onChange={(e) => handlePeriodChange(e.target.value)}
            className="bg-green-light border border-green-700  rounded-lg h-6 cursor-pointer"
          >
            <option value="AM">AM</option>
            <option value="PM">PM</option>
          </select>
        </label>
        </div>
      </div>
    </div>
  );
};

export default CarouselDatePicker;
