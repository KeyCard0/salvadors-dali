function playGame() {
    const select = document.getElementById("emotion-select")
    const selectedValue = select.value
    const resultArea = document.getElementById("result-area")
    const resultText = document.getElementById("result-text")
    const resultImg = document.getElementById("result-img")

    const data = {
        "Vīlies": {
            text: "'The Broken Bridge and the Dream' (1945): Šī glezna ar salauzto ceļu un zaudētajiem sapņiem atspoguļo zaudējuma sāpes, nāves neizbēgamību un dzīves vilšanos. ",
            image: "the-broken-bridge-and-the-dream.jpg"
        },
        "Vainīgs": {
            text: "'The Hand. The Remorse of Conscience' (1930): Šajā gleznā attēlota pārāk liela roka, kas vērsta pret skatītāju, simbolizējot vainu, autoerotiku un tēvišķīgu spriedumu. ",
            image: "default.jpg"
        },
        "Bēdīgs": {
            text: "'TDaddy Longlegs of the Evening—Hope!' (1940): Šajā gleznā apakšējā kreisajā stūrī attēlots raudošs puto, kas liecina par kara postījumiem. Tā tiek plaši uzskatīta par skumju, zaudējuma un konflikta bezjēdzības attēlojumu ar melanholisku atmosfēru. ",
            image: "645252.jpg"
        },
        "Griezsirdīgs": {
            text: "'Remorse, or Sphinx Embedded in the Sand' (1931): Šajā gleznā zem figūras muguras ir attēloti 'aktīvi fetiši' – sievietes kurpe un glāze silta piena – un tā attēlo personīgā zaudējuma tēmas (iespējams, saistībā ar Salvadora sievas Galas neauglību) un vainas apziņu. ",
            image: "remorse.jpg"
        },
        "Garlaikots": {
            text: "'The Persistence of Memory' (1931): Šī glezna tiek plaši interpretēta kā laika subjektīvās, lēnās un gandrīz stagnējošās dabas izpausme, efektīvi attēlojot dziļu garlaicības sajūtu un laika 'izstiepšanos', saskaņā ar mākslinieciskajām interpretācijām. ",
            image: "memory.jpg"
        },
        "Dusmīgs": {
            text: "'The Anthropomorphic Cabinet' (1936): Šajā gleznā izmantota sarkanu, brūnu un oranžu toņu palete kopā ar salauztu figūru uz grīdas, lai izteiktu agonijas, ciešanu vai sāpju sajūtu. ",
            image: "the-anthropomorphic-cabinet.jpg"
        },
        "Uztraucies": {
            text: "'Invention of the Monsters' (1937): Šim darbam, kas gleznots Spānijas pilsoņu kara nemieru laikā, piemīt draudīga noskaņa, attēlojot liesmojošu žirafi un dažādas dīvainas figūras, kas pārstāv pasauli bez droša patvēruma. ",
            image: "invention.jpg"
        },
        "Apjucis": {
            text: "'Apparition of a Face and Fruit Dish on a Beach' (1938): Šis darbs izmanto dubultu tēlainību, lai radītu apjukumu, izaicinot skatītāju vienlaikus redzēt pludmales ainu, augļu šķīvi un cilvēka seju, atspoguļojot 'paranoiski kritisku' realitātes kropļojumu. ",
            image: "apjucis.jpg"
        },
        "Lepns": {
            text: "'Portrait of Gala with Two Lamb Chops Balanced on Her Shoulder' (1933): Šis darbs parāda atšķirīgu, subjektīvāku lepnuma formu — Dalī lepnumu par savu ekscentrisko redzējumu un mīlestību pret savu mūzu Galu. Šī glezna simbolizē Dalī vēlmi 'apēst' vai 'patērēt' Galu, kur jēlas karbonādes darbojas kā upurēšanas aizstājējs viņai, parādot viņa intensīvo īpašumtiesību un sirreālistisko uzticības redzējumu. ",
            image: "portrait.jpg"
        },
        "Nobijies": {
            text: "'The Face of War' (1940): Šī glezna, ko bieži uzskata par viņa tiešāko terora attēlojumu, attēlo pamestu, neauglīgu ainavu ar nocirstu, nokaltušu galvu. Acu dobumos un mutē ir identiskas sejas, radot bezgalīgu, šausminošu ciešanu cilpu, ko ieskauj čūskas.",
            image: "facewar.jpg"
        },
        "Neapmierināts": {
            text: "'Les désirs inassouvis (Unsatisfied Desires)' (1928): Sadalītas ķermeņa daļas, īpaši roka un kāja, kas iznirst no teksturētiem, zemei ​​līdzīgiem uzkalniņiem, simbolizējot ilgas pēc veseluma. Glezna pauž dziļu zaudējuma, traumas un identitātes sadrumstalotības sajūtu.",
            image: "neapm.jpg"
        },
        "Laimīgs": {
            text: "'Ship with butterfly sails' (1937): Vīri ar tauriņu tīkliem, šķiet, sniedzas pēc tauriņiem. Viņi vēlas tos noķert. Tātad vēl viena tēma ir cīņa par brīvības iegūšanu. 1937. gadā, kad tika gleznots 'Kuģis ar tauriņu burām', Spānijā norisinājās Pilsoņu karš. Dalī izmantoja šo gleznu, lai dotu cerību Spānijas iedzīvotājiem.",
            image: "laim.jpg"
        },
        "Patiecīgs": {
            text: "'Galatea of the Spheres' (1952): Šī glezna, kurā attēlota Galas seja, kas veidota no sfērām, pauž dziļu atzinību un gandrīz vai dievināšanu pret viņa sievu. Nosaukums attiecas uz jūras nimfu no klasiskās mitoloģijas, kas slavena ar savu labestību.",
            image: "gal.jpg"
        },
        "Nokaunējies": {
            text: "'Basket of Bread – Rather Death Than Shame' (1945): Šī glezna, ko bieži dēvē vienkārši par Maizes grozu, attēlo maizes klaipu kraujas malā uz tumša, dramatiska fona. Tā tika gleznota aptuveni tajā pašā laikā, kad Japānā notika atombumbas sprādzieni, un tiek interpretēta kā simboliska Otrā pasaules kara postījumu atspoguļošana un nostāja pret politisko darbību kaunu, piemēram, atbalstu fašismam. ",
            image: "the-basket-of-bread.jpg"
        },
        "Priecīgs": {
            text: "'The Happy Unicorn' (1977/1978): Spilgta sirreālistiska litogrāfija, kurā attēlots vienradzis, kas planē mākoņos, un no tā muguras izaug koki. Tas simbolizē dievišķu, nepieradinātu radošo enerģiju, auglību un priecīgu, pārdabisku iztēli, bieži interpretējot to kā Dalī mūzas un sievas Galas attēlojumu vai zemapziņas svētlaimīgu stāvokli.",
            image: "unic.jpg"
        },
    
    }

    if (data[selectedValue]) {
        resultArea.style.display = "flex"
        resultText.innerText = data[selectedValue].text
        resultImg.src = data[selectedValue].image
    }
}