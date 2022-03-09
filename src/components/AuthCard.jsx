import React from 'react';

const AuthCard = () => {
  return (
    <>
      <div className="flex justify-between items-center p-3 m-3 bg-white rounded-lg shadow-lg">
        <div className="flex">
          <div className="p-2">
            <img src="/assets/bri.png" alt="logo" />
          </div>
          <div className="p-2">
            <div className="font-bold text-sm">Mau gampang untung?</div>
            <div className="font-light text-sm">Daftar dan masuk sekarang</div>
          </div>
        </div>
        <div>
          <button className="bg-green-700 rounded px-4 py-2 text-white">
            Masuk
          </button>
        </div>
      </div>
    </>
  );
};

export default AuthCard;
