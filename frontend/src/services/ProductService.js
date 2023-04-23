const ProductService = {
  getProducts: () => {
    return fetch("https://lit-reef-84408.herokuapp.com/product/get", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },

  addProduct: (product) => {
    return fetch("https://lit-reef-84408.herokuapp.com/product/new", {
      method: "post",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },

  newMessage: (msg) => {
    return fetch("https://lit-reef-84408.herokuapp.com/product/message", {
      method: "post",
      body: JSON.stringify(msg),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data);
  },

  deleteProduct : (id) =>{

    return fetch(`https://lit-reef-84408.herokuapp.com/product/delete/${id}`,{
        method: 'delete',
        headers: {
            'Content-Type' : 'application/json'
        }
    }).then(data => data)
},
};

export default ProductService;
