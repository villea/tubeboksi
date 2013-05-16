var que = [],
    _ = require("underscore");;

exports.clear = function (){
	que = [];
};

exports.add = function (item){
	que.push(item);
};

exports.current = function (){
	return _.first(que);
};

exports.list = function (){
	return que;
};

exports.pop = function (){
	que.pop();
};