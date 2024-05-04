
const messageErrorInput = {
    name : ["", "Preencha esse campo."],
    birthdate : ["", "Preencha esse campo.", "É necessário ser maior de idade.", "O ano informado é superior ao ano atual."],
    email : ["", "Preencha esse campo.", "Informe um formato de email válido", "Email já está em uso"],
    phone_number : ["", "Preencha esse campo.", "Informe um número válido", "Número de telefone já está em uso"],
    cpf : [],
    cep : [],
};

export default messageErrorInput;

// Vazio - Preencha esse campo.
// Menor - É necessário ser maior de idade. 
// Erro  - Preenchimento inválido
