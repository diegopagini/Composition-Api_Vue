<!-- @format -->

<template>
	<h2 v-if="isLoading">Espere por favor...</h2>

	<h2 v-else>Usuarios</h2>
	<h3 v-if="errorMessage">{{ errorMessage }}</h3>

	<div v-if="users.length > 0">
		<user-list
			:users="users"
			v-slot="{ user }"
		>
			<h5>{{ user.first_name }} {{ user.last_name }}</h5>
			<span>{{ user.email }}</span>
		</user-list>
	</div>

	<button @click="previousPage">Atras</button>
	<button @click="nextPage">Siguiente</button>

	<div>
		<small>Página: {{ currentPage }}</small>
	</div>
</template>

<script>
	import useUsers from '@/composables/useUsers';
	import { defineAsyncComponent, onMounted } from 'vue';

	export default {
		components: {
			UserList: defineAsyncComponent(() => import('@/components/UserList.vue')),
		},
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
</style>
