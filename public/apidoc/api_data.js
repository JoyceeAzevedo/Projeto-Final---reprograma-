define({ "api": [
  {
    "type": "get",
    "url": "/usuarioRoute",
    "title": "",
    "name": "GetUsuarios",
    "group": "Usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Retorna",
            "description": "<p>todos os usuarios cadastrados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n[{    \n\"nome\": \"Teste\",\n\"cpf\": 123456,\n\"email\": \"teste@teste.com.br\",\n\"senha\": \"Teste\",\n\"cupom\": \"Teste\",\n\"pontos\": \"teste\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuario-route.js",
    "groupTitle": "Usuarios"
  },
  {
    "type": "POST",
    "url": "/usuarioRoute",
    "title": "",
    "name": "POST_Usuarios",
    "group": "Usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Cadastra",
            "description": "<p>usuário e gera cupom de forma aleatória</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n[{    \n\"nome\": \"Teste\",\n\"cpf\": 123456,\n\"email\": \"teste@teste.com.br\",\n\"senha\": \"Teste\",\n\"cupom\": \"MELI2020REPRO\",\n\"pontos\": \"teste\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuario-route.js",
    "groupTitle": "Usuarios"
  },
  {
    "type": "PUT",
    "url": "/usuarioRoute",
    "title": "",
    "name": "POST_Usuarios",
    "group": "Usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Atualiza",
            "description": "<p>informações dos usuários cadastrados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n[{    \n\"nome\": \"Teste\",\n\"cpf\": 123456,\n\"email\": \"teste@teste.com.br\",\n\"senha\": \"Teste\",\n\"cupom\": \"MELI2020REPRO\",\n\"pontos\": \"teste\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuario-route.js",
    "groupTitle": "Usuarios"
  },
  {
    "type": "PUT",
    "url": "router.put(\"/:id\",",
    "title": "controller.put),",
    "name": "PUT_Usuarios",
    "group": "Usuarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "Atualiza",
            "description": "<p>informações do cupom caso usuário ja tenha cadastrado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n[{    \n\"nome\": \"Teste\",\n\"cpf\": 123456,\n\"email\": \"teste@teste.com.br\",\n\"senha\": \"Teste\",\n\"cupom\": \"MELI2020REPRO\",\n\"pontos\": \"teste\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuario-route.js",
    "groupTitle": "Usuarios"
  }
] });
