import React, { useState } from "react";

function CountrySelector() {
  const [selectedCountry, setSelectedCountry] = useState("United States");

  const countries = [
    { name: "United States", currency: "(USD $)" },
    { name: "United Kingdom", currency: "(GBP £)" },
    { name: "Canada", currency: "(CAD C$)" },
    { name: "Australia", currency: "(AUD A$)" },
    { name: "Germany", currency: "(EUR €)" },
    { name: "France", currency: "(EUR €)" },
    { name: "India", currency: "(INR ₹)" },
    { name: "China", currency: "(CNY ¥)" },
    { name: "Japan", currency: "(JPY ¥)" },
    { name: "Brazil", currency: "(BRL R$)" },
    { name: "Belgium", currency: "(EUR €)" },
    { name: "Malaysia", currency: "(MYR RM)" },
    { name: "Pakistan", currency: "(PKR ₨)" },
    { name: "Indonesia", currency: "(IDR Rp)" },
    { name: "Egypt", currency: "(EGP E£)" },
    { name: "Philippines", currency: "(PHP ₱)" },
    { name: "Nigeria", currency: "(NGN ₦)" },
    { name: "Vietnam", currency: "(VND ₫)" },
    { name: "Greece", currency: "(EUR €)" },
    { name: "Portugal", currency: "(EUR €)" },
  ];

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <div className="relative">
      <select
        value={selectedCountry}
        onChange={handleCountryChange}
        className="w-full p-1.5 text-sm border rounded-md focus:outline-none appearance-none"
        style={{
          maxHeight: "200px",
          overflow: "auto",
        }}
        size={1}
      >
        {countries.map((country, index) => (
          <option key={index} value={country.name} className="py-0.5 text-sm">
            {country.name} {country.currency}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default CountrySelector;
