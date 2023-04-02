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

const validate = (pokData) => {

  const errors = {};
  if (!pokData.name) errors.name = "name can't be empty";
  if (!regexURL.test(pokData.imageUrl))
    errors.imageUrl = "image has to be an URL";

  if(isNaN(pokData.attack)) errors.attack = "attack has to be a number"; 
  if(isNaN(pokData.defense)) errors.defense = "attack has to be a number"; 
  if(isNaN(pokData.life)) errors.life = "life has to be a number"; 
  if(isNaN(pokData.speed)) errors.speed = "speed has to be a number"; 
  if(isNaN(pokData.height)) errors.height = "height has to be a number"; 
  if(isNaN(pokData.weight)) errors.weight = "weight has to be a number"; 

  return errors;
};
export default validate;