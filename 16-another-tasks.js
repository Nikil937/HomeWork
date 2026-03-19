'use strict'


const userMethods = {
    addTask(id, name, description, order) {
        this.tasks.push({id, name, description, order});
    },

    deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    },

    sortTask() {
        this.tasks.sort((a,b) => a.order - b.order)
    },

    updateTask(id, newname, newdescription, neworder) {
        const res = this.tasks.find(task => task.id === id);
        if (res) {
            res.name = newname;
            res.description = newdescription;
            res.order = neworder;
        }
    }
}

const user2 = {
tasks: [
        {id: 1, name: 'тест', description: 'описание', order: 0}
    ]
}

const user3 = {
tasks: [
        {id: 2, name: 'контрольная', description: 'описание номер 2', order: 3}
    ]
}


userMethods.addTask.call(user2,2,'тест-2','описание-2',1)

userMethods.deleteTask.call(user2,1)

userMethods.sortTask.call(user2)

userMethods.updateTask.call(user2,2,'qwe','zxc',10);








console.log(user2);

