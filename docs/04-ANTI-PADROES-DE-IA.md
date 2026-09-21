# Padrões de IA que este projeto deve evitar

## Princípio

Não é possível determinar com segurança se uma interface foi feita por IA apenas por sua aparência. Os itens abaixo são sinais de concepção genérica, superficial ou incompleta que também podem ocorrer em projetos humanos. O problema não é usar IA; é aceitar plausibilidade visual como substituta de engenharia e entendimento do usuário.

## 1. Anti-padrões visuais

- Gradientes roxos, azuis e cianos usados por reflexo, sem relação com a identidade.
- Hero centralizado previsível com título gigante, subtítulo genérico e dois CTAs.
- Tudo dentro de cards arredondados com sombras suaves.
- Glassmorphism, brilhos e bordas luminosas sem função.
- Bento grids usados como linguagem universal.
- Ícones genéricos usados para preencher espaço.
- Mesma tipografia, peso e ritmo para informações de importância diferente.
- Layout excessivamente uniforme, sem hierarquia editorial.
- Dashboard, currículo, configurações e estudo tratados como variações da mesma grade.
- Textos vazios como “desbloqueie seu potencial” ou “aprenda de forma inteligente”.

### Regra de avaliação

Se logotipo, cores e textos forem removidos, o produto ainda deve conservar uma identidade e uma organização coerentes com aprendizagem de idiomas.

## 2. Anti-padrões de UX

- Projetar apenas o estado ideal da tela.
- Botões sem estados hover, pressed, disabled, focus e loading.
- Formulários sem validação, mensagem de erro e recuperação.
- Spinner sem explicar o que está acontecendo.
- Falta de feedback após uma resposta.
- Perder a sessão quando a página é recarregada.
- Não explicar por que uma resposta está errada.
- Navegação sem indicar posição, progresso ou próximo passo.
- Ações destrutivas sem confirmação ou possibilidade de desfazer.
- Configurações visuais que não persistem nem alteram o comportamento real.
- Responsividade que apenas empilha ou encolhe elementos.
- Gamificação decorativa que não melhora a aprendizagem.

## 3. Anti-padrões de animação

- Fade-in em todas as seções.
- Cards que sobem em todo hover.
- Botões que aumentam sem necessidade.
- Confetes para qualquer acerto.
- Transições lentas que atrasam o estudo.
- Movimento que não respeita `prefers-reduced-motion`.
- Animação sem continuidade espacial ou feedback de causa e efeito.

Movimento deve confirmar interação, comunicar mudança de estado, preservar contexto ou orientar atenção. Se não cumprir uma dessas funções, provavelmente é decoração.

## 4. Anti-padrões de produto gerado por IA

- Entregar uma landing page quando foi pedido um sistema.
- Criar dados fictícios e apresentá-los como catálogo real.
- Construir 12, 50 ou 96 itens e sugerir que existe progressão completa A1–B2.
- Adicionar filtros que não filtram, configurações que não salvam e gráficos sem dados.
- Usar `localStorage` como arquitetura multiusuário.
- Implementar apenas o caminho feliz.
- Misturar protótipo, MVP e produto final sem declarar o estágio.
- Inventar integrações de áudio, IA ou pagamentos sem implementá-las.
- Usar um algoritmo simplificado e chamá-lo de FSRS/Anki sem validação.
- Fazer todas as páginas em um único componente grande.
- Duplicar regras no cliente e no servidor sem fonte única.
- Não definir modelo de dados, migração, versionamento ou rollback.
- Tratar conteúdo pedagógico como array fixo dentro do frontend.
- Não criar ferramentas editoriais para expansão do catálogo.
- Não medir comportamento real do usuário.
- Não testar autorização por objeto e isolamento entre contas.

## 5. Anti-padrões pedagógicos

- Chunks inventados apenas para encaixar uma regra.
- Tradução literal apresentada como significado universal.
- Slang sem região, registro ou contexto social.
- Phrasal verbs listados sem objeto, separabilidade e exemplos.
- Pronúncia robotizada ou redução escrita sem áudio correspondente.
- Gramática longa antes do contato com a frase.
- Cards redundantes que aumentam carga sem aumentar recuperação.
- Passagem de nível por quantidade estudada.
- Conteúdo novo liberado sem respeitar carga de revisão.
- Áudio de uma única voz tratado como compreensão auditiva completa.
- Explicações iguais para A1 e B2.

## 6. Anti-padrões de engenharia

- Segredos no repositório.
- Autenticação apenas no cliente.
- IDs de usuário aceitos do corpo da requisição.
- Ausência de validação no servidor.
- Consultas sem índice para filas de revisão.
- Atualizações concorrentes sem idempotência.
- Migrações destrutivas sem backup ou plano de reversão.
- Logs contendo e-mail, token ou conteúdo sensível.
- Dependências adicionadas sem necessidade e sem auditoria.
- Falhas silenciosas em áudio, gravação ou sincronização.
- Nenhuma telemetria para erros e latência.
- Nenhum teste do comportamento realmente crítico.

## 7. Como uma equipe sênior deve trabalhar

1. Descobrir o problema e os comportamentos reais dos usuários.
2. Escrever requisitos, suposições, riscos e critérios de aceite.
3. Modelar domínio, estados, permissões e falhas antes de polir telas.
4. Construir o menor fluxo vertical completo: interface, API, dados, segurança e teste.
5. Validar com usuários e dados reais.
6. Medir, corrigir e só então expandir.
7. Manter documentação viva e decisões registradas.
8. Declarar claramente o que está pronto, parcial, simulado ou planejado.

## Perguntas obrigatórias para cada funcionalidade

- Que problema resolve?
- Qual é a fonte real dos dados?
- Quem pode executar a ação?
- O estado persiste?
- O que acontece offline, com latência, erro ou duplicação?
- Existe loading, vazio, sucesso, erro e recuperação?
- Funciona no teclado, leitor de tela e celular?
- Como será testada?
- Que métrica mostrará se ajudou?
- Como será desativada ou revertida?
