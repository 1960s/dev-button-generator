let elements = { 

link: 
   { attributes: 
      [ 'as',
        'crossorigin',
        'disabled',
        'href',
        'hreflang',
        'media',
        'rel',
        'sizes',
        'title',
        'type' ],
     group: 'metadata',
     subgroup: 'metadata',
     value: '<link>',
     tag: 'single' },
  $title$: //has same name attribute causing problem
   { attributes: [],
     group: 'metadata',
     subgroup: 'metadata',
     value: '<title>&#13;&#13;</title>' },
  body: 
   { attributes: [],
     group: 'metadata',
     subgroup: 'metadata',
     value: '<body>&#13;&#13;</body>' },
  html: 
   { attributes: [ 'xmlns', 'lang' ],
     group: 'metadata',
     subgroup: 'metadata',
     value: '<html>&#13;&#13;</html>' },
  head: 
   { attributes: [],
     group: 'metadata',
     subgroup: 'metadata',
     value: '<head>&#13;&#13;</head>' },
  $style$: //has same name attribute causing problem
   { attributes: [ 'media' ],
     group: 'metadata',
     subgroup: 'metadata',
     value: '<style>&#13;&#13;</style>' },
  base: 
   { attributes: [ 'href', 'target' ],
     group: 'metadata',
     subgroup: 'metadata',
     value: '<base>',
     tag: 'single' },
  meta: 
   { attributes: [ 'charset' ],
     group: 'metadata',
     subgroup: 'metadata',
     value: '<meta>',
     tag: 'single' },
  header: 
   { attributes: [],
     group: 'sections',
     subgroup: 'sections',
     value: '<header>&#13;&#13;</header>' },
  nav: 
   { attributes: [],
     group: 'sections',
     subgroup: 'sections',
     value: '<nav>&#13;&#13;</nav>' },
  main: 
   { attributes: [],
     group: 'sections',
     subgroup: 'sections',
     value: '<main>&#13;&#13;</main>' },
  aside: 
   { attributes: [],
     group: 'sections',
     subgroup: 'sections',
     value: '<aside>&#13;&#13;</aside>' },
  address: 
   { attributes: [],
     group: 'sections',
     subgroup: 'sections',
     value: '<address>&#13;&#13;</address>' },
  article: 
   { attributes: [],
     group: 'sections',
     subgroup: 'sections',
     value: '<article>&#13;&#13;</article>' },
  section: 
   { attributes: [],
     group: 'sections',
     subgroup: 'sections',
     value: '<section>&#13;&#13;</section>' },
  footer: 
   { attributes: [],
     group: 'sections',
     subgroup: 'sections',
     value: '<footer>&#13;&#13;</footer>' },
  h1: 
   { attributes: [],
     group: 'sections',
     subgroup: 'headers',
     value: '<h1>Heading1</h1>' },
  h2: 
   { attributes: [],
     group: 'sections',
     subgroup: 'headers',
     value: '<h2>Heading2</h2>' },
  h3: 
   { attributes: [],
     group: 'sections',
     subgroup: 'headers',
     value: '<h3>Heading3</h3>' },
  h4: 
   { attributes: [],
     group: 'sections',
     subgroup: 'headers',
     value: '<h4>Heading4</h4>' },
  h5: 
   { attributes: [],
     group: 'sections',
     subgroup: 'headers',
     value: '<h5>Heading5</h5>' },
  h6: 
   { attributes: [],
     group: 'sections',
     subgroup: 'headers',
     value: '<h6>Heading6</h6>' },
  bdi: 
   { attributes: [ 'dir' ],
     group: 'resource',
     subgroup: 'block',
     value: '<bdi>texthere</bdi>' },
  bdo: 
   { attributes: [ 'dir' ],
     group: 'resource',
     subgroup: 'block',
     value: '<bdo>texthere</bdo>' },
  data: 
   { attributes: [ 'value' ],
     group: 'resource',
     subgroup: 'block',
     value: '<data>texthere</data>' },
  wbr: 
   { attributes: [],
     group: 'resource',
     subgroup: 'block',
     value: '<wbr>',
     tag: 'single' },
  rb: 
   { attributes: [],
     group: 'resource',
     subgroup: 'ruby',
     value: '<rb>texthere</rb>' },
  rt: 
   { attributes: [],
     group: 'resource',
     subgroup: 'ruby',
     value: '<rt>insert</rt>' },
  rp: 
   { attributes: [],
     group: 'resource',
     subgroup: 'ruby',
     value: '<rp>texthere</rp>' },
  rtc: 
   { attributes: [],
     group: 'resource',
     subgroup: 'ruby',
     value: '<rtc>texthere</rtc>' },
  ruby: 
   { attributes: [],
     group: 'resource',
     subgroup: 'ruby',
     value: '<ruby>texthere</ruby>' },
  code: 
   { attributes: [],
     group: 'resource',
     subgroup: 'code',
     value: '<code>texthere</code>' },
  pre: 
   { attributes: [],
     group: 'resource',
     subgroup: 'code',
     value: '<pre>texthere</pre>' },
  samp: 
   { attributes: [],
     group: 'resource',
     subgroup: 'code',
     value: '<samp>texthere</samp>' },
  kbd: 
   { attributes: [],
     group: 'resource',
     subgroup: 'code',
     value: '<kbd>texthere</kbd>' },
  blockquote: 
   { attributes: [ 'cite' ],
     group: 'resource',
     subgroup: 'reference',
     value: '<blockquote>blockquote</blockquote>' },
  q: 
   { attributes: [ 'cite' ],
     group: 'resource',
     subgroup: 'reference',
     value: '<q>quotations</q>' },
  abbr: 
   { attributes: [ 'title' ],
     group: 'resource',
     subgroup: 'reference',
     value: '<abbr>abbr</abbr>' },
  dfn: 
   { attributes: [ 'title' ],
     group: 'resource',
     subgroup: 'reference',
     value: '<dfn>definition</dfn>' },
  p: 
   { attributes: [],
     group: 'inline',
     subgroup: 'text',
     value: '<p>&#13;&#13;</p>' },
  b: 
   { attributes: [],
     group: 'inline',
     subgroup: 'text',
     value: '<b>bold</b>' },
  i: 
   { attributes: [],
     group: 'inline',
     subgroup: 'text',
     value: '<i>italic</i>' },
  sub: 
   { attributes: [],
     group: 'inline',
     subgroup: 'text',
     value: '<sub>subscript</sub>' },
  sup: 
   { attributes: [],
     group: 'inline',
     subgroup: 'text',
     value: '<sup>superscript</sup>' },
  br: 
   { attributes: [],
     group: 'inline',
     subgroup: 'text',
     value: '<br>',
     tag: 'single' },
  hr: 
   { attributes: [],
     group: 'inline',
     subgroup: 'text',
     value: '<hr>',
     tag: 'single' },
  strong: 
   { attributes: [],
     group: 'inline',
     subgroup: 'markup',
     value: '<strong>strong</strong>' },
  em: 
   { attributes: [],
     group: 'inline',
     subgroup: 'markup',
     value: '<em>emphasis</em>' },
  u: { attributes: [], group: 'inline', subgroup: 'markup' },
  small: 
   { attributes: [],
     group: 'inline',
     subgroup: 'markup',
     value: '<small>texthere</small>' },
  mark: 
   { attributes: [],
     group: 'inline',
     subgroup: 'markup',
     value: '<mark>texthere</mark>' },
  del: 
   { attributes: [ 'cite', 'datetime' ],
     group: 'inline',
     subgroup: 'markup',
     value: '<del>delete</del>' },
  ins: 
   { attributes: [ 'cite', 'datetime' ],
     group: 'inline',
     subgroup: 'markup',
     value: '<ins>insert</ins>' },
  s: 
   { attributes: [],
     group: 'inline',
     subgroup: 'markup',
     value: '<s>strikethrough</s>' },
  var: 
   { attributes: [],
     group: 'inline',
     subgroup: 'markup',
     value: '<var>texthere</var>' },
  img: 
   { attributes: 
      [ 'alt',
        'crossorigin',
        'decoding',
        'height',
        'ismap',
        'sizes',
        'src',
        'srcset',
        'usemap',
        'width' ],
     group: 'multimedia',
     subgroup: 'images',
     value: '<img src=&#34;images/example.jpg&#34;>',
     tag: 'single' },
  figure: 
   { attributes: [],
     group: 'multimedia',
     subgroup: 'images',
     value: '<figure>&#13;&#13;</figure>' },
  figcaption: 
   { attributes: [],
     group: 'multimedia',
     subgroup: 'images',
     value: '<figcaption>figcaption</figcaption>' },
  img_full: 
   { attributes: [],
     group: 'multimedia',
     subgroup: 'images',
     value: '\n<img src=\"images/example.jpg\" \n     alt=\"alternative text\" \n     title=\"example image">\n' },
  figure_full: 
   { attributes: [],
     group: 'multimedia',
     subgroup: 'images',
     value: '<figure>\n    <img \n    src=\"images/example.jpg\" \n    alt=\"alternative text\" \n    title=\"example image\">\n    <figcaption>figcaption</figcaption>\n    </figure>' },
  audio: 
   { attributes: 
      [ 'autoplay',
        'controls',
        'crossorigin',
        'currentTime',
        'duration',
        'loop',
        'muted',
        'preload',
        'src' ],
     group: 'multimedia',
     subgroup: 'multimedia',
     value: '<audio>texthere</audio>' },
  video: 
   { attributes: 
      [ 'autoplay',
        'buffered',
        'controls',
        'crossorigin',
        'currentTime',
        'duration',
        'height',
        'loop',
        'muted',
        'playsinline',
        'poster',
        'preload',
        'src',
        'width' ],
     group: 'multimedia',
     subgroup: 'multimedia',
     value: '<video>texthere</video>' },
  track: 
   { attributes: [ 'default', 'kind', 'label', 'src', 'srclang' ],
     group: 'multimedia',
     subgroup: 'multimedia',
     value: '<track>',
     tag: 'single' },
  area: 
   { attributes: 
      [ 'alt',
        'coords',
        'download',
        'href',
        'hreflang',
        'ping',
        'rel',
        'shape',
        'poly',
        'target' ],
     group: 'multimedia',
     subgroup: 'multimedia',
     value: '<area>',
     tag: 'single' },
  map: 
   { attributes: [ 'name' ],
     group: 'multimedia',
     subgroup: 'multimedia',
     value: '<map>texthere</map>' },
  ol: 
   { attributes: [ 'reversed', 'start', 'type!' ],
     group: 'lists',
     subgroup: 'lists',
     value: '<ol>&#13;&#13;</ol>' },
  ul: 
   { attributes: [],
     group: 'lists',
     subgroup: 'lists',
     value: '<ul>&#13;&#13;</ul>' },
  li: 
   { attributes: [ 'value' ],
     group: 'lists',
     subgroup: 'lists',
     value: '<li>ListItem</li>' },
  dl: 
   { attributes: [],
     group: 'lists',
     subgroup: 'lists',
     value: '<dl>&#13;&#13;</dl>' },
  dt: 
   { attributes: [],
     group: 'lists',
     subgroup: 'lists',
     value: '<dt>definitionterm</dt>' },
  dd: 
   { attributes: [],
     group: 'lists',
     subgroup: 'lists',
     value: '<dd>definition</dd>' },
  table: 
   { attributes: [],
     group: 'lists',
     subgroup: 'tables',
     value: '<table>&#13;&#13;</table>' },
  tr: 
   { attributes: [],
     group: 'lists',
     subgroup: 'tables',
     value: '<tr>&#13;&#13;</tr>' },
  th: 
   { attributes: [ 'abbr', 'headers', 'colspan', 'rowspan', 'scope' ],
     group: 'lists',
     subgroup: 'tables',
     value: '<th>tablehead</th>' },
  td: 
   { attributes: [ 'headers', 'colspan', 'rowspan' ],
     group: 'lists',
     subgroup: 'tables',
     value: '<td>tabledata</td>' },
  caption: 
   { attributes: [],
     group: 'lists',
     subgroup: 'semantics',
     value: '<caption>tablehead</caption>' },
  thead: 
   { attributes: [],
     group: 'lists',
     subgroup: 'semantics',
     value: '<thead>&#13;&#13;</thead>' },
  tbody: 
   { attributes: [],
     group: 'lists',
     subgroup: 'semantics',
     value: '<tbody>&#13;&#13;</tbody>' },
  tfoot: 
   { attributes: [],
     group: 'lists',
     subgroup: 'semantics',
     value: '<tfoot>&#13;&#13;</tfoot>' },
  col: 
   { attributes: [ 'span' ],
     group: 'lists',
     subgroup: 'semantics',
     value: '<col>',
     tag: 'single' },
  colgroup: 
   { attributes: [],
     group: 'lists',
     subgroup: 'semantics',
     value: '<colgroup>tablehead</colgroup>' },
  a: 
   { attributes: [ 'download', 'href', 'hreflang', 'ping', 'rel', 'target', 'type' ],
     group: 'embedded',
     subgroup: 'links' },
  iframe: 
   { attributes: 
      [ 'allow',
        'height',
        'name',
        'referrerpolicy',
        'src',
        'srcdoc',
        'sandbox',
        'width' ],
     group: 'embedded',
     subgroup: 'embedded',
     value: '<iframe>texthere</iframe>' },
  object: 
   { attributes: 
      [ 'data',
        'form',
        'name',
        'type',
        'typemustmatch',
        'usemap',
        'width',
        'height' ],
     group: 'embedded',
     subgroup: 'embedded',
     value: '<object>texthere</object>' },
  param: 
   { attributes: [ 'name', 'value' ],
     group: 'embedded',
     subgroup: 'embedded',
     value: '<param>',
     tag: 'single' },
  picture: 
   { attributes: [],
     group: 'embedded',
     subgroup: 'embedded',
     value: '<picture>texthere</picture>' },
  source: 
   { attributes: [ 'media', 'sizes', 'src', 'srcset', 'type' ],
     group: 'embedded',
     subgroup: 'embedded',
     value: '<source>',
     tag: 'single' },
  canvas: 
   { attributes: [ 'width', 'height' ],
     group: 'embedded',
     subgroup: 'embedded',
     value: '<canvas>texthere</canvas>' },
  noscript: 
   { attributes: [],
     group: 'embedded',
     subgroup: 'embedded',
     value: '<noscript>texthere</noscript>' },
  script: 
   { attributes: 
      [ 'async',
        'crossorigin',
        'defer',
        'integrity',
        'nomodule',
        'nonce',
        'referrerpolicy',
        'src',
        'type' ],
     group: 'embedded',
     subgroup: 'embedded',
     value: '<script>texthere</script>' },
  details: 
   { attributes: [ 'open' ],
     group: 'embedded',
     subgroup: 'interactive',
     value: '<details>texthere</details>' },
  dialog: 
   { attributes: [ 'open' ],
     group: 'embedded',
     subgroup: 'interactive',
     value: '<dialog>texthere</dialogue>' },
  summary: 
   { attributes: [],
     group: 'embedded',
     subgroup: 'interactive',
     value: '<summary>texthere</summary>' },
  button: 
   { attributes: [],
     group: 'forms',
     subgroup: 'forms',
     value: '<button>texthere</button>' },
  datalist: 
   { attributes: [],
     group: 'forms',
     subgroup: 'forms',
     value: '<datalist>texthere</datalist>' },
  fieldset: 
   { attributes: [ 'name', 'form', 'disabled' ],
     group: 'forms',
     subgroup: 'forms',
     value: '<fieldset>texthere</fieldset>' },
  form: 
   { attributes: 
      [ 'accept-charset',
        'action',
        'autocomplete',
        'enctype',
        'method',
        'name',
        'novalidate',
        'target' ],
     group: 'forms',
     subgroup: 'forms',
     value: '<form>texthere</form>' },
  label: 
   { attributes: [ 'for', 'form' ],
     group: 'forms',
     subgroup: 'forms',
     value: '<label>texthere</label>' },
  legend: 
   { attributes: [],
     group: 'forms',
     subgroup: 'forms',
     value: '<legend>texthere</legend>' },
  meter: 
   { attributes: [ 'form', 'value', 'min', 'max', 'low', 'high', 'optimum' ],
     group: 'forms',
     subgroup: 'forms',
     value: '<meter>texthere</meter>' },
  optgroup: 
   { attributes: [ 'disabled', 'label' ],
     group: 'forms',
     subgroup: 'forms',
     value: '<optgroup>texthere</optgroup>' },
  option: 
   { attributes: [ 'disabled', 'label', 'selected', 'value' ],
     group: 'forms',
     subgroup: 'forms',
     value: '<option>texthere</option>' },
  output: 
   { attributes: [ 'for', 'form', 'name' ],
     group: 'forms',
     subgroup: 'forms',
     value: '<output>texthere</output>' },
  progress: 
   { attributes: [ 'max', 'value' ],
     group: 'forms',
     subgroup: 'forms',
     value: '<progress>texthere</progress>' },
  select: 
   { attributes: 
      [ 'autocomplete',
        'autofocus',
        'form',
        'disabled',
        'multiple',
        'name',
        'required',
        'size' ],
     group: 'forms',
     subgroup: 'forms',
     value: '<select>texthere</select>' },
  textarea: 
   { attributes: 
      [ 'autocomplete',
        'autofocus',
        'cols',
        'disabled',
        'form',
        'minlength',
        'maxlength',
        'name',
        'placeholder',
        'readonly',
        'required',
        'rows',
        'spellcheck',
        'wrap' ],
     group: 'forms',
     subgroup: 'forms',
     value: '<textarea>texthere</textarea>' },
  input: 
   { attributes: [],
     group: 'input',
     subgroup: 'input',
     value: 'input',
     tag: 'single' },
  button$: 
   { attributes: [],
     group: 'input',
     subgroup: 'input',
     value: 'input type="button"' },
  checkbox: 
   { attributes: [ 'checked' ],
     group: 'input',
     subgroup: 'input',
     value: 'input type="checkbox"' },
  color: 
   { attributes: [],
     group: 'input',
     subgroup: 'input',
     value: 'input type="color"' },
  date: 
   { attributes: [],
     group: 'input',
     subgroup: 'input',
     value: 'input type="date"' },
  'datetime-local': 
   { attributes: [],
     group: 'input',
     subgroup: 'input',
     value: 'input type="datetime-local"' },
  email: 
   { attributes: [ 'multiple' ],
     group: 'input',
     subgroup: 'input',
     value: 'input type="email"' },
  file: 
   { attributes: [ 'accept', 'capture', 'multiple' ],
     group: 'input',
     subgroup: 'input',
     value: 'input type="file"' },
  hidden: 
   { attributes: [],
     group: 'input',
     subgroup: 'input',
     value: 'input type="hidden"' },
  image: 
   { attributes: 
      [ 'alt',
        'formaction',
        'formenctype',
        'formmethod',
        'formnovalidate',
        'formtarget',
        'height',
        'src' ],
     group: 'input',
     subgroup: 'input',
     value: 'input type="image"' },
  month: 
   { attributes: [],
     group: 'input',
     subgroup: 'input',
     value: 'input type="month"' },
  number: 
   { attributes: [],
     group: 'input',
     subgroup: 'input',
     value: 'input type="number"' },
  password: 
   { attributes: [ 'maxlength', 'minlength', 'pattern', 'placeholder' ],
     group: 'input',
     subgroup: 'input',
     value: 'input type="password"' },
  radio: 
   { attributes: [ 'checked' ],
     group: 'input',
     subgroup: 'input',
     value: 'input type="radio"' },
  range: 
   { attributes: [],
     group: 'input',
     subgroup: 'input',
     value: 'input type="range"' },
  reset: 
   { attributes: [],
     group: 'input',
     subgroup: 'input',
     value: 'input type="reset"' },
  search: 
   { attributes: [ 'dirname', 'maxlength', 'minlength', 'placeholder' ],
     group: 'input',
     subgroup: 'input',
     value: 'input type="search"' },
  submit: 
   { attributes: 
      [ 'formaction',
        'formenctype',
        'formmethod',
        'formnovalidate',
        'formtarget' ],
     group: 'input',
     subgroup: 'input',
     value: 'input type="submit"' },
  tel: 
   { attributes: [ 'maxlength', 'minlength', 'pattern', 'placeholder' ],
     group: 'input',
     subgroup: 'input',
     value: 'input type="tel"' },
  text: 
   { attributes: [ 'dirname', 'maxlength', 'minlength', 'pattern', 'placeholder' ],
     group: 'input',
     subgroup: 'input',
     value: 'input type="text"' },
  time: 
   { attributes: [],
     group: 'input',
     subgroup: 'input',
     value: 'input type="time"' },
  url: 
   { attributes: [ 'maxlength', 'minlength', 'placeholder' ],
     group: 'input',
     subgroup: 'input',
     value: 'input type="url"' },
  week: 
   { attributes: [],
     group: 'input',
     subgroup: 'input',
     value: 'input type="week"' }, 




//inputAttr
autocomplete: 
   { value: 'autocomplete="valuehere"',
     subgroup: 'all',
     group: 'input-attributes',
     attributes: ['autocomplete'] },
  autofocus: 
   { value: 'autofocus="valuehere"',
     subgroup: 'all',
     group: 'input-attributes',
     attributes: ['autofocus'] },
  disabled: 
   { value: 'disabled="valuehere"',
     subgroup: 'all',
     group: 'input-attributes',
     attributes: ['disabled'] },
  form: 
   { value: 'form="valuehere"',
     subgroup: 'all',
     group: 'input-attributes',
     attributes: ['form'] },
  name: 
   { value: 'name="valuehere"',
     subgroup: 'all',
     group: 'input-attributes',
     attributes: ['name'] },
  size: 
   { value: 'size="valuehere"',
     subgroup: 'all',
     group: 'input-attributes',
     attributes: ['size'] },
  type: 
   { value: 'type="valuehere"',
     subgroup: 'all',
     group: 'input-attributes',
     attributes: ['type'] },
  value: 
   { value: 'value="valuehere"',
     subgroup: 'all',
     group: 'input-attributes',
     attributes: ['value'] },
  list: 
   { value: 'list=filetypehere',
     subgroup: 'almost',
     group: 'input-attributes',
     attributes: ['list'] },
  readonly: 
   { value: 'readonly',
     subgroup: 'almost',
     group: 'input-attributes',
     attributes: ['readonly'] },
  required: 
   { value: 'required',
     subgroup: 'almost',
     group: 'input-attributes',
     attributes: ['required'] },
  max: 
   { value: 'max="numberhere"',
     subgroup: 'numeric',
     group: 'input-attributes',
     attributes: ['max'] },
  min: 
   { value: 'min="numberhere"',
     subgroup: 'numeric',
     group: 'input-attributes',
     attributes: ['min'] },
  step: 
   { value: 'step="numberhere"',
     subgroup: 'numeric',
     group: 'input-attributes',
     attributes: ['step'] },
  id$: 
   { value: 'id="value"',
     subgroup: 'global-input',
     group: 'input-attributes',
     attributes: ['id'] },
  inputmode$: 
   { value: 'inputmode="value"',
     subgroup: 'global-input',
     group: 'input-attributes',
     attributes: ['inputmode'] },
  tabindex$: 
   { value: 'tabindex="value"',
     subgroup: 'global-input',
     group: 'input-attributes',
     attributes: ['tabindex'] },
  title$: 
   { value: 'title="value"',
     subgroup: 'global-input',
     group: 'input-attributes',
     attributes: ['title'] },


//global
  id: { group: 'global', subgroup: 'global', attributes: [ 'id' ] },
  inputmode: 
   { group: 'global',
     subgroup: 'global',
     attributes: [ 'inputmode' ] },
  tabindex: 
   { group: 'global',
     subgroup: 'global',
     attributes: [ 'tabindex' ] },
  accesskey: 
   { group: 'global',
     subgroup: 'global',
     attributes: [ 'accesskey' ] },
  autocapitalize: 
   { group: 'global',
     subgroup: 'global',
     attributes: [ 'autocapitalize' ] },
  class: { group: 'global', subgroup: 'global', attributes: [ 'class' ] },
  contenteditable: 
   { group: 'global',
     subgroup: 'global',
     attributes: [ 'contenteditable' ] },
  'data-*': { group: 'global', subgroup: 'global', attributes: [ 'data-*' ] },
  draggable: 
   { group: 'global',
     subgroup: 'global',
     attributes: [ 'draggable' ] },
  is: { group: 'global', subgroup: 'global', attributes: [ 'is' ] },
  itemid: { group: 'global', subgroup: 'global', attributes: [ 'itemid' ] },
  itemprop: 
   { group: 'global',
     subgroup: 'global',
     attributes: [ 'itemprop' ] },
  itemref: 
   { group: 'global',
     subgroup: 'global',
     attributes: [ 'itemref' ] },
  itemscope: 
   { group: 'global',
     subgroup: 'global',
     attributes: [ 'itemscope' ] },
  itemtype: 
   { group: 'global',
     subgroup: 'global',
     attributes: [ 'itemtype' ] },
  slot: { group: 'global', subgroup: 'global', attributes: [ 'slot' ] },
  style: { group: 'global', subgroup: 'global', attributes: [ 'style' ] },
  translate: 
   { group: 'global',
     subgroup: 'global',
     attributes: [ 'translate' ] },
  title: { group: 'global', subgroup: 'global', attributes: [ 'title' ] },
  lang: { group: 'global', subgroup: 'global', attributes: [ 'lang' ] },
  dir: { group: 'global', subgroup: 'global', attributes: [ 'dir' ] },
  spellcheck: 
   { group: 'global',
     subgroup: 'global',
     attributes: [ 'spellcheck' ] }




}
