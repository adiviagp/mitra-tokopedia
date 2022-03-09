import React, { useState, useEffect } from 'react';
import Banner from '../components/Banner';
import AuthCard from '../components/AuthCard';
import Services from '../components/Services';
import SalesTools from '../components/SalesTools';
import PromoCard from '../components/PromoCard';

const Beranda = () => {
  const [product, setProduct] = useState();
  const [grosir, setGrosir] = useState();

  const ceksini = {
    title: 'Baru! Produk Bisnis',
    images: [
      './promo/ceksini1.webp',
      './promo/ceksini2.webp',
      './promo/ceksini3.webp',
    ],
  };
  const cashback = {
    title: 'Gopay Ada Untuk Kamu',
    images: [
      './promo/cashback1.webp',
      './promo/cashback2.webp',
      './promo/cashback3.webp',
    ],
  };
  const untung = {
    title: 'Tantangan Unilever',
    images: [
      './promo/untung1.webp',
      './promo/untung2.webp',
      './promo/untung3.webp',
    ],
  };

  const fetchProduct = async () => {
    const data = await fetch('./data/produkDigital.json');
    const res = await data.json();
    setProduct(res);
  };
  const fetchGrosir = async () => {
    const data = await fetch('./data/grosir.json');
    const res = await data.json();
    setGrosir(res);
  };

  useEffect(() => {
    fetchProduct();
    fetchGrosir();
  }, []);

  return (
    <>
      <Banner />
      <AuthCard />
      <Services data={product} />
      <Services data={grosir} />
      <SalesTools />
      <PromoCard title={ceksini.title} images={ceksini.images} />
      <PromoCard title={cashback.title} images={cashback.images} />
      <PromoCard title={untung.title} images={untung.images} last />
    </>
  );
};

export default Beranda;
