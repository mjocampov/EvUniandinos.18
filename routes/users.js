var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;

var users = undefined;

/* GET all users */
function getUsersBD (fnCBK, errCBK) {
 users.find({})
    .toArray((err, data) => {
      if(err) {
        errCBK(err);
        return;
      }

      console.log("# users", data.length);

      fnCBK(data);
   });
}

router.get('/', (req, res) => {

  users = req.db_config.usersDB.users;
  function fnCBK(data) {
    res.send(data);
  }

  function errCBK(err) {
    res.send(err);
  }

  getUsersBD(fnCBK, errCBK);
});

/* GET user by mail */
function getUserDB(userMail, fnCBK, errCBK) {

  users.find({correo: userMail})
    .toArray((err, data) => {
        if(err) {
          errCBK(err);
          return;
        }

        console.log("# users", data.length);
        console.log(data[0]);

        fnCBK(data);
     });
}

router.get('/user', (req, res) => {

  users = req.db_config.usersDB.users;
  userMail = req.query.user_mail;

  function fnCBK(data) {
    res.send(data);
  }

  function errCBK(err) {
    res.send(err);
  }

  getUserDB(userMail, fnCBK, errCBK);
});

/*POST user*/
function postUserDB(new_user, fnCBK, errCBK) {
  users.insertOne(new_user, (err,res) => {
    if(err) {
      errCBK(err);
      return;
    }

    console.log(new_user+'inserted');
    fnCBK('Usuario agregado con exito');
  });
}
router.post('/', (req, res) => {
  users = req.db_config.usersDB.users;

  var user_name = req.body.name;
  var user_mail = req.body.mail;
  var user_password = req.body.password;
  var user_birthdate = req.body.birthdate;
  var user_grade = 0;
  var user_own_events = [];
  var user_events = [];
  var user_schedule = req.body.schedule;

  var new_user = {
    name: user_name,
    mail: user_mail,
    password: user_password,
    birthdate: user_birthdate,
    grade: user_grade,
    own_events: user_own_events,
    events: user_events,
    schedule: user_schedule
  };

  function fnCBK(data) {
    res.send(data);
  }

  function errCBK(err) {
    res.send(err);
  }

  postUserDB(new_user, fnCBK, errCBK);
  /*schedule:[
    {
      name:'Lunes',
      intervals: [
        {
          starTime: startTime,
          endTime: endTime,
        },
        {},
        ...
      ]
    },
    {
      name:'Martes',
      intervals: [
        ...
      ]
    },
    ...
    ]*/
});

/*UPDATE user*/
function updateUserDB(query, update_user, fnCBK, errCBK) {
  users.updateOne(query, update_user, (err,res) => {
    if(err) {
      errCBK(err);
      return;
    }

    console.log(update_user+' updated');
    fnCBK('Usuario actualizado con exito');
  });
}
router.put('/user', (req, res) => {
  users = req.db_config.usersDB.users;

  var user_name = req.body.name;
  var user_mail = req.body.mail;
  var user_password = req.body.password;
  var user_birthdate = req.body.birthdate;
  var user_grade = req.body.grade;
  var user_own_events = req.body.own_events;
  var user_events = req.body.events;
  var user_schedule = req.body.schedule;

  var update_user = {
    $set:{
      name: user_name,
      password: user_password,
      birthdate: user_birthdate,
      grade: user_grade,
      own_events: user_own_events,
      events: user_events,
      schedule: user_schedule
    }
  };

  function fnCBK(data) {
    res.send(data);
  }

  function errCBK(err) {
    res.send(err);
  }

  var query = {mail: user_mail};
  updateUserDB(query, update_user, fnCBK, errCBK);
});


module.exports = router;
