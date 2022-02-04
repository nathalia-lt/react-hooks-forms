import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");

  function handleFirstNameChange(event){
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event){
    setLastName(event.target.value);
  }

//after you create ParenteComponent,
//then form can became

//import React from "react";(without the { userState })

// function Form({
//   firstName,
//   lastName,
//   handleFirstNameChange,
//   handleLastNameChange,
// }) {



  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
