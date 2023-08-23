<!-- @format -->

<template>
	<h1>Thanos Todo List</h1>

	<hr />

	<h4>Pendientes: {{ pending.length }}</h4>

	<button
		:class="{ active: currentTab === 'all' }"
		@click="currentTab = 'all'"
	>
		Todos
	</button>
	<button
		:class="{ active: currentTab === 'pending' }"
		@click="currentTab = 'pending'"
	>
		Pendientes
	</button>
	<button
		:class="{ active: currentTab === 'completed' }"
		@click="currentTab = 'completed'"
	>
		Completados
	</button>

	<div>
		<ul>
			<li
				v-for="todo in getTodosByTab"
				:key="todo.id"
				:class="{ completed: todo.completed }"
				@dblclick="toggleTodo(todo.id)"
			>
				{{ todo.text }}
			</li>
		</ul>
	</div>
</template>

<script>
	import { useStore } from 'vuex';
	import { computed, ref } from 'vue';

	export default {
		setup() {
			const store = useStore();
			const currentTab = ref('all');

			return {
				currentTab,
				all: computed(() => store.getters['allTodos']),
				completed: computed(() => store.getters['completedTodos']),
				pending: computed(() => store.getters['pendingTodos']),
				getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),
				// Methods
				toggleTodo: (id) => store.commit('toggleTodo', id),
			};
		},
	};
</script>

<style scoped>
	div {
		display: flex;
		justify-content: center;
		text-align: center;
	}

	ul {
		width: 300px;
		text-align: left;
	}

	li {
		cursor: pointer;
	}

	button {
		border-radius: 0.25rem;
		cursor: pointer;
		margin: 0.25rem;
		padding: 0.5rem;
	}

	.active {
		background-color: #2c3e50;
		color: #fff;
	}

	.completed {
		text-decoration: line-through;
	}
</style>
