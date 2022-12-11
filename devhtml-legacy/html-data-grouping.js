let grouping = {
    "metadata":{

      "metadata": [
        'link',
        'title',
        'body',
        'html',
        'head',
        'style',
        'base',
        'meta',
      ],

    },

    "sections":{

      "sections":[
        'header',
        'nav',
        'main',
        'aside',
        'address',
        'article',
        'section',
        'footer',
      ],
    "headers":[
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
      ],
    },



    "resource":{

      "block":[
        'bdi',
        'bdo',
        'data',
        'wbr',
        'time',
      ],
      "ruby":[
        'rb',
        'rt',
        'rp',
        'rtc',
        'ruby',
      ],
      "code":[
        'code',
        'pre',
        'samp',
        'kbd',
      ],
      "reference":[
        'blockquote',
        'q',
        'abbr',
        'dfn',
      ],

    },


    "semantics":{

      "text":[
        'p',
        'b',
        'i',
        'sub',
        'sup',
        'br',
        'hr',
      ],
      "markup":[
        'strong',
        'em',
        'u',
        'small',
        'mark',
        'del',
        'ins',
        's',
        'var',
      ],

    },


    "multimedia":{

      "images": [ 
        'img',
        'figcaption',
      ],
      "multimedia":[
        'audio',
        'video',
        'track',
        'area',
        'map',
      ],

    },


    "lists":{

      "lists":[

      ],
      "tables":[
        'table', 
        'tr',
      ],
      "semantics":[
        'thead',
        'tbody',
        'tfoot',
        'col',
      ],

    },


    "embedded":{

      "links":[
        'a',
      ],
      "embedded":[
        'iframe',
        'object',
        'param',
        'picture',
        'source',
        'canvas',
        'noscript',
        'script'
      ],
      "interactive":[
        'details',
        'dialog',
        'summary',
      ],

    },

    "forms":{

      "forms":[

      ],

    },

    "input":{

      "input":[
      ],

    },

    "input-attributes":{

      "all":[
      ],

"almost":[
      ],
"numeric":[
      ],
"global-input":[
      ],
    },

    "global":{

      "global":[
      ],

    },
}






/*
for (let [key, erty] of Object.entries(big)) {

if(key.includes('input')){
    Object.defineProperty(big, key.replace(/input type=\'(.+)\'/gm, "$1"),
        Object.getOwnPropertyDescriptor(big, key));
        big[key].value = key.replace(/input type=\'(.+)\'/gm, "$1")
        big[key].value = `input type="${big[key].value}"`
        big[key].groups = "input"
        big[key].subgroup = "input"
        
            delete big[key]
}



if(key.includes('&gt;')){
    Object.defineProperty(big, key.replace(/(\w+)&gt;&lt;(.+)/gm, "$1"),
        Object.getOwnPropertyDescriptor(big, key));

        big[key].value = key.replace(/(\w+)&gt;&lt;(.+)/gm, "$1")
big[key].value = `<${big[key].value}>texthere</${big[key].value}>`


  big[key].groups = "forms"
        big[key].subgroup = "forms"

    delete big[key]
   
  
}

*/










