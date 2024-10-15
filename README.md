# BMI Calculator

Esta é uma aplicação de cálculo de **BMI** (Índice de Massa Corporal) desenvolvida com **React**, **HTML**, e **CSS**.

## Funcionalidades

- **Cálculo automático de BMI**: Insira seu peso (em kg) e altura (em cm) e obtenha automaticamente seu índice de massa corporal (BMI).
- **Máscara para altura**: Ao digitar a altura em centímetros, o valor é automaticamente formatado para metros. Por exemplo, ao digitar `170`, o valor será convertido para `1,70` m.
- **Tabela de categorias de BMI**: A aplicação exibe uma tabela que mostra as categorias de BMI com base no valor calculado.

### Categorias de BMI:

| Classificação       | BMI (kg/m²)     |
|---------------------|-----------------|
| Abaixo do peso      | Menos de 18.5   |
| Peso normal         | 18.5 - 24.9     |
| Sobrepeso           | 25.0 - 29.9     |
| Obesidade Grau I    | 30.0 - 34.9     |
| Obesidade Grau II   | 35.0 - 39.9     |
| Obesidade Grau III  | 40.0 ou mais    |

## Instalação

Siga os passos abaixo para clonar e executar o projeto localmente:

### 1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2. Instale as dependências:

Certifique-se de ter o **Node.js** e o **npm** instalados. Depois, instale as dependências do projeto:

```bash
npm install
```

### 3. Execute o projeto:

Use o seguinte comando para rodar a aplicação em um ambiente de desenvolvimento:

```bash
npm run dev
```

## Como funciona

O cálculo de BMI é feito com base nos valores de **peso** e **altura** inseridos pelo usuário. A altura é automaticamente formatada para metros ao digitar, e o BMI é calculado com a seguinte fórmula:

```js
BMI = peso (kg) / altura² (m)
```
## Tecnologias Utilizadas

- **React**: Utilizado para criar a interface da aplicação e lógica de cálculo.
- **HTML/CSS**: Estrutura e estilização da interface do usuário.
- **JavaScript**: Implementação da lógica de cálculo do BMI e manipulação da máscara de altura.

## Contribuições

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir uma _issue_ ou enviar um _pull request_.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
