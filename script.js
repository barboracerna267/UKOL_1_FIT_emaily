
const myname=prompt('Zadejte křestní jméno bez diakritiky:');
const surname=prompt('Zadejte příjmení bez diakritiky:');
const domain= 'fit.cvut.cz'
const atsign= '@'

const emailVisual= {
  trimName: myname.trim().toLowerCase(),
  trimSurname: surname.trim().toLowerCase(),
}

const emailFinal = {
  sliceName: emailVisual.trimName.slice(0, 3),
  sliceSurname: emailVisual.trimSurname.slice(0, 5),
}

document.body.innerHTML =
`<h2>Váš e-mail:</h2>` + emailFinal.sliceSurname + emailFinal.sliceName + atsign + domain;



