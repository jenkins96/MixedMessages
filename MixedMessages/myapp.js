//  Properties
let myProps = {
	button: document.querySelector("#mybutton"),
	display: document.querySelector("#displayMessage"),
	subject: ["Mario", "Raul", "Bilma", "Robert", "Halsey"],
	verb: [" took", " fucked", " ate", " mixed", " ran"],
	noun: [" the milk", " my car", " the soup", " my notebook", " the t-shirt"]

}

//  Methods
let myMethods = {

	init(){

        myProps.button.addEventListener("click", myMethods.generateMessage)
        
	},
	generateMessage(){

		myProps.display.innerHTML = myMethods.generateSubject() + myMethods.generateVerb() + myMethods.generateNoun();
    
    },
    generateIndex( arr ){
        
        return Math.floor(Math.random() * arr.length);

    },
    generateSubject(){

        let randomNumber = myMethods.generateIndex(myProps.subject);
        return myProps.subject[ randomNumber ];

    },
     generateVerb(){

        let randomNumber = myMethods.generateIndex(myProps.verb);
        return myProps.verb[ randomNumber ];

    },
     generateNoun(){

        let randomNumber = myMethods.generateIndex(myProps.noun);
        return myProps.noun[ randomNumber ];

    }
}
myMethods.init();