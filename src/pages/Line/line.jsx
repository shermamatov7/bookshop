import React from 'react';
import './index.css'
import book from '../../images/book.svg'
import { SlBasket } from "react-icons/sl";
import bookshop from '../../images/bookshop.svg'
import book2 from '../../images/book2.svg'
import book3 from '../../images/book3.svg'
import book4 from '../../images/book4.svg'
import { AiOutlineArrowDown } from "react-icons/ai";




const Index = () => {
    return (
        <div id="book">
            <div className="container">
                <div className="book44">
                    <h1>Возможно, Вам понравится</h1>
                    <AiOutlineArrowDown className='icon'/>
                    <input type="text" placeholder='Сортировка' />
                </div>
                <div className="boook">
                    <div className="bookshop">
                        <img src={book} alt="" />
                        <div className="book1">
                            <h2>2100 сом</h2>
                            <SlBasket className='backet'/>
                        </div>
                        <p>Джинсы момсы / банан</p>
                    </div>
                    <div className="bookshop">
                        <img src={bookshop} alt="" />
                        <div className="book1">
                            <h2>2100 сом</h2>
                            <SlBasket className='backet' />
                        </div>
                        <p>Джинсы момсы / банан</p>
                    </div>
                    <div className="bookshop">
                        <img src={book2} alt="" />
                        <div className="book1">
                            <h2>2100 сом</h2>
                            <SlBasket  className='backet'/>
                        </div>
                        <p>Джинсы момсы / банан</p>
                    </div>
                    <div className="bookshop">
                        <img src={book3} alt="" />
                        <div className="book1">
                            <h2>2100 сом</h2>
                            <SlBasket className='backet'/>
                        </div>
                        <p>Джинсы момсы / банан</p>
                    </div>
                    <div className="bookshop">
                        <img src={book4} alt="" />
                        <div className="book1">
                            <h2>2100 сом</h2>
                            <SlBasket className='backet'/>
                        </div>
                        <p>Джинсы момсы / банан</p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Index;