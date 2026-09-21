# Estado atual e roadmap

## Estado real em setembro de 2026

O repositório contém uma fundação funcional, não o produto completo.

### Implementado

- Aplicação full-stack em Next.js/Vinext.
- Site privado com identidade por usuário fornecida pela hospedagem.
- Banco D1 e migrações.
- Tabelas de configurações, estado de revisão e eventos.
- Persistência de respostas por usuário.
- Quatro avaliações: errei, difícil, bom e fácil.
- Interface de estudo, currículo e configurações.
- Build e publicação funcionais.
- Correção do redirecionamento que causava 404.

### Parcial ou provisório

- O catálogo possui apenas **12 chunks-semente**, três por faixa A1–B2.
- O algoritmo de revisão é uma heurística simples de estabilidade e dificuldade, não FSRS validado.
- As configurações são exibidas, mas ainda não são integralmente persistidas nem aplicadas à fila.
- A fila escolhe itens de forma simplificada.
- Pronúncia está em texto aproximado; não há pipeline de áudio natural.
- Não existe diagnóstico de nível, grafo de pré-requisitos ou domínio por habilidade.
- Não existe CMS editorial.
- Não existe importação de frases de vídeos nem deduplicação.
- O link de saída é provisório.
- O README original ainda descreve principalmente o starter técnico.

### Não implementado

- Catálogo de 1.000+ chunks revisados.
- Áudio humano ou TTS neural natural.
- Exercícios variados de escuta e produção.
- Progressão automática A1–B2.
- FSRS completo e configurações avançadas do Anki.
- Estatísticas pedagógicas reais.
- Ferramentas editoriais e fluxo de aprovação.
- Aplicativo móvel/offline.
- Testes abrangentes e observabilidade de produto.

## Roadmap recomendado

### Fase 0 — Corrigir a fundação

- Reescrever README para o produto.
- Persistir e aplicar configurações.
- Separar componentes e regras do arquivo monolítico atual.
- Implementar erros, loading, retry e retomada.
- Cobrir autenticação, isolamento e revisão com testes.

### Fase 1 — Primeiro fluxo vertical real

- Modelar catálogo no banco.
- Implementar fila com estados novos/aprendizagem/revisão/reaprendizagem.
- Adotar FSRS validado.
- Criar 150–250 chunks A1 editorialmente revisados.
- Adicionar áudio natural e exercícios de compreensão.
- Medir retenção e carga.

### Fase 2 — Curso A1 completo e A2 inicial

- 400–600 chunks totais.
- Currículo e pré-requisitos.
- Diagnóstico inicial.
- Exercícios de cloze, reconstrução e resposta oral.
- Painel de progresso por habilidade.
- Ferramenta editorial interna.

### Fase 3 — A1 a B2

- Mais de 1.000 chunks com cobertura auditável.
- A2, B1 e B2 completos conforme matriz curricular.
- Diversidade de vozes e sotaques.
- Conteúdo coloquial, phrasal verbs, slang e inglês profissional com registro claro.
- Importação de frases reais e deduplicação.

### Fase 4 — Otimização

- Calibração do agendamento por dados observados.
- Experimentos controlados de onboarding e formatos de exercício.
- Modo offline e sincronização.
- Recomendações por lacuna com transparência.
- Expansão editorial assistida por IA, sempre com revisão humana.

## Critério para chamar de “sistema real”

O produto precisa executar um ciclo completo e verificável: conteúdo real → estudo → tentativa → feedback → persistência → agendamento → retomada → progressão → medição. A interface deve representar fielmente esse ciclo, sem recursos cenográficos.
