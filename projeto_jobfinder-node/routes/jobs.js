const express = require ('express');
const router = express.Router();
const Job    = require('../models/Job');

router.get('/teste', (req, res) => {
    res.send('Deu certo!');
})

router.get('/add', (req, res) => {
    res.render('add');
})

//detalhe da vaga
router.get('/view/:id', (req, res) => Job.findOne({
   where: {id: req.params.id}
  
}).then(job => {

    res.render('view', {
        job
    });
}).catch(erro => console.log(erro)));

// form da rota de view

// add job via post
router.post('/add', (req, res) => {
    
    let {title, salary, company, description, email, new_job} = req.body;

    //insert
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    }).then(() => res.redirect('/')).catch(erro => console.log(erro));

});

module.exports = router