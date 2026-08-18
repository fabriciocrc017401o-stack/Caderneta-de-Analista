# Caderneta do Analista — versão 1.4.0

Atualização com identidade visual FNS, animações dos lances, avaliação individual das decisões da arbitragem, substituições detalhadas e cronômetro baseado no relógio real, que continua correto ao sair e voltar ao aplicativo.

Aplicativo móvel para registrar e analisar partidas de futebol ao vivo.

## Recursos

- Cadastro de competição, data, local, equipes e escalações.
- Cronômetro separado para 1º e 2º tempo.
- Prorrogação com 1º e 2º tempos extras.
- Disputa de pênaltis com cobranças convertidas e perdidas.
- Registro de gols, cartões, faltas, escanteios, impedimentos, finalizações, substituições, VAR, pênaltis, lesões e anotações.
- Histórico offline salvo no próprio aparelho.
- Edição e exclusão de lances.
- Relatório estatístico e compartilhamento.

## Executar

```bash
npm install
npx expo start --tunnel
```

Abra o projeto pelo aplicativo Expo Go no Android.

## Gerar APK

```bash
npx eas-cli@latest login
npx eas-cli@latest build --platform android --profile preview
```
