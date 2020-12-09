# Weather APP

Aplicativo para consultar a previsão do tempo baseado na sua localização vigente.

## Demo

![treeview do projeto](https://github.com//MatheusVilas/weather-app/blob/main/assets/demo.jpg?raw=true)

Para testar o aplicativo no device, basta acessar o link:
https://expo.io/@matsvilas/projects/weather-app

## Como Rodar o projeto

Rode os seguintes comandos:

```
$ git clone https://github.com/MatheusVilas/weather-app
$ cd weather-app
$ yarn ou npm install
$ yarn start
```

## Organização do projeto

O Projeto foi organizado pensando na escalabilidade de possíveis ferramentas e features.

![treeview do projeto](https://github.com//MatheusVilas/weather-app/blob/main/assets/treeview.png?raw=true)

1. A pasta `views` irá guardar as rotas do aplicativo e todos os arquivos dependentes que não são repetidos em outro lugar.
2. A pasta `components` irá guardar todos os elementos visuais que são repetidos entre as `views`.
3. A pasta `api` guarda toda a camada de comunicação do aplicativo com as fontes de informações.
4. A pasta `hooks` guarda o customHooks que são funções que utilizam e triggeram o life cycle do react.
5. A pasta `navigation` contém a lógica de rotas do aplicativo.

## App State

Desenvolvido pensando no possível fluxo do usuário, o Custom Hook `appState` transparece o estado atual do aplicativo, para caso o usuário tenha recusado o uso da Localização. E assim quando ele voltar para o aplicativo ao liberar o acesso irá recarregar o fluxo.

## Próximos Passos

- Teste unitários: Para garantir a integridade dos componentes e impedir a quebra da aplicação no ocaso de houver mudanças significativas na api. O teste servirá para prevenir esses possíveis erros.
- Animação: Usar animações para mudar as cores bases do aplicativo de acordo com o período que está sendo usado. E adicionar animações baseado na previsão do tempo.
- Estilos: Adicionar uma propriedade ao Text chamada de `variant` que vai definir qual a font está sendo utilizada.

## Referência de Layout

- Autor: Maulana Farhan Najib
- Twitter do Autor: https://twitter.com/maulanafaa
- Link do layout: https://www.figma.com/community/file/885501292477669105/Weather-Forecast-App
