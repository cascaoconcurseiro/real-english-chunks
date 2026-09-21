# Arquitetura, dados e progressão

## Domínios principais

### Conteúdo

- `chunks`: identidade editorial e texto canônico.
- `chunk_variants`: exemplos, dialetos, registros e contextos.
- `audio_assets`: voz, sotaque, velocidade, licença, arquivo e versão.
- `grammar_notes`: explicações graduadas por nível.
- `skills`: competências linguísticas e comunicativas.
- `chunk_skill_map`: peso de cada competência no item.
- `prerequisites`: relações entre chunks e habilidades.
- `content_sources`: origem, evidência e direitos de uso.
- `content_versions`: histórico e status editorial.

### Aprendizagem

- `learner_profiles`: nível, objetivo, disponibilidade e preferências.
- `review_states`: estado atual do agendamento por usuário e chunk.
- `review_events`: histórico imutável de respostas.
- `learning_sessions`: início, interrupção, retomada e conclusão.
- `skill_mastery`: estimativa de domínio por competência.
- `placement_attempts`: diagnóstico e reavaliação.
- `user_chunks`: conteúdo próprio, favoritos, suspensos e observações.

### Operação

- `editorial_reviews`: aprovação linguística e pedagógica.
- `audit_log`: alterações administrativas relevantes.
- `feature_flags`: liberação gradual.
- `content_metrics`: dificuldade observada, ambiguidade e taxa de lapsos.

## Máquina de estados de um chunk do aluno

`unseen → learning → review → mature`

Falha relevante pode levar a `relearning`. O aluno também pode mover um item para `suspended`. Os estados são determinados por eventos de revisão e regras explícitas, não por alterações visuais no cliente.

## Seleção da próxima atividade

Ordem inicial recomendada:

1. Itens atrasados em reaprendizagem.
2. Revisões vencidas.
3. Itens em aprendizagem com passo curto.
4. Conteúdo novo dentro do limite diário.
5. Prática de transferência ou escuta para competências frágeis.

O seletor deve considerar carga diária, relação entre itens, objetivo do aluno, fadiga, nível e variedade. Não deve simplesmente retornar o primeiro elemento de um array.

## Progressão de nível

### Cobertura

O aluno precisa encontrar uma proporção suficiente das funções e competências do nível.

### Retenção

Chunks maduros devem manter retenção observada próxima da meta configurada.

### Transferência

O aluno precisa compreender e produzir padrões em exemplos não memorizados.

### Escuta e fala

Deve haver evidência separada de compreensão auditiva e recuperação oral. Leitura isolada não comprova fluência.

### Diagnóstico

Avaliações curtas recalibram lacunas. O nível exibido pode ter subníveis por habilidade.

## Expansão automática com supervisão

O sistema não deve “inventar e publicar” chunks sozinho. A automação pode:

1. detectar lacunas de frequência, função, nível ou tema;
2. propor candidatos a partir de corpus e fontes autorizadas;
3. deduplicar variantes semânticas;
4. sugerir metadados, exemplos e notas;
5. executar verificações linguísticas automáticas;
6. encaminhar para revisão humana;
7. publicar somente conteúdo aprovado e versionado;
8. acompanhar métricas e retirar itens problemáticos.

## Agendamento

O protótipo usa dificuldade e estabilidade simplificadas. O produto deverá adotar uma implementação testada de FSRS ou algoritmo equivalente, com:

- parâmetros versionados;
- retenção desejada configurável;
- histórico suficiente para recalibração;
- tratamento explícito de lapsos;
- previsão de carga;
- testes contra exemplos conhecidos;
- migração segura quando o algoritmo mudar.

Não chamar uma fórmula aproximada de FSRS sem equivalência verificada.

## API

- Todas as ações de escrita validam identidade no servidor.
- O servidor deriva o usuário da sessão; nunca aceita `userId` do cliente.
- Payloads têm esquema, limites e mensagens de erro consistentes.
- Eventos de revisão usam chave idempotente para evitar duplicação.
- Operações concorrentes definem estratégia de conflito.
- Endpoints administrativos exigem papéis separados.

## Segurança mínima

- isolamento por usuário em todas as consultas;
- autorização por objeto;
- rate limiting;
- proteção contra CSRF conforme o modelo de autenticação;
- sanitização de conteúdo autoral;
- política de upload e verificação de MIME;
- logs redigidos;
- backups e restauração testados;
- dependências atualizadas e auditadas;
- nenhuma chave secreta no frontend ou repositório.

## Observabilidade

- taxa de erro por rota;
- latência das filas e gravações;
- falhas de áudio;
- sessões abandonadas;
- divergência entre retenção prevista e observada;
- itens com lapsos ou denúncias anormais;
- migrações, versões de conteúdo e algoritmo associadas aos eventos.
