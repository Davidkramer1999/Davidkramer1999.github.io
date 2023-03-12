const Language = {
    langEl: document.querySelector('.langWrap'),
    link: document.querySelectorAll('a'),
    projects: document.querySelector('.projects'),
    myStory: document.querySelector('.Mystory'),
    language: document.querySelector('.dropbtn'),
    contactMe: document.querySelector('.contactMe'),
    Introduction: document.querySelector('.Introduction'),
    introduction: document.querySelector('.noMargin.introduction'),
    passionate: document.querySelector('.noMargin.passionate'),
    neverQuit: document.querySelector('.noMargin.neverQuit'),
    Education: document.querySelector('.Education'),
    education: document.querySelector('.noMargin.education'),
    knowledge: document.querySelector('.Knowledge'),
    myExperiences: document.querySelector('.My.experiences'),
    MyExperiences: document.querySelector('.noMargin.My.experiences'),
    calculator: document.querySelector('.calculator'),
    reservation: document.querySelector('.reservation'),
    connectWithMe: document.querySelector('.connectWithMe'),
    moreToCome: document.querySelector('.moreToCome'),
    moreToCome1: document.querySelector('.moreToCome1'),
    moreToCome2: document.querySelector('.moreToCome2'),
    message: document.querySelector('.input.message'),
    email: document.querySelector('.input.email'),
    name: document.querySelector('.input.name'),
    connectWithMeE: document.querySelector('.title.contanctMe'),
    getInTouch: document.querySelector('.title.getInTouch'),
    btnSend: document.querySelector('.btn.send'),
    weatherApp: document.querySelector('.weatherApp'),
}


Language.link.forEach(el => {
    el.addEventListener('click', () => {
        Language.langEl.querySelector('.active').classList.remove('.active')
        el.classList.add('active')
        const attr = el.getAttribute('language')
        //prevent crashing language 
        const removeNullValues = (obj) => {
            Object.keys(obj).forEach(key => {
                if (!obj[key]) {
                    obj[key] = 'No language';
                }
            });
        };
        removeNullValues(Language);
        Language.projects.textContent = data[attr].projects
        Language.myStory.textContent = data[attr].Mystory
        Language.language.textContent = data[attr].language
        Language.contactMe.textContent = data[attr].contactMe
        Language.Introduction.textContent = data[attr].Introduction
        Language.introduction.textContent = data[attr].introduction
        Language.passionate.textContent = data[attr].passionate
        Language.neverQuit.textContent = data[attr].neverQuit
        Language.Education.textContent = data[attr].Education
        Language.education.textContent = data[attr].education
        Language.knowledge.textContent = data[attr].knowledge
        Language.myExperiences.textContent = data[attr].myExperiences
        Language.MyExperiences.textContent = data[attr].MyExperiences
        Language.calculator.textContent = data[attr].calculator
        Language.reservation.textContent = data[attr].reservation
        Language.connectWithMe.textContent = data[attr].connectWithMe
        Language.connectWithMeE.textContent = data[attr].connectWithMeE
        Language.moreToCome.textContent = data[attr].moreToCome
        Language.moreToCome1.textContent = data[attr].moreToCome1
        Language.moreToCome2.textContent = data[attr].moreToCome2
        Language.message.textContent = data[attr].message
        Language.moreToCome2.textContent = data[attr].moreToCome2
        Language.message.textContent = data[attr].message
        Language.name.textContent = data[attr].name
        Language.email.textContent = data[attr].email
        Language.getInTouch.textContent = data[attr].getInTouch
        Language.btnSend.textContent = data[attr].btnSend
        Language.weatherApp.textContent = data[attr].weatherApp
    })
})

const data = {
    "english": {
        "Mystory": "My story",
        "projects": "Projects",
        "language": "Language",
        "contactMe": "Contact me",
        "Introduction": "Introduction🧑‍💻",
        "introduction": `My name is David Kramer. I'm full stack developer based in Celje, Slovenia. I have developed
        many types of website. Some are very basic and easy, just getting to know syntax and  how framework works.
        Some a little bit more challenging. `,
        "passionate": ` I'm passionate about writing good code and beautiful interfaces.`,
        "neverQuit": `And I never quit till problem is solved!`,
        "Education": `Education 🏫`,
        "education": `My educational background includes my high school diploma of electrical engineering.
        Then I graduated as engineer of informatics(VI/I) in Velenje`,
        "knowledge": `Knowledge📚💡`,
        "myExperiences": `My experiences💪`,
        "MyExperiences": `I've started my journey in december 2020. They have learned me how to coding. Almost after 
        two years I wanted to get more experiences in other companies as well. Then I joined 
        another company based in Maribor where my journey ended at beginning of february 2023`,
        "calculator": `So you don't need to do math`,
        "reservation": `Make you reservation today!`,
        "connectWithMe": `Connect with me: `,
        "connectWithMeE": `Connect with me `,
        "moreToCome": `More to  come`,
        "moreToCome1": `More to  come`,
        "email": `Email`,
        "name": `Name`,
        "message": `Message`,
        "getInTouch": `Let's get in touch`,
        "btnSend": `Send`,
        "weatherApp": `Check weather in US cities`,
    },
    "slovenian": {
        "Mystory": "Moja zgodba",
        "projects": "Projekti",
        "language": "Jezik",
        "contactMe": "Kontakt",
        "Introduction": "O meni 🧑‍💻",
        "introduction": `Moje ime je David Kramer in sem full stack razvijalec iz Celja.
         Za namen spoznavanja različnih frameworkov sem razvil nekaj preprostih spletni strani
         , ki so dostopna na mojem github profilu.`,
        "passionate": `Sem strasten pri kreiranju dobrih spletnih aplikacij. Veliko truda vložim v
         izgled ter uporabniško izkušnjo. Predvsem veliko konsistence manjka na veliko spletnih strani.`,
        "neverQuit": `In nikol ne obupam, dokler problem ni rešen!`,
        "Education": `Izobrazba 🏫`,
        "education": `Obiskoval sem srednjo šolo za elektrotehniko v Celju. Potem sem nadaljeval svoje
         izobraževanje na višji šoli za informatiko v Velenju, kjer sem tudi diplomiral decembra 2020.`,
        "knowledge": `Tehnologije📚💡`,
        "myExperiences": `Izkušnje💪`,
        "MyExperiences": `Svojo kariero sem začel pri podjetju DSI expert v Celju, kjer so me naprej 
        naučili osnov javaScripta, Reacta, node Expressa.
         Po slabih 2 letih sem se odločil, da želim razširiti svoje znanje ter se zaposlil pri Aspiriji v Celju.
          V podjetju sem se začel učiti Angular, Laravel in MySQL, ker pri učenju nisem imel veliko 
          pomoči sem se odpravil ponovno poiskati nove izzive. 
          Nato sem se zaposlil v Mariboru v podjetju TBS 24 Team, kjer sem se naučil Vue in Squlize. `,
        "calculator": `Kalkulator`,
        "reservation": `Naredite vašo rezervacijo še danes`,
        "connectWithMe": `Soicalna omrežja: `,
        "connectWithMeE": `Kontaktirajte me `,
        "moreToCome": `Kmalu več`,
        "moreToCome1": `Kmalu več`,
        "moreToCome2": `Kmalu več`,
        "email": `Email`,
        "name": `Ime`,
        "message": `Sporočilo`,
        "getInTouch": `Kontakt`,
        "btnSend": `Pošlji`,
        "weatherApp": `Ogled vremena v US mestih`,
    }
}