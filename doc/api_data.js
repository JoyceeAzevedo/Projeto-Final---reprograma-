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
            "description": "<p>usuarios e cumpom cadastrado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n[{    \n\"nome\": \"Teste\",\n\"cpf\": 123456,\n\"email\": \"Teste\",\n\"senha\": \"Teste\",\n\"cupom\": \"Teste\",\n\"pontos\": \"teste\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuario-route.js",
    "groupTitle": "Usuarios"
  }
] });
