<script>
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	export let closeButtonProps = {};
	export let showCloseButton;
	export let enableEscapeToClose;
	export let imagePreset;

	const handleKey = (event) => {
		if (enableEscapeToClose && event.key === "Escape") {
			dispatch("close");
		}
	};
</script>

<svelte:window on:keydown={(event) => handleKey(event)} />

{#if showCloseButton}
	<button
		class:fullscreen={imagePreset === "fullscreen"}
		on:click={() => dispatch("close")}
		{...closeButtonProps}
		title="Close lightbox"
	>
		<svg
			class="close-icon"
			width="100%"
			height="100%"
			viewBox="0 0 64 64"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			stroke="#000000"
			stroke-width="2"
			><line x1="16" y1="16" x2="48" y2="48" /><line
				x1="48"
				y1="16"
				x2="16"
				y2="48"
			/></svg
		>
		<span class="sr-only">Close lightbox</span>
	</button>
{/if}

<style lang="scss">
	button {
		--text-color: hsl(176 59% 90%);
		width: 3em;
		aspect-ratio: 1;
		color: white;
		position: absolute;
		top: 0.5em;
		right: 0.5em;
		z-index: 5;
		cursor: pointer;
		&:focus-visible {
			border: 2px solid var(--text-color);
		}
	}
	.close-icon {
		stroke: white;
	}
</style>
