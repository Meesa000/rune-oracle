const navBar = document.getElementById('nav-bar');
const searchPlayer = document.getElementById('search-player');
const searchPlayerBtn = document.getElementById('search-player-button');
const infoContainer = document.getElementById('info-container');
const infoContent = document.getElementById('info-content');
const mainTitle = document.getElementById('nav-main-title');


function getStats() {
   // get username value from search-player everytime button clicked
   const playerName = document.getElementById('search-player').value;
   const baseUrl = 'http://localhost:3000/api/proxy';
   const url = `${baseUrl}?player=${encodeURIComponent(playerName)}`;

   // Clear previous data
   infoContainer.innerHTML = '';
   
    fetch(url)
   .then(response => {
    return response.json();
   })
   .then (data => { 

    const tbl = document.createElement('table');
    tbl.style.borderCollapse = 'collapse';
    const tblBody = document.createElement('tbody');
      
    // header row
    const headerRow = document.createElement('tr');
    const tHeaderSkillName = document.createElement('th');
    const tHeaderLevel = document.createElement('th');
    const tHeaderXp = document.createElement('th');
    const theaderRank = document.createElement('th');

    const headerTextSkill = document.createTextNode('Skill Name');
    const headerTextLevel = document.createTextNode('Skill Level');
    const headerTextXp = document.createTextNode('XP');
    const headerTextRank = document.createTextNode('Rank');

   // Array of headers
   const headers = [tHeaderSkillName, tHeaderLevel, tHeaderXp, theaderRank];

   // Common styles for headers
   headers.forEach(header => {
      header.style.borderBottom = '1px solid gray';
      header.style.color = '#FF1D58';
    });

    tHeaderSkillName.appendChild(headerTextSkill);
    tHeaderLevel.appendChild(headerTextLevel);
    tHeaderXp.appendChild(headerTextXp);
    theaderRank.appendChild(headerTextRank);
    headerRow.appendChild(tHeaderSkillName);
    headerRow.appendChild(tHeaderLevel);
    headerRow.appendChild(tHeaderXp);
    headerRow.appendChild(theaderRank);
    tblBody.appendChild(headerRow);

    //creates the body and implements api data
    for (i=0;i < data.skills.length;i++) {

      const row = document.createElement('tr');
      const cellSkill = document.createElement('td');
      const cellLevel = document.createElement('td');
      const cellXp = document.createElement('td');
      const cellRank = document.createElement('td');

      const cellTextSkillName = document.createTextNode(data.skills[i].name);
      const cellTextLevel = document.createTextNode(data.skills[i].level);
      const cellTextXp = document.createTextNode(data.skills[i].xp);
      const cellTextRank = document.createTextNode(data.skills[i].rank);

      // array for cells
      const cells = [cellSkill, cellLevel, cellXp,cellRank];
      
      // common styles for cells
      cells.forEach(cell => {
         cell.style.borderBottom = '1px solid gray';
         cell.style.textAlign = 'center';
      })

      // data append
      cellSkill.appendChild(cellTextSkillName);
      row.appendChild(cellSkill);
      cellLevel.appendChild(cellTextLevel);
      row.appendChild(cellLevel);
      cellRank.appendChild(cellTextRank);
      row.appendChild(cellRank);
      cellXp.append(cellTextXp);
      row.appendChild(cellXp);
      tblBody.appendChild(row);

      // table append to main containers
      tbl.appendChild(tblBody);
      infoContent.appendChild(tbl);
      infoContainer.appendChild(infoContent);
      console.log(data.skills[i]);
  } 
  
   
   });

      
}

searchPlayerBtn.addEventListener('click',getStats);

// CREATE A TABLE AND PUT THE DATA IN THERE


