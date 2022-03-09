import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { virtualize } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';

const VirtualizeSwipeableViews = virtualize(SwipeableViews);
const styles = {
  root: {
    padding: '0 30px',
  },
  slideContainer: {
    padding: '0px 8px',
  },
  slide: {
    height: 'calc(33.5294vw - 20px)',
    maxHeight: '146px',
    color: '#fff',
  },
};

const Banner = () => {
  const [index, setIndex] = useState(0);
  const handleChangeIndex = (index) => {
    setIndex(index);
  };
  function slideRenderer(params) {
    const { index, key } = params;

    switch (mod(index, 3)) {
      case 0:
        return (
          <div key={key} style={Object.assign({}, styles.slide)}>
            <img src="/banner/1.jpeg" alt="image" />
          </div>
        );

      case 1:
        return (
          <div key={key} style={Object.assign({}, styles.slide)}>
            <img src="/banner/2.jpeg" alt="image" />
          </div>
        );

      case 2:
        return (
          <div key={key} style={Object.assign({}, styles.slide)}>
            <img src="/banner/3.jpeg" alt="image" />
          </div>
        );

      default:
        return null;
    }
  }
  return (
    <>
      <VirtualizeSwipeableViews
        slideRenderer={slideRenderer}
        style={styles.root}
        slideStyle={styles.slideContainer}
      />
      <div className="flex justify-between items-center px-2">
        <div id="dots" className="flex p-2 gap-2">
          <div className="w-2 h-2 rounded-full bg-green-700"></div>
          <div className="w-2 h-2 rounded-full bg-green-700"></div>
          <div className="w-2 h-2 rounded-full bg-green-700"></div>
        </div>
        <h2 className="p-2 font-OpenSauceSans text-green-700">
          Lihat Semua Promo
        </h2>
      </div>
    </>
  );
};

export default Banner;
