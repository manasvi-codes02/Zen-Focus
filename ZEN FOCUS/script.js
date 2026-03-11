let tasks = [];

function render() {
    const list = document.getElementById('task-list');
    list.innerHTML = tasks.map((t, i) => `
        <div class="task-card" onclick="toggle(${i})">
            ${t.text}
        </div>
    `).join('');
}

document.getElementById('new-task').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && this.value.trim() !== "") {
        tasks.push({text: this.value, done: false});
        this.value = '';
        render();
    }
});

function toggle(i) {
    tasks.splice(i, 1); // Task complete hone par list se remove
    render();
}