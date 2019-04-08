menu.onclick = function AdaptiveMenu() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topNav") {
		x.className += " responsive";
	} else{
		x.className = "topNav"
	}
}