const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Search handicap_list.json and filter
const searchGliders = async searchText => {
  const res = await fetch('https://api.jsonbin.io/b/62320a9fa703bb67492d6960');
  const gliders = await res.json();

// Get matches to current text input
let matches = gliders.filter(glider => {
  const regex = new RegExp(`${searchText}`, 'gi');
  return glider.Type.match(regex) || glider.Handicap.match(regex);
});

console.log(matches);

};

search.addEventListener('input', () => searchGliders(search.value));