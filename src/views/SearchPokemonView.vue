<!-- @format -->

<template>
	<h1>Buscar pokémon: {{ pokemonId }}</h1>

	<form @submit.prevent="onSubmit">
		<input
			placeholder="Número del pokémon"
			ref="textSearchId"
			type="number"
			v-model="pokemonId"
		/>
	</form>

	<br />
	<span>Presione enter para buscar</span>
</template>

<script>
	import { ref, onActivated } from 'vue';
	import { useRouter } from 'vue-router';

	export default {
		setup() {
			const pokemonId = ref(1);
			const router = useRouter();
			const textSearchId = ref();

			onActivated(() => {
				textSearchId.value.select();
			});

			return {
				pokemonId,
				textSearchId,
				// Methods
				onSubmit: () => {
					router.push({ name: `pokemon-id`, params: { id: pokemonId.value } });
				},
			};
		},
	};
</script>
