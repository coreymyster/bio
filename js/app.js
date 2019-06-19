let projects = [
  {
  img: 'img/png/memory-game-thumbnail.png',
  name: 'Memory Game',
  desc: 'A memory game where you have to match two of the same cards.',
  url: 'projects/memory-game/index.html',
  repoLink: 'https://github.com/coreymyster/memory-game'
  },
  {
    img: 'img/png/memory-game-thumbnail.png',
    name: 'Memory Game',
    desc: 'A memory game where you have to match two of the same cards.',
    url: 'projects/memory-game/index.html',
    repoLink: 'https://github.com/coreymyster/memory-game'
  },
]

let projectItem = document.querySelector('.projectItem')

for (let i = 0; i <= projects.length; i++) {
  projectItem.innerHTML += `
    <span>
      <p><a href="${projects[i].url}"><img src="${projects[i].img}"></a></p>
      <p>${projects[i].name}</p>
      <p>${projects[i].desc}</p>
      <p class="links"><a href="${projects[i].url}">Link</a> | <a href="${projects[i].repoLink}" target="_blank"><img src="img/svg/github-icon.svg"></a></p>
    </span>
  `
}
