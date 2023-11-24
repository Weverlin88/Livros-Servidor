
const { Injectable } = require('@nestjs/common');

@Injectable()
class ControleEditoraService {
  editoras = [
    {
      id: 1,
      nome: '',
      endereco: '',
      },
      {
        id: 2,
        nome: '',
        endereco: ''    
      }
  ];

  getEditoras() {
    return this.editoras;
  }

  getNomeEditora(codEditora) {
    return this.editoras
      .filter(editora => editora.codEditora === codEditora)
      .map(editora => editora.nome)[0];
  }
}

module.exports = ControleEditoraService;
