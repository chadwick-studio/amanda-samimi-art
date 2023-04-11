<script>
	export let imagePreset;
	export let enableImageExpand;
	export let title;
	export let description;
</script>

<figure
	class="lightbox-figure"
	tabindex="0"
	class:fullscreen={imagePreset === "fullscreen"}
	class:scroll={imagePreset === "scroll"}
	class:expand={enableImageExpand}
>
	<slot />
	<figcaption
		class="lightbox-caption"
		class:fullscreen={imagePreset === "fullscreen"}
		{...$$restProps}
	>
		<h2>
			{title}
		</h2>
		{@html description}
	</figcaption>
</figure>
<p>Hover over or focus on painting to view its title and information</p>

<style lang="scss">
	.lightbox-figure {
		font-family: le-monde-livre-std, serif;
		display: flex;
		align-items: end;
		position: relative;
		height: 100vh;
		height: 100svh;
		img {
			object-fit: contain;
		}
	}
	.lightbox-figure.expand > * {
		flex-grow: 1;
	}
	.lightbox-caption {
		font-size: 0.75rem;
		white-space: nowrap;
		font-style: normal;
		color: white;
		position: absolute;
		right: 0;
		bottom: 0;
		text-align: right;
		padding-block: 0.5em;
		padding-inline: 1em;
		background-color: rgb(0 0 0 / 0.5);
		transition: opacity 150ms ease-out;
		h2 {
			font-style: italic;
			line-height: 1.5;
		}
	}
	p {
		display: none;
	}
	@media (hover: hover) {
		p {
			display: block;
			position: fixed;
			font-family: "Le Monde Livre";
			opacity: 1;
			transform: opacity 150ms ease-out;
			font-size: 0.75rem;
			bottom: 0;
			right: 1rem;
			bottom: 0.25rem;
			color: white;
			mix-blend-mode: difference;
		}
		.lightbox-figure {
			&:hover,
			&:focus-visible {
				.lightbox-caption {
					opacity: 1;
				}
				+ p {
					opacity: 0;
				}
			}
		}
		.lightbox-caption {
			opacity: 0;
		}
	}
</style>
