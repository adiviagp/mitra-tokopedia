import React from 'react';

const SalesTools = () => {
  return (
    <div className="px-3 py-5">
      <h1 className="font-bold">Alat Bantu Jualan</h1>
      <div className="flex">
        <div className="flex-1">
          <img
            className="w-full"
            src="/salesTools/catatanHutang.webp"
            alt="Catatan Hutang"
          />
        </div>
        <div className="flex-1">
          <img
            className="w-full"
            src="/salesTools/pembukuan.webp"
            alt="Pembukuan"
          />
        </div>
        <div className="flex-1">
          <img
            className="w-full"
            src="/salesTools/aturHargaJual.webp"
            alt="Atur Harga Jual"
          />
        </div>
      </div>
    </div>
  );
};

export default SalesTools;
