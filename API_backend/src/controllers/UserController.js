let users = [];
let id_user = 1;

// Função para cadastro

module.exports = class UserController {
  static async createUser(req, res) {
    const { nome, email, telefone, senha } = req.body;

    if (!nome || !email || !telefone || !senha) {
      return res
        .status(400)
        .json({ error: "Todos os campos devem ser preenchidos" });
    } 
    else if (isNaN(telefone) || telefone.length !== 11) {
      return res.status(400).json({
        error: "Telefone inválido. Deve conter exatamente 11 dígitos numéricos",
      });
    } 
    else if (!email.includes("@")) {
      return res.status(400).json({ error: "Email inválido. Deve conter @" });
    }

    // Verifica se já existe um usuário com o mesmo CPF
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return res.status(400).json({ error: "Email já cadastrado" });
    }

    // Cria e adiciona novo usuário
    const newUser = { id: id_user++, nome, email, telefone, senha };
    users.push(newUser);

    return res
      .status(201)
      .json({ message: "Usuário criado com sucesso", user: newUser });
  }

  // Função para login POST

  // função para alteração PUT

  // Função para exclusão DELETE
};
