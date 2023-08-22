/** @format */
import axios from 'axios';
import { ref } from 'vue';

const useUsers = () => {
	// Variables
	const currentPage = ref(1);
	const errorMessage = ref(false);
	const isLoading = ref(false);
	const users = ref([]);

	// Methods.
	const getUsers = async (page = 1) => {
		if (page <= 0) page = 1;
		isLoading.value = true;

		const { data } = await axios.get(`https://reqres.in/api/users`, {
			params: {
				page,
			},
		});

		if (data.data.length > 0) {
			users.value = data.data;
			currentPage.value = page;
			errorMessage.value = null;
		} else if (currentPage.value > 0) errorMessage.value = 'No hay mas usuarios';

		isLoading.value = false;
	};
	const nextPage = () => getUsers(currentPage.value + 1);
	const previousPage = () => getUsers(currentPage.value - 1);

	// Export
	return {
		currentPage,
		errorMessage,
		getUsers,
		isLoading,
		nextPage,
		previousPage,
		users,
	};
};

export default useUsers;
