const express = require('express');
const router = express.Router();
const Pizza = require('./model/Pizza');


require('dotenv/config');


console.log("passou aqui")

router.post('/cadastroPizza', async (req, res) => {
    try {
        const resposta = await Pizza.create({
            nome: req.body.name,
            tamanho: req.body.tamanho,
            valor: req.body.valor,
            img: req.body.img
        });

        if (resposta) {
            const response = {
                mensagem: "Pizza cadastrada com sucesso",
                PizzaCriada: {
                    Pizza: req.body.name,
                }
            }
            return res.json(response, 201);
        }
    } catch (error) {
        console.log(error);
        return res.json({ Mensagem: "Erro ao inserir no banco" }, 400);
    }
    }
);

/* 

router.post('/login', async (req, res) => {

    try {
        const resposta = await Usuario.findAll({
            where: {
                email: req.body.email,
            }
        })
        if (resposta) {
            const senha = resposta[0].password
            bcrypt.compare(req.body.password, senha, (err, result) => {
                if (result) {
                    const token = jwt.sign({
                        user_id: resposta[0].user_id,
                        name: resposta[0].name,
                        email: resposta[0].email
                    },
                        process.env.jwd_key,
                        {
                            expiresIn: "1h"
                        }
                    );
                    return res.json({ mensagem: "Autenticado com sucesso", token: token }, 200);
                }
                return res.json({ mensagem: "Falha na autenticação" }, 401);

            })
        }
    } catch (error) {
        return res.json({ mensagem: "Falha na autenticação" }, 401);
    }
}); */

module.exports = router;

