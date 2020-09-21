const Sequelize = require('sequelize');
const requireDir = require('require-dir');


const ConnectionDataBase = new Sequelize('labfmm', 'root', 'andrade.p2018', {
  host: 'localhost',
  dialect: 'mysql'
});

ConnectionDataBase.authenticate().then(function () {
  console.log('Conectado com sucesso')
}).catch(function (erro) {
  console.log('Falha ao se conectar:' + erro)
})

