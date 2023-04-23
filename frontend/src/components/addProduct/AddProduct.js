import React, { useEffect, useState } from "react";
import ProductService from "../../services/ProductService";
import {
  FormGroup,
  Label,
  Input,
  FormText,
  ListGroup,
  Button,
  ListGroupItem,
} from "reactstrap";
import "./AddProduct.scss";
import { Link, useHistory } from "react-router-dom";
import AuthService from "../../services/AuthService";
import imageCompression from "browser-image-compression";
import Cookies from "universal-cookie";

const AddProduct = () => {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const history = useHistory();
  const [base64, setBase64] = useState();

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
    if (loading) {
      ProductService.getProducts().then((data) => setProducts(data));
      setLoading(false);
    }
  }, [loading]);

  useEffect(() => {
    setProduct({ ...product, imageStr: base64 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [base64]);

  const onChange = (e) => {
    e.preventDefault();
    setProduct({ ...product, [e.target.name]: e.target.value });
  };



  const onSubmit = (e) => {
    e.preventDefault();
    setProduct({ ...product, imageStr: base64 });

    ProductService.addProduct(product).then((data) => {
      if (data.error) {
        return alert("Hata");
      }
      alert("Ürün Eklendi");
      return window.location.reload(false);
    });
  };

  const selectChange = (e) => {
    e.preventDefault();
    setProduct({ ...product, gen: e.target.value });
  };

  const deleteProduct = async (id) => {
    await ProductService.deleteProduct(id);
    window.location.reload(false);
  };

  const changeFile = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 400,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(file, options);

      setBase64(await convertBase64(compressedFile));
    } catch (error) {
      console.log(error);
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      if (file) {
        fileReader.readAsDataURL(file);
      }
      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const logout =  () => {
    const cookies = new Cookies();
    cookies.set("access_token" , "0" , new Date(Date.now() + 1 * 100), );
     AuthService.logout();
    setTimeout(() => {
      history.push("/");
      window.location.reload(false);
    }, 300);
  };

  return (
    <div>
      {logged === true ? (
        <div className="add-product-main">
          <div className="adding-part">
            <div className="modal-content">
              <div className="modal-heading">
                <h2 className="text-center">Urun Ekle</h2>
              </div>
              <hr />
              <div className="modal-body">
                <form autoComplete="off" noValidate={false} onSubmit={onSubmit}>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-user"></span>
                      </span>
                      <input
                        onChange={onChange}
                        name="nameTR"
                        className="form-control"
                        placeholder="Ürün İsmi Türkçe"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-user"></span>
                      </span>
                      <input
                        onChange={onChange}
                        name="nameFR"
                        className="form-control"
                        placeholder="Ürün İsmi Fransızca"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-user"></span>
                      </span>
                      <input
                        onChange={onChange}
                        name="nameDE"
                        className="form-control"
                        placeholder="Ürün İsmi Almanca"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-user"></span>
                      </span>
                      <input
                        onChange={onChange}
                        name="nameSP"
                        className="form-control"
                        placeholder="Ürün İsmi İspanyolca"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-user"></span>
                      </span>
                      <input
                        onChange={onChange}
                        name="nameNL"
                        className="form-control"
                        placeholder="Ürün İsmi Felemenkçe"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <FormGroup>
                      <Input
                        onChange={selectChange}
                        type="select"
                        name="selectMulti"
                        id="exampleSelectMulti"
                      >
                        <option>Kategori Seçiniz</option>
                        <option value="meyve">Meyve</option>
                        <option value="sebze">Sebze</option>
                        <option value="ot">Yeşillik</option>
                        <option value="egzotik">Egzotik</option>
                        <option value="bakliyat">Bakliyat</option>
                        <option value="et">Et Ürünleri</option>
                        <option value="diger">Diğer</option>
                      </Input>
                    </FormGroup>
                  </div>

                  <div className="form-group">
                    <FormGroup>
                      <Label for="productImage">Ürün Fotoğrafı</Label>

                      <Input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        required={true}
                        onChange={changeFile}
                        name="file"
                        id="productImage"
                      />

                      <FormText color="muted">
                        Ürünün Fotoğraflarını yükleyiniz.
                      </FormText>
                    </FormGroup>
                  </div>
                  <div className="form-group text-center">
                    <button type="submit" className="btn btn-success btn-lg">
                      Ekle
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="listProduct">
            <ListGroup style={{ marginBottom: "10vh" }}>
              <ListGroupItem>
                <div
                  className="list-item-row"
                  style={{ justifyContent: "center" }}
                >
                  <h3>Tum Urunler</h3>
                </div>
              </ListGroupItem>
              {products.map((item) => (
                <ListGroupItem key={item._id}>
                  <div className="list-item-row">
                    <p>{item.nameTR}</p>

                    <Button onClick={() => deleteProduct(item._id)}>sil</Button>
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
          </div>
          <div style={{ marginTop: "20%" }}>
            <Button onClick={logout}>Çıkış Yap</Button>
          </div>
        </div>
      ) : (
        <div id="login">
          <h1>Giriş Yapınız</h1>
          <Link to="/admin">Giriş</Link>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
