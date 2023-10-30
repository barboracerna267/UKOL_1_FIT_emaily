
const myname=prompt('Zadejte křestní jméno bez diakritiky:');
const surname=prompt('Zadejte příjmení bez diakritiky:');
const domain= 'fit.cvut.cz'
const atsign= '@'

const email = {
  nameTrim: myname.trim(),
  surnameTrim: surname.trim(),
  nameSlice: myname.slice(0, 3),
  surnameSlice: surname.slice(0, 5),
}

document.body.innerHTML =
`<h2>Váš e-mail:</h2>` + email.surnameTrim + email.surnameSlice + email.nameTrim + email.nameSlice + atsign + domain;



