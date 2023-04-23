import React ,{useState ,useContext} from "react";
import "./Contact.scss";
import ContactForm from "./contactForm/ContactForm";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LabelPicture from "../labelPicture/LabelPicture";
import ReactMapboxGl, {  Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import logo from '../../assets/logo.png'
import { LanguageContext } from "../language/Language";
import InstagramIcon from '@material-ui/icons/Instagram';
import PrintIcon from '@material-ui/icons/Print';
const Contact = () => {
  const { dictionary } = useContext(LanguageContext);
  const [mapDef] =useState({lng:7.1696225284692625,lat:51.27035076046961,zoom:10})

  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiaXNtYWlsc250cmsxIiwiYSI6ImNrazJrb2dzZTEyNncycHJycTViOWJpcG4ifQ.7oa1eCey9XdTERdbO7gQsQ',
      center:[mapDef.lng,mapDef.lat],
      zoom:mapDef.zoom
  });

  
  return (
    <div id="main">
     
<div>
  <LabelPicture></LabelPicture>
</div>
      <div className="row-cont">
        <div id="form-cont">
          <div style={{marginTop:'0.2%'}}>
            <ContactForm></ContactForm>
          </div>
        </div>
        <div id="contact-cont">
          <p id="contact-us-p">
            {dictionary.contactInformation}
          </p>
          <hr id="cont-hr"></hr>
          <div className="cont-div">
            <RoomIcon></RoomIcon>
            {dictionary.address}
          </div>
          <div className="cont-div">
            <a href="tel:0202 574 90025"><PhoneIcon></PhoneIcon>
            {dictionary.phoneNumber}</a>
          </div>
          <div className="cont-div">
            <p ><PrintIcon></PrintIcon>
            {dictionary.fax} </p>
          </div>
          <div className="cont-div">
            <a href="mailto:goezgmbh@outlook.com"> <MailOutlineIcon></MailOutlineIcon> info@goez-gmbh.de</a>
            
          </div>
          <div className="cont-div">
           <a target="_blank" rel="noreferrer" href="https://www.facebook.com/goz.goz.56808"> <FacebookIcon></FacebookIcon>Facebook</a>
          </div>
          <div className="cont-div">
            <a  target="_blank" rel="noreferrer" href="https://www.instagram.com/gozgmbh/"> <InstagramIcon></InstagramIcon>Instagram</a>
          </div>
          
        </div>
      </div>  
      <Map
        center={[mapDef.lng,mapDef.lat]} 
        zoom={[mapDef.zoom]}
  // eslint-disable-next-line react/style-prop-object
  style="mapbox://styles/mapbox/streets-v9"
  containerStyle={{
    height: '45vh',
    width: '100%'
  }}
  
>
<Marker style={{backgroundColor:"red", width:'0'}}

  coordinates={[7.169578852352295 ,51.27039556865478 ]}
  anchor="bottom">
     <div  id="marker-cont">
     <img id="logo-map" alt="marker" src={logo}></img>
  <RoomIcon style={{fontSize:'40px'}}></RoomIcon>
     </div>
</Marker>
 
</Map>
      
    </div>
  );
};

export default Contact;
