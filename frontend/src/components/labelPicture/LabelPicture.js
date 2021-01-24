import React , {useContext} from "react";
import './LabelPicture.scss'
import item from "../../assets/salad-one.jpg";
import { LanguageContext } from "../language/Language";

const LabelPicture = () => {
    const { dictionary } = useContext(LanguageContext);
    return (
        <div>
            <div id='label-pic' style={{background:`url(${item}) center no-repeat`}}>
                <div id="page-tag">
                <p className="cont-div" id="contact-us-p">
             
                {dictionary.contact}
          </p>
          <p >
          {dictionary.labelPar}
          </p>
        
                </div>
            </div>
        </div>
    )
}

export default LabelPicture
