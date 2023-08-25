<!-- @format -->

<template>
	<h1>Aprendiendo Slots</h1>
	<button @click="openModal">Abrir Modal</button>

	<modal
		v-if="isOpen"
		@click.self="closeModal"
		title="Hello world!"
	>
		<template v-slot:header>
			<h2>Titulo</h2>
		</template>

		<template v-slot:body>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, odit? Nostrum aliquam error
				atque cupiditate enim repellendus amet odit dignissimos facere reprehenderit odio, tenetur,
				unde est! Perspiciatis iure sapiente vel!
			</p></template
		>

		<template v-slot:footer>
			<button @click="closeModal">Salir</button>
		</template>

		<template v-slot:exposed="{ newTitle }">{{ newTitle }}</template>
	</modal>
</template>

<script>
	import Modal from '@/components/Modal.vue';
	import { ref } from 'vue';

	export default {
		components: { Modal },
		setup() {
			const isOpen = ref(false);

			return {
				isOpen,
				openModal: () => (isOpen.value = true),
				closeModal: () => (isOpen.value = false),
			};
		},
	};
</script>
