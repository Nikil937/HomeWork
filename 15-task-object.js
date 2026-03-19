'use strict'

const user = {
    tasks: [
        {title: 'Помыть посуду', id: 1, priority: 1}
    ],

    addTask: function(title, id, priority) {
        this.tasks.push({title, id, priority});
    },

    deleteTask: function(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    },

    sortTask: function() {
        this.tasks.sort((a,b) => a.priority - b.priority)
    },

    updateTask: function(id, newtitle, newpriority) {
        const res = this.tasks.find(task => task.id === id);
        if (res) {
            res.title = newtitle;
            res.priority = newpriority;
        }
    }
}

user.addTask('wash dishes',2,2);

user.deleteTask(1);

user.updateTask(2, 'play games',5)

console.log(user);
