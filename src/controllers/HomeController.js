import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoaluno = await Aluno.create({
      nome: 'joao',
      sobrenome: 'marcos',
      email: 'joao@gmail.com',
      idade: 25,
      peso: 88,
      altura: 1.80,
    });
    res.json(novoaluno);
  }
}

export default new HomeController();
