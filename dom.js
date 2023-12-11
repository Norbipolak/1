//console.log(document);
/*
    Visszakapjuk a teljes dokumentumonknak a reprezentációját HTML szerűen.
    lásd: HTML szerkezet.png
    Megjeleniti a console meg a böngésző, hogy könnyeben fel tudjuk fogni, de itt nem egészen erről van szó,
    hanem a document-ben vannak kölünböző metódusok, amiket tudunk használni 
    pl. egy ilyen metódus az id. 

    Csinátunk a dom.html-ben egy buttont, megadtunk neki egy id-t ->
    <button id="btn1">Nyomd meg!</button>
    és szeretnénk valahogy ehhez a buttonhoz hozzáférni a dom.js-ből 

    Ennek kétféle módszere van ->
    1. létrehozunk egy változót, ami a gombunkat fogja reprezentálni 
    document.getElementById az egy olyan metódus, amivel a id alapján hozzá tudunk férni a buttonhöz.
    (nem teljesen a buttonhöz, hanem a memórián belüli reprezentációjához)
    Ezt úgy kell érteni, hogy van nekünk a documentünk, ami az összes html elemet magában foglalja, 
    amit csak beleírunk a html szerkezetbe és onnan tudunk válogatni pl. a getElementById segítségével.
    Ha ("btn1"), akkor a változóban meg fog jelenni egy objektum ami a megfelelő buttonünk lesz -> 
    ez jelenik meg a console-ban -> <button id="btn1">Nyomd meg!</button>
    lementettük ezt a buttont (taget) az id alapján.

    2. lementetük ugynazt a gombot a querySelector segítségével.
    !!!!!! Az a különbség, hogy a querySelector le tud menteni tagnév, name atributum, id és class alapján is különböző elemeket. !!!!!!!!!!
    # - az ID megjelőlése, amikor le szeretnénk menteni valamit querySelector segítségével.
*/

const btn1_1 = document.getElementById("btn1");
console.log(btn1_1);

const btn1_2 = document.querySelector("#btn")

//class="spanok" lementése 
const spans_1 = document.getElementsByClassName("spanok");
console.log(spans_1);
//console.log(spans_1[0]);

// for(let i = 1; i < spans_1.length; i++){
//     console.log(spans_1[i]);
// }

const first_span = document.querySelector(".spanok");
console.log(first_span);

//összeset megtalálja 
const spans_2 = document.querySelectorAll(".spanok");
console.log(spans_2);

/*
    Amit vissza fogunk kapni, az egy HTML collection -> 
    HTMLCollection(4) [span.spanok, span.spanok, span.spanok, span.spanok]
    0: span.spanok
    1: span.spanok
    2: span.spanok
    3: span.spanok
    length: 4
    [[Prototype]]: HTMLCollection -> olyan mint egy array, csak html elemek vannak benne

    Ha szeretnénk visszakapni az első elemet console.log(spans_1[0]); ->
    <span class="spanok">1</span>

    Ha szeretnénk végigiterálni rajtuk akkor for-val és ez lesz a végeredmény -> 
    <span class="spanok">1</span>
    <span class="spanok">2</span>
    <span class="spanok">3</span>
    <span class="spanok">4</span>

    A querySelectorral is tudunk class alapján lementeni, de mindig csak az elsőt fogja megtalálni. 
    console.log(first_span); ezt fogja megtalálni nekünk ->
    <span class="spanok">1</span>
    !!! de a querySelector létezik egy olyan változattal is, ahol megtalálja az összeset -> querySelectorAll
    és itt, amit visszakapunk az nem HTMLCollection lesz, mint a getElementsByClassName-nél hanem egy NODELIST!!!!!
    NodeList(4) [span.spanok, span.spanok, span.spanok, span.spanok]
    0: span.spanok
    1: span.spanok
    2: span.spanok
    3: span.spanok
    length: 4
    [[Prototype]]: NodeList

    getElementsByClassName -> HTMLCollection
    querySelectorAll -> NodeList 
    A különbséget a kettő között meg tudjuk nézni ha lenyítjuk a Prototype-ot 

    
    [[Prototype]]: HTMLCollection
    item: ƒ item()
    length: (...)
    namedItem: ƒ namedItem()
    constructor: ƒ HTMLCollection()
    Symbol(Symbol.iterator): ƒ values()
    Symbol(Symbol.toStringTag): "HTMLCollection"
    get length: ƒ length()
    [[Prototype]]: Object
    
    [[Prototype]]: NodeList
    entries: ƒ entries()
    forEach: ƒ forEach()
    item: ƒ item()
    keys: ƒ keys()
    length: (...)
    values: ƒ values()
    constructor: ƒ NodeList()
    Symbol(Symbol.iterator): ƒ values()
    Symbol(Symbol.toStringTag): "NodeList"
    get length: ƒ length()
    [[Prototype]]: Object

    !!!!!!!!!!!! A HTMLCollection-nél csak a for ciklust tudjuk használni, viszont a NodeListnél a forEach-et is. !!!!!!!!!

    */ 

spans_2.forEach((span)=>{
    console.log(span);
});

    /*
    <span class="spanok">1</span>
    <span class="spanok">2</span>
    <span class="spanok">3</span>
    <span class="spanok">4</span>
    
    és ezzel egyszerűbb végigiterálni az összesen.
    */

const values = spans_2.values();
console.log(values);

    /*
        Kapunk egy Array Iteratort amivel, majd késöbb for of-val tudunk továbbmenni.
    */
//NodeList
const h5_elements_1 = document.querySelectorAll("h5");

//HTMLCollection
const h5_elements_2 = document.getElementsByTagName("h5");
console.log(h5_elements_1);
console.log(h5_elements_2);

/*
NodeList(4) [h5, h5, h5, h5]
0: h5
1: h5
2: h5
3: h5
length: 4
*/ 

// név-attributum alapján is tudunk menteni (vagy akár más attributum alapján is)
console.log(document.querySelectorAll('[name="input1"]'))

/*
NodeList(2) [input, input]
0: input
1: input
length: 2

akár azt is lehet, hogy document.querySelectir('input[name="from"]) ->
csak az inputokat, amiknek az a neve, hogy from 
*/ 

/*
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Elemek létrehozá !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
létre is tudunk hozni elemeket 
*/

const h1 = document.createElement("h1"); //vár nekünk egy tag-nevet, lehet mondjuk egy div is pl. vagy span 
h1.innerText = "Ez egy h1-es tag!"; //szöveges tartalma a h1-nek 
console.log(h1);

/*
    Eddig még csak a memóriában található meg -> <h1>Ez egy h1-es tag!</h1>
    de ha viszont lementem a container egy változóban, amit csinátunk html-ben
    és appendChild-olom a h1-et akkor meg fog jelenni 
*/
const container = document.querySelector("#container");
container.appendChild(h1);

/*
getAttribute, setAttribute 

Ha egy képnek kell pl. megváltoztatni a src attributumát, akkor mondhatjuk, hogy kép.src = valami
*/ 
