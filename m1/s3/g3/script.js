 
    let taskInput = document.getElementById('taskInput');
    let addTaskButton = document.getElementById('aggiungi task');
    let taskList = document.getElementById('taskList');
    let clockDisplay = document.getElementById('orologio');

    addTaskButton.addEventListener('click', function () {
        let taskText = taskInput.value.trim();

        if (taskText !== '') {
            let li = document.createElement('li');
            li.textContent = taskText;

            li.addEventListener('click', function () {
                if (li.style.textDecoration === '' || li.style.textDecoration === 'none') {
                    li.style.textDecoration = 'line-through';
                } else {
                    li.style.textDecoration = 'none';
                }
            });

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'elimina';

            deleteButton.addEventListener('click', function () {
                taskList.removeChild(li);
            });

            li.appendChild(deleteButton);
            taskList.appendChild(li);
            taskInput.value = '';
        }
    });

    function updateClock() {
        let now = new Date();
        let hours = now.getHours().toString().padStart(2, '0');
        let minutes = now.getMinutes().toString().padStart(2, '0');
        let seconds = now.getSeconds().toString().padStart(2, '0');
        clockDisplay.textContent = hours + ':' + minutes + ':' + seconds;
    }

    setInterval(updateClock, 1000);

    updateClock();
;

