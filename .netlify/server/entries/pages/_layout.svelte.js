import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
const Nav_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'svg.svelte-12on7lh.svelte-12on7lh{overflow:visible}@font-face{font-family:"Clearlight";src:url("/fonts/clearlight.woff2") format("woff2");font-weight:normal;font-style:normal;font-display:block}@font-face{font-family:"Ortica Light";src:url("/fonts/ortica-light.woff2") format("woff2");font-weight:normal;font-style:normal;font-display:block}.container.svelte-12on7lh.svelte-12on7lh,.wrapper.svelte-12on7lh.svelte-12on7lh,ul.svelte-12on7lh.svelte-12on7lh,h1.svelte-12on7lh.svelte-12on7lh,h1.svelte-12on7lh a.svelte-12on7lh{display:flex}a.svelte-12on7lh.svelte-12on7lh:focus-visible{border:1px solid var(--text-color)}.wrapper.svelte-12on7lh.svelte-12on7lh{justify-content:center}.container.svelte-12on7lh.svelte-12on7lh{height:100%;flex-direction:column;justify-content:end;container:nav/size}h1.svelte-12on7lh.svelte-12on7lh{--header-name:hsl(202, 81%, 73%);text-align:right;color:var(--header-name);line-height:0.65;text-transform:uppercase;font-family:"Clearlight", sans-serif}h1.svelte-12on7lh a.svelte-12on7lh{flex-direction:column}ul.svelte-12on7lh.svelte-12on7lh{font-family:"Ortica Light";flex-direction:column;align-self:end;text-transform:lowercase}ul.svelte-12on7lh a.svelte-12on7lh{display:block;color:var(--text-color)}ul.svelte-12on7lh li.svelte-12on7lh{width:min-content}ul.svelte-12on7lh li:last-of-type a.svelte-12on7lh{aspect-ratio:1;width:1em}ul.svelte-12on7lh li:last-of-type a .instagram-icon.svelte-12on7lh{fill:var(--text-color)}@container nav (width > 0){.wrapper.svelte-12on7lh h1.svelte-12on7lh{font-size:calc(33cqw + 0.5rem)}.wrapper.svelte-12on7lh ul.svelte-12on7lh{gap:0.25em;margin-bottom:3cqh;font-size:calc(5cqw + 0.5rem)}}',
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="container svelte-12on7lh"><div class="wrapper svelte-12on7lh"><h1 class="svelte-12on7lh"><a href="/" class="svelte-12on7lh"><span>Amanda</span> <span>Samimi</span></a></h1>
		<ul class="svelte-12on7lh"><li class="svelte-12on7lh"><a href="/contact" class="svelte-12on7lh">Contact</a></li>
			<li class="svelte-12on7lh"><a href="https://www.instagram.com/soliloguys/" class="svelte-12on7lh"><svg title="Instagram icon" id="Layer_1" class="instagram-icon svelte-12on7lh" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 1000"><path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34" transform="translate(-2.5 -2.5)"></path></svg></a></li></ul></div>
