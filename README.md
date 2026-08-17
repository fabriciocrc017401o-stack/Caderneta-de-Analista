# Caderneta do Analista

Aplicativo pessoal para registrar partidas de futebol ao vivo.

## Recursos incluídos

- Cadastro de competição, data e times.
- Cadastro das escalações.
- Cronômetro separado para 1º e 2º tempo.
- Registro automático do minuto do lance.
- Acréscimos exibidos como 45+N e 90+N.
- Gol, escanteio, finalização, finalização no gol, defesa, amarelo, vermelho, falta, impedimento, substituição, VAR, pênalti, lesão e anotação.
- Seleção rápida dos jogadores cadastrados.
- Estatísticas atualizadas automaticamente.
- Linha do tempo.
- Edição e exclusão de lances.
- Resumo pós-jogo.
- Análise pós-jogo.
- Histórico persistente no próprio aparelho.
- Exclusão de jogos.
- Configuração EAS para gerar APK Android.

## Instalação das dependências

Use Node.js e execute:

```bash
npm install
npx expo install --fix
```

O `expo install --fix` ajuda a alinhar as versões de pacotes com o SDK Expo instalado.

## Gerar APK Android com EAS

```bash
npx eas-cli@latest login
npx eas-cli@latest build --platform android --profile preview
```

Na primeira execução, o EAS poderá solicitar a criação/vinculação do projeto e credenciais Android.

## Observação sobre os dados

Os jogos são gravados localmente usando AsyncStorage. Apagar os dados do aplicativo no Android ou desinstalá-lo pode remover esse histórico. Backup em nuvem pode ser adicionado numa próxima versão.
