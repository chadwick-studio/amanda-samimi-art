<script>
	import Nav from "$lib/components/nav/Nav.svelte";
	import "../app.scss";
</script>

<div class="wrapper" aria-hidden="false">
	<header>
		<div class="nav-cube">
			<div class="nav-cube_side">
				<div class="nav-cube_border" />
			</div>
			<div class="nav-cube_side">
				<div class="nav-cube_border">
					<Nav />
				</div>
			</div>
			<div class="nav-cube_side">
				<div class="nav-cube_border" />
			</div>

			<div class="nav-cube_side">
				<div class="nav-cube_border" />
			</div>
			<div class="nav-cube_side">
				<div class="nav-cube_border" />
			</div>
			<div class="nav-cube_side">
				<div class="nav-cube_border" />
			</div>
		</div>
	</header>
	<main>
		<slot />
	</main>
</div>

<!-- Create Cube Components, pass slot tag down -->

<style lang="scss">
	.wrapper {
		--background-color: black;
		--primary-color: hsl(329 100% 22%);
		--primary-color-background: hsla(329 100% 22% / 0.04);
		--text-color: hsl(176 59% 90%);
		position: relative;
		display: grid;
		background-color: var(--background-color);
		grid-template: repeat(2, auto) / 1fr;
		min-height: 100vh; //fallback
		min-height: 100dvh;
		&::before {
			content: "";
			position: absolute;
			background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlIiB4PSIwIiB5PSIwIj4KICAgICAgPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KICAgICAgPGZlQmxlbmQgbW9kZT0ic2NyZWVuIi8+CiAgICA8L2ZpbHRlcj4KICAgIDxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjUiLz4KPC9zdmc+);
			height: 100%;
			width: 100%;
			opacity: 0.2;
		}
	}
	@media (min-width: 1200px) {
		.wrapper {
			grid-template: 1fr / repeat(2, auto);
		}
	}

	header,
	main {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.nav-cube {
		&_side {
			background-color: var(--primary-color-background);
			outline: 1px solid transparent;
		}
	}
	.nav-cube_border {
		width: 100%;
		height: 100%;
	}

	//Nav Cube
	.nav-cube {
		@include cube(80, 60, 20, 10, 10);
		margin-top: 5vw;
		margin-bottom: 10vw;
		&_border {
			border: 2px solid var(--primary-color);
		}
	}
	@media (min-width: 600px) {
		.nav-cube {
			@include cube(60, 45, 15, 10, 10);
		}
	}
	@media (min-width: 1200px) {
		.nav-cube {
			@include cube(20, 15, 5, 10, 10);
			margin-top: 20vw;
			margin-bottom: 0;
		}
	}
</style>
