<!-- @format -->

<template>
	<div class="about">
		<h1>This is an about page</h1>
	</div>
</template>

<script>
	import {
		onActivated,
		onBeforeMount,
		onBeforeUnmount,
		onBeforeUpdate,
		onDeactivated,
		onMounted,
		onRenderTracked,
		onRenderTriggered,
		onUnmounted,
		onUpdated,
	} from 'vue';

	export default {
		setup() {
			console.log('setup');

			onBeforeMount(() => {
				console.log('onBeforeMount');
			});

			onMounted(() => {
				console.log('onMounted');
			});

			onBeforeUpdate(() => {
				console.log('onBeforeUpdate');
			});

			onUpdated(() => {
				console.log('onUpdated');
			});

			onBeforeUnmount(() => {
				console.log('onBeforeUnmount');
			});

			onUnmounted(() => {
				console.log('onUnmounted');
			});

			onActivated(() => {
				console.log('onActivated');
			});

			onDeactivated(() => {
				console.log('onDeactivated');
			});

			onRenderTriggered(() => {
				console.log('onRenderTriggered');
			});

			onRenderTracked(() => {
				console.log('onRenderTracked');
			});
		},
	};
</script>
