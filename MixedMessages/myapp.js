//  Properties
let myProps = {
	button: document.querySelector("#mybutton"),
	display: document.querySelector("#displayMessage"),
	subject: [],
	verb: [],
	noun: []

}

//  Methods
let myMethods = {

	init(){
		myProps.button.addEventListener("click", myMethods.generateMessage)

	},
	generateMessage(){
		//console.log("Joder macho me has clickeado!");
		myProps.display.innerHTML = "Joder macho me has clickeado!"
	}
}
myMethods.init();