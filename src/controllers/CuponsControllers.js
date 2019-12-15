

const Cupons = require('../models/Cupons');




exports.Gerarcupons = (req, res) => {
  let numcumpom = Math.floor(Math.random() * 100);
  let cupom = {numcupom: numcumpom.toString()}
  let Cupom = new Cupons(cupom);
  Cupom.save()

}
  
