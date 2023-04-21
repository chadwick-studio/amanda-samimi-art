<script>
	import getImageProps from "./getImageProps.js";
	export let image;
	export let title;
	export let medium;
	export let dimensions;
	export let year;

	export let loading = "eager";
	let loaded = false;

	const altTag = [title, medium, dimensions, year].join(". ");
</script>

<img
	{loading}
	alt={altTag}
	fetchPriority={loading === "eager" ? "high" : undefined}
	{...getImageProps({
		image,
	})}
	data-loaded={loaded}
	on:load={() => (loaded = true)}
/>

<style lang="scss">
	img {
		display: block;
		width: 100%;
		height: auto;
		transition: 0.15s opacity;
		&[data-loaded="false"] {
			opacity: 0;
		}
	}
</style>
