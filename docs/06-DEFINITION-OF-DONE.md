# Definition of Done

Uma funcionalidade só pode ser chamada de pronta quando os critérios aplicáveis abaixo forem atendidos.

## Produto

- Resolve um problema descrito e validável.
- Possui critérios de aceite objetivos.
- Estados vazio, loading, sucesso, erro e recuperação foram definidos.
- Textos são específicos, naturais e revisados.
- Não depende de dados fictícios apresentados como reais.

## Pedagogia

- Chunk e exemplos são naturais e adequados ao registro declarado.
- Significado é contextual e não apenas literal.
- Nota gramatical está correta e proporcional ao nível.
- Pronúncia e áudio foram revisados.
- Item possui função comunicativa, tags, fonte e pré-requisitos.
- Não duplica desnecessariamente outro card.
- Exercício mede a habilidade que afirma medir.

## Design e UX

- Hierarquia corresponde à tarefa.
- Componentes têm todos os estados de interação.
- Fluxo funciona com mouse, teclado e toque.
- Layout foi testado em celular e desktop.
- Contraste, foco, rótulos e leitura por tecnologia assistiva foram verificados.
- Animação tem função e respeita redução de movimento.
- Interrupções e retomadas preservam contexto.

## Engenharia

- Regra crítica está no servidor ou em fonte confiável única.
- Dados persistem corretamente.
- Migração foi testada e possui caminho de rollback quando necessário.
- Validação e autorização cobrem a operação.
- Concorrência e duplicidade foram consideradas.
- Erros são observáveis sem vazar informações sensíveis.
- Código não contém credenciais.

## Testes

- Testes unitários para regras puras.
- Testes de integração para banco, API e autenticação.
- Teste end-to-end do fluxo principal e da recuperação de falha.
- Testes de autorização entre dois usuários distintos.
- Verificação automática de acessibilidade.
- Build, lint e checagem de tipos passam.

## Operação

- Métrica de sucesso e alerta de falha definidos.
- Feature flag ou rollback disponível para mudanças arriscadas.
- Documentação e changelog atualizados.
- Responsável e procedimento de suporte definidos.

## Conteúdo em escala

- Importação é idempotente.
- Duplicidades são detectadas.
- Publicação exige revisão.
- Versões antigas continuam rastreáveis.
- Direitos de uso e fonte estão registrados.

## Proibido marcar como concluído

- botão sem ação real;
- configuração que não persiste;
- gráfico com números inventados;
- áudio marcado “em produção” no fluxo final;
- catálogo pequeno descrito como curso A1–B2 completo;
- fila fixa descrita como adaptação inteligente;
- autenticação simulada descrita como segurança multiusuário;
- algoritmo aproximado anunciado como implementação oficial de Anki/FSRS.
