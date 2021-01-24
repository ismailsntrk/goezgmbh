const AuthService = {
    login: (user) => {
      return fetch("/api/signin", {
        method: "post",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => data);
    },
    emailActivation: (token) => {
      return fetch("/api/email-activate", {
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
      return fetch("/api/signup", {
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
      return fetch("/api/logout")
        .then((res) => res.json())
        .then((data) => data);
    },
    isAuthenticated: () => {
      
      return fetch("/api/authenticated").then((res) => {
        if (res.status !== 401) {
          return res.json().then((data) => data);
        } else {
          return { isAuthenticated: false, user: { name: "", email: "" } };
        }
      });
    },
  };
  
  export default AuthService;
  