	//tabs categories
  let grouping = {
    "HTML": {
      "metadata": ["metadata"],
      "sections": ["sections", 
                   "headers" ],
      "resource": ["block",
                   "ruby",
                   "code",
                   "reference"],
      "semantics": ["text",
                    "markup"],
      "multimedia": ["images",
                     "multimedia"],
      "lists": ["lists",
                "tables",
                "semantics"],
      "embedded": ["links",
                   "embedded",
                   "interactive",],
    },

    "FORMS": {
      "forms": ["forms"],
      "input": ["input"],
      "input-attributes": ["all",
                           "almost",
                           "numeric",
                           "global-input"],
      "global": ["global"],
    },
  }

  
    //tabs generator
  function openTab(evt, cityName) {
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







