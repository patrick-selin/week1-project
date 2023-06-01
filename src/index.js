
const otsikko = document.querySelector("h1");


const nappula = document.querySelector("#my-button");

    nappula.addEventListener("click", funktio);
        function funktio() {
            console.log("hello world")

            otsikko.innerHTML = "My notebook";

        }

        
const lista = document.querySelector("ul");

const nappula2 = document.querySelector("#add-data")

const tekstiKentta = document.querySelector("textarea");    


    nappula2.addEventListener("click", funktio2);
    function funktio2() {

        tekstiKentta.addEventListener("click", funktio2);

        let text = tekstiKentta.value;


        let li = document.createElement("li");
        li.appendChild(document.createTextNode(text));
        lista.appendChild(li);
    };


 
