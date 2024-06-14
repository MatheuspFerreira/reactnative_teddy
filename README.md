
# Teddy-Open

Este é o projeto Teddy-Open, um aplicativo mobile desenvolvido em React Native utilizando Expo. O aplicativo inclui diversas funcionalidades para melhorar a experiência do usuário e usa várias tecnologias modernas.

## Tecnologias Utilizadas

- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [AsyncStorage](https://github.com/react-native-async-storage/async-storage)
- [Jest](https://jestjs.io/)
- [NetInfo](https://github.com/react-native-netinfo/react-native-netinfo)
- [React Navigation](https://reactnavigation.org/)
- [Expo Application](https://docs.expo.dev/versions/latest/sdk/application/)
- [Expo Device](https://docs.expo.dev/versions/latest/sdk/device/)
- [Expo Notification](https://docs.expo.dev/versions/latest/sdk/notifications/)
- [React Native Animated](https://reactnative.dev/docs/animated)
- [React Hook Form](https://react-hook-form.com/)
- [Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)
- [React Native Toasts](https://github.com/ackee/react-native-toast-message)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://axios-http.com/)

## Funcionalidades Implementadas

### Tela de Loading
- Animação com React Native Animated.
- Verificação do estado de autenticação do usuário.
- Navegação para login, onboarding ou tela principal.

### Tela de Onboarding
- Introdução ao aplicativo na primeira execução.
- Salva o estado de visualização no AsyncStorage.

### Tela de Login
- Persistência do login utilizando credenciais do usuário.
- Armazena informações no AsyncStorage.

### Navegação Principal
- Implementação com Tab Navigation.
- Rotas:
  - **Parceiros**: Lista de parceiros com swipe para ações (editar/excluir).
  - **Empresas**: Lista de empresas similar aos parceiros.
  - **Menu**: Contém opções adicionais e navegação aninhada.

### Tela de Parceiros/Empresas
- Lista com swipeable cards usando Gesture Handler.
- Menu de ações para editar e excluir.
- Filtro e criação de novos parceiros.

### Menu
- **Privacidade**: Política de dados e gerenciamento de notificações.
- **Sobre a Aplicação**: Descrição do aplicativo e tecnologias utilizadas.
- **Opções**: (Em desenvolvimento) Funções adicionais para melhorar a usabilidade.
- **Sair**: Logout e limpeza do AsyncStorage, exceto os dados de onboarding.

### Notificações
- Projeto preparado para receber notificações locais e remotas usando Expo Notification.

## TODO / TASKS

### Funcionalidades a Serem Implementadas
1. **Opções Avançadas**:
   - Implementação de funcionalidades para melhorar a experiência do usuário.
   - Estimativa: 3 dias.

## Instruções para Configuração e Execução do Projeto

### Pré-requisitos
- Node.js
- Yarn
- Expo CLI

### Passos para Instalar e Rodar o Projeto

1. Clone o repositório:
   \`\`\`bash
   git clone https://github.com/seu-usuario/teddy-open.git
   cd teddy-open
   \`\`\`

2. Instale as dependências:
   \`\`\`bash
   yarn install
   \`\`\`

3. Execute os testes:
   \`\`\`bash
   yarn test
   \`\`\`

4. Inicie o projeto:
   \`\`\`bash
   yarn start
   \`\`\`
