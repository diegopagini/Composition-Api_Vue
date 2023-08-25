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

	<button @click="isOpen = true">Crear TODO</button>

	<modal
		v-if="isOpen"
		title="form"
		@on:close="isOpen = false"
	>
		<template v-slot:header>
			<h1>Nueva tarea</h1>
		</template>

		<template v-slot:body>
			<form
				@submit.prevent="
					createTodo(newTodoText);
					isOpen = false;
				"
			>
				<input
					type="text"
					placeholder="Nueva tarea"
					v-model="newTodoText"
				/>

				<br />

				<button type="submit">Crear</button>
			</form>
		</template>
	</modal>
</template>

<script>
	import useTodos from '@/composables/useTodos';
	import { defineAsyncComponent } from 'vue';
	import { ref } from 'vue';

	export default {
		components: { modal: defineAsyncComponent(() => import('@/components/Modal.vue')) },
		setup() {
			const { currentTab, getTodosByTab, toggleTodo, pending, createTodo } = useTodos();

			return {
				createTodo,
				currentTab,
				getTodosByTab,
				pending,
				toggleTodo,

				isOpen: ref(false),
				newTodoText: ref(''),
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
