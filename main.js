const { createApp} = Vue

createApp({
    data() {
        return {
            todos: ['andare in palestra', 'portare il cane al parco', 'finire lavoro'],
            newTodo: ''
        }
               
    },
    methods: {
        addTodo() {
          if (this.newTodo.trim() !== '') {
            this.todos.push(this.newTodo);
            this.newTodo = '';
          }
        },
        removeTodo(todo) {
            const index = this.todos.indexOf(todo);
            if (index !== -1) {
              this.todos.splice(index, 1);
            }
          }
    }
                
}).mount('#app')
                
        
            
       
        



    