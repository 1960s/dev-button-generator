  //tabs generator
  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }  



//syntax sperator
//parentheses can be added to avoid be added as buttons
var syn = /[\,\&\|\[\]\#\+\*\?\!\{\}]/


//var definitions
let bot, mot, sure, blur;
let pure, pot, plur;

//function definitions
function syntaxArray(content) {
let clean 
    clean = content.replace(/(\|\|)/gm, "ZZ")

        for (let br = 0; br < 100; br++) {
            clean = clean.replace(/(\[.*)(\[.*)(\[.*)\|(.*\])(.*\])(.*\])/g, "$1$2$3TT$4$5$6")
        }
        for (let br = 0; br < 100; br++) {
            clean = clean.replace(/(\[.*)(\[.*)\|(.*\])(.*\])/g, "$1$2QQ$3$4")
        }
        for (let br = 0; br < 100; br++) {
            clean = clean.replace(/(\[.*)\|(.*\])/g, "$1MM$2")
        }

        clean = clean.split(/\|/g)

        return clean
}

function protectMe(content) {
    let fub
    fub = content
        .replace(/MM/g, "QQ")
        .replace(/TT/g, "QQ")
        .replace(/</g, "AA")
        .replace(/>/g, "BB")
        .replace(/-/g, "CC")
        .replace(/'/g, "DD")
        .replace(/\(/g, "EE")
        .replace(/\)/g, "FF")
        .replace(/QQ/g, "|")
        .replace(/ZZ/g, "||")
        .split(/\b/g);

    return fub
}

function dropdown(content, color) {
    return `<span class="dropdown">
<button style="background-color: ${color}" draggable="true" class=" button drag" value="${content}:">${content}:</button>
<span class="dropdown-content">`
}

function dropdown2(content, color) {
    return `
<span class="dropdown2">
<button style="background-color: ${color}" draggable="true" class=" button drag" value="${content}:">${content
.replace(/</g, "AA")
.replace(/>/g, "BB")
.replace(/AA/g,"&#x3C;")
.replace(/BB/g,"&#x3E;")}
:
</button>
<span class="dropdown-content2">
`
}

function dropbot2(content, color) {
    return `
<span class="dropbottom2">
<button style="background-color: ${color}" draggable="true" class=" button drag" value="${content}:">${content
.replace(/</g, "AA")
.replace(/>/g, "BB")
.replace(/AA/g,"&#x3C;")
.replace(/BB/g,"&#x3E;")}
:
</button>
<span class="dropbottom-content2">
`
}


function htmlRead(content) {
    return `
	<button draggable="true" class="column button drag" value="${content};">${content
                                  .replace(/AA/g,"&#x3C;")
                                  .replace(/BB/g,"&#x3E;")
                                  .replace(/CC/g, "-")
                                  .replace(/DD/g, "'")
                                  .replace(/EE/g, "(")
                                  .replace(/FF/g, ")")
                                  };</button>`

}

function htmlRead2(content) {
    return `
	<button draggable="true" class="column button drag" value="${content};">${content
                             .replace(/</g, "AA")
                                .replace(/>/g, "BB")
                                  .replace(/AA/g,"&#x3C;")
                                  .replace(/BB/g,"&#x3E;")
                                  .replace(/CC/g, "-")
                                  .replace(/DD/g, "'")
                                  .replace(/EE/g, "(")
                                  .replace(/FF/g, ")")
                                  };</button>`

}

function sherry(content) {
    let boy
    boy = content
        .replace(/AA/g, "<")
        .replace(/BB/g, ">")
        .replace(/CC/g, "-")
        .replace(/DD/g, "'")
        .replace(/EE/g, "(")
        .replace(/FF/g, ")")

        return boy
}

