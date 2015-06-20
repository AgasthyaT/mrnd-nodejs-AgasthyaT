var express = require('express');
var router = express.Router();
var contacts=[];
var messages=[];
var num=0,len=0;
//var base_url = "http://localhost:3000";
//var contacts_url = base_url + "/contacts";
var bodyP=require('body-parser');
/* GET contacts */
router.get('/', function(req, res, next) {
    res.send("Hello World");	
});
router.get('/:id', function(req, res, next) {
    res.json(contacts[+(req.params.id)]);	
});

router.post('/', function(req, res, next) {
  
 contacts[num]=req.body;
    num=num+1;
  //console.log(contacts[num-1]);  
 res.json(''+(num-1));
});

router.put('/:id', function(req, res, next) {

contacts[+(req.params.id)].firstName=req.body.firstName;
//var ob2=req.body;
//for(var i in ob2)
  //  ob1[i]=ob2[i];
//contacts[+(req.params.id)]=ob1;
 res.json(contacts[+(req.params.id)]);
});
var contact1=[];
/*router.post('/:id', function(req, res, next) {
 //contact1[len]=req.body;
   // len=len+1;
 //messages[len-1]=contact1[len-1].messages;
  //console.log(contacts[num-1]);  
    len=len+1;
 res.json(''+(len-1));
});*/
/*router.get('/:id/:message', function(req, res, next) {
    res.json(contacts[+(req.params.id)]);	
});*/

module.exports = router;
