import React, { useState } from 'react';
import './index.css';
import { SlBasket } from 'react-icons/sl';
import { AiOutlineArrowDown, AiOutlineCheck } from 'react-icons/ai';
import book from '../../images/book.svg'
import bookshop from '../../images/bookshop.svg'
import book2 from '../../images/book2.svg'
import book3 from '../../images/book3.svg'
import book4 from '../../images/book4.svg'
import { Link } from 'react-router-dom';

const Book = ({ image, Name, price }) => {
    const [selected, setSelected] = useState(false);

    return (
        <div className="bookshop">
            <img src={image} alt="" />
            <div className="book1">
                <h2>{price} сом</h2>
                {selected ? <AiOutlineCheck className='iconca' /> : <SlBasket onClick={() => setSelected(!selected)} className='backet' />}
            </div>
            <p>{Name}</p>
        </div>
    );
};

const Line = () => {
    return (
        <div id="book">
            <div className="container">
                <div className="book44">
                    <h1>Возможно, Вам понравится</h1>
                    <AiOutlineArrowDown className='icon' />
                    <input type="text" placeholder='Сортировка' />
                </div>
                <div className="boook">
                    <Book image={book} Name="Джинсы момсы / банан" price="2100" />
                    <Book image={bookshop} Name="Футболка оверсайз / универсал" price="2100" />
                    <Book image={book2} Name="Детский свитер / зимний" price="2100" />
                    <Book image={book3} Name="Мужской обувь / классика" price="2100" />
                    <Book image={book4} Name="Футболка нарядная / летняя" price="2100" />
                </div>
            </div>
        </div>
    );
};

export default Line;
