const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const port = dev ? 3000 : 80;
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare()
    .then(() => {
        const server = express();

        server.get("*", (req, res) => {
            return handle(req, res);
        });

        server.listen(port, (err) => {
            if (err) throw err;
            console.log("> Read on http://localhost:" + port)
        });
    })
    .catch((ex) => {
        console.error(ex.stack);
        process.exit(1);
    });