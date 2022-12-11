function recursion(stuff, x, long){
	//add a third parameter for recur length
	if(x <= 2){
	   return
	   }
//syntax object
	
	//have a conditional here and counter to control depth at the end
	//have counter of dropdown css same as depth control, may generate css dropdown as well
	
										let finder = false
										let syntaxRevert = sherry(stuff)
                                        for (let [synTag, synData] of Object.entries(syntax))  {
											
                                            if (`<${synTag}>` == syntaxRevert) {
                                                finder = true
												
												if (long <= recurLength){
													rawcode.push(`
													<span class="dropdown${x}">
<button style="background-color: lightblue" draggable="true" class=" button drag" value="${syntaxRevert}">${syntaxRevert
.replace(/</g, "AA")
.replace(/>/g, "BB")
.replace(/AA/g,"&#x3C;")
.replace(/BB/g,"&#x3E;")}
</button>
<span class="dropdown-content${x}">
`)
												
													}
												
												else{
														
													rawcode.push(`
													<span class="dropbottom${x}">
<button style="background-color: lightblue" draggable="true" class=" button drag" value="${syntaxRevert}">${syntaxRevert
.replace(/</g, "AA")
.replace(/>/g, "BB")
.replace(/AA/g,"&#x3C;")
.replace(/BB/g,"&#x3E;")}
</button>
<span class="dropbottom-content${x}">
`)	
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
                                                                    recursion(syntaxRecur2[m], x - 1, syntaxRecur2.length)
                                                                }

                                                            }
                                                            rawcode.push("<br>")

                                                    }

rawcode.push(`</span></span>`)

                                            }
											
											
										}
											
		                                        for (let [synTag, synData] of Object.entries(property))  {
											
                                            if (`<'${synTag}'>` == syntaxRevert) {
                                                finder = true
												
												if (long <= recurLength){
													rawcode.push(`
													<span class="dropdown${x}">
<button style="background-color: lightcoral" draggable="true" class=" button drag" value="${syntaxRevert}">${syntaxRevert
.replace(/</g, "AA")
.replace(/>/g, "BB")
.replace(/AA/g,"&#x3C;")
.replace(/BB/g,"&#x3E;")}
</button>
<span class="dropdown-content${x}">
`)
												
													}
												
												else{
														
													rawcode.push(`
													<span class="dropbottom${x}">
<button style="background-color: lightcoral" draggable="true" class=" button drag" value="${syntaxRevert}">${syntaxRevert
.replace(/</g, "AA")
.replace(/>/g, "BB")
.replace(/AA/g,"&#x3C;")
.replace(/BB/g,"&#x3E;")}
</button>
<span class="dropbottom-content${x}">
`)	
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
                                                                    recursion(syntaxRecur2[m], x - 1, syntaxRecur2.length)
                                                                }

                                                            }
                                                            rawcode.push("<br>")

                                                    }

rawcode.push(`</span></span>`)

                                            }
											
											
										}									
											
											
							
	
	
								  //when no recursion buttons
								  if (!finder){
									rawcode.push(htmlRead(stuff))
								  }
	
	
	
}