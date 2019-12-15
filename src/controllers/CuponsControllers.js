const Cupons = require('../models/Cupons');



exports.Gerarcupons = (req, res) => {
  let numcumpom = Math.floor(Math.random() * 100);
  let cupom = {numcupom: numcumpom.toString()}
  let Cupom = new Cupons(cupom);
  Cupom.save()


  //subindo no git
  const user = req.params.id;
  
    Usuarios.update(
      { _id: user },
      { $set: {cupons: numcumpom.toString()} },
      { upsert: true },
      function (err) {
        if (err) return res.status(500).send({ message: err });
        res.status(200).send({ message: "Atualizado com sucesso!" });
      })
  }