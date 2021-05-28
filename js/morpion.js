let tour = true
let joueur = true
let grille = [ "" , "" , "" , "" , "" , "" , "" , "" , "" , "" ]

const conditionsVictoire = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],    //ligne
    [0, 3, 6], [1, 4, 7], [2, 5, 8],    //colonne
    [0, 4, 8], [2, 4, 6] ]               //diagonal

document.querySelectorAll(".case").forEach(
    box => box.addEventListener("click", gestionClick))

function gestionClick(){
const indexCase = parseInt(this.dataset.index)                  // recupération de la case clické -
    if(grille[indexCase] != "" || !tour){                       // si dans ma grille à l'index indiqué le resultat 
        return                                                   //et différent de "" ou du tour alors on ne fait rien
    }   
    grille[indexCase] = joueur                                   // J'indique que j'ai clické -
    tourParTour()
    verificationsVictoire()
}
function tourParTour(){
        
    if(joueur == true) {
        const img = document.createElement('img')
        img.src = "../source/croix.png"
        joueur = false
    }else if (joueur == false) {               
        const img = document.createElement('img')
        img.src = "../source/rond.png"
        joueur = true}
}


function verificationsVictoire(){
    let tourGagnant = false
    
    for(let verificationVictoire of conditionsVictoire){
            let val1 = grille[verificationVictoire[0]]
            let val2 = grille[verificationVictoire[1]]
            let val3 = grille[verificationVictoire[2]]
            if(val1 == "" || val2 == "" || val3 == "" ){
                continue
            }if(val1 == val2 && val2 == val3){
                tourGagnant = true;
                break;
        }   }if(tourGagnant){
            tour = false;
            return;
            }if(!grille.includes("")){
            tour = false;
            return;
        }
    }
