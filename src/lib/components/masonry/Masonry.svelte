<script>
	import { flip } from "svelte/animate";
	import { fade } from "svelte/transition";
	export let items;
	export let minColWidth = 330;
	export let maxColWidth = 500;
	export let gap = 20;
	export let masonryWidth = 0;
	export let masonryHeight = 0;
	export let animate = true;
	export let style = ``;
	export let duration = 0;
	export { className as class };
	export let columnClass = ``;
	// On non-primitive types, we need a property to tell masonry items apart. This component
	// hard-codes the name of this property to 'id'. See https://svelte.dev/tutorial/keyed-each-blocks.
	export let idKey = `id`;
	export let getId = (item) => {
		if (typeof item === `string`) return item;
		if (typeof item === `number`) return item;
		return item[idKey];
	};
	let className = ``;
	$: nCols = Math.min(
		3,
		Math.min(
			items.length,
			Math.floor(masonryWidth / (minColWidth + gap)) || 1
		)
	);
	$: itemsToCols = items.reduce(
		(cols, item, idx) => {
			cols[idx % cols.length].push([item, idx]);
			return cols;
		},
		Array(nCols)
			.fill(null)
			.map(() => [])
	);
</script>

<div
	class="masonry {className}"
	bind:clientWidth={masonryWidth}
	bind:clientHeight={masonryHeight}
	style="gap: {gap}px; {style}"
>
	{#each itemsToCols as col}
		<div
			class="col {columnClass}"
			style="gap: {gap}px; max-width: {maxColWidth}px;"
		>
			{#if animate}
				{#each col as [item, idx] (getId(item))}
					<div
						in:fade|local={{
							delay: 100,
							duration,
						}}
						out:fade|local={{
							delay: 0,
							duration,
						}}
						animate:flip={{ duration }}
					>
						<slot {idx} {item} />
					</div>
				{/each}
			{:else}
				{#each col as [item, idx] (getId(item))}
					<slot {idx} {item} />
				{/each}
			{/if}
		</div>
	{/each}
</div>

<style>
	:where(div.masonry) {
		display: flex;
		justify-content: center;
		overflow-wrap: anywhere;
		box-sizing: border-box;
	}
	:where(div.masonry div.col) {
		display: grid;
		height: max-content;
		width: 100%;
	}
	p {
		font-size: 4rem;
		color: white;
	}
</style>
