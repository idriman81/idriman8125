let currentMember = null;
let tasks = {
  otmane: [
    { name: "Good Morning", icon: "fas fa-sun", completed: false },
    { name: "Brush Teeth", icon: "fas fa-tooth", completed: false },
    { name: "Make the Bed", icon: "fas fa-bed", completed: false },
    { name: "Breakfast", icon: "fas fa-utensils", completed: false }
  ],
  aicha: [
    { name: "Good Morning", icon: "fas fa-sun", completed: false },
    { name: "Brush Teeth", icon: "fas fa-tooth", completed: false },
    { name: "Make the Bed", icon: "fas fa-bed", completed: false },
    { name: "Breakfast", icon: "fas fa-utensils", completed: false }
  ],
  assia: [
    { name: "Good Morning", icon: "fas fa-sun", completed: false },
    { name: "Brush Teeth", icon: "fas fa-tooth", completed: false },
    { name: "Make the Bed", icon: "fas fa-bed", completed: false },
    { name: "Breakfast", icon: "fas fa-utensils", completed: false }
  ],
  yahya: [
    { name: "Good Morning", icon: "fas fa-sun", completed: false },
    { name: "Brush Teeth", icon: "fas fa-tooth", completed: false },
    { name: "Make the Bed", icon: "fas fa-bed", completed: false },
    { name: "Breakfast", icon: "fas fa-utensils", completed: false }
  ]
};

// Sauvegarder les tâches
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Charger les tâches
function loadTasks() {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    tasks = JSON.parse(savedTasks);
  }
}

// Afficher les tâches
function renderTasks(member) {
  const tasksContainer = document.getElementById(`tasks-${member}`);
  tasksContainer.innerHTML = tasks[member].map((task, index) => `
    <button class="task task-color-${(index % 3) + 1}" onclick="completeTask('${member}', ${index})" ${task.completed ? 'disabled' : ''}>
      <i class="${task.icon}"></i> ${task.name} ${task.completed ? `<span class="task-completed">${task.time}</span>` : ''}
    </button>
  `).join('');
}

// Compléter une tâche
function completeTask(member, taskIndex) {
  const task = tasks[member][taskIndex];
  if (!task.completed) {
    task.completed = true;
    task.time = new Date().toLocaleTimeString('fr-FR');
    updatePoints(member, taskIndex);
    saveTasks();
    renderTasks(member);
  }
}

// Mettre à jour les points
function updatePoints(member, taskIndex) {
  const pointsElement = document.getElementById(`points-${member}`);
  let points = parseInt(pointsElement.innerText);

  if (member === 'otmane' || member === 'aicha') {
    points += 10; // 10 points pour les parents
  } else {
    points += 5; // 5 points pour les enfants
  }

  pointsElement.innerText = points;
  savePoints(member, points);
}

// Ouvrir l'éditeur de tâches
function openTaskEditor(member) {
  currentMember = member;
  document.getElementById('task-editor').style.display = 'flex';
}

// Fermer l'éditeur de tâches
function closeTaskEditor() {
  document.getElementById('task-editor').style.display = 'none';
}

// Enregistrer une tâche
function saveTask() {
  const taskName = document.getElementById('task-name').value;
  const taskIcon = document.getElementById('task-icon').value;
  if (taskName) {
    tasks[currentMember].push({ name: taskName, icon: taskIcon, completed: false });
    saveTasks();
    renderTasks(currentMember);
    closeTaskEditor();
  }
}

// Ouvrir l'historique
function openHistory() {
  const historyList = document.getElementById('history-list');
  historyList.innerHTML = Object.keys(tasks).map(member => {
    const tasksWithDate = tasks[member].filter(task => task.completed);
    if (tasksWithDate.length > 0) {
      return `
        <li>
          <h3>${member}</h3>
          <p>${new Date().toLocaleDateString('fr-FR')}</p>
          <ul>
            ${tasksWithDate.map(task => `
              <li>${task.name} - Terminé à ${task.time}</li>
            `).join('')}
          </ul>
        </li>
      `;
    }
    return '';
  }).join('');
  document.getElementById('history').style.display = 'flex';
}

// Fermer l'historique
function closeHistory() {
  document.getElementById('history').style.display = 'none';
}

// Mode sombre
const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

// Au chargement de la page
window.onload = () => {
  loadTasks();
  Object.keys(tasks).forEach(member => renderTasks(member));

  const dateElement = document.getElementById('current-date');
  const today = new Date();
  dateElement.innerText = today.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
  }
};
