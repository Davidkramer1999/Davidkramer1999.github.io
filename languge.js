const langEl = document.querySelector('.langWrap');
const link = document.querySelectorAll('a')
const najsEN = document.querySelector('.najs')
const myStoryEN = document.querySelector('.Mystory')

link.forEach(el => {
el.addEventListener('click' , ()  => {
    langEl.querySelector('.active').classList.remove('.active')
    el.classList.add('active')

    const attr = el.getAttribute('language')
    console.log( data[attr].Mystory)
    najsEN.textContent = data[attr].najs
    myStoryEN.textContent = data[attr].Mystory
})
})

const data = {
    "english": {
        "najs": "THIS IS EXELENCT",
        "Mystory": "MY STORY"
    },
    "slovenian": {
        "najs": "NAAAAAAAJS",
        "Mystory": "Moja zgodba"
    }
}