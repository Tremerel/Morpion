/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                        //
    let tour = true                                                     //  - Bouleun pour definir si la partie est en cour (true) ou fini (false) -
    let nomJoueur = 'X'                                                 //  - 
    let grille = [ "" , "" , "" , "" , "" , "" , "" , "" , "" , "" ]    //  - Tableau vide à 9 places - remplie avec nom joueur X ou O
    const statut = document.querySelector("h2")                         //  - On vas chercher notre balise h2 pour les info partie - 
                                                                        //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                        //
const conditionsVictoire = [                                            // 
    [0, 1, 2], [3, 4, 5], [6, 7, 8],    //ligne                         //  - On etablie les conditions de victoires par ligne verticale horizontale 
    [0, 3, 6], [1, 4, 7], [2, 5, 8],    //colonne                       //    et diagonale -
    [0, 4, 8], [2, 4, 6] ]              //diagonal                      //
                                                                        //
    const tourJoueur = () => "C'est au tour du joueur " + nomJoueur     //  - Messages afficher dans h2 -
    const egalite = () => "Egalité"                                     //
    const gagne = () => "Le joueur "+ nomJoueur +" a gagné"             //
                                                                        //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                        //
document.querySelectorAll(".case").forEach(                             //  - On viens selectionnés nos div qui on la class case et pour chaque cases
    box => box.addEventListener("click", gestionClick))                 //    on viens chercher le click et on execute la fonction lié au clic -
                                                                        //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                        //
function gestionClick(){                                                //
const indexCase = parseInt(this.dataset.index)                          //  - Recuperation de mon index-data -
    if(grille[indexCase] != "" || !tour){                               //  - Si dans ma grilles le resultat indiqué le nom du joueur dans ma case ""
        return                                                          //    ou alors tour est falsealors on ne fait rien -
    }                                                                   //
    grille[indexCase] = nomJoueur                                       //  - J'indique le nom du joeur dans la case clicker -
    this.innerHTML = nomJoueur                                          //
    verificationsVictoire()                                             //  - Je vérifier si le joueur à gagné -
}                                                                       //
                                                                        //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                        //
function verificationsVictoire(){                                       //
    let tourGagnant = false                                             //  - Vérification si la partie est gagné -
                                                                        //
    for(let verificationVictoire of conditionsVictoire){                //  - Boucle pour savoir si nos conditions de victoire sont bonnes ou pas -
            let val1 = grille[verificationVictoire[0]]                  //
            let val2 = grille[verificationVictoire[1]]                  //  - On vas voir dans notre grille à l'index notre verif -
            let val3 = grille[verificationVictoire[2]]                  //
            if(val1 == "" || val2 == "" || val3 == "" ){                //  - Si une des 3 case est vide alors dans ce cas la on continue -
                continue                                                //
            }if(val1 == val2 && val2 == val3){                          //  - Si les 3 cases sont pareil alors -
                tourGagnant = true;                                     //  - On définie notre partie  comme gagné -
                break;                                                  //  - On arrete le jeux -
            }                                                           //
            }if(tourGagnant){                                           //  
            statut.innerHTML = gagne()                                  //  - Si partie gagné j'annonce le joueur qui a gagner -
            tour = false;                                               //  - Partie fini -
            return;                                                     //
            }if(!grille.includes("")){                                  //  - Si nos case sont remplie mais pas par les contions de victoires -
            statut.innerHTML = egalite()                                //  - Alors on a une égalité - Annonce au joueur -
            tour = false;                                               //  - Partie fini -
            return;                                                     //
        }                                                               //
    nomJoueur = nomJoueur === "X" ? "O" : "X"                           //  - Si le nom du joueur est X alors ce seras O sinon ca devient X -
    statut.innerHTML = tourJoueur()                                     //  - On affiche le joueur qui joue -
    }                                                                   //
                                                                        //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////