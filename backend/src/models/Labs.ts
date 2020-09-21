import '../database/connection';

const AdmDate = ConnectionDataBase.define('labs', {
  dia: {
    type: Sequelize.STRING,
    require: true,
  },
  tempo: {
    primaryKey: true,
    type: Sequelize.STRING,
    require: true,
  },
  professor: {
    type: Sequelize.STRING,
    foreignKey: true,
    require: true
  }

});

AdmDate.sync({force: true});