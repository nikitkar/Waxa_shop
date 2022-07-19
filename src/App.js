/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "./components/Header";
import SliderMainBlock from "./components/SliderMain";
import InfoSectionBlock from "./components/InfoSection";
import CollectionSection from "./components/CollectionSection";

//---------------------CSS---------------------------
import ResetCss from "./assets/css/reset.css";
import HeaderCss from "./assets/css/style.css";

function App() {
    const mainSlider = [
        {
            subTitle: "СКИДКИ ДО 25%",
            title: "Французкие спреи Saphir Medalle D’or",
            text: "Премиальные лаки и спреи для ухода за изделиями из натуральной кожи по самым выгодным ценам",
            textBtn: "Выбирайте",
            pathImg: require("./assets/images/slideFirst.png"),
        },
        {
            subTitle: "СКИДКИ ДО 25%",
            title: "Темная вариация первого слайдера",
            text: "Этот тоже слайд что и раньше, но теперь в редакторе установлен темный цвет фона, а шрифты перекрашены в белый. Обратите внимание на элементы управления слайдером",
            textBtn: "Выбирайте",
            pathImg: require("./assets/images/sliderSecond.png"),
        },
        {
            subTitle: "СКИДКИ ДО 25%",
            title: "Слайд с одной картинкой-фоном​",
            text: "Картинка установлена как фон, а поверх нее размещается перекрывающий слой, обеспечивающий плавный переход к тексту слайда",
            textBtn: "Выбирайте",
            pathImg: require("./assets/images/sliderThird.png"),
        },
        {
            subTitle: "СКИДКИ ДО 25%",
            title: "Слайд с одной картинкой-фоном",
            text: "Фоном такого слайда может служить фотография, паттерн, иллюстрация или видео. Видео может быть загружено в формате .mp4, использовать сервисы YouTube или Vimeo. Ссылка на нужное видео https://cdn.shopify.com/s/files/1/0966/8928/files/BLOWOUT.mp4?10054",
            textBtn: "Выбирайте",
        },
    ];
    const infoSectionInfo = [
        {
            title: 'Обувная косметика Сапфир',
            text: 'Добро пожаловать в Waxa Shop — онлайн магазин средств по уходу за обувью. Мы рады предложить Вам лучшие в мире средства для обуви от легендарной французской фирмы сапфир. Косметика для обуви Saphir имеет столетнюю историю и безукоризненную репутацию, являясь эталоном качества среди любителей и профессионалов обувного ухода. В ассортименте обувной косметики нужно уметь ориентироваться. Чем отличаются хорошие средства, что входит в их состав и как правильно подобрать удачный набор?',
            imgPath: require('./assets/images/firstBlock--Logo.png')
        }
    ];
    const collectionSectionInfo = [
        {
            title: 'Крема для обуви',
            price: 395,
            countItem: 25,
            imgPath: require('./assets/images/card/cardCream.jpg')
        },
        {
            title: 'Очиститель для обуви',
            price: 525,
            countItem: 15,
            imgPath: require('./assets/images/card/cardPurifier.jpg')
        },
        {
            title: 'Щетки для обуви',
            price: 1190,
            countItem: 30,
            imgPath: require('./assets/images/card/cardBrush.jpg')
        },
        {
            title: 'Средства для реставрации кожи',
            price: 525,
            countItem: 105,
            imgPath: require('./assets/images/card/cardRestoration.jpg')
        },
        {
            title: 'Краска для обуви',
            price: 280,
            countItem: 100,
            imgPath: require('./assets/images/card/cardDye.jpg')
        },
        {
            title: 'Воск для обуви',
            price: 430,
            countItem: 15,
            imgPath: require('./assets/images/card/cardWax.jpg')
        }
    ];


    return (
        <>
            <Header />
            <main className="main">
                <SliderMainBlock props={mainSlider}/>
                <InfoSectionBlock props={infoSectionInfo}/>
                <CollectionSection props={collectionSectionInfo}/>
            </main>
        </>
    );
}

export default App;
