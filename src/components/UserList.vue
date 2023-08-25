<!-- @format -->

<template>
	<ul>
		<!-- <li
			v-for="user of users"
			:key="user.id"
		>
			<h4>{{ user.first_name }} {{ user.last_name }}</h4>
			<h6>{{ user.email }}</h6>
		</li> -->

		<slot
			v-for="user of users"
			:key="user.id"
			:user="user"
		>
		</slot>
	</ul>
</template>

<script>
	export default {
		props: {
			users: {
				type: Array,
				required: true,
			},
		},
	};
</script>

<style scoped>
	ul {
		margin: unset;
		padding: unset;
		width: 250px;
	}

	li {
		list-style: none;
	}
</style>
