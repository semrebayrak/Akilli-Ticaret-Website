
import "../css/styles.css"
import SocialContainer from "./socialcontainer";
import logo from '../assets/antrasit.png';


function Header() {


    return (
        <>
            <SocialContainer>


            </SocialContainer>




            <div className="headerContainer">

                <div className="logo">

                    <img src={logo} alt="" />

                </div>

                <div className="searchBox">
                    <div className="search">

                        <span>  Ne Aramıştınız...</span>

                    </div>
                    <div className="button">

                        <i className="fa fa-search fa-2x"></i>
                    </div>
                </div>
                <div className="basket">
                    <i className="fas fa-shopping-basket"></i>
                    <div className="text">
                        <span className="header">Sepet</span>
                        <span className="standart">0,00TL</span>
                    </div>

                </div>
                
                <div className="login">
                    <i className="fa fa-user"> </i>
                    <div className="text">
                        <span className="header">Giriş Yap</span>
                        <span className="standart">veya üye ol</span>
                    </div>

                </div>
               
            </div>
        </>
    );
}

export default Header;