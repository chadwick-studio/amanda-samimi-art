<script>
	import Lightbox from "$lib/components/lightbox/Lightbox.svelte";

	import getImageProps from "./getImageProps.js";
	export let image;
	export let loading = "lazy";
	let loaded = false;

	export let title;
	export let medium;
	export let height;
	export let width;
	export let year;
	year = String(year).slice(0, 4);

	const altTag = `${title}. ${medium}. ${height} by ${width} inches. ${year}`;
	const description = `${medium}. <br>${height}×${width} in. <br>${year}.`;
</script>

<Lightbox {title} {description}>
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
</Lightbox>

<style lang="scss">
	img {
		width: 100%;
		height: auto;
		transition: 0.15s opacity;
		&[data-loaded="false"] {
			opacity: 0;
		}
	}
</style>
