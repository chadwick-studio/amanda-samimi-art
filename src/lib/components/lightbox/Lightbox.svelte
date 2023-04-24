<script>
	import LightboxFigure from "$lib/components/lightbox/LightboxFigure.svelte";

	export let galleryItems;
	export let currentItemIndex;
	export let isVisible;
	export let dialog;
	function handlePreviousImage() {
		currentItemIndex.update((currentIndex) => {
			return (
				(currentIndex + $galleryItems.length - 1) %
				$galleryItems.length
			);
		});
	}

	function handleNextImage() {
		currentItemIndex.update((currentIndex) => {
			return (currentIndex + 1) % $galleryItems.length;
		});
	}
	function handleDialogKeyDown(e) {
		if (e.key === "Escape") {
			dialog.close();
		} else if (e.key === "ArrowLeft") {
			handlePreviousImage();
		} else if (e.key === "ArrowRight") {
			handleNextImage();
		}
	}
</script>

<dialog
	class="lightbox-container"
	class:lightboxOpen={$isVisible === true}
	on:keydown={handleDialogKeyDown}
	bind:this={dialog}
>
	<div class="lightbox">
		<LightboxFigure {...$galleryItems[$currentItemIndex]} />
		<button
			class="lightbox_previous-image-button lightbox_controls"
			on:click={handlePreviousImage}
		>
			<svg
				class="chevron-icon"
				width="100%"
				height="100%"
				viewBox="0 0 33 63"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				stroke="white"
				stroke-width="2"
			>
				<line x1="32" y1="62" x2="1" y2="32" />
				<line x1="1" y1="32" x2="32" y2="1" />
			</svg>
		</button>
		<button
			class="lightbox_next-image-button lightbox_controls"
			on:click={handleNextImage}
		>
			<svg
				class="chevron-icon"
				width="100%"
				height="100%"
				viewBox="0 0 33 63"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				stroke="white"
				stroke-width="2"
			>
				<line x1="1" y1="62" x2="32" y2="32" />
				<line x1="32" y1="32" x2="1" y2="1" />
			</svg>
		</button>
		<form method="dialog">
			<button
				class="lightbox_close-button lightbox_controls"
				on:click={isVisible.set(false)}
			>
				<svg
					class="close-icon"
					width="100%"
					height="100%"
					viewBox="0 0 63 63"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					stroke="white"
					stroke-width="2"
				>
					<line x1="1" y1="1" x2="62" y2="62" />
					<line x1="62" y1="1" x2="1" y2="62" />
				</svg>
			</button>
		</form>
	</div>
</dialog>

<style lang="scss">
	.lightbox-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100dvh;
		height: 100vh; //fallback
		z-index: 99999;
		border: none;
		padding: 0;
		margin: 0;
		background-color: rgb(0 0 0 / 0.9);
		opacity: 0;
		transition: opacity 300ms;
	}
	.lightbox {
		font-family: "Source Serif Pro";
		color: $text-color;
		position: relative;
		display: grid;
		place-items: center;
		height: 100%;
		font-size: 0.75rem;
		svg {
			display: block;
		}
		&_controls {
			position: absolute;
			cursor: pointer;
			mix-blend-mode: exclusion;
			&:focus-visible {
				outline: 1px solid $text-color;
			}
		}
	}
	.lightbox_previous-image-button {
		left: 1em;
		top: 50%;
		transform: translateY(-50%);
	}
	.lightbox_next-image-button {
		top: 50%;
		right: 1em;
		transform: translateY(-50%);
	}
	.lightbox_close-button {
		top: 0;
		right: 0;
		margin-right: 1em;
		margin-top: 1em;
	}
	.close-icon {
		width: 2em;
	}
	.chevron-icon {
		width: 2em;
	}
	.lightboxOpen {
		opacity: 1;
	}
</style>
