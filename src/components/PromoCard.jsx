import React from 'react';

const PromoCard = ({ title, images, last }) => {
  return (
    <div className={last ? 'mb-16' : 'm-0'}>
      <div className="flex justify-between px-3 py-3">
        <h1 className="font-bold">{title}</h1>
        <h2 className="text-green-700">Lihat Semua</h2>
      </div>
      <div className="flex">
        {images.map((image, index) => (
          <div key={index} className="flex-1">
            <img className="w-full" src={image} alt="gambar" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromoCard;
