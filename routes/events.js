var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;

var events = undefined;

/* GET all events */
function getEventsDB (fnCBK, errCBK) {
 events.find({})
    .toArray((err, data) => {
      if(err) {
        errCBK(err);
        return;
      }

      fnCBK(data);
   });
}

router.get('/', (req, res) => {

  events = req.db_config.eventsDB.events;

  function fnCBK(data) {
    res.send(data);
  }

  function errCBK(err) {
    res.send(err);
  }

  getEventsDB(fnCBK, errCBK);
});

/* GET event by id */
function getEventByIdDB(eventID, fnCBK, errCBK) {

  events.find({_id: eventID})
    .toArray((err, data) => {
        if(err) {
          errCBK(err);
          return;
        }

        fnCBK(data[0]);
     });
}

router.get('/event', (req, res) => {

  events = req.db_config.eventsDB.events;
  eventId = req.query.event_id;

  function fnCBK(data) {
    res.send(data);
  }

  function errCBK(err) {
    res.send(err);
  }

  getEventByIdDB(eventId, fnCBK, errCBK);
});

/*POST event*/
function postEventDB(new_event, fnCBK, errCBK) {
  events.insertOne(new_event, (err,res) => {
    if(err) {
      errCBK(err);
      return;
    }
    fnCBK('Evento agregado con exito');
  });
}
router.post('/', (req, res) => {
  events = req.db_config.eventsDB.events;

  var event_name = req.body.name;
  var event_description = req.body.description;
  var event_topic = req.body.topic;
  var event_date = req.body.date;
  var event_interval = req.body.interval;
  var event_place = req.body.place;
  var event_cupos = req.body.cupos;
  var event_grade = 0;

  var new_event = {
    name: event_name,
    description: event_description,
    topic: event_topic,
    date: event_date,
    interval: event_interval,
    place: event_place,
    cupos: event_cupos,
    grade: event_grade
  };

  function fnCBK(data) {
    res.send(data);
  }

  function errCBK(err) {
    res.send(err);
  }

  postEventDB(new_event, fnCBK, errCBK);
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
function updateEventDB(query, update_event, fnCBK, errCBK) {
  events.updateOne(query, update_event, (err,res) => {
    if(err) {
      errCBK(err);
      return;
    }

    fnCBK('Evento actualizado con exito');
  });
}
router.put('/event', (req, res) => {
  events = req.db_config.eventsDB.events;

  var id = req.body.id;
  var event_name = req.body.name;
  var event_description = req.body.description;
  var event_topic = req.body.topic;
  var event_date = req.body.date;
  var event_interval = req.body.interval;
  var event_place = req.body.place;
  var event_cupos = req.body.cupos;
  var event_grade = req.body.grade;

  var update_event = {
    $set:{
      name: event_name,
      description: event_description,
      topic: event_topic,
      date: event_date,
      interval: event_interval,
      place: event_place,
      cupos: event_cupos,
      grade: event_grade
    }
  };

  function fnCBK(data) {
    res.send(data);
  }

  function errCBK(err) {
    res.send(err);
  }

  var query = {_id: id};
  updateEventDB(query, update_event, fnCBK, errCBK);
});

module.exports = router;

