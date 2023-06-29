<script>
	// Sanity Images
	import Image from "$lib/components/image/Image.svelte";
	import Lightbox from "$lib/components/lightbox/Lightbox.svelte";
	import Masonry from "$lib/components/masonry/Masonry.svelte";
	import { readable, writable } from "svelte/store";
	export let data;
	console.log(data);

	const galleryItems = readable(
		data.galleryItems.map((item, i) => ({
			...item,
			id: i,
		}))
	);

	let currentItemIndex = writable(0);
	function getCurrentItemIndex(index) {
		currentItemIndex.set(index);
	}

	let dialog;
	let isVisible = writable(false);

	const showLightbox = () => {
		dialog.show();
		isVisible.set(true);
	};

	let [minColWidth, maxColWidth, gap] = [250, 800, 20];
	let width, height;
</script>

<svelte:head>
	{#if $isVisible}
		<style lang="scss">
			:root {
				overflow: hidden;
			}
		</style>
	{:else}
		<style lang="scss">
			:root {
				overflow: visible;
			}
		</style>
	{/if}
</svelte:head>
<div class="main-cube">
	<div class="main-cube_side">
		<div class="main-cube_border" />
	</div>
	<div class="main-cube_side">
		<div class="main-cube_border">
			<div class="gallery-container">
				<Masonry
					items={$galleryItems}
					{minColWidth}
					{maxColWidth}
					{gap}
					let:item
					bind:width
					bind:height
				>
					<button
						on:click={() =>
							getCurrentItemIndex(
								item.id
							)}
						on:click={showLightbox}
					>
						<Image {...item} />
					</button>
				</Masonry>
			</div>
		</div>
	</div>
	<div class="main-cube_side" />
	<div class="main-cube_side">
		<div class="main-cube_border" />
	</div>
	<div class="main-cube_side">
		<div class="main-cube_border" />
	</div>
	<div class="main-cube_side">
		<div class="main-cube_border" />
	</div>
</div>
<Lightbox {currentItemIndex} {galleryItems} bind:dialog {isVisible} />

<style lang="scss">
	.gallery-container {
		overflow-y: auto;
		height: 100%;
		color: white;
		padding: 20px;
	}
	.main-cube {
		&_side {
			background-color: var(--primary-color-background);
			outline: 1px solid transparent;
		}
		z-index: 1;
	}
	.main-cube_border {
		width: 100%;
		height: 100%;
	}
	.main-cube {
		@include cube(80, 180, 40, 10, -10);
		margin-bottom: 5vw;
		&_border {
			border: 6px solid var(--primary-color);
		}
	}
	@media (min-width: 1200px) {
		.main-cube {
			@include cube(70, 40, 10, 10, -10);
			margin-bottom: 0;
		}
	}
	button {
		cursor: pointer;
		display: block;
		&:focus-visible {
			outline: 1px solid $text-color;
		}
	}
</style>
