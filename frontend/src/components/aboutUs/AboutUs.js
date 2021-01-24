import React, { useContext } from "react";
import "./AboutUs.scss";
import { Container } from "reactstrap";
import companyImg from "../../assets/greengrocer.jpg";
import InsertEmoticonOutlinedIcon from "@material-ui/icons/InsertEmoticonOutlined";
import AccessTimeOutlinedIcon from "@material-ui/icons/AccessTimeOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { LanguageContext } from "../language/Language";
import mobileCompanyImg from "../../assets/mobileCompanyImg.jpg";
const AboutUs = () => {
  const { dictionary } = useContext(LanguageContext);

  return (
    <div>
      <div style={{ marginTop: "20vh" }} />
      <Container>
        <div id="about-main">
          {window.innerWidth <= 800 ? (
            <div id="comp-img-box">
              <img id="comp-img" alt="company img" src={mobileCompanyImg}></img>
            </div>
          ) : null}
          <div id="about-comp">
            <h2>
              GÖZ <span style={{ color: "#FAA307" }}> {dictionary.fruitsAndVegetables} </span>
            </h2>

            <hr></hr>
            <p></p>

            <p>{dictionary.aboutUsOne}</p>
            <p>{dictionary.aboutUsTwo}</p>
            <p>{dictionary.aboutUsThree}</p>

            <p>{dictionary.aboutUsFour}</p>
            <div id="about-b">
              <h3>{dictionary.aboutUsFive}</h3>
            </div>
          </div>
          {window.innerWidth > 800 ? (
            <div id="comp-img-box">
              <img id="comp-img" alt="company img" src={companyImg}></img>
            </div>
          ) : null}
        </div>
      </Container>
      <div id="our-prensibles">
        <Container>
          {window.innerWidth <= 800 ? (
            <div id="mobile-prent-box">
              <div id="mobile-pren-cont">
                <div className="mobile-item-cont">
                  <div id="mobile-circle-pren">
                    {" "}
                    <InsertEmoticonOutlinedIcon
                      style={{ fontSize: "250%" }}
                    ></InsertEmoticonOutlinedIcon>
                  </div>
                </div>
                <div className="mobile-item-cont">
                  <p id="mobile-pren-title">{dictionary.aboutUsPrenTitleOne}</p>
                  <hr></hr>
                </div>
                <div className="mobile-item-cont">
                  <p id="mobile-pren-parag">
                    {dictionary.aboutUsPrenParOne}
                  </p>
                </div>
              </div>
              <div id="mobile-pren-cont">
                <div className="mobile-item-cont">
                  <div id="mobile-circle-pren">
                  <FavoriteIcon style={{ fontSize: "250%" }}></FavoriteIcon>
                    
                  </div>
                </div>
                <div className="mobile-item-cont">
                  <p id="mobile-pren-title">{dictionary.aboutUsPrenTitleTwo}</p>
                  <hr></hr>
                </div>
                <div className="mobile-item-cont">
                  <p id="mobile-pren-parag">
                    {dictionary.aboutUsPrenParTwo}
                  </p>
                </div>
              </div>
              <div id="mobile-pren-cont">
                <div className="mobile-item-cont">
                  <div id="mobile-circle-pren">
                  <AccessTimeOutlinedIcon
                      style={{ fontSize: "250%" }}
                    ></AccessTimeOutlinedIcon>
                  </div>
                </div>
                <div className="mobile-item-cont">
                  <p id="mobile-pren-title">{dictionary.aboutUsPrenTitleThree}</p>
                  <hr></hr>
                </div>
                <div className="mobile-item-cont">
                  <p id="mobile-pren-parag">
                    {dictionary.aboutUsPrenParThree}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="row-prensible">
              <div className="row-one" id="circle-main-cont">
                <div className="circle-pren">
                  <div id="circle-one">
                    <InsertEmoticonOutlinedIcon
                      style={{ fontSize: "250%" }}
                      className="pren-icon"
                    ></InsertEmoticonOutlinedIcon>
                  </div>
                </div>
                <div className="circle-pren">
                  <div id="circle-one">
                  <FavoriteIcon
                      style={{ fontSize: "250%" }}
                      className="pren-icon"
                    ></FavoriteIcon>
                   
                  </div>
                </div>
                <div className="circle-pren">
                  <div id="circle-one">
                  <AccessTimeOutlinedIcon
                      className="pren-icon"
                      style={{ fontSize: "250%" }}
                    ></AccessTimeOutlinedIcon>
                  </div>
                </div>
              </div>
              <div className="row-one" id="title-main-cont">
                <div className="circle-pren">
                  <div id="title-pre">
                    <p>{dictionary.aboutUsPrenTitleOne}</p>
                    <hr></hr>
                  </div>
                </div>
                <div className="circle-pren">
                  <div id="title-pre">
                    <p>{dictionary.aboutUsPrenTitleTwo}</p>
                    <hr></hr>
                  </div>
                </div>
                <div className="circle-pren">
                  <div id="title-pre">
                    <p>{dictionary.aboutUsPrenTitleThree}</p>
                    <hr></hr>
                  </div>
                </div>
              </div>
              <div className="row-one" id="p-main-cont">
                <div className="circle-pren">
                  <div id="title-pre">
                    <p>
                     {dictionary.aboutUsPrenParOne}
                    </p>
                  </div>
                </div>
                <div className="circle-pren">
                  <div id="title-pre">
                    <p>
                      {dictionary.aboutUsPrenParTwo}
                    </p>
                  </div>
                </div>
                <div className="circle-pren">
                  <div id="title-pre">
                    <p>
                      {dictionary.aboutUsPrenParThree}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;
