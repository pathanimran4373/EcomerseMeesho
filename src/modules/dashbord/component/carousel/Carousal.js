import React, { useState, useEffect } from 'react';
import './carosal.css';

function Carosal() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        // {
        //     id: 1,
        //     content: (
        //         <div className="topCategoriesImage">
        //             <img src="https://images.meesho.com/images/marketing/1649760442043.webp" loading="lazy" alt='product_image'/>
        //             <img src="https://images.meesho.com/images/marketing/1649760423313.webp" loading="lazy" alt='product_image'/>
        //             <img src="https://images.meesho.com/images/marketing/1649759799809.webp" loading="lazy" alt='product_image'/>
        //         </div>
        //     )
        // },
        {
            id: 2,
            content: (
                <div className="essentialContainer">
                    <img src="https://images.meesho.com/images/marketing/1664368165450.webp" loading="lazy" className="essen_btn" alt='product_image'/>
                    <div className="essential_item">
                        <img src="https://images.meesho.com/images/marketing/1649760808952.webp" loading="lazy" alt='product_image'/>
                        <img src="https://images.meesho.com/images/marketing/1664364866805.webp" loading="lazy" alt='product_image'/>
                    </div>
                    <div className="essential_item">
                        <img src="https://images.meesho.com/images/marketing/1649760703179.webp" loading="lazy" alt='product_image'/>
                        <img src="https://images.meesho.com/images/marketing/1664364917657.webp" loading="lazy" alt='product_image'/>
                    </div>
                    <div className="essential_item">
                        <img src="https://images.meesho.com/images/marketing/1649760786763.webp" loading="lazy" alt='product_image'/>
                        <img src="https://images.meesho.com/images/marketing/1664364898513.webp" loading="lazy" alt='product_image'/>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            content: (
                <div className="becomeSellerBanner_Container">
                    <div className="becomeSeller_content">
                        <div className="becomeSeller_Content_Content">
                            <h2>Become a Reseller and</h2>
                            <h1>Start your Online Business with Zero Investment</h1>
                            <div className="becomerSeller_appDownload_Container">
                                <div className="becomeseller_AppDownlod">
                                    <img src="https://images.meesho.com/images/pow/playstoreIcon.webp" loading="lazy" alt='product_image'/>
                                </div>
                                <div className="becomeseller_AppDownlod">
                                    <img src="https://images.meesho.com/images/pow/appstoreIcon.webp" loading="lazy" alt='product_image'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    useEffect(() => {
        const id = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % items.length);
        }, 3000);

        return () => clearInterval(id);
    }, [currentIndex, items.length]);

    return (
        <div className='carousal-section'>
            <div className="topCategoriesHeading">
                <span className="horizontalLine"></span>
                <h1>Top Categories to choose from</h1>
                <span className="horizontalLine"></span>
            </div>
            <div className='carousal-container' >
                {items.map((item, index) => {
                    const isActive = index === currentIndex;
                    const slide = `topCategoriesFrom ${isActive ? 'active' : ''}`;
                    return (
                        <div className={slide} key={item.id}>
                            {item.content}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Carosal;

