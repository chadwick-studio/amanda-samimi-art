<script>
	import { fade } from "svelte/transition";
	export let transitionDuration;
	export let imagePreset;
</script>

<div
	class="lightbox-main"
	tab-index="3"
	class:fullscreen={imagePreset === "fullscreen"}
	class:scroll={imagePreset === "scroll"}
	transition:fade={{ duration: transitionDuration }}
	on:click
	{...$$restProps}
>
	<slot />
</div>

<style>
	.lightbox-main {
		display: grid;
		place-items: center;
		position: relative;
	}
</style>
