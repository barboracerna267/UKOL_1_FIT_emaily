
const myname=prompt('Zadejte křestní jméno bez diakritiky:');
const surname=prompt('Zadejte příjmení bez diakritiky:');
const domain= 'fit.cvut.cz'
const atsign= '@'

myname.trim();
surname.trim();
myname.slice(0, 2);
surname.slice(0, 4);


document.body.innerHTML =
  `<h2>Váš e-mail:</h2>` + surname.slice(0, 5) + myname.slice(0, 3) + atsign + domain;