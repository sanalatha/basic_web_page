document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const pendingTasksList = document.getElementById('pendingTasksList');
    const completedTasksList = document.getElementById('completedTasksList');
  
    taskForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const taskItem = createTaskItem(taskText);
        pendingTasksList.appendChild(taskItem);
        taskInput.value = '';
      }
    });
  
    function createTaskItem(taskText) {
      const taskItem = document.createElement('li');
      const taskLabel = document.createElement('label');
      const taskCheckbox = document.createElement('input');
      taskCheckbox.type = 'checkbox';
      taskCheckbox.addEventListener('change', function() {
        if (taskCheckbox.checked) {
          taskItem.classList.add('completed');
          completedTasksList.appendChild(taskItem);
        } else {
          taskItem.classList.remove('completed');
          pendingTasksList.appendChild(taskItem);
        }
      });
  
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        taskItem.remove();
      });
  
      taskLabel.appendChild(taskCheckbox);
      taskLabel.appendChild(taskSpan);
      taskItem.appendChild(taskLabel);
      taskItem.appendChild(deleteButton);
      return taskItem;
    }
  });
  