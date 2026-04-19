function check() {
    let jaut1 = document.quiz.atb1.value
    let jaut2 = document.quiz.atb2.value
    let jaut3 = document.quiz.atb3.value
    let jaut4 = document.quiz.atb4.value
    let jaut5 = document.quiz.atb5.value
    let jaut6 = document.quiz.atb6.value
    let jaut7 = document.quiz.atb7.value
    let jaut8 = document.quiz.atb8.value
    let jaut9 = document.quiz.atb9.value
    let jaut10 = document.quiz.atb10.value
    
    let pareizi = 0

    if (jaut1 == "Corect") {
        pareizi++
    }

    if (jaut2 == "Corect") {
        pareizi++
    }
    if (jaut3 == "Corect") {
        pareizi++
    }

    if (jaut4 == "Corect") {
        pareizi++
    }
    if (jaut5 == "Corect") {
        pareizi++
    }

    if (jaut6 == "Corect") {
        pareizi++
    }
    if (jaut7 == "Corect") {
        pareizi++
    }

    if (jaut8 == "Corect") {
        pareizi++
    }
    if (jaut9 == "Corect") {
        pareizi++
    }

    if (jaut10 == "Corect") {
        pareizi++
    }


    const messages = ["Izcili! Tu ļoti rūpīgi izlasīji tekstu par Salvador Dalī un visu labi saprati", "Perfekti! Tu lieliski izproti informāciju par Dalī", "Lieliski! Tu labi atceries svarīgāko no teksta", "Ļoti labi! Tikai dažas kļūdiņas", "Labi! Tu saprati galveno domu", "Nav slikti! Dažas lietas vēl jāpārlasa", "Var labāk! Ieteicams vēlreiz izlasīt tekstu", "Mēģini vēlreiz! Pievērs vairāk uzmanības detaļām", "Nepadodies! Izlasi tekstu vēlreiz un mēģini atkal"]
    let vertejums

    if (pareizi == 10) {
        vertejums = 0
    } 
    else if (pareizi == 9) {
        vertejums = 1
    } 
     else if (pareizi == 8) {
        vertejums = 2
    } 
     else if (pareizi == 7) {
        vertejums = 3
    } 
     else if (pareizi == 6) {
        vertejums = 4
    } 
     else if (pareizi == 5) {
        vertejums = 5
    } 
     else if (pareizi == 4) {
        vertejums = 6
    } 
     else if (pareizi == 3) {
        vertejums = 7
    } 
     else if (pareizi == 2) {
        vertejums = 8
    } 
    else if (pareizi == 1) {
        vertejums = 8
    } 
    else {
        vertejums = 8
    }

    let resultBox = document.getElementById("after-sub")
    resultBox.style.visibility = "visible"

    document.getElementById("message").innerHTML = messages[vertejums]
    document.getElementById("correct-count").innerHTML = "Tev ir " + pareizi + " pareizas atbildes!"
}