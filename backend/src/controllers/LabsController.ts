import '../database/connection';

const Labs = ConnectionDataBase.model('labs');

module.exports = {
  async index(req, res){
    const labs = await Labs.find();

    return res.json(labs);
  }
}