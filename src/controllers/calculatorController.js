const controller = {};



controller.listAntigo = (req, res) => {
 req.getConnection((error, conn) =>{
   conn.query('SELECT * FROM calculadora', (error, calculadora) => {
   if(error){
     res.json(error);
   }
   console.log(calculadora);
   res.render('calculator', {
     data:calculadora
   });
  });
 });
};



controller.update = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('UPDATE config set ?', data, (err, valores) => {
      console.log(valores)
      res.redirect('/panel');
    })
  })
};




controller.list = (req, res) => {
 req.getConnection((error, conn) =>{
   conn.query(   'SELECT valores.id as idvalores, valores.valor, invests_concorrencia.id as idinvests, invests_concorrencia.nome, invests_concorrencia.juros , matchmoney.id as idmatch, matchmoney.valor_invest as valormatch, matchmoney.prazo, matchmoney.juros as jurosmatch, config.numero_de_valores, config.prazo_min, config.prazo_max, config.prazo_salto FROM valores,invests_concorrencia, matchmoney, config;'
, (error, dados) => {
   if(error){
     res.json(error);
   }
   console.log(dados);
   res.render('painelnew', {
     data:dados
   });
  });
 });
};


controller.listCalculadoraOld = (req, res) => {
 req.getConnection((error, conn) =>{
   conn.query(   'SELECT valores.id as idvalores, valores.valor, invests_concorrencia.id as idinvests, invests_concorrencia.nome, invests_concorrencia.juros , matchmoney.id as idmatch, matchmoney.valor_invest as valormatch, matchmoney.juros as jurosmatch, config.numero_de_valores, config.prazo_min, config.prazo_max, config.prazo_salto FROM valores,invests_concorrencia, matchmoney, config;'
, (error, dados) => {
   if(error){
     res.json(error);
   }
   console.log(dados);
   res.render('calculator.ejs', {
     data:dados
   });
  });
 });
};

controller.listCalculadora = (req, res) => {

      let firstQuery = new Promise((resolve, reject) => {
        req.getConnection((error, conn) =>{
          conn.query('SELECT config.numero_de_valores, config.prazo_min, config.prazo_max, config.prazo_salto, config.juros_padrao FROM config;'
       , (error, dados) => {
          if(error){
            reject(error);
          }else {
            resolve(dados);
          }
         });
       });
      });

      let secondQuery = new Promise((resolve, reject) => {
        req.getConnection((error, conn) =>{
          conn.query('SELECT valores.valor FROM valores;'
       , (error, dados) => {
          if(error){
            reject(error);
          }else {
            resolve(dados);
          }
         });
       });
      });
      // Create promise for "model" query
      let thirdQuery = new Promise((resolve, reject) => {
        req.getConnection((error, conn) =>{
          conn.query('SELECT invests_concorrencia.id as idinvests, invests_concorrencia.nome, invests_concorrencia.juros FROM invests_concorrencia;'
       , (error, dados) => {
          if(error){
            reject(error);
          }else {
            resolve(dados);
          }
         });
       });
      });

      let fourthQuery = new Promise((resolve, reject) => {
        req.getConnection((error, conn) =>{
          conn.query('SELECT matchmoney.id as idmatch, matchmoney.valor_invest as valormatch, matchmoney.prazo, matchmoney.juros as jurosmatch FROM matchmoney;'
       , (error, dados) => {
          if(error){
            reject(error);
          }else {
            resolve(dados);
          }
         });
       });
      });
      // Run both queries at the same time and handle both resolve results or first reject
      Promise.all([firstQuery,secondQuery,thirdQuery,fourthQuery])
          .then((results) => {
            res.render('calculator.ejs', {
              data:{"config":results[0],"valores":results[1],"investimentos":results[2],"matchmoney":results[3]}
            });
              //res.send({ "make.name": results[0]});
          })
          .catch((err) => {
              // Catch error
              res.send({});
          });

};



