import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
const EmailForm_svelte_svelte_type_style_lang = "";
const css = {
  code: '.email-form-container.svelte-asaitn.svelte-asaitn{--email-primary-color:hsl(176 67% 22%);--email-primary-color-background:hsla(176 67% 22% / 0.04);--email-secondary-color:hsl(176 64% 20%);--email-secondary-color-focus:hsl(176 64% 28%);height:100%;display:grid;place-items:center;overflow:scroll}.email-form-wrapper.svelte-asaitn.svelte-asaitn{border:4px solid var(--email-primary-color);padding:5%;background-color:var(--email-primary-color-background)}.email-form.svelte-asaitn.svelte-asaitn{display:grid;font-family:le-monde-livre-std, serif;grid-template:"name email" auto "name-input email-input" auto "message message" auto "message-input message-input" "submit submit" auto/1fr 1fr;column-gap:1em;color:var(--text-color)}.email-form.svelte-asaitn label.svelte-asaitn{margin-bottom:0.25em}.email-form.svelte-asaitn label[for=user_name].svelte-asaitn{grid-area:name}.email-form.svelte-asaitn label[for=user_email].svelte-asaitn{grid-area:email}.email-form.svelte-asaitn label[for=message].svelte-asaitn{grid-area:message;margin-top:1em}.email-form.svelte-asaitn input.svelte-asaitn:focus-visible,.email-form.svelte-asaitn textarea.svelte-asaitn:focus-visible{border-color:var(--text-color)}.email-form.svelte-asaitn input.svelte-asaitn{color:white;border:2px solid var(--email-secondary-color)}.email-form.svelte-asaitn input[type=text].svelte-asaitn,.email-form.svelte-asaitn input[type=email].svelte-asaitn{padding:0.5em}.email-form.svelte-asaitn input[name=user_name].svelte-asaitn{grid-area:name-input}.email-form.svelte-asaitn input[name=user_email].svelte-asaitn{grid-area:email-input}.email-form.svelte-asaitn input[type=submit].svelte-asaitn{border:none;grid-area:submit;padding:1em;margin-top:1em;text-align:center;user-select:none;cursor:pointer;background-color:var(--email-secondary-color)}.email-form.svelte-asaitn input[type=submit].svelte-asaitn:hover,.email-form.svelte-asaitn input[type=submit].svelte-asaitn:focus-visible{background-color:var(--email-secondary-color-focus)}.email-form.svelte-asaitn textarea.svelte-asaitn{padding:0.5em;border:2px solid var(--email-secondary-color);grid-area:message-input;height:10em}',
  map: null
};
const EmailForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="email-form-container svelte-asaitn"><div class="email-form-wrapper svelte-asaitn"><form action="https://formbold.com/s/oeWg9" method="POST" class="email-form svelte-asaitn"><label for="user_name" class="svelte-asaitn">Name</label>
			<input type="text" name="user_name" required class="svelte-asaitn">
			<label for="user_email" class="svelte-asaitn">Email</label>
			<input type="email" name="user_email" required class="svelte-asaitn">
			<label for="message" class="svelte-asaitn">Message</label>
			<textarea name="message" required class="svelte-asaitn"></textarea>
			<input type="submit" value="Send" class="svelte-asaitn"></form></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(EmailForm, "EmailForm").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
