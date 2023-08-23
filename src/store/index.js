/** @format */
import { createStore } from 'vuex';

export default createStore({
	state: {
		todos: [
			{
				id: '1',
				text: 'Recolectar las piedras del infinito',
				completed: false,
			},
			{
				id: '2',
				text: 'Piedra del alma',
				completed: true,
			},
			{
				id: '3',
				text: 'Piedra del poder',
				completed: false,
			},
		],
	},
	getters: {
		allTodos: (state) => [...state.todos],
		completedTodos: (state) => [...state.todos.filter((todo) => todo.completed)],
		pendingTodos: (state) => [...state.todos.filter((todo) => !todo.completed)],
		getTodosByTab: (_, getters) => (tab) => {
			switch (tab) {
				case 'all':
					return getters.allTodos;

				case 'completed':
					return getters.completedTodos;

				case 'pending':
					return getters.pendingTodos;
			}
		},
	},
	mutations: {
		toggleTodo(state, id) {
			const todoIndex = state.todos.findIndex((todo) => todo.id === id);
			state.todos.at(todoIndex).completed = !state.todos.at(todoIndex).completed;
		},
	},
	actions: {},
	modules: {},
});
