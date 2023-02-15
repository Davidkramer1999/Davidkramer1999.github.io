const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a')
const projects = document.querySelector('.projects')
const myStoryEN = document.querySelector('.Mystory')
const language = document.querySelector('.dropbtn')
const contactMe = document.querySelector('.contactMe')
const Introduction = document.querySelector('.Introduction')
const introduction = document.querySelector('.noMargin.introduction')
const passionate = document.querySelector('.noMargin.passionate')
const neverQuit = document.querySelector('.noMargin.neverQuit')
const Education = document.querySelector('.Education')
const education = document.querySelector('.noMargin.education')
const knowledge = document.querySelector('.Knowledge')
const myExperiences = document.querySelector('.My.experiences')
const MyExperiences = document.querySelector('.noMargin.My.experiences')


link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('.active')
        el.classList.add('active')

        const attr = el.getAttribute('language')
        console.log(introduction);
        projects.textContent = data[attr].projects
        myStoryEN.textContent = data[attr].Mystory
        language.textContent = data[attr].language
        contactMe.textContent = data[attr].contactMe
        Introduction.textContent = data[attr].Introduction
        introduction.textContent = data[attr].introduction
        passionate.textContent = data[attr].passionate
        neverQuit.textContent = data[attr].neverQuit
        Education.textContent = data[attr].Education
        education.textContent = data[attr].education
        knowledge.textContent = data[attr].knowledge
        myExperiences.textContent = data[attr].myExperiences
        MyExperiences.textContent = data[attr].MyExperiences
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
        "MyExperiences": `Svojo karirero sem žacel pri `,

    },
    "slovenian": {
        "Mystory": "Moja zgodba",
        "projects": "Projekti",
        "language": "Jezik",
        "contactMe": "Kontakt",
        "Introduction": "O meni 🧑‍💻",
        "introduction": `Moje ime je David Kramer in sem full stack razvijalec iz Celja. Za namen spoznavanja različnih frameworkov sem razvil nekaj preprostih spletni strani, ki so dostopna na mojem github profilu.`,
        "passionate": `Sem strasten pri kreiranju dobrih spletnih aplikacij. Veliko truda vložim v
         izgled ter uporabniško izkušnjo. Predvsem veliko konsistence manjka na veliko spletnih strani.`,
        "neverQuit": `In nikol ne obupam, dokler problem ni rešen!`,
        "Education": `Izobrazba 🏫`,
        "education": `Obiskoval sem srednjo šolo za elektrotehniko v Celju. Potem sem nadaljeval svoje
         izobraževanje na višji šoli za informatiko v Velenju, kjer sem tudi diplomiral decembra 2020.`,
        "knowledge": `Tehnologije📚💡`,
        "myExperiences": `Izkušnje💪`,
        "MyExperiences": `Svojo kariero sem začel pri podjetju DSI expert v Celju, kjer so me naprej naučili osnov javaScripta, Reacta, node Expressa.
         Po slabih 2 letih sem se odločil, da želim razširiti svoje znanje ter se zaposlil pri Aspiriji v Celju.
          V podjetju sem se začel učiti Angular, Laravel in MySQL, ker pri učenju nisem imel veliko pomoči sem se odpravil ponovno poiskati nove izzive. 
          Nato sem se zaposlil v Mariboru v podjetju TBS 24 Team, kjer sem se naučil Vue in Squlize. `,
    }
}