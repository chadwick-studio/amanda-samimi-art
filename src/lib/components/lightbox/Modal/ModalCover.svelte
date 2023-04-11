<script>
	import { fade } from "svelte/transition";

	export let transitionDuration;
</script>

<div
	class="lightbox-overlay"
	tab-index="2"
	on:click
	in:fade={{ duration: transitionDuration }}
	out:fade={{ duration: transitionDuration }}
	{...$$restProps}
>
	<slot />
</div>

<style>
	div.lightbox-overlay {
		position: fixed;
		z-index: 1000;
		background-color: rgba(0 0 0 / 0.9);
		inset: 0;
		overflow: hidden;
		display: grid;
		place-items: center;
	}
	div.lightbox-overlay::before {
		content: "";
		position: absolute;
		inset: 0;
		opacity: 0;
		z-index: -1;
	}
</style>
