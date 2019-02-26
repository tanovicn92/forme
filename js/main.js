    document.getElementById("proizvodi").addEventListener("submit",ukupanIznos);
    function ukupanIznos (event) {
    	event.preventDefault();
    	var grad = document.getElementById("s-grad").value;

    	if(grad=='') {
    		alert("Izaberite odgoletajuci grad!");
    	}
    	var kolPrvi = parseInt(document.getElementById("jedan").value,10)||0,
    	kolDrugi = parseInt(document.getElementById("dva").value,10)||0,
    	kolTreci = parseInt(document.getElementById("tri").value,10)||0;

    	var methods = document.getElementById("proizvodi").r_metod,
    	isporukaMetod;

    	for(var i = 0; i<methods.length; i++) {
    		if(methods[i].checked == true)
    		{ 
    			isporukaMetod = methods[i].value;
    		}
    	}
    	console.log(kolPrvi);
    	console.log(kolDrugi);
    	console.log(kolTreci);
    	console.log(grad);
    	console.log(methods[i]);



    }

/*naslovna galerija o_nama kontakt peta_stranica(api, igrica...)*/