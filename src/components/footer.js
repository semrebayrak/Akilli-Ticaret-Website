
import "../css/styles.css"
import Icons from "./icons";
import { useState } from 'react';
function Footer() {

    return (
        <>

            <div className="footerContainer">

                <div className="column">
                    <span className="category">Kurumsal</span>
                    <span>Hakkımızda</span>
                    <span>Kampanyalar</span>
                    <span>Banka Hesap Numaraları</span>
                    <span>Blog</span>
                    <span>Haberler</span>

                </div>
                <div className="column">
                    <span className="category">Müşteri Hizmetleri</span>
                    <span>Hakkımızda</span>
                    <span>Kampanyalar</span>
                    <span>Banka Hesap Numaraları</span>
                    <span>Blog</span>
                    <span>Haberler</span>

                </div>
                <div className="column">
                    <span className="category">Yardım</span>
                    <span>İletişim Bilgileri</span>
                    <span>Sık Sorulan Sorular</span>


                </div>
                <div className="column">
                    <span className="category">İletişim</span>
                    <span>  1376 Sok. No:1 1/43 Boran Plaza, Halkapınar, Konak/izmir </span>
                    <span><b>Telefon:</b> 0805555555 </span>


                </div>
                <div className="column">
                    <span className="category">Bizi Takip Edin</span>
                    <div className="icons">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                    <span>E Bültene abone olun</span>
                    <div className="searchBox">
                        <div className="search">
                            <label htfor="mail">E-mail Adresiniz </label>
                            <input  type="text" id="mail" />

                        </div>
                        <div className="button">

                            <i className="fa fa-search fa-2x"></i>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Footer;