</div>`;
});
const app = "";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '.wrapper.svelte-1561sh7.svelte-1561sh7{--background-color:black;--primary-color:hsl(329 100% 22%);--primary-color-background:hsla(329 100% 22% / 0.04);--text-color:hsl(176 59% 90%);position:relative;display:grid;background-color:var(--background-color);grid-template:repeat(2, auto)/1fr;min-height:100vh;min-height:100dvh}.wrapper.svelte-1561sh7.svelte-1561sh7::before{content:"";position:absolute;background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIj4KICAgIDxmaWx0ZXIgaWQ9Im5vaXNlIiB4PSIwIiB5PSIwIj4KICAgICAgPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz4KICAgICAgPGZlQmxlbmQgbW9kZT0ic2NyZWVuIi8+CiAgICA8L2ZpbHRlcj4KICAgIDxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjUiLz4KPC9zdmc+);height:100%;width:100%;opacity:0.2}@media(min-width: 1200px){.wrapper.svelte-1561sh7.svelte-1561sh7{grid-template:1fr/repeat(2, auto)}}header.svelte-1561sh7.svelte-1561sh7,main.svelte-1561sh7.svelte-1561sh7{display:flex;justify-content:center;align-items:center}.nav-cube_side.svelte-1561sh7.svelte-1561sh7{background-color:var(--primary-color-background);outline:1px solid transparent}.nav-cube_border.svelte-1561sh7.svelte-1561sh7{width:100%;height:100%}.nav-cube.svelte-1561sh7.svelte-1561sh7{transform-style:preserve-3d;height:calc(60 * 1vw);width:calc(80 * 1vw);position:relative;transform:rotateX(calc(10 * 1deg)) rotateY(calc(10 * 1deg)) rotateZ(calc(0 * 1deg));margin-top:5vw;margin-bottom:10vw}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(1){position:absolute}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(1){height:calc(60 * 1vw);width:calc(80 * 1vw)}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(2){position:absolute}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(2){height:calc(60 * 1vw);width:calc(80 * 1vw)}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(3){position:absolute}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(3){height:calc(60 * 1vw);width:calc(20 * 1vw)}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(4){position:absolute}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(4){height:calc(60 * 1vw);width:calc(20 * 1vw)}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(5){position:absolute}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(5){height:calc(20 * 1vw);width:calc(80 * 1vw)}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(6){position:absolute}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(6){height:calc(20 * 1vw);width:calc(80 * 1vw)}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(1){transform:translate3d(0, 0, calc(20 * 1vw * -0.5))}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(2){transform:translate3d(0, 0, calc(20 * 1vw * 0.5));z-index:1}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(3){inset:50% auto auto 50%;transform:translate(-50%, -50%) rotateY(90deg) translate3d(0, 0, calc(80 * 1vw * -0.5))}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(4){inset:50% auto auto 50%;transform:translate(-50%, -50%) rotateY(-90deg) translate3d(0, 0, calc(80 * 1vw * -0.5))}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(5){inset:50% auto auto 50%;transform:translate(-50%, -50%) rotateX(-90deg) translate3d(0, 0, calc(60 * 1vw * -0.5))}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(6){inset:50% auto auto 50%;transform:translate(-50%, -50%) rotateX(90deg) translate3d(0, 0, calc(60 * 1vw * -0.5))}.nav-cube_border.svelte-1561sh7.svelte-1561sh7{border:2px solid var(--primary-color)}@media(min-width: 600px){.nav-cube.svelte-1561sh7.svelte-1561sh7{transform-style:preserve-3d;height:calc(45 * 1vw);width:calc(60 * 1vw);position:relative;transform:rotateX(calc(10 * 1deg)) rotateY(calc(10 * 1deg)) rotateZ(calc(0 * 1deg))}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(1){position:absolute}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(1){height:calc(45 * 1vw);width:calc(60 * 1vw)}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(2){position:absolute}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(2){height:calc(45 * 1vw);width:calc(60 * 1vw)}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(3){position:absolute}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(3){height:calc(45 * 1vw);width:calc(15 * 1vw)}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(4){position:absolute}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(4){height:calc(45 * 1vw);width:calc(15 * 1vw)}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(5){position:absolute}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(5){height:calc(15 * 1vw);width:calc(60 * 1vw)}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(6){position:absolute}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(6){height:calc(15 * 1vw);width:calc(60 * 1vw)}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(1){transform:translate3d(0, 0, calc(15 * 1vw * -0.5))}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(2){transform:translate3d(0, 0, calc(15 * 1vw * 0.5));z-index:1}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(3){inset:50% auto auto 50%;transform:translate(-50%, -50%) rotateY(90deg) translate3d(0, 0, calc(60 * 1vw * -0.5))}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(4){inset:50% auto auto 50%;transform:translate(-50%, -50%) rotateY(-90deg) translate3d(0, 0, calc(60 * 1vw * -0.5))}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(5){inset:50% auto auto 50%;transform:translate(-50%, -50%) rotateX(-90deg) translate3d(0, 0, calc(45 * 1vw * -0.5))}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(6){inset:50% auto auto 50%;transform:translate(-50%, -50%) rotateX(90deg) translate3d(0, 0, calc(45 * 1vw * -0.5))}}@media(min-width: 1200px){.nav-cube.svelte-1561sh7.svelte-1561sh7{transform-style:preserve-3d;height:calc(15 * 1vw);width:calc(20 * 1vw);position:relative;transform:rotateX(calc(10 * 1deg)) rotateY(calc(10 * 1deg)) rotateZ(calc(0 * 1deg));margin-top:20vw;margin-bottom:0}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(1){position:absolute}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(1){height:calc(15 * 1vw);width:calc(20 * 1vw)}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(2){position:absolute}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(2){height:calc(15 * 1vw);width:calc(20 * 1vw)}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(3){position:absolute}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(3){height:calc(15 * 1vw);width:calc(5 * 1vw)}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(4){position:absolute}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(4){height:calc(15 * 1vw);width:calc(5 * 1vw)}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(5){position:absolute}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(5){height:calc(5 * 1vw);width:calc(20 * 1vw)}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(6){position:absolute}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(6){height:calc(5 * 1vw);width:calc(20 * 1vw)}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(1){transform:translate3d(0, 0, calc(5 * 1vw * -0.5))}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(2){transform:translate3d(0, 0, calc(5 * 1vw * 0.5));z-index:1}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(3){inset:50% auto auto 50%;transform:translate(-50%, -50%) rotateY(90deg) translate3d(0, 0, calc(20 * 1vw * -0.5))}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(4){inset:50% auto auto 50%;transform:translate(-50%, -50%) rotateY(-90deg) translate3d(0, 0, calc(20 * 1vw * -0.5))}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(5){inset:50% auto auto 50%;transform:translate(-50%, -50%) rotateX(-90deg) translate3d(0, 0, calc(15 * 1vw * -0.5))}.nav-cube.svelte-1561sh7>div.svelte-1561sh7:nth-child(6){inset:50% auto auto 50%;transform:translate(-50%, -50%) rotateX(90deg) translate3d(0, 0, calc(15 * 1vw * -0.5))}}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="wrapper svelte-1561sh7" aria-hidden="false"><header class="svelte-1561sh7"><div class="nav-cube svelte-1561sh7"><div class="nav-cube_side svelte-1561sh7"><div class="nav-cube_border svelte-1561sh7"></div></div>
			<div class="nav-cube_side svelte-1561sh7"><div class="nav-cube_border svelte-1561sh7">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</div></div>
			<div class="nav-cube_side svelte-1561sh7"><div class="nav-cube_border svelte-1561sh7"></div></div>

			<div class="nav-cube_side svelte-1561sh7"><div class="nav-cube_border svelte-1561sh7"></div></div>
			<div class="nav-cube_side svelte-1561sh7"><div class="nav-cube_border svelte-1561sh7"></div></div>
			<div class="nav-cube_side svelte-1561sh7"><div class="nav-cube_border svelte-1561sh7"></div></div></div></header>
	<main class="svelte-1561sh7">${slots.default ? slots.default({}) : ``}</main></div>

`;
});
export {
  Layout as default
};
