import React , {useContext} from "react";
import "./Footer.scss";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { LanguageContext } from "../language/Language";
const Footer = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <div id="footer-cont">
      
      <div id="footer-item-one">
        <div className="footer-icons">
          <RoomIcon style={{ fontSize: "250%" }}>
          </RoomIcon>
          <p>Konsumstr.45,42285 Wuppertal</p>
        </div>
        <div className="footer-icons"> 
          <PhoneIcon style={{ fontSize: "250%" }}></PhoneIcon>
          <p>178 864 25 02</p>
        </div>
        <div className="footer-icons">
          <MailOutlineIcon style={{ fontSize: "250%" }}></MailOutlineIcon>
          <p>goezgmbh@outlook.com</p>
        </div>
      </div>
      <div id="footer-item-two">
        <p>{dictionary.slogan}</p>
      </div>
      <div id="footer-item-three">© Goz GmbH. All rights reserved.</div>
    </div>
  );
};

export default Footer;
