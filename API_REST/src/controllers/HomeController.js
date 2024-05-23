import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Rosana',
      sobrenome: 'Feltrin',
      email: 'teste2@gmail.com',
      idade: 33,
      peso: 56,
      altura: 1.7,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
