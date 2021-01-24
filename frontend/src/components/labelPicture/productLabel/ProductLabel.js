import React , {useContext} from "react";
import './ProductLabel.scss'
import item from "../../../assets/berry.jpg";
import { LanguageContext } from "../../language/Language";

const ProductLabel = () => {
    const { dictionary } = useContext(LanguageContext);
    return (
        <div>
            <div id='label-pic' style={{background:`url(${item}) center no-repeat`}}>
                <div id="page-tag">
                <p className="cont-div" id="contact-us-p">
                {dictionary.ourProducts}
          </p>
          <p id="label-par">
          {dictionary.labelParTwo}
          </p>
    
                </div>
            </div>
        </div>
    )
}     

export default ProductLabel
