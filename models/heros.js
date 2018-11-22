var express = require('express');
var mysql = require('mysql2');
    
let Heros= {}
let Delview= {}

// get all heroes from the database
Heros.getAll = function(){
	return new Promise (function(resolve, reject){
    //create the connection to database

    const connection = mysql.createConnection({
    	host: 'localhost',
    	user: 'root',
    	database: 'myheroes',
    	password: 'ccs#1234'
    });

    let query= 'select * from superheroes where is_valid = 1';
    connection.query(query, function(err, result, fields){
    	if (err) {
    		console.log(err);
    		console.log('ERR :: fetching data from database.');
    		reject();
    	}
    	else {
    		//console.log (result);
    		//console.log (fields);
    		resolve(result);
    	}
    });
});

}

Heros.getAllStuff = function(){
	return new Promise (function(resolve, reject){
    //create the connection to database

    const connection = mysql.createConnection({
    	host: 'localhost',
    	user: 'root',
    	database: 'myheroes',
    	password: 'ccs#1234'
    });

    let query= 'select * from superheroes';
    connection.query(query, function(err, result, fields){
    	if (err) {
    		console.log(err);
    		console.log('ERR :: fetching data from database.');
    		reject();
    	}
    	else {
    		//console.log (result);
    		//console.log (fields);
    		resolve(result);
    	}
    });
});

}

Heros.view = function(viewHero){
	return new Promise (function(resolve, reject){
    //create the connection to database

    const connection = mysql.createConnection({
    	host: 'localhost',
    	user: 'root',
    	database: 'myheroes',
    	password: 'ccs#1234'
    });

    let query= `select * from superheroes where id = ${viewHero.id}`;
    connection.query(query, function(err, result, fields){
    	if (err) {
    		console.log(err);
    		console.log('ERR :: fetching data from database.');
    		reject();
    	}
    	else {
    		//console.log (result);
    		//console.log (fields);
    		resolve(result);
    	}
    });
});

}

Heros.saveNew = function(newHeroData){
	return new Promise(function(resolve,reject)
	{
		const connection = mysql.createConnection({
		host: 'localhost',
    	user: 'root',
    	database: 'myheroes',
    	password: 'ccs#1234'	
    });
		let query = `insert into superheroes (superhero, publisher, alter_ego, first_app,characters,is_valid,update_time)values('${newHeroData.superhero}','${newHeroData.publisher}','${newHeroData.alter_ego}','${newHeroData.first_app}','${newHeroData.characters}',1,'${new Date()}')`;
		connection.query(query, function(err, result, fields){
    	if (err) {
    		console.log(err);
    		console.log('ERR :: fetching data from database.');
    		reject();
    	}
    	else {
    		//console.log (result);
    		//console.log (fields);
    		resolve(result);
    	}
    });
	})
}

Heros.deleteFile = function(deleteHeroData){
	return new Promise(function(resolve,reject)
	{
		const connection = mysql.createConnection({
		host: 'localhost',
    	user: 'root',
    	database: 'myheroes',
    	password: 'ccs#1234'	
    });
		let query = `update superheroes set is_valid = 0 where id = ${deleteHeroData.id}`;
		connection.query(query, function(err, result, fields){
    	if (err) {
    		console.log(err);
    		console.log('ERR :: fetching data from database.');
    		reject();
    	}
    	else {
    		//console.log (result);
    		//console.log (fields);
    		resolve(result);
    	}
    });
	})
}

Heros.update = function(updateHeroData){
	return new Promise(function(resolve,reject)
	{
		const connection = mysql.createConnection({
		host: 'localhost',
    	user: 'root',
    	database: 'myheroes',
    	password: 'ccs#1234'	
    });
		let query = `update superheroes set superhero = ${updateHeroData.superhero}, publisher = ${updateHeroData.publisher}, alter_ego = ${updateHeroData.alter_ego}, first_app = ${updateHeroData.first_app}, characters = ${updateHeroData.characters} where id = ${updateHeroData.id}`;
		connection.query(query, function(err, result, fields){
    	if (err) {
    		console.log(err);
    		console.log('ERR :: fetching data from database.');
    		reject();
    	}
    	else {
    		//console.log (result);
    		//console.log (fields);
    		resolve(result);
    	}
    });
	})
}

module.exports = Heros;