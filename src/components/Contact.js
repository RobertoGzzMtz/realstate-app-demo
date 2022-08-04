import classes from "../css module/Contact.module.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ModalSuccess from "../components/Modal";
import useInput from "../hooks/use-input";

const Contact = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredMessageIsValid) {
    formIsValid = true;
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.value = "";

    emailjs
      .sendForm(
        "service_rbgth0s",
        "template_22jzywm",
        form.current,
        "x2SeGGFPPzfuxveeC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    if (!enteredNameIsValid) {
      return;
    }
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const messageInputClasses = messageInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <div className={classes.divControl}>
      <h1> Contact Me</h1>
      <form onSubmit={sendEmail} ref={form}>
        <div className={`${classes.contact} ${nameInputClasses}`}>
          <label htmlFor="name" />
          <input
            placeholder="Your Name"
            type="text"
            id="name"
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className={classes.errorText}>Name must not be empty.</p>
          )}
        </div>
        <div className={`${classes.contact} ${emailInputClasses}`}>
          <label htmlFor="email" />
          <input
            placeholder="Your Email"
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputHasError && (
            <p className={classes.errorText}>Please enter a valid email.</p>
          )}
        </div>
        <textarea
          className={`${classes.message} ${messageInputClasses}`}
          name="message"
          placeholder="Your Message"
          onChange={messageChangedHandler}
          onBlur={messageBlurHandler}
          value={enteredMessage}
        />
        {messageInputHasError && (
          <p className={classes.errorText}>Message must not be empty.</p>
        )}
        <button type="submit" disabled={!formIsValid}>
          Send
          {formIsValid && <ModalSuccess />}
        </button>
      </form>
    </div>
  );
};

export default Contact;
