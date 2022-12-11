//shorthand value array, does not include overflow and place-content
      let shorthand = ["place-content", "overflow"];

    for (let [key, value] of Object.entries(property)) {
      if (Array.isArray(value.computed)){
      shorthand.push(`${key}`)    
          }
    }



   //array to remove duplicates
let longhand = []

for (let [tag, data] of Object.entries(property)) {
	for (let j = 0; j < shorthand.length; j++) {
	
	if (tag == shorthand[j]) {
                longhand.push(data.computed)
            }
	
	}
}

longhand = longhand.join("\n").split(",").join("\n").split("\n")







let code = document.getElementById("code")

let rawcode = []
let beggar
let tester = []
let recurLength = 3

function buttonGen() {
	
//tabs generation   
rawcode.push(`
<div class="tab">
`)
	
    for (let [tabs, module] of Object.entries(category)) {
rawcode.push(`
<button  class="tablinks" onclick="openCity(event, '${tabs}')">${tabs}</button>
`)
    }
	
rawcode.push(`
</div>
`)
	
	
	

//button generation
	
	//tabs content 
    for (let [tabs, module] of Object.entries(category)) {

		rawcode.push(`<div id="${tabs}" class="tabcontent">`)
		
		//module categories
		for (let i = 0; i < module.length; i++) {
			
			rawcode.push(`
<div class="boxes">
<div class="centerMe">${module[i]}</div>
<div class="columnrows">
`)
			
			
				//property object
			    for (let [tag, data] of Object.entries(property)) {
					 if (data.groups.includes(module[i])) {
		
						 beggar = ""

                        for (let i = 0; i < shorthand.length; i++) {
                            if (tag == shorthand[i]) {
                                beggar += "shorthand"
                            }
                        }

                        for (let i = 0; i < longhand.length; i++) {
                            if (tag == longhand[i]) {
                                beggar += "longhand"
                            }

                        }

                        if (beggar == "shorthand") {
                            rawcode.push(dropdown(tag, "orange"))
                        } else if (beggar == "longhand") {
                            rawcode.push(dropdown(tag, "pink"))
                        } else if (beggar == "shorthandlonghand") {
                            rawcode.push(dropdown(tag, "green"))
                        } else {
                            rawcode.push(dropdown(tag,))
                        }
			 

						 //syntax level 1
						 let syntax1 = syntaxArray(data.syntax)
						 for (let j = 0; j < syntax1.length; j++) {
							 
							 //syntax level 2
							 let syntax2 = protectMe(syntax1[j]).filter(el => el != " ")
							 for (let k = 0; k < syntax2.length; k++) {
								 

										//syntax object
										let finder = false
										let syntaxRevert = sherry(syntax2[k])
										
                                        for (let [synTag, synData] of Object.entries(syntax))  {
											
                                            if (`<${synTag}>` == syntaxRevert) {
                                                finder = true
												
												
												if (syntax2.length <= 2){
													rawcode.push(dropdown2(syntaxRevert, "lightblue"))
													
													}
												
												else{
													
													rawcode.push(dropbot2(syntaxRevert, "lightblue"))
												}
												
                                                    

												
													//syntax level 3
                                                    let syntaxRecur1 = syntaxArray(synData.syntax)
                                                    for (let l = 0; l < syntaxRecur1.length; l++) {

														//syntax level 4
                                                        let syntaxRecur2 = protectMe(syntaxRecur1[l]).filter(el => el != " ")
                                                        for (let m = 0; m < syntaxRecur2.length; m++) {

															//finds empty buttons
                                                                if (syntaxRecur2[m] == " ") {
																
																}
															
															//value definition of syntax, everything that is not a button
                                                                else if (syn.test(syntaxRecur2[m]) || Number.isInteger(+syntaxRecur2[m])) {
                                                                    rawcode.push(`<span class="gummy">${syntaxRecur2[m]}</span>`)
                                                                } 
															
															//the rest are buttons
															else {
																
																recursion(syntaxRecur2[m], 9, syntaxRecur2.length)
                                                                    
                                                                }

                                                            }
                                                            rawcode.push("<br>")

                                                    }

                                                    rawcode.push(`</span></span>`)

                                            }

                                        }
								 
								 		for (let [synTag, synData] of Object.entries(property))  {
											
                                            if ( `<'${synTag}'>` == syntaxRevert) {
                                                finder = true
												
												if (syntax2.length <= 2){
													rawcode.push(dropdown2(syntaxRevert, "lightcoral"))
													
													}
												
												else{
													rawcode.push(dropbot2(syntaxRevert, "lightcoral"))
													
												}
												
											

												
													//syntax level 3
                                                    let syntaxRecur1 = syntaxArray(synData.syntax)
                                                    for (let l = 0; l < syntaxRecur1.length; l++) {

														//syntax level 4
                                                        let syntaxRecur2 = protectMe(syntaxRecur1[l])
                                                        for (let m = 0; m < syntaxRecur2.length; m++) {

															//finds empty buttons
                                                                if (syntaxRecur2[m] == " ") {
																
																}
															
															//value definition of syntax, everything that is not a button
                                                                else if (syn.test(syntaxRecur2[m]) || Number.isInteger(+syntaxRecur2[m])) {
                                                                    rawcode.push(`<span class="gummy">${syntaxRecur2[m]}</span>`)
                                                                } 
															
															//the rest are buttons
															else {
																
																recursion(syntaxRecur2[m], 9, syntaxRecur2.length)
                                                                    
                                                                }

                                                            }
                                                            rawcode.push("<br>")

                                                    }

                                                    rawcode.push(`</span></span>`)

                                            }

                                        }
								 
								 
								 
								 
								 
								  //finds empty buttons
								  if (syntax2[k] == " ") {
								  
								  }
								 
								  //value definition of syntax, everything that is not a button
								  else if (syn.test(syntax2[k]) || Number.isInteger(+syntax2[k])) {
									rawcode.push(`<span class="gummy">${syntax2[k]}</span>`)
								  } 
								 
								  //the rest are buttons
								  else if (!finder){
									rawcode.push(htmlRead2(syntax2[k]))
								  }
								 
								 
							 }
							 
							 rawcode.push("<br>")
							 
						 }
  
rawcode.push(`
</span>
</span>
<br>`)	
						 
						 
						 
						 
						 
						 
					 }
				}
			
			
			
rawcode.push(`
</div>
</div>
`)			
		}
		
		rawcode.push(`</div>`)
    }

	
	code.innerHTML = rawcode.join("")
}

