import React, { useState, useEffect, useContext } from "react";
import "./ProductCard.scss";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Container, ListGroup, ListGroupItem, Spinner } from "reactstrap";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { LanguageContext } from "../language/Language";
import ProductService from "../../services/ProductService";
import { AuthContext } from "../../services/AuthContext";
import { Link } from "react-router-dom";
import Pagination from "./pagination/Pagination";

const ProductCard = () => {
  const authContext = useContext(AuthContext);
  const { dictionary, userLanguage } = useContext(LanguageContext);
  const [searchContent, setSearchContent] = useState("");
  const [allProducts, setAllProducts] = useState([]);
  const [searchText, setSearchText] = useState(false);
  const toggleNavbar = () => setSearchText(!searchText);
  const [load, setLoad] = useState(true);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [postPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);

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
    if (loading === true) {
      ProductService.getProducts().then((data) => setAllProducts(data));
      setPosts(allProducts);
    }
    setCurrentPage(1);
    setLoading(false);
  }, [allProducts, loading]);

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

  const loadScreen = () => {
    setTimeout(() => {
      setLoad(false);
    }, 2000);
    return <Spinner color="success" />;
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
            <ButtonGroup
              variant="contained"
              color="primary"
              aria-label="contained primary button group"
            >
              <Button variant="contained" color="primary" onClick={allItems}>
                {dictionary.productButton}
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => meyve("meyve")}
              >
                {dictionary.fruitsButton}
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={() => meyve("sebze")}
              >
                {dictionary.vegetablesButton}
              </Button>
            </ButtonGroup>
            <div id="group-two">
              <ButtonGroup>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => meyve("ot")}
                >
                  {dictionary.greensButton}
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => meyve("egzotik")}
                >
                  {dictionary.exoticButton}
                </Button>
                <Button
                variant="contained"
                color="primary"
                onClick={() => meyve("diger")}
              >
                {dictionary.digerButton}
              </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={searchTextF}
                >
                  {dictionary.fruitSearchButton}
                </Button>
               
              </ButtonGroup>
            </div>

            {searchText === true ? (
              <TextField
                style={{ marginBottom: "20px" }}
                onChange={onchangeHandler}
                id="standard-basic"
                label={dictionary.Search}
              />
            ) : null}
          </div>
        </Container>
      ) : (
        <div className="button-list">
          {authContext.isAuthenticated === true ? (
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
                  onClick={() => meyve("egzotik")}
                  action
                >
                  {" "}
                  {dictionary.exoticButton}
                </ListGroupItem>
                <ListGroupItem
                  tag="a"
                  href="#/products#1"
                  onClick={() => meyve("diger")}
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
        <div className="product-list" id="load">
          {" "}
          {loadScreen()}{" "}
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
                  <p>{nameSw(item)}</p>
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
