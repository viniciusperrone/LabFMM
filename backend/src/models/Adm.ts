import '../database/connection';

const AdmDate = ConnectionDataBase.define('adms', {
  nome: {
    type: Sequelize.STRING,
    require: true,
  },
  email: {
    primaryKey: true,
    type: Sequelize.STRING,
    require: true,
  },
  senha: {
    type: Sequelize.STRING
  }

});

AdmDate.sync({force: true});