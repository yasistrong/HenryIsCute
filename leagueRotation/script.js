const champions = [
    {
      id: 1,
      name: "Aatrox",
      dateLastOnRotation: "2024-12-10",
      dateNextOnRotation: "2024-10-04",
    },
    {
      id: 2,
      name: "Ahri",
      dateLastOnRotation: "2024-10-12",
      dateNextOnRotation: "2024-10-04",
    },
    {
      id: 3,
      name: "Akali",
      dateLastOnRotation: "2024-10-04",
      dateNextOnRotation: "2024-10-04",
    }
]

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
  document.getElementById('name').innerHTML = selectedChampion.name;
  document.getElementById('dateLastOnRotation').innerHTML = selectedChampion.dateLastOnRotation;
  document.getElementById('dateNextOnRotation').innerHTML = selectedChampion.dateNextOnRotation;
}