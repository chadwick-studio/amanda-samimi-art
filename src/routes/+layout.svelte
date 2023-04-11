<script>
	import Nav from "$lib/components/nav/Nav.svelte";
	import "../app.scss";
</script>

<div class="wrapper" aria-hidden="false">
	<header>
		<div class="nav-cube">
			<div class="nav-cube_side" />
			<div class="nav-cube_side">
				<Nav />
			</div>
			<div class="nav-cube_side" />
			<div class="nav-cube_side" />
			<div class="nav-cube_side" />
			<div class="nav-cube_side" />
		</div>
	</header>
	<main>
		<div class="main-cube">
			<div class="main-cube_side" />
			<div class="main-cube_side">
				<slot />
			</div>
			<div class="main-cube_side" />
			<div class="main-cube_side" />
			<div class="main-cube_side" />
			<div class="main-cube_side" />
		</div>
	</main>
</div>

<style lang="scss">
	// Cube Mixin
	@mixin cube(
		$width,
		$height,
		$depth,
		$rotateX: 0,
		$rotateY: 0,
		$rotateZ: 0
	) {
		transform-style: preserve-3d;
		height: calc(#{$height} * 1svw);
		width: calc(#{$width} * 1svw);
		position: relative;
		transform: rotateX(calc(#{$rotateX} * 1deg))
			rotateY(calc(#{$rotateY} * 1deg))
			rotateZ(calc(#{$rotateZ} * 1deg));

		@for $i from 1 through 6 {
			div:nth-of-type(#{$i}) {
				position: absolute;
			}

			@if $i <= 2 {
				div:nth-of-type(#{$i}) {
					height: calc(#{$height} * 1svw);
					width: calc(#{$width} * 1svw);
				}
			} @else if $i >= 5 {
				div:nth-of-type(#{$i}) {
					height: calc(#{$depth} * 1svw);
					width: calc(#{$width} * 1svw);
				}
			} @else {
				div:nth-of-type(#{$i}) {
					height: calc(#{$height} * 1svw);
					width: calc(#{$depth} * 1svw);
				}
			}
		}
		div {
			&:nth-of-type(1) {
				transform: translate3d(
					0,
					0,
					calc(#{$depth} * 1svw * -0.5)
				);
			}
			&:nth-of-type(2) {
				transform: translate3d(
					0,
					0,
					calc(#{$depth} * 1svw * 0.5)
				);
			}
			&:nth-of-type(3) {
				inset: 50% auto auto 50%;
				transform: translate(-50%, -50%) rotateY(90deg)
					translate3d(
						0,
						0,
						calc(#{$width} * 1svw * -0.5)
					);
			}
			&:nth-of-type(4) {
				inset: 50% auto auto 50%;
				transform: translate(-50%, -50%) rotateY(-90deg)
					translate3d(
						0,
						0,
						calc(#{$width} * 1svw * -0.5)
					);
			}
			&:nth-of-type(5) {
				inset: 50% auto auto 50%;
				transform: translate(-50%, -50%) rotateX(-90deg)
					translate3d(
						0,
						0,
						calc(#{$height} * 1svw * -0.5)
					);
			}
			&:nth-of-type(6) {
				inset: 50% auto auto 50%;
				transform: translate(-50%, -50%) rotateX(90deg)
					translate3d(
						0,
						0,
						calc(#{$height} * 1svw * -0.5)
					);
			}
		}
	}

	// Variables
	$background: black;

	.wrapper {
		--primary-color: hsl(329 100% 22%);
		--primary-color-background: hsla(329 100% 22% / 0.04);
		--text-color: hsl(176 59% 90%);
		position: relative;
		display: grid;
		background-color: black;
		grid-template: repeat(2, auto) / 1fr;
		min-height: 100vh; //fallback
		min-height: 100svh;
		overflow: scroll;
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
		display: grid;
		place-items: center;
	}
	.nav-cube,
	.main-cube {
		&_side {
			background-color: var(--primary-color-background);
		}
	}
	//Nav Cube
	.nav-cube {
		@include cube(80, 60, 20, 10, 10);
		&_side {
			border: 2px solid var(--primary-color);
		}
		margin-top: 5vw;
		margin-bottom: 10vw;
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

	//Main Cube
	.main-cube {
		@include cube(80, 160, 40, 10, -10);
		&_side {
			border: 6px solid var(--primary-color);
		}
		margin-bottom: 5svh;
	}
	@media (min-width: 1200px) {
		.main-cube {
			@include cube(70, 40, 10, 10, -10);
			margin-bottom: 0;
		}
	}
</style>
