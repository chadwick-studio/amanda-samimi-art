<script>
	export let isVisible;
</script>

<button
	aria-expanded={isVisible}
	aria-controls="lightbox"
	class:lightbox-thumbnail={true}
	on:click
	{...$$restProps}
>
	<slot />
</button>

<style lang="scss">
	button {
		cursor: pointer;
		&:focus-visible {
			border: 1px solid var(--text-color);
		}
	}
</style>
