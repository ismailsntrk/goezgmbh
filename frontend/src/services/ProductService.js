const ProductService = {
  getProducts: () => {
    return fetch("/product/get", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data.status));
  },

  addProduct: (product) => {
    return fetch("/product/new", {
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
    return fetch("/product/message", {
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

    return fetch(`/product/delete/${id}`,{
        method: 'delete',
        headers: {
            'Content-Type' : 'application/json'
        }
    }).then(data => data)
},
};

export default ProductService;
