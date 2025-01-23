# PROJECT MANAGER
# Projeto de Gerenciamento de Projetos

Este projeto é uma aplicação web desenvolvida para gerenciar projetos e suas respectivas ações. Ele inclui funcionalidades como listar, favoritar e deletar projetos, utilizando Vue 3, Pinia, e Vuetify no front-end utilizando salvamento local.

## Tecnologias Utilizadas

- **Vue 3**: Framework JavaScript progressivo para construção de interfaces de usuário.
- **Pinia**: Gerenciamento de estado simples e intuitivo.
- **Vuetify**: Biblioteca de componentes de interface baseada em Material Design.
- **TypeScript**: Tipagem estática para maior segurança e escalabilidade.

## Funcionalidades Principais

- **Listagem de Projetos**:
  - Exibição de todos os projetos cadastrados.
  - Opção de filtrar projetos favoritos.

- **Favoritar Projetos**:
  - Marcar ou desmarcar um projeto como favorito.

- **Deleção de Projetos**:
  - Confirmação de deleção por meio de um diálogo modal.

- **Criação de Projetos**:
  - Criação de novos projetos com os dados:
    - Nome do projeto
    - Nome do Cliente
    - Data de início
    - Data de fim
    - Imagem de capa do projeto

- **Barra de busca**:
  - Realiza busca nos projetos ao digitar ao menos 3 letras.
  - Mostra seu histórico recente de busca.
  - Mostra um `highlight` da palavra pesquisada.

- **Filtro**:
  - Filtro para mostrar apenas os favoritados

- **Ordenação da listagem**:
  - Selecionar o tipo de ordenação:
    - Ordem alfabética (padrão).
    - Projetos iniciados mais recentemente.
    - Projetos próximos à data de finalização.

## Estrutura do Projeto

A estrutura principal do projeto está organizada da seguinte forma:

```
project-manager/
├── components/
│   ├── ConfirmationDialog.vue
│   ├── ProjectsList.vue
│   └── Empty.vue
├── store/
│   └── projects.ts
├── interfaces/
│   └── project.ts
├── composables/
│   └── useI18n.ts
├── App.vue
└── main.ts
```

### Principais Componentes

- **AppBar.vue**:  Barra de navegação localizada no topo da aplicação, contendo título e opções de navegação.

- **AppButton.vue**: Botão reutilizável com diferentes variantes de estilo.

- **SearchBa.vuer**: Barra de busca com funcionalidade de autocomplete, histórico recente e destaque da palavra pesquisada nos resultados.
- **FormInput.vue**: Componente de entrada reutilizável para formulários, com validação integrada.
- **DateInput.vue**: Campo personalizado para seleção de datas, com suporte a range de datas e validações.
- **PhotoUploader.vue**: Componente para upload de imagem, utilizado na criação de projetos para definir uma imagem de capa.
- **ConfirmationDialog.vue**: Modal de confirmação para ações como remoção de projetos.

### Gerenciamento de Estado

- **Pinia**: O store `projects` gerencia a lista de projetos e seus estados (favoritos, filtragem, etc.).

## Instalação e Configuração

1. Clone o repositório:

   ```bash
   git clone git@github.com:thayanebatista/project-manager.git
   cd project-manager
   ```

2. Instale as dependências:

   ```bash
   yarn install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   yarn dev
   ```

4. Acesse a aplicação em `http://localhost:8080`.

## Como Usar

1. **Listar Projetos**: Os projetos cadastrados serão exibidos na tela inicial.
2. **Favoritar**: Clique no ícone de estrela para marcar um projeto como favorito.
3. **Deletar**: Clique no botão de lixeira para abrir o diálogo de confirmação antes de deletar.

## Personalização

- As traduções estão configuradas usando o composable `useI18n`. Você pode adicionar ou alterar textos diretamente no arquivo correspondente.

## Contribuição

Sinta-se à vontade para abrir issues ou pull requests. Para contribuições maiores, crie uma branch separada e descreva claramente suas alterações.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---
> English

# PROJECT MANAGER
# Project manager Application

This project is a web application developed to manage projects and their respective actions. It includes features such as listing, favoriting, and deleting projects, using Vue 3, Pinia, and Vuetify on the front end with local storage.

## Technologies Used

- **Vue 3**: A progressive JavaScript framework for building user interfaces.
- **Pinia**: Simple and intuitive state manager.
- **Vuetify**: A Material Design-based component library.
- **TypeScript**: Static typing for enhanced safety and scalability.

## Key Features

- **Project Listing**:
  - Displays all registered projects.
  - Option to filter favorite projects.

- **Favorite Projects**:
  - Mark or unmark a project as a favorite.

- **Project Deletion**:
  - Deletion confirmation via a modal dialog.

- **Project Creation**:
  - Create new projects with the following details:
    - Project name
    - Client name
    - Start date
    - End date
    - Project cover image

- **Search Bar**:
  - Searches projects by typing at least 3 letters.
  - Displays recent search history.
  - `Highlights` the searched term.

- **Filter**:
  - Filter to display only favorited items.

- **Sorting of the list**:
  - Select the sorting type:
    - Alphabetical order (default).
    - Most recently started projects.
    - Projects nearing their completion date.

## Project Structure

The main project structure is organized as follows:

```
project-manager/
├── components/
│   ├── ConfirmationDialog.vue
│   ├── ProjectsList.vue
│   └── Empty.vue
├── store/
│   └── projects.ts
├── interfaces/
│   └── project.ts
├── composables/
│   └── useI18n.ts
├── App.vue
└── main.ts
```

### Key Components

- **AppBar.vue**: Navigation bar located at the top of the application, containing the title and navigation options.

- **AppButton.vue**: Reusable button with different style variants.

- **SearchBar.vue**: Search bar with autocomplete functionality, recent search history, and search term highlighting in results.
- **FormInput.vue**: Reusable input component for forms with built-in validation.
- **DateInput.vue**: Custom field for selecting dates, supporting date ranges and validations.
- **PhotoUploader.vue**: Component for uploading images, used to define a project cover image during project creation.
- **ConfirmationDialog.vue**: Modal for confirming actions such as project deletion.

### State manager

- **Pinia**: The `projects` store manages the list of projects and their states (favorites, filtering, etc.).

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone git@github.com:thayanebatista/project-manager.git
   cd project-manager
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

4. Access the application at `http://localhost:8080`.

## How to Use

1. **List Projects**: Registered projects will be displayed on the home screen.
2. **Favorite**: Click the star icon to mark a project as a favorite.
3. **Delete**: Click the trash icon to open the confirmation dialog before deleting.

## Customization

- Translations are configured using the `useI18n` composable. You can add or modify texts directly in the corresponding file.

## Contribution

Feel free to open issues or pull requests. For larger contributions, create a separate branch and clearly describe your changes.

## License

This project is licensed under the [MIT License](LICENSE).

