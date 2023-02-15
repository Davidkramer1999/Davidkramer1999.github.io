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


link.forEach(el => {
    el.addEventListener('click', () => {
        langEl.querySelector('.active').classList.remove('.active')
        el.classList.add('active')

        const attr = el.getAttribute('language')
        console.log( introduction);
        projects.textContent = data[attr].projects
        myStoryEN.textContent = data[attr].Mystory
        language.textContent = data[attr].language
        contactMe.textContent = data[attr].contactMe
        Introduction.textContent = data[attr].Introduction
        introduction.textContent = data[attr].introduction
        passionate.textContent = data[attr].passionate
        neverQuit.textContent = data[attr].neverQuit
    })
})

const data = {
    "english": {
        "Mystory": "My story",
        "projects": "Projects",
        "language": "Language",
        "contactMe": "Contact me",
        "Introduction": "Introduction",
        "introduction": `My name is David Kramer. I'm full stack developer based in Celje, Slovenia. I have developed
        many types of website. Some are very basic and easy, just getting to know syntax and  how framework works.
        Some a little bit more challenging. `,
        "passionate": ` I'm passionate about writing good code and beautiful interfaces.`,
        "neverQuit":`And I never quit till problem is solved!`
    },
    "slovenian": {
          "Mystory": "Moja zgodba",
          "projects": "Projekti",    
         "language": "Jezik",  
         "contactMe": "Kontakt",  
         "Introduction": "O meni",  
         "introduction": `Moje ime je David Kramer in sem full stack spletni razvijalec iz Celja.
          Razvil sem že kar nekaj spletnih strani. Večina je dokaj preprostih, saj je bil
           namen poznavanje sintakse ter kako deluje framework. Večino
            spletnih strani imam objavljenih na svojem GitHub profilu.`,
        "passionate": `Sem strasten pri kreiranju dobrih spletnih aplikacij. Veliko truda vložim v
         izgled ter uporabniško izkušnjo. Predvsem veliko konsistence manjka na veliko spletnih strani.`,
         "neverQuit":`In nikol ne obupam, dokler problem ni rešen!`

            }


}