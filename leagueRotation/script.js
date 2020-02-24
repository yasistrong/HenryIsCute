let previouslySelectedChampion = {};

const mostRecentDate = new Date(Math.max.apply(null, champions.map(champion => {
  return new Date(champion.dateLastOnRotation);
})));

const mostRecentObject = champions.filter(champion => {
  const d = new Date(champion.dateLastOnRotation);
  return d.getTime() == mostRecentDate.getTime();
})[0];

selectChampion = (selectedId) => {
  const selectedChampion = champions.find(champion => champion.id === selectedId);
  showData(selectedChampion);
}

showData = (selectedChampion) => {
  if (previouslySelectedChampion.name === selectedChampion.name) {
    document.getElementById('dataListContainer').classList.toggle('hide');
  
    document.getElementById('name').innerHTML = 'Name: ' + selectedChampion.name;
    document.getElementById('dateLastOnRotation').innerHTML = 'Date Last on Rotation: ' + selectedChampion.dateLastOnRotation;
    // Hidden until calculation is implemented
    //document.getElementById('dateNextOnRotation').innerHTML = 'Date Next on Rotation: ' + selectedChampion.dateNextOnRotation;
  
    document.getElementById(selectedChampion.name).classList.toggle('championBtnSelected');
    
    previouslySelectedChampion = selectedChampion;
  } else if (previouslySelectedChampion.name !== selectedChampion.name) {
    console.log(previouslySelectedChampion);

    document.getElementById('dataListContainer').classList.remove('hide');

    document.getElementById('name').innerHTML = 'Name: ' + selectedChampion.name;
    document.getElementById('dateLastOnRotation').innerHTML = 'Date Last on Rotation: ' + selectedChampion.dateLastOnRotation;
    // Hidden until calculation is implemented
    //document.getElementById('dateNextOnRotation').innerHTML = 'Date Next on Rotation: ' + selectedChampion.dateNextOnRotation;

    document.getElementById(selectedChampion.name).classList.toggle('championBtnSelected');

    // BROKEN
    //document.getElementById(previouslySelectedChampion.name).classList.toggle('championBtnSelected');

    previouslySelectedChampion = selectedChampion;
  }
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
