<div class="email-form-container">
	<div class="email-form-wrapper">
		<form
			action="https://api.web3forms.com/submit"
			method="POST"
			class="email-form"
		>
			<input
				type="hidden"
				name="access_key"
				value="d5003c0d-afa6-471c-813f-e885f8862822"
			/>
			<input
				type="hidden"
				name="from_name"
				value="amandasamimi.com"
			/>
			<input
				type="hidden"
				name="redirect"
				value="https://web3forms.com/success"
			/>
			<input
				type="checkbox"
				name="botcheck"
				id=""
				style="display: none;"
			/>
			<label for="name">Name</label>
			<input type="text" name="name" required />
			<label for="email">Email</label>
			<input type="email" name="email" required />
			<label for="message">Message</label>
			<textarea name="message" required />
			<input type="submit" value="Send" />
		</form>
	</div>
</div>

<style lang="scss">
	.email-form-container {
		--email-primary-color: hsl(176 67% 22%);
		--email-primary-color-background: hsla(176 67% 22% / 0.04);
		--email-secondary-color: hsl(176 64% 20%);
		--email-secondary-color-focus: hsl(176 64% 28%);
		height: 100%;
		display: grid;
		place-items: center;
	}
	.email-form-wrapper {
		border: 4px solid var(--email-primary-color);
		padding: 5%;
		background-color: var(--email-primary-color-background);
		width: 90%;
	}
	.email-form {
		display: grid;
		grid-template:
			"name name" auto
			"name-input name-input" auto
			"email email" auto
			"email-input email-input" auto
			"message message" auto
			"message-input message-input" auto
			"submit submit" auto / 1fr 1fr;
		font-family: "Source Sans Pro", serif;
		column-gap: 1em;
		color: var(--text-color);
		label {
			width: 100%;
			margin-bottom: 0.25em;
			&[for="name"] {
				grid-area: name;
			}
			&[for="email"] {
				grid-area: email;
				margin-top: 1em;
			}
			&[for="message"] {
				grid-area: message;
				margin-top: 1em;
			}
		}
		input,
		textarea {
			width: 100%;
			&:focus-visible {
				border-color: var(--text-color);
			}
		}
		input {
			color: white;
			border: 2px solid var(--email-secondary-color);
			&[type="text"],
			&[type="email"] {
				padding: 0.5em;
			}
			&[name="name"] {
				grid-area: name-input;
			}

			&[name="email"] {
				grid-area: email-input;
			}
			&[type="submit"] {
				border: none;
				&:hover,
				&:focus-visible {
					background-color: var(
						--email-secondary-color-focus
					);
				}
				grid-area: submit;
				padding: 1em;
				margin-top: 1em;
				text-align: center;
				user-select: none;
				cursor: pointer;
				background-color: var(--email-secondary-color);
			}
		}
		textarea {
			padding: 0.5em;
			border: 2px solid var(--email-secondary-color);
			grid-area: message-input;
			height: 10em;
		}
	}

	@media (min-width: 700px) {
		.email-form {
			grid-template:
				"name email" auto
				"name-input email-input" auto
				"message message" auto
				"message-input message-input"
				"submit submit" auto / 1fr 1fr;
			label[for="email"] {
				margin-top: 0;
			}
		}
		.email-form-wrapper {
			width: auto;
		}
	}
</style>
