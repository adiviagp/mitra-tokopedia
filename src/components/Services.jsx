import React, { useEffect, useState } from 'react';

const Services = ({ data }) => {
  return (
    <>
      <div className="flex justify-between px-3 py-5">
        <h1 className="font-bold">Produk Digital</h1>
        <h2 className="text-green-700">Lihat Semua</h2>
      </div>
      <div style={{}}>
        {data && (
          <div className="flex flex-nowrap overflow-x-auto">
            {data.map((service, index) => (
              <div key={index} className="w-[40px] shrink-0 mx-[17px]">
                {/* {service.title} */}
                <img src={service.icon} alt="icon" width="40px" />
                <h3 className="font-light text-[0.6rem] text-center">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Services;
