/** @format */
import axios from 'axios';
import { ref } from 'vue';

const usePokemon = (pokemonId = '1') => {
	const errorMessage = ref();
	const isLoading = ref(false);
	const pokemon = ref();

	const searchPokemon = async (id) => {
		if (!id) return;

		isLoading.value = true;
		pokemon.value = null;

		try {
			const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
			pokemon.value = data;
			errorMessage.value = null;
		} catch (error) {
			errorMessage.value = 'No se pudo cargar ese pokémon';
		}

		isLoading.value = false;
	};

	searchPokemon(pokemonId);

	return {
		errorMessage,
		isLoading,
		pokemon,
		searchPokemon,
	};
};

export default usePokemon;
