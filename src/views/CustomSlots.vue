<!-- @format -->

<template>
	<h1>Aprendiendo Slots</h1>
	<button>Abrir Modal</button>

	<modal>
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
			<button>Salir</button>
		</template>
	</modal>
</template>

<script>
	import Modal from '@/components/Modal.vue';

	export default {
		components: { Modal },
		setup() {},
	};
</script>
