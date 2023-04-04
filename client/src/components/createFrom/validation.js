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

const validate = (pokData, setErrors) => {

  const errors = {};
  if (!pokData.id) errors.id = "enter string or numeric id greater than 1010"
  if (pokData.name === "") errors.name = "enter the pokemon name"
  if (!regexURL.test(pokData.image)) errors.image = "enter the URL of the pokemon image"

  if(isNaN(pokData.attack) || pokData.attack==="") errors.attack = "enter a numeric value" 
  if(isNaN(pokData.defense) || pokData.defense==="") errors.defense = "enter a numeric value"; 
  if(isNaN(pokData.life) || pokData.life === "") errors.life = "enter a numeric value"; 
  if(isNaN(pokData.speed)) errors.speed = "speed has to be a number"; 
  if(isNaN(pokData.height)) errors.height = "height has to be a number"; 
  if(isNaN(pokData.weight)) errors.weight = "weight has to be a number"; 
  if(isNaN(pokData.type1) || pokData.type1==="") errors.type1 = "enter a numeric value"; 
  if(isNaN(pokData.type2)) errors.weight = "type has to be a number"; 

  setErrors(errors)

  return errors;
};
export default validate;