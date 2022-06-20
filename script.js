import { PROJECTS } from '../Projects.js';

PROJECTS.forEach(project => {
  document.querySelector('.box').append(createProjectItem(project));
});

function createProjectItem(projectObj) {
  const template = document.querySelector('template');
  const projectItem = template.content.cloneNode(true);
  const title = projectItem.querySelector('.title');
  const thumbnail = projectItem.querySelector('.thumbnail');
  const description = projectItem.querySelector('.description');

  title.firstChild.textContent = projectObj.title;
  title.firstChild.href = projectObj.src;
  thumbnail.style.backgroundImage = `url(${projectObj.image})`;
  description.textContent = projectObj.description;

  projectItem.addEventListener('click', e => {
    console.log(e.target);
  });

  return projectItem;
}
