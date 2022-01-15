
import "../css/styles.css"

function SocialContainer() {



    return (
        <div className="socialContainer">

            <div className="icons">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-youtube"></i>
                <i class="fab fa-instagram"></i>
            </div>
            <div className="mobile">
                <div className="mobileSearch">
                    <i className="fa fa-search"></i>
                </div>
                <i className="fas fa-bars"></i>
            </div>
            <div className="buttons">
                <div className="button">Blog</div>
                <div className="button">Yardım</div>
            </div>
        </div>

    )

}

export default SocialContainer;