import Cookies from 'universal-cookie';

const AuthService = {
  
    login: (user) => {
      const cookies = new Cookies()
      return fetch("https://lit-reef-84408.herokuapp.com/api/signin", {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => data).then(data => {
         
          cookies.set("access_token" , data.token , { path: '/' })
         
          return data
        })
    },
    emailActivation: (token) => {
      return fetch("https://lit-reef-84408.herokuapp.com/api/email-activate", {
        method: "post",
        body: JSON.stringify(token),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => data);
    },
    register: (user) => {
      return fetch("https://lit-reef-84408.herokuapp.com/api/signup", {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => data);
    },
    logout: () => {
      return fetch("https://lit-reef-84408.herokuapp.com/api/logout")
        .then((res) => res.json())
        .then((data) => data);
    },
    isAuthenticated: (token) => {
      
      return fetch(`https://lit-reef-84408.herokuapp.com/api/authenticated/${token}`  , {
        method: 'get',
        headers: {
            'Content-Type' : 'application/json'
        }
    }).then((res) => {
        if (res.status !== 201) {
          return res.json().then((data) => data);
        } else {
          return { isAuthenticated: false, user: { name: "", email: "" } };
        }
      });
    },
  };
  
  export default AuthService;
  