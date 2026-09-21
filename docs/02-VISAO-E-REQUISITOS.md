# Visão e requisitos do produto

## Visão

REAL ENGLISH é uma plataforma de aprendizagem de inglês de A1 a B2 baseada em chunks de alta utilidade. O objetivo não é fazer o aluno reconhecer regras isoladas, mas compreender, recuperar e reutilizar blocos reais da língua em fala, escuta, leitura e escrita.

## Problema do usuário

O aluno consegue compreender parte do inglês, mas trava ao falar, esquece palavras e não transforma conhecimento passivo em produção espontânea. Cursos tradicionais frequentemente separam vocabulário, gramática, pronúncia e conversação. O produto deve uni-los ao redor de unidades reutilizáveis de linguagem.

## Proposta de valor

- Inglês real e contextualizado.
- Compreensão antes da tradução.
- Memória de longo prazo por repetição espaçada e recuperação ativa.
- Gramática apresentada dentro de padrões úteis.
- Progressão de A1 a B2 baseada em domínio demonstrado.
- Pronúncia e fala conectada desde o início.
- Vocabulário de alta frequência sem limitar o curso a palavras isoladas.

## Público inicial

- Adultos brasileiros entre A1 e B2.
- Pessoas com vocabulário passivo maior que a capacidade de fala.
- Estudantes que consomem vídeos em inglês e salvam frases reais.
- Usuários familiarizados ou interessados em Anki e revisão espaçada.

## Requisitos funcionais

### Conta e perfil

- Identidade individual e isolamento de dados por usuário.
- Nível inicial, objetivo, dialeto, disponibilidade diária e foco configuráveis.
- Histórico de estudo e continuidade entre sessões e dispositivos.

### Catálogo de chunks

- Pelo menos 1.000 chunks úteis como primeiro marco editorial; o catálogo pode crescer além disso.
- Cobertura A1, A2, B1 e B2.
- Metadados: nível, significado contextual, função comunicativa, padrão, registro, tema, frequência, gramática, pronúncia, áudio, variante regional, fonte e versão editorial.
- Inclusão planejada de contrações, collocations, sentence frames, phrasal verbs, expressões coloquiais, respostas rápidas, discourse markers, slang controlada e inglês profissional cotidiano.
- Conteúdo revisado editorialmente; geração automática nunca publica diretamente.

### Estudo

- Frente em inglês, sem tradução antecipada.
- Revelação voluntária de significado, uso, padrão e nota gramatical.
- Reprodução de áudio natural e áudio lento quando pedagogicamente útil.
- Autoavaliação semelhante ao Anki: errei, difícil, bom e fácil.
- Exercícios de compreensão, cloze, escuta, reconstrução, produção oral e escolha contextual.
- Sessões interrompíveis e recuperáveis.

### Revisão e memória

- Fila separando chunks novos, em aprendizagem, revisão e reaprendizagem.
- Agendamento adaptativo baseado em estabilidade, dificuldade, lapsos e retenção desejada.
- Limites diários configuráveis.
- Enterrar cartões relacionados no mesmo dia.
- Suspender, adiar, reiniciar e marcar chunks.
- Estatísticas de retenção, carga futura, lapsos e maturidade.
- Parâmetros avançados escondidos por padrão para não sobrecarregar iniciantes.

### Progressão

- Grafo de pré-requisitos e competências, não apenas ordem numérica.
- Diagnóstico inicial e reavaliações periódicas.
- Liberação de conteúdo baseada em cobertura, retenção e desempenho em produção.
- Revisão intercalada entre temas e estruturas.
- Promoção de nível nunca baseada apenas em leitura ou quantidade de cards vistos.

### Conteúdo próprio

- Possibilidade futura de salvar uma frase real encontrada em vídeo.
- Registro da frase original, fonte, timestamp, significado e chunk central.
- Detecção de duplicidade para evitar explosão de cards.
- Sugestão de fundir a nova frase a um chunk já conhecido quando apropriado.

### Administração editorial

- Criar, revisar, versionar, aprovar, despublicar e substituir chunks.
- Fluxo separado entre rascunho gerado, revisão linguística e publicação.
- Auditoria de alterações e capacidade de rollback.
- Métricas por item para identificar conteúdo ambíguo ou mal calibrado.

## Requisitos não funcionais

- Responsividade pensada por tarefa, não apenas redução de colunas.
- Navegação por teclado, contraste adequado, foco visível e leitores de tela.
- Carregamento rápido e funcionamento resiliente em conexões móveis.
- Proteção contra acesso cruzado entre usuários.
- Validação no servidor e limites de taxa em ações de escrita.
- Logs sem exposição de dados pessoais ou conteúdo sensível.
- Backups, migrações reversíveis e observabilidade.
- Testes unitários, integração, acessibilidade e fluxos críticos.

## Métricas de sucesso

- Retenção prevista versus retenção observada.
- Percentual de chunks recuperados sem tradução.
- Tempo de resposta e evolução da produção oral.
- Taxa de lapsos por categoria.
- Continuidade semanal sem depender de streak punitivo.
- Capacidade de reutilizar chunks em contextos novos.
- Redução de cards duplicados.
- Conclusão de sessões e retorno após interrupção.
