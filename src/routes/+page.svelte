<script>
	// Sanity Images
	import SanityImage from "$lib/components/responsive-image/SanityImage.svelte";
	export let data;

	// Masonry
	// Add ids for Masonry component
	const images = data.images;
	images.forEach((image, i) => {
		image.id = i + 1;
	});

	import Masonry from "$lib/components/masonry/Masonry.svelte";

	let [minColWidth, maxColWidth, gap] = [300, 600, 10];
	let width, height;
</script>

<div class="gallery-container">
	{#if images}
		<Masonry
			items={images}
			{minColWidth}
			{maxColWidth}
			{gap}
			let:item={image}
			bind:width
			bind:height
		>
			<SanityImage {...image} loading="eager" />
		</Masonry>
	{/if}
</div>

<style lang="scss">
	.gallery-container {
		overflow-y: auto;
		height: 100%;
		color: white;
		padding: 20px;
	}
</style>
