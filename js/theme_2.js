var theme = document.getElementById('theme');
theme.onclick = function theme() {
	var theme = document.getElementById('theme');
	var head = document.getElementsByTagName('head')[0];
	var black = document.createElement("link");
	if (theme.innerHTML == "Темная тема") {
		localStorage.setItem('theme', 'black');
		black.setAttribute('id', 'black');
		black.href = "css/styleNewsBlack.css";
		black.rel = "stylesheet";
		black.type = "text/css";
		head.appendChild(black);
		theme.innerHTML = "Светлая тема"; 
	}else{
		document.getElementById("black").remove();
		theme.innerHTML = "Темная тема"
		localStorage.setItem('theme', 'white');
	}
}