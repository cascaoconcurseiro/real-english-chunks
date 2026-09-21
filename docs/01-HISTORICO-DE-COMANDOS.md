# Histórico de comandos e decisões do idealizador

Este documento preserva os pedidos feitos durante a concepção do produto. A redação foi normalizada apenas para facilitar leitura e rastreabilidade.

## Comandos originais desta conversa

### 1. Criação inicial

> Crie um site sobre aprendizagem de inglês por chunks, do nível básico A1 ao B2. A pessoa deve estudar estruturas básicas, inclusive gramática, por meio de chunks.

### 2. Conteúdo real e método de estudo

> O site precisa ser real, com diversos chunks de acordo com as mil palavras mais usadas em inglês, cards como no Anki, explicação gramatical quando necessária e recursos de memória. Precisa usar o melhor método de estudo de idiomas. Pesquise relatos de estudantes de idiomas e poliglotas, inclusive no Reddit quando necessário, e implemente também o conteúdo do anexo.

### 3. Escala, progressão e sistema real

> Só 96 chunks é pouco. Como o sistema entenderia que deve adicionar novos chunks e fazer a progressão de nível? Preciso de um sistema real. Pesquise tudo que um sistema desse tipo deveria ter, como a IA deve planejar, como um desenvolvedor humano faria e como evitar o padrão de sistemas superficiais gerados por IA. O produto deve realmente atender à necessidade dos usuários.

### 4. Áudio, fala real e configurações

> O áudio robotizado é outro problema. É possível usar algo mais natural? Os chunks precisam vir da fala real: linguagem coloquial, slang, phrasal verbs e vocabulário útil. O aplicativo deveria ter configurações semelhantes às do Anki? Muitos usuários descrevem aplicativos superficialmente e a IA cria algo igualmente superficial. Como uma IA deve tratar isso e construir algo melhor, como programadores seniores fariam?

### 5. Autorização

> Perfeito, pode implementar.

### 6. Correção operacional

> Erro 404.

O erro foi diagnosticado como um redirecionamento de autenticação para uma rota que não existia na publicação. A versão seguinte passou a consumir a identidade fornecida pelo site privado sem depender daquela rota.

### 7. Código-fonte

> Como faço para baixar ou acessar o GitHub deste site?

### 8. Repositório escolhido

> https://github.com/cascaoconcurseiro/real-english-chunks

### 9. Documentação integral

> Envie todos os comandos que dei, o projeto e tudo que detectamos sobre padrões de IA que queremos evitar em tudo que coloquei nesta conversa.

## Decisões consolidadas

- O foco principal é fluência oral e recuperação rápida de vocabulário.
- O conteúdo deve partir de inglês real, não de frases artificiais criadas apenas para demonstrar regras.
- A unidade principal de aprendizagem é o chunk, sem abolir a gramática: ela aparece quando ajuda a compreender ou reutilizar o padrão.
- O aluno tenta compreender primeiro em inglês e só depois revela tradução e explicação.
- Os cards seguem frente/verso e evitam explosão de cartões redundantes.
- O sistema deve cobrir A1, A2, B1 e B2 com progressão explícita e mensurável.
- O catálogo deve ser substancial, alinhado a frequência, função comunicativa e relevância real.
- O sistema de revisão deve ser adaptativo, persistente e configurável.
- Áudio deve ser natural, com fala conectada e, quando útil, versões normal e lenta.
- A primeira versão não depende de conversação livre com IA, por controle de custo.
- Interface bonita não pode esconder ausência de conteúdo, regras, estados, segurança ou persistência.

## Materiais de referência mencionados

- Anexo com análise de design de IA versus design humano, UX, animação, botões e falhas de sistemas gerados superficialmente.
- Curso completo de gramática por chunks, com explicações em português, frases reais, exercícios, produção ativa e sequência por níveis.
- Relatos e métodos de estudantes de idiomas, usuários de Anki e poliglotas.

## Limite deste registro

O documento registra pedidos e decisões de produto. Ele não reproduz mensagens internas, raciocínio privado, credenciais, tokens ou dados pessoais armazenados pela aplicação.
