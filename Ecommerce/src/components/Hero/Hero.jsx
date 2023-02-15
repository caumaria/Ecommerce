import React, { useState } from 'react'
import { BsCart3 } from 'react-icons/Bs'
import css from './Hero.module.scss'
import ImageSliderComponent from './image-slider'


const Hero = () => {    
    return (
        <div className={`flexCenter innerWidth paddings ${css.container}`}>
            
            <div className={`paddings ${css.img}`}>
                <ImageSliderComponent />
            </div>

            <div className={`yPaddings ${css.text}`}>

                <div className={` ${css.tag}`}>sneaker company</div>

                <h1>Fall Limited Edition Sneakers</h1>
                <p className={`${css.resume}`}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                
                <div className={` ${css.price}`}>
                    
                    <div className={css.center}>
                        <p className={css.main}>$125.00</p>
                        <div className={css.discont}>50%</div>
                    </div>

                    <p className={css.second}>$250.00</p>
                </div>
                
                <div className={`flexCenter ${css.wrapper}`}>
                    <div className={`yPaddings ${css.counter}`}>
                        <button>- 0 +</button>
                    </div>
                    <button className={`flexCenter ${css.cart}`}>
                        <BsCart3 size={18} />
                        <p>Add to cart</p>
                    </button>
                </div>
                
            </div>
        </div>

    )
}

export default Hero
