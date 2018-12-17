// ###########################################################################
// ##    Editeur : dcl.edainsv                                                ##
// ##                                                                        ##
// ##    Description : Récupère l'ID des lettres "Les D Codeurs du Lac" et    ##
// ##    modifie aléatoirement la couleur et l'ombre de chacunes d'elles.    ##
// ###########################################################################

function main()
{
    var couleurLettre = [];

    for(var i=1; i<=16; i++)
    {
        couleurLettre[i] = document.getElementById("lettre"+i);
        couleurLettre[i] = couleurAlea(couleurLettre[i]);
    }
}

function couleurAlea(couleur)
{
    couleur.style.color = getRandomColor(couleur);
}


function getRandomColor(couleur)
{
    var max = 5;
    var min = 1;

    alea = Math.floor(Math.random() * (max - min)) + min;
    // console.log(alea); // Couleur retournée

    switch(alea)
    {
        case 1:
            couleur.style.color = "red";
            couleur.style.textShadow = "0px 0px 10px red";
            break;

        case 2:
            couleur.style.color = "yellow";
            couleur.style.textShadow = "0px 0px 10px yellow";
            break;

        case 3:
            couleur.style.color = "blue";
            couleur.style.textShadow = "0px 0px 10px blue";
            break;

        case 4:
            couleur.style.color = "green";
            couleur.style.textShadow = "0px 0px 10px green";
            break;
        
        default:
            couleur.style.color = "white";
            couleur.style.textShadow = "0px 0px 10px red";
            break;
    }
}

var boucle = setInterval("main()", 500);