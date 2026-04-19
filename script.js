
function search() {
    let textToSearch = document.getElementById("search-input").value
    textToSearch = textToSearch.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")

    let pattern = new RegExp(`${textToSearch}`, "gi")
    let elements = document.querySelectorAll("h1, h2, h3, p, span, li")

    elements.forEach(el => {
        if (textToSearch === "") {
            el.innerHTML = el.textContent
        } else {
            el.innerHTML = el.textContent.replace(pattern, match => `<mark>${match}</mark>`)
        }
    })
}

document.getElementById("search-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        search()
    }
})


//--first image Shadow----------------------------------------

const img = document.getElementById("dali-img")

img.style.boxShadow = "0 0 25px var(--primary2-color)"

img.addEventListener("mouseenter", () => {
    img.style.boxShadow = "0 0 40px var(--trird-color), 0 0 70px var(--primary2-color)"
    img.style.transform = "scale(1.03)"
})

img.addEventListener("mouseleave", () => {
    img.style.boxShadow = "0 0 25px var(--primary3-color)"
    img.style.transform = "scale(1)"
})

//-------------------------------------------------------

const navLinks = document.querySelectorAll(".nav-menu .nav-link")
const menuOpenButton = document.querySelector("#menu-open-button")
const menuCloseButton = document.querySelector("#menu-close-button")


menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu")
})

menuCloseButton.addEventListener("click", () => menuOpenButton.click())

navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click())
})


//-----Lidz dzimsanas dienas---------------------------------------------------


const eventDate = new Date("May 11, 2026 00:00:00").getTime()

function updateTimer() {
    const now = new Date().getTime()
    const timeLeft = eventDate - now

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

    const timerElement = document.getElementById("timer")
    
    timerElement.innerHTML = `${days} dienas ${hours} stundas ${minutes} minūtes ${seconds} sekundes`
    
}

setInterval(updateTimer, 1000)
updateTimer()

//---Galery------------------------------------------------

const paintings = [
    {
        image: 'gal-miegs.jpg',
        title: 'Miegs',
        description: 'Salvadors Dalī augstu vērtēja miegu kā neparastu ideju avotu savām gleznām. Viņš vairākas reizes dienā gulēja 20 minūtes un, pamostoties, ieskicēja to, ko šajā laikā redzēja.'
    },
    {
        image: 'gal-narcisa.jpg',
        title: 'Narcisa metamorfoze',
        description: 'Salvadors Dalī paņēma šo gleznu līdzi uz savu pirmo un vienīgo tikšanos ar Zigmundu Freidu Londonā 1938. Gadā. Un tas ir loģiski, jo tieši Freids ieviesa «narcisisma» jēdzienu psiholoģijā. '
    },
    {
        image: 'gal-sapnis.jpg',
        title: 'Gulbju atspulgs ziloņos',
        description: 'Tāpat kā «Narcisa metamorfoze», arī šī glezna tika gleznota paranoiskas krīzes laikā. Tajā tiek izmantoti arī dubulti attēli — viena no Dalī iecienītākajām tehnikām. '
    },
    {
        image: 'galv-zirafe.jpg',
        title: 'Žirafe liesmās',
        description: 'Kara simbols šeit ir liesmojoša žirafe, kuru mākslinieks raksturoja kā «vīrišķīgu kosmisku apokaliptisku briesmoni». '
    },
    {
        image: 'gal-varitas.jpg',
        title: 'Mīksta konstrukcija ar vārītām pupiņām',
        description: 'Šī glezna attēlo pilsoņu kara pašnāvniecisko iznīcināšanu. Dalī paskaidroja vārītu pupiņu iekļaušanas ainā iemeslu: «Nav iespējams iedomāties visas šīs bezsamaņā esošās gaļas norīšanu bez kāda cieti saturoša un melanholiska dārzeņa klātbūtnes.» '
    },
    {
        image: 'gal-atminas.jpg',
        title: 'Atmiņas noturība',
        description: 'Viņš iedomājās slaveno mīksto pulksteni, skatoties uz Kamambēra sieru, kas kūst uz vakariņu galda karstā saulē. Mākslinieks pievienoja šo detaļu nepabeigtam Kreusa raga skatam, kas atkārtoti parādījās viņa darbos. '
    },
    {
        image: 'gal-sapnis.jpg',
        title: 'Sapnis, ko izraisa bites lidojums ap granātābolu, sekunde pirms pamošanās',
        description: 'Šī glezna bija paredzēta, lai pirmo reizi attēlos paustu Freida atklājumu par ilgstošu sapni, ko izraisa ārējs stimuls, kas pamodina gulētāju. Tāpat kā adatas kritiens uz gulētāja kakla vienlaikus viņu pamodina un uzsāk ilgu sapni, kas beidzas ar giljotīnu, bites zumēšana šeit izraisa dzēlienu, kas pamodinās Galu. '
    },
    {
        image: 'gal-sveta.jpg',
        title: 'Svētā Antonija kārdinājums',
        description: 'Dalī gleznā ir daudzi sirreālisma elementi, kas raksturīgi viņa darbiem. Zīmīgi, ka «Svētā Antonija kārdinājums» ir pirmais darbs, kurā mākslinieks demonstrēja savu interesi par pāreju starp zemes un debesu pasauli. '
    },
    {
        image: 'gal-sfera.jpg',
        title: 'Sfēru Galateja',
        description: 'Dalī dziļi ieinteresējās par kodolfiziku pēc pirmajiem atombumbu sprādzieniem 1945. Gada augustā. Viņa iecienītākā doma bija, ka matērija sastāv no atomiem, kas viens ar otru nesaskaras. Savās gleznās viņš sāka attēlot peldošus objektus, kas viens ar otru nemijiedarbojas. '
    }
]


const container = document.getElementById("painting-container")
const template = document.getElementById("painting-template")

paintings.forEach(paint => {
    const clone = template.content.cloneNode(true)

    clone.querySelector(".p-img").src = paint.image
    clone.querySelector(".p-img").alt = paint.title
    clone.querySelector(".p-title").textContent = paint.title
    clone.querySelector(".p-desc").textContent = paint.description

    container.appendChild(clone)
})

//----accordion------------------------------------------------------

const accordionCol = document.querySelectorAll(".accordion-col")

accordionCol.forEach(col => {
    col.addEventListener('mouseenter', () => {
        accordionCol.forEach(c => {
            c.classList.remove('active')
            col.classList.add('active')
        })
    } )
})

// -----ziņa---------------------------------------------------------

const form = document.getElementById("my-form")

form.onsubmit = function() {
    alert("Ziņa ir nosūtīta")
}