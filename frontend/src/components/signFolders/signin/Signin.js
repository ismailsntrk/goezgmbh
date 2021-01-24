import React, { useState, useContext } from "react";
import { Container } from "reactstrap";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../services/AuthContext";
import AuthService from "../../../services/AuthService";


const Signup = () => {
  const [usera, setUsera] = useState({ username: "", password: "" });
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const onChange = (e) => {
    e.preventDefault();
    setUsera({ ...usera, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    AuthService.login(usera).then((data) => {
      const { isAuthenticated, user } = data;
      if (isAuthenticated === true) {
        authContext.setUser(user);
        authContext.setIsAuthenticated(isAuthenticated);
        setTimeout(() => {
    
          history.push('/')
         
        }, 250);
      }
      else{
        alert("hatali kullanici adi veya sifre")
       return window.location.reload(false);
      }
    });


   
  };

  return (
 <div>
   {authContext.isAuthenticated ===false ? (   <Container>
      <div style={{marginTop:"20%" ,marginBottom:"20%"}} className="modal-dialog">
        <div className="modal-content">
          <div className="modal-heading">
            <h2 className="text-center">Admin</h2>
          </div>
          <hr />
          <div className="modal-body">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-user"></span>
                  </span>
                  <input
                    onChange={onChange}
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">
                    <span className="glyphicon glyphicon-lock"></span>
                  </span>
                  <input
                    name="password"
                    onChange={onChange}
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="form-group text-center">
                <button type="submit" className="btn btn-success btn-lg">
                  Login
                </button>
              
                  
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>) : (<div style={{ display:"flex", flexDirection:'row' , justifyContent:'center', alignItems:'center' , height:"60vh"}}>
      <h1>Zaten Giris Yaptiniz</h1>
      </div>)}
 </div>
  );
};

export default Signup;
