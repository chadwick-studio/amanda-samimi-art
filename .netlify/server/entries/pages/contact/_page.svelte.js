import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
const EmailForm_svelte_svelte_type_style_lang = "";
const css = {
  code: '.email-form-container.svelte-1xqcmzb.svelte-1xqcmzb{--email-primary-color:hsl(176 67% 22%);--email-primary-color-background:hsla(176 67% 22% / 0.04);--email-secondary-color:hsl(176 64% 20%);--email-secondary-color-focus:hsl(176 64% 28%);height:100%;display:grid;place-items:center;overflow:scroll}.email-form-wrapper.svelte-1xqcmzb.svelte-1xqcmzb{border:4px solid var(--email-primary-color);padding:5%;background-color:var(--email-primary-color-background);width:90%}.email-form.svelte-1xqcmzb.svelte-1xqcmzb{display:grid;grid-template:"name name" auto "name-input name-input" auto "email email" auto "email-input email-input" auto "message message" auto "message-input message-input" "submit submit" auto/1fr 1fr;font-family:"Source Sans Pro", serif;column-gap:1em;color:var(--text-color)}.email-form.svelte-1xqcmzb label.svelte-1xqcmzb{margin-bottom:0.25em}.email-form.svelte-1xqcmzb label[for=name].svelte-1xqcmzb{grid-area:name}.email-form.svelte-1xqcmzb label[for=email].svelte-1xqcmzb{grid-area:email;margin-top:1em}.email-form.svelte-1xqcmzb label[for=message].svelte-1xqcmzb{grid-area:message;margin-top:1em}.email-form.svelte-1xqcmzb input.svelte-1xqcmzb:focus-visible,.email-form.svelte-1xqcmzb textarea.svelte-1xqcmzb:focus-visible{border-color:var(--text-color)}.email-form.svelte-1xqcmzb input.svelte-1xqcmzb{color:white;border:2px solid var(--email-secondary-color)}.email-form.svelte-1xqcmzb input[type=text].svelte-1xqcmzb,.email-form.svelte-1xqcmzb input[type=email].svelte-1xqcmzb{padding:0.5em}.email-form.svelte-1xqcmzb input[name=name].svelte-1xqcmzb{grid-area:name-input}.email-form.svelte-1xqcmzb input[name=email].svelte-1xqcmzb{grid-area:email-input}.email-form.svelte-1xqcmzb input[type=submit].svelte-1xqcmzb{border:none;grid-area:submit;padding:1em;margin-top:1em;text-align:center;user-select:none;cursor:pointer;background-color:var(--email-secondary-color)}.email-form.svelte-1xqcmzb input[type=submit].svelte-1xqcmzb:hover,.email-form.svelte-1xqcmzb input[type=submit].svelte-1xqcmzb:focus-visible{background-color:var(--email-secondary-color-focus)}.email-form.svelte-1xqcmzb textarea.svelte-1xqcmzb{padding:0.5em;border:2px solid var(--email-secondary-color);grid-area:message-input;height:10em}@media(min-width: 700px){.email-form.svelte-1xqcmzb.svelte-1xqcmzb{grid-template:"name email" auto "name-input email-input" auto "message message" auto "message-input message-input" "submit submit" auto/1fr 1fr}.email-form.svelte-1xqcmzb label[for=email].svelte-1xqcmzb{margin-top:0}.email-form-wrapper.svelte-1xqcmzb.svelte-1xqcmzb{width:auto}}',
  map: null
};
const EmailForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="email-form-container svelte-1xqcmzb"><div class="email-form-wrapper svelte-1xqcmzb"><form action="https://formbold.com/s/oeWg9" method="POST" class="email-form svelte-1xqcmzb"><label for="name" class="svelte-1xqcmzb">Name</label>
			<input type="text" name="name" required class="svelte-1xqcmzb">
			<label for="email" class="svelte-1xqcmzb">Email</label>
			<input type="email" name="email" required class="svelte-1xqcmzb">
			<label for="message" class="svelte-1xqcmzb">Message</label>
			<textarea name="message" required class="svelte-1xqcmzb"></textarea>
			<input type="submit" value="Send" class="svelte-1xqcmzb"></form></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(EmailForm, "EmailForm").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
