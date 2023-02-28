import { useState } from "react";
export default function Info({ infoFormRef ,handleStep}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState([]);

  const removeError = (inputName) =>
    setErrors(errors.filter((el) => el !== inputName));

  const isInvalid = (inputName) =>
    errors.includes(inputName) ? "errorInput" : "";

  

  function handleSubmit(event) {
    event.preventDefault();
    const nameReg = new RegExp(/[\w\s]+/);
    const emailReg = new RegExp(/[\w\s]+@[\w]+\.[\w]+/);
    const PhoneReg = new RegExp(/\+[\d]+/);
    const err = [];

    !nameReg.test(name) && err.push("name");
    !emailReg.test(email) && err.push("email");
    !PhoneReg.test(phone) && err.push("phone");
    if(err.length === 0){
        handleStep(1);
    }
    setErrors(err);
  }

  return (
    <>
      <form
        id="infoForm"
        onSubmit={(event) => {
          handleSubmit(event)
        }}
      >
        <div className="inputContainer">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            onFocus={() => removeError("name")}
            className={isInvalid("name")}
            onChange={(e) => setName(e.currentTarget.value)}
            id="name"
            type="text"
            placeholder="e.g:John Doe"
          />
          <label className="errorLabel">This field is required</label>
        </div>
        <div className="inputContainer">
          <label htmlFor="email">Email</label>
          <input
            value={email}
            onFocus={() => removeError("email")}
            className={isInvalid("email")}
            onChange={(e) => setEmail(e.currentTarget.value)}
            id="email"
            type="email"
            placeholder="e.g:Example@gmail.com"
          />
          <label className="errorLabel">This field is required</label>
        </div>
        <div className="inputContainer">
          <label htmlFor="phone">Phone Number</label>
          <input
            value={phone}
            onFocus={() => removeError("phone")}
            className={isInvalid("phone")}
            onChange={(e) => setPhone(e.currentTarget.value)}
            id="phone"
            type="text"
            pattern="\+[\d\s]+"
            placeholder="e.g:+1 234 567 890"
          />
          <label className="errorLabel">This field is required </label>
        </div>
        <button ref={infoFormRef} className="hideNone" type="submit">
          submit Info
        </button>
      </form>
    </>
  );
}
