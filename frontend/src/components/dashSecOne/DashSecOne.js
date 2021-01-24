import React, { useContext } from "react";
import { Container } from "reactstrap";
import "./DashSecOne.scss";
import FavoriteIcon from "@material-ui/icons/Favorite";
import dash from "../../assets/dash.png";
import farmer from "../../assets/farmer.png";
import EcoIcon from "@material-ui/icons/Eco";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import { LanguageContext } from "../language/Language";

const DashSecOne = () => {
  const { dictionary } = useContext(LanguageContext);
  
  return (
    <div>
      <Container>
        <div id="dashSecOne-main">
          <div id="dashSecOne-one">
            <img
              id="item-one"
              alt="dash-item"
              src={window.innerWidth < 800 ? farmer : dash}
            ></img>
          </div>
          <div id="dashSecOne-two">
            <div id="alt-sec">
              <div id="alt-sec-one">
                <p>
                  {dictionary.why}
                  <span>
                    {" "}
                    <br></br>GÖZ {dictionary.fruitsAndVegetables}{" "}
                  </span>{" "}<br></br>
                  ?
                </p>
              </div>
              <div id="alt-sec-two">
                <div className="circle-sec">
                  <div className="circles-cont-dash">
                    <div className="circle-cont-sec">
                      <div className="sec-circle">
                        <EcoIcon
                          style={{ fontSize: "250%" }}
                          id="fav-icon"
                        ></EcoIcon>
                      </div>
                    </div>
                    <div className="circle-sec-p">
                      <div className="lit-title">
                        <h4>{dictionary.dashSecTitleOne}</h4>
                        <hr></hr>
                      </div>
                      <div id="lit-p">
                      {dictionary.dashSecParOne}
                      </div>
                    </div>
                  </div>
                  <div className="circles-cont-dash">
                    <div className="circle-cont-sec">
                      <div className="sec-circle">
                        <TagFacesIcon
                          style={{ fontSize: "250%" }}
                          id="fav-icon"
                        ></TagFacesIcon>
                      </div>
                    </div>
                    <div className="circle-sec-p">
                      <div className="lit-title">
                        <h4>{dictionary.dashSecTitleTwo}</h4>
                        <hr></hr>
                      </div>
                      <div id="lit-p">
                      {dictionary.dashSecParTwo}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="circle-sec" id="second-sec">
                  <div className="circles-cont-dash">
                    <div className="circle-cont-sec">
                      <div className="sec-circle">
                        <FavoriteIcon
                          style={{ fontSize: "250%" }}
                          id="fav-icon"
                        ></FavoriteIcon>
                      </div>
                    </div>
                    <div className="circle-sec-p">
                      <div className="lit-title">
                        <h4>{dictionary.dashSecTitleThree}</h4>
                        <hr></hr>
                      </div>
                      <div id="lit-p">
                      {dictionary.dashSecParThree}
                      </div>
                    </div>
                  </div>
                  <div className="circles-cont-dash">
                    <div className="circle-cont-sec">
                      <div className="sec-circle">
                        <WbSunnyIcon
                          style={{ fontSize: "250%" }}
                          id="fav-icon"
                        ></WbSunnyIcon>
                      </div>
                    </div>
                    <div className="circle-sec-p">
                      <div className="lit-title">
                        <h4>{dictionary.dashSecTitleFour}</h4>
                        <hr></hr>
                      </div>
                      <div id="lit-p">
                      {dictionary.dashSecParFour}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DashSecOne;
