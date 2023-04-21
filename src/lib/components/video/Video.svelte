<script>
	export let video;
	import VimeoPlayer from "./VimeoPlayer.svelte";

	let player;
	function logEvent(event) {
		console.log(event);
	}
</script>

<VimeoPlayer
	videoId={video}
	bind:player
	on:error={logEvent}
	on:play={logEvent}
	on:pause={logEvent}
/>
