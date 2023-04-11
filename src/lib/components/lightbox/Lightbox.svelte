<script>
	import Thumbnail from "./LightboxThumbnail.svelte";
	import BodyChild from "./Modal/BodyChild.svelte";
	import Button from "./Modal/LightboxButton.svelte";
	import Figure from "./Modal/LightboxFigure.svelte";
	import ModalCover from "./Modal/ModalCover.svelte";
	import Modal from "./Modal/Modal.svelte";
	import { onMount } from "svelte";

	export let title;
	export let description;

	export let imagePreset;

	export let customization = {};
	export let transitionDuration = 300;

	export let keepBodyScroll = false;
	export let enableImageExpand = false;
	export let enableFallbackThumbnail = true;
	export let enableEscapeToClose = true;
	export let enableClickToClose = false;
	export let showCloseButton = true;

	export let isVisible = false;

	let modalClicked = false;

	const toggle = () => {
		isVisible = !isVisible;
		toggleScroll();
	};

	const open = () => {
		isVisible = true;
		toggleScroll();
	};
	const close = () => {
		isVisible = false;
		toggleScroll();
	};

	const coverClick = () => {
		if (!modalClicked || enableClickToClose) {
			close();
		}
		modalClicked = false;
	};

	const modalClick = () => {
		modalClicked = true;
	};

	let toggleScroll = () => {};

	export const programmaticController = {
		toggle,
		open,
		close,
	};

	onMount(() => {
		const defaultOverflow = document.body.style.overflow;
		const bodyWrapper = document.querySelector(".wrapper");
		toggleScroll = () => {
			if (!keepBodyScroll) {
				if (isVisible) {
					document.body.style.overflow = "hidden";
					bodyWrapper.setAttribute(
						"aria-hidden",
						true
					);
				} else {
					document.body.style.overflow =
						defaultOverflow;
					bodyWrapper.setAttribute(
						"aria-hidden",
						fales
					);
				}
			}
		};
	});
</script>

{#if $$slots.thumbnail || enableFallbackThumbnail}
	<Thumbnail
		{...customization?.thumbnailProps || {}}
		{isVisible}
		on:click={toggle}
	>
		{#if $$slots.thumbnail}
			<slot name="thumbnail" />
		{:else}
			<slot />
		{/if}
	</Thumbnail>
{/if}

{#if isVisible}
	<BodyChild>
		<ModalCover
			{transitionDuration}
			{...customization.coverProps || {}}
			on:click={coverClick}
		>
			<Button
				{imagePreset}
				{showCloseButton}
				{enableEscapeToClose}
				closeButtonProps={customization.closeButtonProps}
				{...customization.lightboxHeaderProps || {}}
				on:close={close}
			/>

			<Modal
				{imagePreset}
				{transitionDuration}
				on:click={modalClick}
				{...customization.lightboxProps || {}}
			>
				<Figure
					{imagePreset}
					{title}
					{description}
					{...customization.lightboxFooterProps ||
						{}}
					{enableImageExpand}
				>
					<slot />
				</Figure>
			</Modal>
		</ModalCover>
	</BodyChild>
{/if}
