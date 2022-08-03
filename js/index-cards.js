'use strict';

//Global variables
let allBugCards = [];

//DOM references
let bugContainer = document.getElementById('bug-container');

//Render open bugs to bugs cards on page refresh
renderCards();

//Functions
function renderCards() {
  while(bugContainer.firstChild){
    bugContainer.firstChild.remove();
  }

  if(localStorage.getItem('bugPackage') !== null){
    allBugCards = JSON.parse(localStorage.getItem('bugPackage'));
  }

  for (let i = 0; i < allBugCards.length; i++) {
    if (allBugCards[i].status === 'Open') {
      let bugCard = document.createElement('div');
      bugCard.classList.add('bug-card');
      bugCard.id = i;
      bugCard.setAttribute('onClick', 'showDetails(this.id)');

      let pProjectTitle = document.createElement('p');
      pProjectTitle.classList.add('project-title');
      pProjectTitle.textContent = allBugCards[i].projectName;

      let pBugName = document.createElement('p');
      pBugName.classList.add('bug-name');
      pBugName.textContent = allBugCards[i].subject;

      let pBugPriority = document.createElement('p');
      pBugPriority.classList.add('bug-priority');
      pBugPriority.textContent = allBugCards[i].priority;

      // let closeBtn = document.createElement('button');
      // closeBtn.classList.add('close-btn');
      // closeBtn.id = i;
      // closeBtn.textContent = 'Close Bug';
      // closeBtn.setAttribute('onClick', 'closeBug(this.id)');

      bugContainer.appendChild(bugCard);
      bugCard.appendChild(pProjectTitle);
      bugCard.appendChild(pBugName);
      bugCard.appendChild(pBugPriority);
      // bugCard.appendChild(closeBtn);
    }
  }
}

/* eslint-disable */
function closeBug(clickedID){
  Bug.allBugs[+clickedID].status = 'Closed';
  console.log(Bug.allBugs[+clickedID].status);
  localStorage.setItem('bugPackage', JSON.stringify(Bug.allBugs));
  renderCards();
}
