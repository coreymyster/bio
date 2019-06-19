let projects = [
  {
  name: 'Memory Game',
  desc: 'A memory game where you have to match two of the same cards.',
  url: '../projects/memory-game/index.html'
  },
  {
  name: 'Memory Game',
  desc: 'A memory game where you have to match two of the same cards.',
  url: '../projects/memory-game/index.html'
  },
]

let projectItem = document.querySelector('.projectItem')

for (let i = 0; i <= projects.length; i++) {
  projectItem.innerHTML += `
    <span>
      <p>${projects[i].name}</p>
      <p>${projects[i].desc}</p>
      <p class="links">Link | <a href="${projects[i].url}"><img src="img/svg/github-icon.svg"></a></p>
    </span>
  `
}
