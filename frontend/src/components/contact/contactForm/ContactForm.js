import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import "./ContactForm.scss";
import Button from "@material-ui/core/Button";
import ReCAPTCHA from "react-google-recaptcha";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { LanguageContext } from "../../language/Language";
import ProductService from "../../../services/ProductService";

const ContactForm = () => {
  const { dictionary } = useContext(LanguageContext);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal(!modal);
  const toggle3 = () => setModal2(!modal2);
  const [captcha, setCaptcha] = useState(false);
  const toggle = () => setCaptcha((prevState) => !prevState);
  const [msgAll, setMsgAll] = useState();

  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "90%",
      },
    },
  }));

  function onChange() {
    toggle();
  }

  const refleshPage = () => {
    window.location.reload(false);
  };

  const sendMail = (e) => {
    e.preventDefault();

    ProductService.newMessage(msgAll).then((data) => {
      if (data.success) {
        return toggle2();
      }
      return toggle3();
    });
  };

  const onChangeText = (e) => {
    e.preventDefault();
    setMsgAll({ ...msgAll, [e.target.name]: e.target.value });
  };

  const classes = useStyles();

  return (
    <div className="main-col">
      <form className={classes.root} onSubmit={sendMail} autoComplete="off">
        <div id="label" className="row">
          <p id="contact-box-label" className="titles">
            {dictionary.sendUsMessage}
          </p>
        </div>
        <div id="label">
          <hr id="label-hr"></hr>
        </div>

        <div id="f-row" className="row">
          <div id="items">
            <TextField
              required
              fullWidth
              onChange={onChangeText}
              label={dictionary.nameSurname}
              name="from_name"
              variant="outlined"
              inputProps={{
                maxLength: 20,
              }}
            />
          </div>
          <div id="items">
            <TextField
              required
              onChange={onChangeText}
              fullWidth
              type="email"
              label={dictionary.formMail}
              name="user_email"
              variant="outlined"
            />
          </div>
        </div>
        <div className="row">
          <TextField
            type="number"
            fullWidth
            id="text3"
            onChange={onChangeText}
            name="contact_number"
            label={dictionary.formNumber}
            variant="outlined"
            inputProps={{
              minLength: 8,
            }}
          />
        </div>
        <div className="row">
          <TextField
            required
            name="message"
            id="text4"
            fullWidth
            onChange={onChangeText}
            label={dictionary.formMessage}
            multiline
            rows={8}
            variant="outlined"
          />
        </div>
        <div className="row" id="s-row">
          <ReCAPTCHA
            sitekey="6Lfh4QwaAAAAAIExAzbuhS3ZYJFuKrz70dROzPNT"
            onChange={onChange}
          />
          {captcha === true ? (
            <Button type="submit" variant="contained" color="secondary">
              {dictionary.sendButton}
            </Button>
          ) : (
            <Button disabled variant="contained" color="secondary">
              {dictionary.sendButton}
            </Button>
          )}
        </div>
      </form>

      <Modal isOpen={modal} toggle={toggle2}>
        <ModalHeader toggle={toggle2}>{dictionary.messageSucces}</ModalHeader>
        <ModalBody>{dictionary.formMessageSuccess}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={refleshPage}>
            {dictionary.done}
          </Button>{" "}
        </ModalFooter>
      </Modal>

      <Modal isOpen={modal2} toggle={toggle3}>
        <ModalHeader toggle={toggle3}>{dictionary.messageFailed}</ModalHeader>
        <ModalBody>{dictionary.formMessageFailed}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={refleshPage}>
            {dictionary.done}
          </Button>{" "}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ContactForm;
