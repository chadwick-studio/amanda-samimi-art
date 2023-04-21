<script>
	import EmailForm from "$lib/components/email-form/EmailForm.svelte";
</script>

<div class="main-cube">
	<div class="main-cube_side">
		<div class="main-cube_border" />
	</div>
	<div class="main-cube_side">
		<div class="main-cube_border">
			<EmailForm />
		</div>
	</div>
	<div class="main-cube_side" />
	<div class="main-cube_side">
		<div class="main-cube_border" />
	</div>
	<div class="main-cube_side">
		<div class="main-cube_border" />
	</div>
	<div class="main-cube_side">
		<div class="main-cube_border" />
	</div>
</div>

<style lang="scss">
	.main-cube {
		&_side {
			background-color: var(--primary-color-background);
			outline: 1px solid transparent;
		}
	}
	.main-cube_border {
		width: 100%;
		height: 100%;
	}
	.main-cube {
		@include cube(80, 180, 40, 10, -10);
		margin-bottom: 5vw;
		&_border {
			border: 6px solid var(--primary-color);
		}
	}
	@media (min-width: 1200px) {
		.main-cube {
			@include cube(70, 40, 10, 10, -10);
			margin-bottom: 0;
		}
	}
</style>
