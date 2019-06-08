res.onclick = function result() {
	if (document.getElementById("block1")) {
		document.getElementById("block1").remove();
	}
	var name = ""; 
	var flag = true;
	var	block1 = document.createElement("div");
	block1.id = "block1";
	block1.className = "main_container";
	var	block2 = document.createElement("div");
	block2.className  = "container";
	var questions = document.getElementsByName('q');
	for (var i = 0; i < questions.length; i++) {
		var inputs = document.getElementsByName('q' + (i+1));
		for(var j = 0; j < inputs.length; j++) {
			if (inputs[j].checked) {
				name += inputs[j].value + "_";
				flag = false;
				break;
			}
		}
		if (flag) {
			var text = document.createElement("p");
			text.style.color = "red";
			text.innerHTML = "Пожалуйста ответьте на все вопросы!";
			block2.appendChild(text);
			block1.appendChild(block2);
			document.getElementsByTagName("main")[0].appendChild(block1);
			return;
		}	
		flag = true;
	}
	var	content = new Image();
	content.src = "Img/" + name + ".jpg";
	block2.appendChild(content);
	block1.appendChild(block2);
	document.getElementsByTagName("main")[0].appendChild(block1);
}