function searchTeam() {
  const input = document.getElementById('teamSearch').value.toLowerCase();
  const results = teams.filter(team => team.name.toLowerCase().includes(input));
  const resultSection = document.getElementById('resultSection');
  resultSection.innerHTML = '';

  if (input.trim() === '') {
    resultSection.innerHTML = '<p>Digite o nome do time para pesquisar.</p>';
    return;
  }

  if (results.length === 0) {
    resultSection.innerHTML = '<p>Nenhum time encontrado.</p>';
  } else {
    results.forEach(team => {
      const teamDiv = document.createElement('div');
      teamDiv.className = 'item-resultado';
      teamDiv.innerHTML = `
        <h2><a href="${team.link}" target="_blank">${team.name}</a></h2>
        <p class="descricao-meta">${team.description}</p>
        <a href="${team.link}" target="_blank">Mais informações</a>
      `;
      resultSection.appendChild(teamDiv);
    });
  }
}