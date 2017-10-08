var socket = io();
console.log("hello");



var tag_arr = ["Welcome","Service","Help"];

var field = document.getElementById('tagging');

var holder = document.getElementById('tagList');

var g;

var myFunction = function(){
	/*var data = {};
	data["hello"] = "rishab";
	socket.emit('fromfront',data);*/
	g = field.value;
	console.log(typeof(g.length));
	console.log(g.length );

	if(!(g==="")){
		tag_arr.push(g);
		makeTags();
	}

	return;
}

function makeTags(){

	var data = "";

	for(var i=0;i<tag_arr.length;i++){
		data+='<div class="col text-center" id="'+i+'"><a href="http://localhost:3030/chatwindow?tag='+tag_arr[i]+'"><button class="btn btn-warning">'+tag_arr[i]+'</button></a></div>'
	}

	holder.innerHTML = data;

}

socket.on('message',function(data){
	console.log(data);
});

/*var open = function (el){
	var temp_data = {};
	console.log(el);
	data["tag"] = tag_arr[el];
	console.log("aa gaya");
	//socket.emit('redirect',data);
}*/