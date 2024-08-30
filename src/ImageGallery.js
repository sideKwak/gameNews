import React from 'react';
import './ImageGallery.css';
import bdo from './img/bdo.png';
import fst from './img/fd.png';
import loa from './img/loa.png';
import m_bdo from './img/m_bdo.png';
import m_fst from './img/m_fst.png';
import m_loa from './img/m_loa.png';
import inven from './img/inven.png';  // 인벤 로고 이미지 경로 추가

const ImageGallery = () => {
  return (
    <div className="image-gallery">
      <div className="image-item">
        <div className="inven-container">
          <a href="https://black.inven.co.kr/" target="_blank" rel="noopener noreferrer">
            <img src={inven} alt="Inven" />
          </a>
        </div>
        <div className="text-container bdo-text">
          <p>검은사막 소식이 궁금하면 해당 이미지를 누르세요.</p>
          <p>Black Desert: New Update Released!</p>
        </div>
        <picture>
          <source media="(max-width: 768px)" srcSet={m_bdo} />
          <img src={bdo} alt="Black Desert" />
        </picture>
      </div>
      <div className="image-item">
        <div className="inven-container">
          <a href="https://party.inven.co.kr/descendant" target="_blank" rel="noopener noreferrer">
            <img src={inven} alt="Inven" />
          </a>
        </div>
        <div className="text-container fst-text">
          <p>퍼스트 디센던트 소식이 궁금하면 해당 이미지를 누르세요.</p>
          <p>The First Descendant: Upcoming Event!</p>
        </div>
        <picture>
          <source media="(max-width: 768px)" srcSet={m_fst} />
          <img src={fst} alt="The First Descendant" />
        </picture>
      </div>
      <div className="image-item">
        <div className="inven-container">
          <a href="https://lostark.inven.co.kr/" target="_blank" rel="noopener noreferrer">
            <img src={inven} alt="Inven" />
          </a>
        </div>
        <div className="text-container loa-text">
          <p>로스트아크 소식이 궁금하면 해당 이미지를 누르세요.</p>
          <p>Lost Ark: Patch Notes Available Now!</p>
        </div>
        <picture>
          <source media="(max-width: 768px)" srcSet={m_loa} />
          <img src={loa} alt="Lost Ark" />
        </picture>
      </div>
    </div>
  );
};

export default ImageGallery;