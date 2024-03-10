import React from 'react';
import './Categori.css'
import detectiv from '../../images/detectiv.jpg'
import fantastikaa from '../../images/fantastikaa.jpg'
import pri from '../../images/pri.jpg'
import nauchitsia from '../../images/nauchitsia.jpg'

const Categori = () => {
    return (
        <div id="categori">
            <div className="container">
                <div className="categori">
                    <h1>Категории</h1>
                    <div className="detektiv">
                        <h2>Детектив</h2>
                    </div>
                    <div className="detektiv1">
                        <h2>Фантастика</h2>
                    </div>
                    <div className="detektiv2">
                        <h2>Приключения</h2>
                    </div>
                    <div className="detektiv3">
                        <h2>Научная</h2>
                    </div>
                </div>
                <div className="images">
                    <img src={detectiv} alt="" className='bbb' />
                    <img src={fantastikaa} alt="" className='bbb' />
                    <img src={pri} alt="" className='bbb' />
                    <img src={nauchitsia} alt="" className='bbb' />
                </div>
            </div>
        </div>
    );
};

export default Categori;