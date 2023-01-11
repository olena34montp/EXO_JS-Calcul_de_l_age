/**
 * Calcul l'âge à partir de la date de naissance
 * Format: JJ-MM-AAAA
 * @param {string} 
 * @return {int}
 */

function pushAge() {
    let answer = prompt('Ecriver votre date de naissance en format JJ/MM/AAAA');
    let answerYear = answer.split('/')[2];
    answerYear = Number(answerYear);
    let date = new Date();
    let year = date.getFullYear(); 

    if (answer.length == 10) {
        return alert('Votre age est ' + (year - answerYear));
    } else {
        pushAge();
    }
}

pushAge();