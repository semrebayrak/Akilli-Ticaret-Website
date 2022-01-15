import $ from 'jquery';
import { useState, useEffect } from 'react';

import photo from '../assets/makina.jpg'

function Items() {

    const [items, setItems] = useState([]);
    const [tokenValue, setTokenValue] = useState('baan');
    const [ct, setCt] = useState(0);


    useEffect(() => {
        if (ct < 1) {
            const loginQuery = $.ajax
                ({

                    type: "POST",
                    url: "https://api.akilliticaretim.com/api/Auth/Login",
                    dataType: 'json',
                    data: JSON.stringify({ userName: 'user', password: "123456" }),

                    contentType: 'application/json',
                    headers: {

                        "GUID": "A3A7-CD3A-FEB6-15A3",

                    },

                    success: function (data) {


                        setTokenValue(data.data.token)


                    }
                });



            const itemQuery = $.ajax
                ({
                    type: "GET",
                    url: "https://api.akilliticaretim.com/api/Product/ListProducts/0",
                    dataType: 'json',
                    headers: {
                        "Authorization": "Bearer " + tokenValue,
                        "GUID": "A3A7-CD3A-FEB6-15A3",
                    },

                    success: function (data) {

                        setItems(data.data);
                    }
                });
        }
        return () => {
            setCt(1);
            console.log('will unmount');
        }

    })

    return (
        <>
            {items.map((item, groupIndex) => (groupIndex < 4 ?

                <div className="item" key={groupIndex}>
                    {item.prodImages}
                    <img src={photo} alt="" />
                    <span className="name">   {item.name}</span>
                    <span className="price">      {item.price}TL</span>

                    <span className="taksit">  <b>Taksitli Fiyatı</b> &nbsp;{(item.price / 3).toFixed(2)}TL</span>
                    <div className="buy">

                        <div className="amount">

                            1


                            <div className="updown">

                                <i class="fas fa-chevron-up"></i>
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>



                        <div className="icons">

                            <i class="fas fa-exchange-alt"></i>

                            <i class="far fa-heart"></i>

                            <i class="fas fa-sliders-h"></i>

                        </div>
                        <div className="inspect">Ürünü İncele</div>
                    </div>
                </div>
                : <> </>


            ))}
        </>
    );
}

export default Items;