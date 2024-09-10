### HTTP
**H**: Hyper
**T**: Text
**T**: Transfer
**P**: Protocol

Traduzindo do literal, é um Protocolo de Transferência de Hyper Texto, sendo um **Hyper Text** o nome para arquivos de texto linkados a outros arquivos de texto, que juntos formam um "textão", podendo se comparar no mundo real a um livro que referencia um outro livro e no mundo web a um arquivo de texto `.html` que referencia um arquivo de texto `.css`.

Outros detalhes a respeito do protocolo HTTP é que é um protocolo **Stateless**, ou seja, não armazena ou atribui estado a nenhuma comunicação entre `Client -> Servidor`, fazendo com que toda comunicação seja sempre como a primeira. Claro que é possível realizar o envio de Session, Tokens, Users e etc por meio de Headers e Cookies para que o Servidor devolva informações armazenadas em sua memória, mas nunca aramazenados na conexão/comunicação. 

```
.html -\
        |-> arquivo de texto  .css 
        |-> arquivo de texto  .js
        |-> arquivo de texto  .php
        |-> arquivo de text   .json
        |-> imagem            .png

```

#### Exemplo de uma Requisição HTTP:

Cliente requisita o recurso `/index.html` do endereço `banana.com` e o Servidor o responde com o arquivo de texto .html com sucesso (`200 OK`)
```
Cliente ---------------------------------> Servidor
        GET www.banana.com/index.html

Cliente <--------------------------------- Servidor
                200 OK
                "<html>
                  <head>
                    <title>Banana</title>
                  </head>
                  <body>
                    <h3>Banana</h3>
                  </body>
                </html>"
```
