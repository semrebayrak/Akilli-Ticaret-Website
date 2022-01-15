
import "../css/styles.css"

import $ from 'jquery';
import { useState, useEffect } from 'react';

import Items from "./items";
function Page() {








    return (
        <>

            <div className="page">

                <div className="information">

                    <span className="category">Beyaz Eşya</span>
                    <span> Kategorisi içeriğindeki ürünler listeleniyor</span>

                </div>

                <div className="selectArea">
                    <select id="name">
                        <option value="Arçelik">En Son Eklenenlere Göre</option>


                    </select>

                    <select id="name">
                        <option value="Arçelik">En Son Eklenenlere Göre</option>


                    </select>
                    <div className="iconBox">
                        <i className="fas fa-th-large"></i>
                    </div>
                    <div className="iconBox">
                        <i className="fas fa-list"></i>
                    </div>

                </div>




                <div className="items">
                    <Items></Items>

                </div>

                <div className="pageNumbers">
                    <span className="number">1</span>
                    <span className="number">2</span>
                    <span className="number">3</span>
                    <span className="number">4</span>
                </div>

            </div>

        </>
    );
}

export default Page;