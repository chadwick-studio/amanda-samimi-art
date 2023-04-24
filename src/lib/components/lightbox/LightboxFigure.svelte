<script>
	export let image;
	export let video;
	export let title;
	export let medium;
	export let height;
	export let width;
	export let year;
	$: dimensions = `${height} by ${width} inches`;
	$: year = String(year).slice(0, 4);
	$: titleHTML = `<h2 style="font-style: italic;">${title}</h2>`;
	$: mediumHTML = `${medium} <br>`;
	$: mediumHTMLNoNull = mediumHTML.includes("null") ? "" : mediumHTML;
	$: dimensionsHTML = `${height} by ${width} inches <br>`;
	$: dimensionsHTMLNoNull = dimensionsHTML.includes("null")
		? ""
		: dimensionsHTML;
	$: descriptionHTML =
		titleHTML + mediumHTMLNoNull + dimensionsHTMLNoNull + year;

	import Video from "$lib/components/video/Video.svelte";
	import Image from "$lib/components/image/Image.svelte";
</script>

<figure
	class="lightbox_figure"
	tabindex="0"
	aria-describedby="lightbox-instructions"
>
	{#if video}
		<Video {video} />
	{:else}
		<Image {title} {medium} {dimensions} {year} {image} />
		<figcaption class="lightbox_figure_caption">
			{@html descriptionHTML}
		</figcaption>
	{/if}
</figure>
{#if image}
	<p
		class="lightbox_instructions"
		id="lightbox-instructions"
		role="tooltip"
	>
		Hover over or focus on painting to view details.
	</p>
{/if}

<style lang="scss">
	.lightbox {
		&_figure {
			display: flex;
			align-items: center;
			position: relative;
			white-space: nowrap;
			text-align: right;
			position: relative;
			height: 100vh;
			height: 100dvh;
			&_caption {
				position: absolute;
				right: 0;
				bottom: 0;
				padding-block: 0.5em;
				padding-inline: 1em;
				background-color: rgb(0 0 0 / 0.6);
				line-height: 1.5;
				opacity: 1;
			}
		}
		&_instructions {
			opacity: 0;
		}
	}
	@media (hover: hover) {
		.lightbox {
			&_instructions {
				display: block;
				position: fixed;
				font-family: "Le Monde Livre";
				opacity: 1;
				transform: opacity 300ms ease-out;
				font-size: 0.75rem;
				bottom: 0;
				right: 1em;
				bottom: 0.25em;
				color: $text-color;
				mix-blend-mode: exclusion;
			}
			&_figure {
				&_caption {
					opacity: 0;
				}
				&:hover,
				&:focus-visible {
					.lightbox_figure_caption {
						opacity: 1;
					}
					+ .lightbox_instructions {
						opacity: 0;
					}
				}
			}
		}
	}
</style>
