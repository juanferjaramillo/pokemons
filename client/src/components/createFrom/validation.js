// const regexEmail =
//   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
// const regexPass = new RegExp("[0-9]"); //contenga al menos un numero

// const regexURL = new RegExp('^(https?:\\/\\/)?'+ // protocol
//     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
//     '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
//     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
//     '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
//     '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

const regexURL = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
const regexName = /^[A-Za-z]*[A-Za-z][A-Za-z0-9-. _]*$/i;
const regexNumbers = /^\d+$/;

const validate = (pokData, ids = [], names =[]) => {
  const errors = {};
  let maySubmit = "yes";
  //assume everything will be ok

  if (!pokData.id || !regexNumbers.test(pokData.id)) {
    //id should exist and it should be a number
    errors.id = "id should be a numeric value";
    maySubmit = "no";
  }

  if (ids.includes(Number(pokData.id))) {
    //id should not be repeated
    errors.id = "this id already exists";
    maySubmit = "no";
  }  

  if (Number(pokData.id) <= 1010) {
    //id 
    errors.id = "enter a numeric id greater than 1010";
    maySubmit = "no";
  }

  if (!regexName.test(pokData.name)) {
    errors.name = "enter the pokemon name";
    maySubmit = "no";
  }

  if (names.includes(pokData.name.toLowerCase())) {
    //name should not be repeated
    errors.name = "this name already exists";
    maySubmit = "no";
  } 

  if (!regexURL.test(pokData.image)) {
    errors.image = "enter the URL of the pokemon image";
    maySubmit = "no";
  }

  if (isNaN(pokData.attack) || pokData.attack === "") {
    errors.attack = "enter a numeric value";
    maySubmit = "no";
  }
  if (isNaN(pokData.defense) || pokData.defense === "") {
    errors.defense = "enter a numeric value";
    maySubmit = "no";
  }
  if (isNaN(pokData.life) || pokData.life === "") {
    errors.life = "enter a numeric value";
    maySubmit = "no";
  }
  if (isNaN(pokData.speed)) {
    errors.speed = "speed has to be a number";
    maySubmit = "no";
  }
  if (isNaN(pokData.height)) {
    errors.height = "height has to be a number";
    maySubmit = "no";
  }
  if (isNaN(pokData.weight)) {
    errors.weight = "weight has to be a number";
    maySubmit = "no";
  }

  // if (pokData.type1 === "0") {
  //   errors.type1 = "enter a numeric value";
  //   maySubmit = "no";
  // }

  // if (pokData.type2 === "0") {
  //   errors.type2 = "enter a numeric value";
  //   maySubmit = "no";
  // }

  console.log("Validation errors");
  console.log(errors);

  errors.maySubmit = maySubmit;

  return errors;
};
export default validate;
