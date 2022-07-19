/* eslint-disable react/jsx-no-target-blank */
import React from 'react';

function Header() {    
    const PageName = ['СРЕДСТВА ДЛЯ ОБУВИ', 'МАТЕРИАЛ', 'НАЗНАЧЕНИЕ', 'наборы', 'аксессуары', 'бритье и уход', 'бренды', 'ПОИСК'];

    const [countProduct, setCountProduct] = React.useState(0);

    function NumberList() {
        const listItems = PageName.map((item, index) => {
            return item.toLowerCase() === "поиск" ? 
                <li className='headerBottom--items  search' key={index}>
                    <span>
                        <svg width="17" height="17" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.9702 7.75214C15.9702 5.67871 15.141 3.73681 13.6261 2.27458C12.1192 0.81235 10.1099 0 7.98112 0C5.84431 0 3.84305 0.804614 2.33613 2.27458C0.829207 3.73681 0 5.68645 0 7.75214C0 9.82557 0.829207 11.7675 2.33613 13.2297C3.84305 14.6919 5.85229 15.5043 7.98112 15.5043C9.65548 15.5043 11.2661 15.0014 12.6295 14.0498L12.9564 13.8177L17.4612 18.1889C17.6286 18.3514 17.8598 18.4442 18.099 18.4442C18.3382 18.4442 18.5694 18.3514 18.7369 18.1889C19.0877 17.8485 19.0877 17.2915 18.7369 16.951L14.2321 12.5798L14.4713 12.2626C15.452 10.9396 15.9702 9.37684 15.9702 7.75214ZM12.3504 11.9918C11.1863 13.1214 9.63156 13.7481 7.98112 13.7481C6.33068 13.7481 4.77591 13.1214 3.61183 11.9918C2.44776 10.8623 1.80193 9.35363 1.80193 7.75214C1.80193 6.15065 2.44776 4.642 3.61183 3.51245C4.77591 2.37516 6.33068 1.75622 7.98112 1.75622C9.63156 1.75622 11.1863 2.38289 12.3504 3.51245C13.5224 4.64974 14.1603 6.15065 14.1603 7.75214C14.1683 9.35363 13.5224 10.8623 12.3504 11.9918Z" fill="#262626"/>
                        </svg>  
                    </span>
                    <button type="submit">{item}</button>
                </li>
                : 
                <li className='headerBottom--items' key={index}>
                    <a href="/">{item}</a>
                </li>
        });

        return (
            <ul className="headerBottomList">{listItems}</ul>
        );
    }

    return (
        <header className="header">
            <div className="headerTop">
                <div className="headerTop--list">
                    <ul className="list">
                        <li className="items">
                            <a href="https://goo.gl/maps/Ezs5mvC9TxS5h5r56" target='_blank'>
                                <img src={require('../assets/images/location.svg').default} alt=''/>
                                <p>САНКТ-ПЕТЕРБУРГ</p>
                            </a>
                        </li>
                        <li className="items">
                            <a href="tel: 8 (812) 577-42-18">
                                <img src={require('../assets/images/phone.svg').default} alt=''/>
                                <p>8 (812) 577-42-18 &nbsp;</p>
                            </a>
                            <button type="button">/ ЗАКАЗАТЬ ЗВОНОК</button>
                        </li>
                        <li className="items">
                            <button type="button">
                                <img src={require('../assets/images/registration.svg').default} alt=''/>
                                <p>ВХОД / РЕГИСТРАЦИЯ</p>
                            </button>
                        </li>
                        <li className="items">
                            <button type="button">
                                <img src={require('../assets/images/favorites.svg').default} alt=''/>
                                <p>ИЗБРАННОЕ</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="headerCenter">
                <div className="headerCenter--list">
                    <button className="buttonMenu">
                        <div className="circleMenu">
                            <span>Открыть навигацию</span>
                        </div>
                        <p>Меню</p>
                    </button>

                    <a href="index.html" className="logo">
                        <img src={require('../assets/images/logo.svg').default} alt=''/>
                    </a>

                    <div className="basket">
                        <button type="submit"
                            onClick={() => setCountProduct(countProduct + 1)}>
                            Корзина
                            <div className="basketBox">
                                <span className="basketIcon">
                                    <svg width="19" height="26" viewBox="0 0 19 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.981 22.1913L17.6673 5.85472C17.6293 5.3406 17.2295 4.9314 16.7535 4.9314H14.3166C14.1358 2.1824 12.0225 0 9.5 0C6.97745 0 4.85471 2.1824 4.67385 4.9314H2.23697C1.76102 4.9314 1.36122 5.3301 1.32315 5.85472L0 22.2123V22.2333C0 22.2542 0 22.2752 0 22.3067C0 24.3422 1.67535 26 3.74098 26H15.259C17.3246 26 19 24.3422 19 22.3067C18.9905 22.2752 18.9905 22.2332 18.981 22.1913ZM9.49048 2.02502C11.004 2.02502 12.2796 3.30508 12.4604 4.9314H6.52054C6.7014 3.29459 7.97695 2.02502 9.49048 2.02502ZM15.2495 23.9645H3.73146C2.70341 23.9645 1.85621 23.2405 1.83717 22.3487L3.07465 6.96691H4.65481V8.78208C4.65481 9.33817 5.06413 9.79984 5.57816 9.79984C6.08266 9.79984 6.5015 9.34867 6.5015 8.78208V6.96691H12.489V8.78208C12.489 9.33817 12.8983 9.79984 13.4123 9.79984C13.9264 9.79984 14.3357 9.34867 14.3357 8.78208V6.96691H15.9158L17.1533 22.3487C17.1247 23.2405 16.2776 23.9645 15.2495 23.9645Z" fill="#262626"/>
                                    </svg>
                                    <i className="countProduct">{countProduct}</i>
                                </span>
                                <span className="basketPrice">1200</span><p>&nbsp;₽</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <hr className="hr"/>

            <div className="headerBottom">
                <div className="headerBottom--list">
                    <NumberList/>
                </div>
            </div>

            <hr className="hr"/>
        </header>
    )
};

export default Header;