controller.listPanel = (req, res) => {

      let firstQuery = new Promise((resolve, reject) => {
        req.getConnection((error, conn) =>{
          conn.query('SELECT config.numero_de_valores, config.prazo_min, config.prazo_max, config.prazo_salto, config.juros_padrao FROM config;'
       , (error, dados) => {
          if(error){
            reject(error);
          }else {
            resolve(dados);
          }
         });
       });
      });

      let secondQuery = new Promise((resolve, reject) => {
        req.getConnection((error, conn) =>{
          conn.query('SELECT valores.valor, valores.id as idvalores FROM valores;'
       , (error, dados) => {
          if(error){
            reject(error);
          }else {
            resolve(dados);
          }
         });
       });
      });
      // Create promise for "model" query
      let thirdQuery = new Promise((resolve, reject) => {
        req.getConnection((error, conn) =>{
          conn.query('SELECT invests_concorrencia.id as idinvests, invests_concorrencia.nome, invests_concorrencia.juros FROM invests_concorrencia;'
       , (error, dados) => {
          if(error){
            reject(error);
          }else {
            resolve(dados);
          }
         });
       });
      });

      let fourthQuery = new Promise((resolve, reject) => {
        req.getConnection((error, conn) =>{
          conn.query('SELECT matchmoney.id as idmatch, matchmoney.valor_invest as valormatch, matchmoney.prazo, matchmoney.juros as jurosmatch FROM matchmoney;'
       , (error, dados) => {
          if(error){
            reject(error);
          }else {
            resolve(dados);
          }
         });
       });
      });
      // Run both queries at the same time and handle both resolve results or first reject
      Promise.all([firstQuery,secondQuery,thirdQuery,fourthQuery])
          .then((results) => {
            res.render('painelnew.ejs', {
              data:{"config":results[0],"valores":results[1],"investimentos":results[2],"matchmoney":results[3]}
            });
              //res.send({ "make.name": results[0]});
          })
          .catch((err) => {
              // Catch error
              res.send({});
          });

};



controller.inserirvalores = (req, res) => {
  req.getConnection((error, conn) =>{
    conn.query('SELECT * FROM valores', (error, calculadora) => {
    if(error){
      res.json(error);
    }
    console.log(calculadora);
    res.render('inserirvalores', {
      data:calculadora
    });
   });
  });
};

controller.saveValores = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO valores set ?', data, (err, valores) => {
      console.log(valores)
      res.redirect('/panel');
    })
  })
};




controller.editValores = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM valores WHERE id = ?", [id], (err, rows) => {
      res.render('updatevalores', {
        data: rows[0]
      })
    });
  });
};

controller.updateValores = (req, res) => {
  const { id } = req.params;
  const newValor = req.body;
  req.getConnection((err, conn) => {
  conn.query('UPDATE valores set ? where id = ?', [newValor, id], (err, rows) => {
    res.redirect('/panel');
  });
  });
};

controller.deleteValores = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM valores WHERE id = ?', [id], (err, rows) => {
      res.redirect('/panel');
    });
  });
}





controller.inseririnvestimentos = (req, res) => {
  req.getConnection((error, conn) =>{
    conn.query('SELECT * FROM invests_concorrencia', (error, calculadora) => {
    if(error){
      res.json(error);
    }
    console.log(calculadora);
    res.render('inseririnvestimentos', {
      data:calculadora
    });
   });
  });
};

controller.saveInvestimentos = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO invests_concorrencia set ?', data, (err, valores) => {
      console.log(valores)
      res.redirect('/panel');
    })
  })
};

controller.editInvestimentos = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM invests_concorrencia WHERE id = ?", [id], (err, rows) => {
      res.render('updateinvestimentos', {
        data: rows[0]
      })
    });
  });
};

controller.updateInvestimentos = (req, res) => {
  const { id } = req.params;
  const newValor = req.body;
  req.getConnection((err, conn) => {
  conn.query('UPDATE invests_concorrencia set ? where id = ?', [newValor, id], (err, rows) => {
    res.redirect('/panel');
  });
  });
};

controller.deleteInvestimentos = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM invests_concorrencia WHERE id = ?', [id], (err, rows) => {
      res.redirect('/panel');
    });
  });
}







controller.inserirmatch = (req, res) => {
  req.getConnection((error, conn) =>{
    conn.query('SELECT * FROM matchmoney', (error, calculadora) => {
    if(error){
      res.json(error);
    }
    console.log(calculadora);
    res.render('inserirmatch', {
      data:calculadora
    });
   });
  });
};

controller.saveMatch = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO matchmoney set ?', data, (err, valores) => {
      console.log(valores)
      res.redirect('/panel');
    })
  })
};

controller.editMatch = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM matchmoney WHERE id = ?", [id], (err, rows) => {
      res.render('updateMatch', {
        data: rows[0]
      })
    });
  });
};

controller.updateMatch = (req, res) => {
  const { id } = req.params;
  const newValor = req.body;
  req.getConnection((err, conn) => {
  conn.query('UPDATE matchmoney set ? where id = ?', [newValor, id], (err, rows) => {
    res.redirect('/panel');
  });
  });
};

controller.deleteMatch = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM matchmoney WHERE id = ?', [id], (err, rows) => {
      res.redirect('/panel');
    });
  });
}


module.exports = controller;
