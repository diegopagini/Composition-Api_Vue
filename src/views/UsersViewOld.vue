<!-- @format -->

<template>
	<h2 v-if="isLoading">Espere por favor...</h2>

	<h2 v-else>Usuarios</h2>
	<h3 v-if="errorMessage">{{ errorMessage }}</h3>

	<div v-if="users.length > 0">
		<ul>
			<li
				v-for="user of users"
				:key="user.id"
			>
				<h4>{{ user.first_name }} {{ user.last_name }}</h4>
				<h6>{{ user.email }}</h6>
			</li>
		</ul>
	</div>

	<button @click="previousPage">Atras</button>
	<button @click="nextPage">Siguiente</button>

	<div>
		<small>Página: {{ currentPage }}</small>
	</div>
</template>

<script>
	import useUsers from '@/composables/useUsers';
	import { onMounted } from 'vue';

	export default {
		setup() {
			const { currentPage, errorMessage, isLoading, users, nextPage, previousPage, getUsers } =
				useUsers();

			onMounted(() => {
				getUsers();
			});

			return {
				currentPage,
				errorMessage,
				isLoading,
				nextPage,
				previousPage,
				users,
			};
		},
	};
</script>

<style scoped>
	h2 {
		text-align: center;
		width: 100%;
	}

	div {
		display: flex;
		justify-content: center;
		text-align: center;
	}

	ul {
		margin: unset;
		padding: unset;
		width: 250px;
	}

	li {
		list-style: none;
	}
</style>
