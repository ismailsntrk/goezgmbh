import React, { useState, useEffect, useContext } from "react";
import "./ProductCard.scss";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Container, ListGroup, ListGroupItem, Spinner , Input } from "reactstrap";
import { LanguageContext } from "../language/Language";
import ProductService from "../../services/ProductService";
import { Link } from "react-router-dom";
import Pagination from "./pagination/Pagination";
import AuthService from "../../services/AuthService";
import Cookies from "universal-cookie";

const ProductCard = () => {
  const { dictionary, userLanguage } = useContext(LanguageContext);
  const [searchContent, setSearchContent] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [searchText, setSearchText] = useState(false);
  const toggleNavbar = () => setSearchText(!searchText);
  const [load, setLoad] = useState(true);
  const [posts, setPosts] = useState([]);
  const [postPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  const [logged, setLogged] = useState(false);

  const nameSw = (item) => {
    switch (userLanguage) {
      case "tr":
        return item.nameTR;
      case "es":
        return item.nameSP;
      case "de":
        return item.nameDE;
      case "fr":
        return item.nameFR;
      case "nl":
        return item.nameNL;

      default:
        break;
    }
  };

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("access_token");
    if (token) {
      AuthService.isAuthenticated(token).then((data) =>
        data.isAuthenticated === true ? setLogged(true) : setLogged(false)
      );
    }
  }, []);



  useEffect(() => {
    ProductService.getProducts().then((data) => {
      if (load === true) {
        setAllProducts(data);
      }
    });
    setPosts(allProducts);

    setCurrentPage(1);

    return () => {
      setLoad(false);
    };
  }, [allProducts, load]);

  useEffect(() => {
    setTimeout(setPosts(allProducts), 10);
  }, [allProducts]);

  useEffect(() => {
    let filter = allProducts.filter((item) => {
      if (searchContent.length < 2) {
        setPosts(allProducts);
      }
      return (
        nameSw(item)
          .toLowerCase()
          .indexOf(
            searchContent.length >= 2 ? searchContent.toLocaleLowerCase() : ""
          ) !== -1
      );
    });

    setPosts(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchContent]);

  const sortedPosts = posts.sort(function (b, a) {
    return parseFloat(a.imdbRating) - parseFloat(b.imdbRating);
  });
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  //changePage

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const anim = () => {
    document.getElementById("card-cont").style.transition = "0s";
    document.getElementById("card-cont").style.opacity = "0.5";
    document.getElementById("card-cont").style.marginTop = "1000px";
  };

  const allItems = () => {
    setPosts(allProducts);

    anim();
    return timer();
  };

  const timer = () =>
    setTimeout(() => {
      document.getElementById("card-cont").style.transition = "0.6s";
      document.getElementById("card-cont").style.marginTop = "10px";
      document.getElementById("card-cont").style.opacity = "1";
    }, 300);

  const mobil = (genre) => {
    const filter = allProducts.filter((item) => item.gen === genre.target.value.toString());
    setPosts(filter);
    paginate(1);
    anim();
    return timer();
  };

  const meyve = (genre) => {
    const filter = allProducts.filter((item) => item.gen === genre.toString());
    setPosts(filter);
    paginate(1);
    anim();
    return timer();
  };

  const onchangeHandler = (e) => {
    e.preventDefault();
    setSearchContent(e.target.value);
  };

  const searchTextF = (e) => {
    e.preventDefault();
    setSearchContent("");
    toggleNavbar();
  };

  return (
    <div
      className="main-product-cont"
      style={{ width: "100%", backgroundColor: "#F8F9FA" }}
    >
      {window.innerWidth <= 800 ? (
        <Container>
          <div id="mobile-buttons">

         
                      <div style={{width:"50%"}}>
                      <Input
                      
                        onChange={mobil}
                        type="select"
                        name="selectMulti"
                        id="exampleSelectMulti"
                      >
                        <option value="">{dictionary.productButton}</option>
                        <option value="meyve">{dictionary.fruitsButton}</option>
                        <option value="sebze">{dictionary.vegetablesButton}</option>
                        <option value="ot">{dictionary.greensButton}</option>
                        <option value="egzotik">{dictionary.exoticButton}</option>
                        <option value="bakliyat">{dictionary.bakliyat}</option>
                        <option value="et">{dictionary.meatProducts}</option>
                        <option value="diger">{dictionary.digerButton}</option>
                      </Input>
                      </div>

                      
                   
                    <Button
                  variant="contained"
                  color="primary"
                  onClick={searchTextF}
                >
                  {dictionary.fruitSearchButton}
                </Button>
          
            </div>

            {searchText === true ? (
              <TextField
                style={{ marginBottom: "20px" }}
                onChange={onchangeHandler}
                id="standard-basic"
                label={dictionary.Search}
              />
            ) : null}
     
        </Container>
      ) : (
        <div className="button-list">
          {logged === true ? (
            <Button>
              <Link to="/add_product">Urun ekle</Link>{" "}
            </Button>
          ) : null}
          {
            <div style={{ marginTop: "25%" }}>
              <ListGroup>
                <ListGroupItem
                  active
                  tag="a"
                  href="#/products#1"
                  onClick={allItems}
                  action
                >
                  {dictionary.productButton}{" "}
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  href="#/products#1"
                  onClick={() => meyve("meyve")}
                  action
                >
                  {" "}
                  {dictionary.fruitsButton}
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  href="#/products#1"
                  onClick={() => meyve("sebze")}
                  action
                >
                  {" "}
                  {dictionary.vegetablesButton}
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  href="#/products#1"
                  onClick={() => meyve("ot")}
                  action
                >
                  {" "}
                  {dictionary.greensButton}
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  href="#/products#1"
                  onClick={() => meyve("et")}
                  action
                >
                  {" "}
                  {dictionary.meatProducts}
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  href="#/products#1"
                  onClick={() => meyve("egzotik")}
                  action
                >
                  
                  {" "}
                  {dictionary.exoticButton}
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  href="#/products#1"
                  onClick={() => meyve("bakliyat")}
                  action
                >{dictionary.bakliyat}</ListGroupItem>
                <ListGroupItem
                  tag="a"
                  href="#/products#1"
                
                  onClick={() => meyve('diger')}
                  action
                >
                  {dictionary.digerButton}
                </ListGroupItem>
              </ListGroup>
              <TextField
                style={{ marginBottom: "20px" }}
                onChange={onchangeHandler}
                id="standard-basic"
                label={dictionary.Search}
              />
            </div>
          }
        </div>
      )}
      {load === true ? (
        <div className="loading-screen">
          <div id="load">
            <div>
            Ürünler Yükleniyor
            </div>
            <div>
             
            <Spinner></Spinner>{" "}
            </div>
          </div>
        </div>
      ) : (
        <div className="product-list">
          <div id="card-cont">
            {currentPosts.map((item) => (
              <div id="main-product-cont" key={item._id}>
                <div id="part-two">
                  <img id="product-img" src={item.imageStr} alt="apple"></img>
                </div>
                <div id="part-one">
                  <p id="product-name">{nameSw(item)}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Pagination
              postsPerPage={postPerPage}
              totalPosts={posts.length}
              paginate={paginate}
            ></Pagination>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
