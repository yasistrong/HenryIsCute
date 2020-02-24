let previouslySelectedChampion = {};

selectChampion = (selectedId) => {
  const selectedChampion = champions.find(champion => champion.id === selectedId);
  showData(selectedChampion);
}

showData = (selectedChampion) => {
  if (previouslySelectedChampion.name === selectedChampion.name) {
    document.getElementById('dataListContainer').classList.toggle('hide');
  
    showDataItems(selectedChampion);

    document.getElementById(selectedChampion.name).classList.toggle('championBtnSelected');
    
    previouslySelectedChampion = selectedChampion;
  } 
  else {
    document.getElementById('dataListContainer').classList.remove('hide');
  
    showDataItems(selectedChampion);

    document.getElementById(selectedChampion.name).classList.toggle('championBtnSelected');

    if (previouslySelectedChampion.name) {
      document.getElementById(previouslySelectedChampion.name).classList.remove('championBtnSelected');
    }

    previouslySelectedChampion = selectedChampion;
  }
}

showDataItems = (selectedChampion) => {
  document.getElementById('name').innerHTML = 'Name: ' + selectedChampion.name;
  document.getElementById('dateLastOnRotation').innerHTML = 'Date Last on Rotation: ' + formatDate(selectedChampion.dateLastOnRotation);
  document.getElementById('dateNextOnRotation').innerHTML = 'Date Next on Rotation: ' + nextOnRotationDate(selectedChampion.dateLastOnRotation);
}

nextOnRotationDate = (dateLastOnRotation) => {
  const formattedLastDate = new Date(dateLastOnRotation);
  const nextDate = formattedLastDate.setDate(formattedLastDate.getDate()+70);
  const formattedNextDate = new Date(nextDate);
  return formattedNextDate.toDateString();
}

formatDate = (date) => {
  formattedDate = new Date(date);
  return formattedDate.toDateString();
}

const mapTest = champions.map(champion => (
`<div id="${champion.name}" class="championBtn" onclick="selectChampion(\`${champion.id}\`)">
  <img src="${mainIconUrl}/${champion.name}.png"/></img>
  <div>${champion.name}</div>
</div>`
));

onLoad = () => {
  document.getElementById('btnListContainer').innerHTML = mapTest;
}
