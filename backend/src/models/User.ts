import '../database/connection';

const UserDate = ConnectionDataBase.define('usuarios', {
  nome: {
    type: Sequelize.STRING,
    require: true,
  },
  email: {
    primaryKey: true,
    type: Sequelize.STRING,
    require: true,
  },
  disciplina: {
    type: Sequelize.STRING,
    require: true,
  },
  senha: {
    type: Sequelize.STRING
  }

});

UserDate.sync({force: true});
