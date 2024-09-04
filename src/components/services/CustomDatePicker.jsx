import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Header from "../Header";
import sliderSettings from "./sliderSettings";

function CustomDatePicker() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeRange, setSelectedTimeRange] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [showContactDetails, setShowContactDetails] = useState(false);
  const [showAddressModal, setShowAddressModal] = useState(false);

  // Days of the week
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Function to get the number of days in a month
  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to get the first day of the month (0 - Sunday, 1 - Monday, ...)
  const getFirstDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  // Function to generate the dates for the current month
  const generateDatesForMonth = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);

    // Create an array to represent the dates in the calendar grid
    const dates = [];
    // Start with the first day of the month
    for (let i = 0; i < firstDay; i++) {
      dates.push(null); // Empty cells for days before the first of the month
    }
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(i);
    }
    return dates;
  };

  // Get dates for the current month
  const dates = generateDatesForMonth();

  // Function to handle changing to the previous month
  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Function to handle changing to the next month
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Format month and year for display
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const displayMonthYear = `${monthNames[currentMonth]} ${currentYear}`;

  const timeRanges = [
    { label: "For 4 hrs", value: "4hrs", price: 1000 },
    { label: "For 12 hrs", value: "12hrs", price: 2000 },
    { label: "For 24 hrs", value: "24hrs", price: 900 },
    { label: "For 7 Days", value: "7days", price: 800 },
  ];
  const timeSlots = [
    "7:00 AM",
    "7:30 AM",
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
  ];

  const timeRangeRef = useRef(null);
  const timeSlotRef = useRef(null);
  const contactDetailsRef = useRef(null);
  const showAddressModalRef = useRef(null);

  useEffect(() => {
    if (selectedDate && timeRangeRef.current) {
      timeRangeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (selectedTimeRange && timeSlotRef.current) {
      timeSlotRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (selectedTimeSlot && contactDetailsRef.current) {
      contactDetailsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (showContactDetails && showAddressModalRef.current) {
      showAddressModalRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedDate, selectedTimeRange, selectedTimeSlot, showContactDetails]);

  return (
    <>
      <Header />
      <div className="container mx-auto flex justify-center h-full  px-4 ">
        <div
          className="bg-white rounded-lg shadow-lg p-6 mt-16"
          style={{
            maxWidth: "1020px",
            width: "100%",
          }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#282261] mb-4">
            Select Date
          </h2>
          <div className="flex justify-between items-center mb-6">
            <select
              className="border border-green-500 text-white bg-green-600 text-lg md:text-xl font-bold rounded-lg px-4 py-2"
              value={displayMonthYear}
              readOnly
            >
              <option>{displayMonthYear}</option>
            </select>
            <div className="flex items-center space-x-4">
              <button
                className="border rounded-md p-2 md:p-3 border-green-500 text-green-500"
                onClick={handlePreviousMonth}
              >
                &lt;
              </button>
              <button
                className="border rounded-md p-2 md:p-3 border-green-500 text-green-500"
                onClick={handleNextMonth}
              >
                &gt;
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2 md:gap-4 mb-8">
            {dates.map((date, index) => (
              <div
                key={index}
                className={`text-center py-2 sm:py-3 md:py-4 px-3 md:px-6 rounded-lg cursor-pointer ${
                  selectedDate === date
                    ? "bg-green-600 text-white"
                    : "bg-[#F6FBF9] text-green-600"
                }`}
                onClick={() => setSelectedDate(date)}
              >
                <div className="text-lg sm:text-xl font-sans">
                  {daysOfWeek[index % 7]}
                </div>
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
                  {date}
                </div>
              </div>
            ))}
          </div>

          {selectedDate && (
            <>
              <div ref={timeRangeRef}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#282261] mb-4">
                  Select Time Range
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {timeRanges.map((range) => (
                    <div
                      key={range.value}
                      className={`flex justify-between items-center px-4 py-3 rounded-3xl text-lg md:text-xl cursor-pointer ${
                        selectedTimeRange === range.value
                          ? "bg-[#3F2A56] text-white"
                          : "bg-[#F6FBF9] text-[#3F2A56]"
                      }`}
                      onClick={() => setSelectedTimeRange(range.value)}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-2 ${
                            selectedTimeRange === range.value
                              ? "border-white bg-white"
                              : "border-[#3F2A56]"
                          }`}
                        >
                          {selectedTimeRange === range.value && (
                            <div className="w-2.5 h-2.5 rounded-full bg-[#3F2A56]"></div>
                          )}
                        </div>
                        <span className="text-2xl font-semibold">
                          {range.label}
                        </span>
                      </div>
                      <span className="text-xl md:text-2xl font-bold tracking-wider">
                        {range.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {selectedTimeRange && (
            <>
              <div className={timeRangeRef}>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#282261] mb-4">
                  Select Time
                </h2>
                <Slider {...sliderSettings}>
                  {timeSlots.map((slot) => (
                    <div key={slot} className="p-2">
                      <button
                        className={`w-full md:w-3/5 px-4 py-2 rounded-3xl font-semibold cursor-pointer text-lg md:text-2xl border border-[#F58220] ${
                          selectedTimeSlot === slot
                            ? "bg-[#F58220] text-white"
                            : "bg-[#F6FBF9] text-[#F58220]"
                        }`}
                        onClick={() => setSelectedTimeSlot(slot)}
                      >
                        {slot}
                      </button>
                    </div>
                  ))}
                </Slider>
              </div>
            </>
          )}

          {selectedTimeSlot && !showContactDetails && (
            <div className={contactDetailsRef}>
              <div className="mt-8 flex justify-center">
                <button
                  className="w-full bg-[#EF5A2A] text-white py-3 rounded-3xl font-semibold"
                  onClick={() => setShowContactDetails(true)}
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {showContactDetails && (
            <>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#282261] mt-8 mb-4">
                Enter Contact Details
              </h2>
              <div
                className="bg-[#F7F7FB] border-dashed border-2 border-[#2F2156] rounded-lg p-6 cursor-pointer"
                onClick={() => setShowAddressModal(true)}
              >
                <p className="text-[#2F2156] text-center font-semibold">
                  Tap to Select an Address
                </p>
              </div>
            </>
          )}
        </div>

        {showAddressModal && (
          <div className="fixed inset-0 flex items-center justify-center min-h-screen bg-gray-100 bg-opacity-50">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-6xl mx-4">
              {/* Left side: Map */}
              <div className="w-full md:w-2/3 relative">
                <iframe
                  title="Google Map"
                  className="w-full h-64 md:h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.7484252821!2d72.41492625670197!3d23.020474103675674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1724419997434!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Right side: Form */}
              <div className="w-full md:w-1/3 p-4 md:p-6">
                <button className="bg-orange-500 text-white py-2 px-6 rounded-3xl mb-4 font-bold">
                  Change
                </button>
                <h2 className="text-xl md:text-2xl font-semibold mb-2">
                  ABC Society
                </h2>
                <p className="text-gray-500 mb-4">
                  ABC Society, XYZ Road, Area, City, Gujarat 123456
                </p>
                <hr className="mb-4" />
                <form>
                  <input
                    type="text"
                    placeholder="House/Flat Number"
                    className="w-full bg-gray-100 p-2 md:p-3 rounded-3xl mb-4"
                  />
                  <input
                    type="text"
                    placeholder="Landmark"
                    className="w-full bg-gray-100 p-2 md:p-3 rounded-3xl mb-4"
                  />
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-gray-100 p-2 md:p-3 rounded-3xl mb-4"
                  />
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 md:py-3 rounded-3xl mt-4"
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CustomDatePicker;
