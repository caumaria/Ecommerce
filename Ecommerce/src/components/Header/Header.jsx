import React from 'react'
import css from './Header.module.scss'
import { BsCart3 } from 'react-icons/Bs';

const Header = () => {
    return (
        <div>
            <div className={`flexCenter innerWidth ${css.container}`}>
                <div className={`paddings flexStart ${css.name}`}>
                    sneakers
                </div>

                <ul className={`flexStart ${css.menu}`}>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>


                <div className={`paddings ${css.icons}`}>
                    <div className={css.menuIcon}>
                        <BsCart3 size={20} />
                    </div>

                    <div className={css.personIcon}>
                        <img src='./image-avatar copy.png' alt="" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Header
