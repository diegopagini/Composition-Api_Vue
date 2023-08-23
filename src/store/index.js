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
	},
	mutations: {},
	actions: {},
	modules: {},
});
