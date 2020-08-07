function checkCashRegister(price, cash, cid) {
    let currencyUnit = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]]

    let cashBack = {
        status: "",
        change: []
    }

    let rest = cash-price
    console.log(rest)
    return cashBack;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))


//** Projets d'algorithmes JavaScript et de structures de données: caisse enregistreuse
/*
Concevez une fonction de tiroir-caisse checkCashRegister()qui accepte le prix d'achat comme premier argument ( price),
le paiement comme deuxième argument ( cash) et cash-in-tiroir ( cid) comme troisième argument.
cid est un tableau 2D répertoriant les devises disponibles.
*/
//*TODO La checkCashRegister()fonction doit toujours renvoyer un objet avec une status clé et une change clé.
//*TODO Renvoyez {status: "INSUFFICIENT_FUNDS", change: []}si la monnaie dans le tiroir est inférieure à la monnaie due ou si vous ne pouvez pas retourner la monnaie exacte.
//*TODO Renvoyez {status: "CLOSED", change: [...]}avec la caisse comme valeur de la clé changesi elle est égale à la monnaie due.
//*TODO Sinon, retournez {status: "OPEN", change: [...]}, avec le changement dû en pièces et billets, triés dans l'ordre le plus élevé au plus bas, comme valeur de la changeclé.
/*
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
devrait revenir {status: "OPEN", change: [["QUARTER", 0.5]]}.
*/