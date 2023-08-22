<!-- @format -->

<template>
	<div class="home">
		<h1>Reactive vs Ref</h1>

		<h3>{{ iroman }}</h3>
		<button @click="changeIronman">Change Ironman</button>
		<h3>{{ hulk }}</h3>
		<button @click="changeHulk">Change Hulk</button>
	</div>
</template>

<script>
	import { ref, reactive } from 'vue';

	export default {
		name: 'HomeView',
		setup() {
			const iroman = ref({ name: 'Tony', age: 50 }); // Use always ref.
			const hulk = reactive({ name: 'Bruce', age: 40 }); // Not working with primitives.

			return {
				iroman,
				hulk,

				changeIronman: () => {
					iroman.value.name = 'Tony Stark';
					iroman.value.age = 55;
				},
				changeHulk: () => {
					hulk.name = 'Bruce Banner';
					hulk.age = 45;
				},
			};
		},
	};
</script>
