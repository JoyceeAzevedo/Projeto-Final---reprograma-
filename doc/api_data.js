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
            "description": "<p>cadastrados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n[{    \n\"nomeEstabelecimento\": \"Teste\",\n\"cnpj\": 123456,\n\"categoria\": \"Teste\",\n\"tipoNegocio\": \"Teste\",\n\"email\": \"Teste\",\n\"endereco\": \"Teste\",\n\"numero\": \"Teste\",\n\"bairro\": \"teste\",\n\"cidade\": \"Teste\",\n\"uf\": \"Teste\",\n\"cep\": 0800,\n\"diasAtendimento\": \"Teste\",\n\"horariosAtendimento\": \"Teste\"\n\"telefone\": \"teste\",\n\"delivery\": \"teste\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/usuario-route.js",
    "groupTitle": "Usuarios"
  }
] });