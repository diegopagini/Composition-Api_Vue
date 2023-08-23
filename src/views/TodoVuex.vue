<!-- @format -->

<template>
	<h1>Thanos Todo List</h1>

	<hr />

	<h4>Pendientes: {{ pending.length }}</h4>

	<button>Todos</button>
	<button>Pendientes</button>
	<button>Completados</button>

	<div>
		<ul>
			<li
				v-for="todo in all"
				:key="todo.id"
				:class="{ completed: todo.completed }"
			>
				{{ todo.text }}
			</li>
		</ul>
	</div>
</template>

<script>
	import { useStore } from 'vuex';
	import { computed } from 'vue';

	export default {
		setup() {
			const store = useStore();

			return {
				all: computed(() => store.getters['allTodos']),
				completed: computed(() => store.getters['completedTodos']),
				pending: computed(() => store.getters['pendingTodos']),
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

	.active {
		background-color: #2c3e50;
		color: #fff;
	}

	.completed {
		text-decoration: line-through;
	}
</style>
