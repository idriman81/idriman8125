function completeTask(member, taskId) {
  // Mettre à jour les points
  const pointsElement = document.getElementById(`points-${member}`);
  let points = parseInt(pointsElement.innerText);

  // Ajouter des points en fonction de la tâche
  if (member === 'otmane' || member === 'aicha') {
    points += 10; // 10 points pour les parents
  } else {
    points += 5; // 5 points pour les enfants
  }

  pointsElement.innerText = points;

  // Désactiver le bouton de la tâche terminée
  const taskButtons = document.querySelectorAll(`.member-column[style*="${getMemberColor(member)}"] .task`);
  const taskButton = taskButtons[taskId - 1];
  taskButton.disabled = true;
  taskButton.style.backgroundColor = '#ccc'; // Couleur de tâche terminée

  // Afficher le temps d'exécution
  const timeElement = document.createElement('span');
  timeElement.className = 'task-completed';
  timeElement.innerText = `Terminé à ${new Date().toLocaleTimeString('fr-FR')}`;
  taskButton.parentNode.insertBefore(timeElement, taskButton.nextSibling);
}

// Fonction pour obtenir la couleur du membre
function getMemberColor(member) {
  switch (member) {
    case 'otmane': return '#FF5733';
    case 'aicha': return '#33FF57';
    case 'assia': return '#3357FF';
    case 'yahya': return '#FF33A1';
    default: return '#ccc';
  }
}

// Mettre à jour la date
const dateElement = document.getElementById('date');
const today = new Date();
dateElement.innerText = today.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });