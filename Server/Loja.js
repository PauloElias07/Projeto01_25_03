const http = require("http");
const fs = require("fs");

function abrirArquivo(res, arquivo, tipo) {
    fs.readFile(arquivo, (erro, dados) => {

        if (erro) {
            fs.readFile("Error/404.html", (erro404, pagina404) => {
                res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
                res.end(pagina404);
            });
            return;
        }

        res.writeHead(200, { "Content-Type": tipo });
        res.end(dados);
    });
}

const servidor = http.createServer((req, res) => {

    const rota = new URL(req.url, "http://localhost:3000").pathname;

    // Página inicial
    if (rota === "/") {
        abrirArquivo(res, "index.html", "text/html; charset=utf-8");
    }

    // Páginas institucionais
    else if (rota === "/QuemSou/quemSou.html") {
        abrirArquivo(res, "QuemSou/quemSou.html", "text/html; charset=utf-8");
    }

    else if (rota === "/Produtos/principal.html") {
        abrirArquivo(res, "Produtos/principal.html", "text/html; charset=utf-8");
    }

    else if (rota === "/Perguntas/perguntas.html") {
        abrirArquivo(res, "Perguntas/perguntas.html", "text/html; charset=utf-8");
    }

    // CSS
    else if (rota === "/Assets/style.css") {
        abrirArquivo(res, "Assets/style.css", "text/css");
    }

    // Imagens
    else if (rota.startsWith("/Imagens/")) {
        abrirArquivo(res, "." + rota, "image/png");
    }

    // Produtos
    else if (rota.startsWith("/Produtos/prod1/") ||
             rota.startsWith("/Produtos/prod2/") ||
             rota.startsWith("/Produtos/prod3/")) {

        abrirArquivo(res, "." + rota, "text/html; charset=utf-8");
    }

    // Página não encontrada
    else {
        abrirArquivo(res, "Error/404.html", "text/html; charset=utf-8");
    }

});

servidor.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});