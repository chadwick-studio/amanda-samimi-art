import { c as create_ssr_component, b as spread, d as escape_attribute_value, f as escape_object, h as createEventDispatcher, o as onDestroy, i as add_attribute, v as validate_component, a as subscribe, e as escape, j as each } from "../../chunks/index2.js";
import imageUrlBuilder from "@sanity/image-url";
import "@vimeo/player";
import "object-assign";
import { r as readable, w as writable } from "../../chunks/index.js";
function getImageDimensions(image) {
  if (!image?.asset?._ref) {
    return;
  }
  const dimensions = image.asset._ref.split("-")[2];
  const [width, height] = dimensions.split("x").map(Number);
  if (!width || !height || Number.isNaN(width) || Number.isNaN(height)) {
    return;
  }
  return {
    width,
    height,
    aspectRatio: width / height
  };
}
const imageBuilder = imageUrlBuilder({
  projectId: "0qqw8usd",
  dataset: "production"
});
const LARGEST_VIEWPORT = 1920;
const DEFAULT_MIN_STEP = 0.1;
const DEFAULT_WIDTH_STEPS = [400, 600, 850, 1e3, 1150];
const DEFAULT_FULL_WIDTH_STEPS = [360, 414, 768, 1366, 1536, 1920];
function getImageProps({
  /**
   * The image's reference object.
   * Example: {asset: {_ref: string}, hotspot: {...}, crop: {...} }
   */
  image,
  // Number of the largest width it can assume in the design
  // or "100vw" if it occupies the whole width
  maxWidth: userMaxWidth,
  /**
   * The minimal width difference, in PERCENTAGE (decimal), between the image's srcSet variations.
   *
   * -> 0.10 (10%) by default.
   */
  minimumWidthStep = DEFAULT_MIN_STEP,
  // List of width sizes to use in the srcSet (NON-RETINA)
  customWidthSteps,
  // Custom <img> element's `sizes` attribute
  sizes
}) {
  if (!image?.asset?._ref) {
    return {};
  }
  const maxWidth = typeof userMaxWidth === "number" ? userMaxWidth : LARGEST_VIEWPORT;
  const builder = imageBuilder.image(image).fit("max").auto("format");
  const imageDimensions = getImageDimensions(image);
  const baseSizes = [
    maxWidth,
    ...customWidthSteps || (typeof userMaxWidth === "number" ? DEFAULT_WIDTH_STEPS : DEFAULT_FULL_WIDTH_STEPS)
  ];
  const retinaSizes = Array.from(
    // De-duplicate sizes with a Set
    /* @__PURE__ */ new Set([
      ...baseSizes,
      ...baseSizes.map((size) => size * 2),
      ...baseSizes.map((size) => size * 3)
    ])
  ).sort((a, b) => a - b).filter(
    (size) => (
      // Exclude sizes 10% or more larger than the image itself. Sizes slightly larger
      // than the image are included to ensure we always get closest to the highest
      // quality for an image. Sanity's CDN won't scale the image above its limits.
      size <= imageDimensions.width * 1.1 && // Exclude those larger than maxWidth's retina (x3)
      size <= maxWidth * 3
    )
  ).filter((size, i, arr) => {
    const nextSize = arr[i + 1];
    if (nextSize) {
      return nextSize / size > minimumWidthStep + 1;
    }
    return true;
  });
  return {
    // Use the original image as the `src` for the <img>
    src: builder.width(maxWidth).url(),
    // Build a `{URL} {SIZE}w, ...` string for the srcset
    srcset: retinaSizes.map((size) => `${builder.width(size).url()} ${size}w`).join(", "),
    sizes: maxWidth === "100vw" ? "100vw" : sizes || `(max-width: ${maxWidth}px) 100vw, ${maxWidth}px`,
    // Let's also tell the browser what's the size of the image so it can calculate aspect ratios
    width: retinaSizes[0],
    height: retinaSizes[0] / imageDimensions.aspectRatio
  };
}
const Image_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "img.svelte-ifgpwg{display:block;width:100%;height:auto;transition:0.15s opacity}img[data-loaded=false].svelte-ifgpwg{opacity:0}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { title } = $$props;
  let { medium } = $$props;
  let { dimensions } = $$props;
  let { year } = $$props;
  let { loading = "eager" } = $$props;
  let loaded = false;
  const altTag = [title, medium, dimensions, year].join(". ");
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.medium === void 0 && $$bindings.medium && medium !== void 0)
    $$bindings.medium(medium);
  if ($$props.dimensions === void 0 && $$bindings.dimensions && dimensions !== void 0)
    $$bindings.dimensions(dimensions);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
  $$result.css.add(css$5);
  return `<img${spread(
    [
      { loading: escape_attribute_value(loading) },
      { alt: escape_attribute_value(altTag) },
      {
        fetchpriority: escape_attribute_value(loading === "eager" ? "high" : void 0)
      },
      escape_object(getImageProps({ image })),
      {
        "data-loaded": escape_attribute_value(loaded)
      }
    ],
    { classes: "svelte-ifgpwg" }
  )}>`;
});
const VimeoPlayer_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".vimeo-video-wrapper.svelte-12imaz8{width:clamp(300px, 80vw, 800px)}",
  map: null
};
const VimeoPlayer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options = () => ({}) } = $$props;
  let { videoId } = $$props;
  let { loop = false } = $$props;
  let { autoplay = false } = $$props;
  createEventDispatcher();
  parseInt(Math.random() * 1e5).toString();
  let elementId = `vimeo-player-${videoId}`;
  let { player } = $$props;
  function loadVideo(id) {
    if (!player)
      return;
    return player.loadVideo(id);
  }
  onDestroy(() => {
    if (player) {
      player.unload();
    }
  });
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.videoId === void 0 && $$bindings.videoId && videoId !== void 0)
    $$bindings.videoId(videoId);
  if ($$props.loop === void 0 && $$bindings.loop && loop !== void 0)
    $$bindings.loop(loop);
  if ($$props.autoplay === void 0 && $$bindings.autoplay && autoplay !== void 0)
    $$bindings.autoplay(autoplay);
  if ($$props.player === void 0 && $$bindings.player && player !== void 0)
    $$bindings.player(player);
  $$result.css.add(css$4);
  {
    loadVideo(videoId);
  }
  return `



<div${add_attribute("id", elementId, 0)} class="vimeo-video-wrapper svelte-12imaz8"></div>`;
});
const Video = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { video } = $$props;
  let player;
  if ($$props.video === void 0 && $$bindings.video && video !== void 0)
    $$bindings.video(video);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(VimeoPlayer, "VimeoPlayer").$$render(
      $$result,
      { videoId: video, player },
      {
        player: ($$value) => {
          player = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const LightboxFigure_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '.lightbox_figure.svelte-vo87eb.svelte-vo87eb{display:flex;align-items:center;position:relative;white-space:nowrap;text-align:right;position:relative;height:100vh;height:100dvh}.lightbox_figure_caption.svelte-vo87eb.svelte-vo87eb{position:absolute;right:0;bottom:0;padding-block:0.5em;padding-inline:1em;background-color:rgba(0, 0, 0, 0.6);line-height:1.5;opacity:1}.lightbox_instructions.svelte-vo87eb.svelte-vo87eb{opacity:0}@media(hover: hover){.lightbox_instructions.svelte-vo87eb.svelte-vo87eb{display:block;position:fixed;font-family:"Le Monde Livre";opacity:1;transform:opacity 300ms ease-out;font-size:0.75rem;bottom:0;right:1em;bottom:0.25em;color:hsl(176, 59%, 90%);mix-blend-mode:exclusion}.lightbox_figure_caption.svelte-vo87eb.svelte-vo87eb{opacity:0}.lightbox_figure.svelte-vo87eb:hover .lightbox_figure_caption.svelte-vo87eb,.lightbox_figure.svelte-vo87eb:focus-visible .lightbox_figure_caption.svelte-vo87eb{opacity:1}.lightbox_figure.svelte-vo87eb:hover+.lightbox_instructions.svelte-vo87eb,.lightbox_figure.svelte-vo87eb:focus-visible+.lightbox_instructions.svelte-vo87eb{opacity:0}}',
  map: null
};
const LightboxFigure = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let dimensions;
  let titleHTML;
  let mediumHTML;
  let mediumHTMLNoNull;
  let dimensionsHTML;
  let dimensionsHTMLNoNull;
  let descriptionHTML;
  let { image } = $$props;
  let { video } = $$props;
  let { title } = $$props;
  let { medium } = $$props;
  let { height } = $$props;
  let { width } = $$props;
  let { year } = $$props;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.video === void 0 && $$bindings.video && video !== void 0)
    $$bindings.video(video);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.medium === void 0 && $$bindings.medium && medium !== void 0)
    $$bindings.medium(medium);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  $$result.css.add(css$3);
  dimensions = `${height} by ${width} inches`;
  year = String(year).slice(0, 4);
  titleHTML = `<h2 style="font-style: italic;">${title}</h2>`;
  mediumHTML = `${medium} <br>`;
  mediumHTMLNoNull = mediumHTML.includes("null") ? "" : mediumHTML;
  dimensionsHTML = `${height} by ${width} inches <br>`;
  dimensionsHTMLNoNull = dimensionsHTML.includes("null") ? "" : dimensionsHTML;
  descriptionHTML = titleHTML + mediumHTMLNoNull + dimensionsHTMLNoNull + year;
  return `<figure class="lightbox_figure svelte-vo87eb" tabindex="0" aria-describedby="lightbox-instructions">${video ? `${validate_component(Video, "Video").$$render($$result, { video }, {}, {})}` : `${validate_component(Image, "Image").$$render($$result, { title, medium, dimensions, year, image }, {}, {})}
		<figcaption class="lightbox_figure_caption svelte-vo87eb"><!-- HTML_TAG_START -->${descriptionHTML}<!-- HTML_TAG_END --></figcaption>`}</figure>
${image ? `<p class="lightbox_instructions svelte-vo87eb" id="lightbox-instructions" role="tooltip">Hover over or focus on painting to view details.
	</p>` : ``}`;
});
const Lightbox_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.lightbox-container.svelte-717vgh.svelte-717vgh{position:fixed;top:0;left:0;width:100%;height:100vh;height:100dvh;isolation:isolate;z-index:99999;border:none;padding:0;margin:0;background-color:rgba(0, 0, 0, 0.9);opacity:0;transition:opacity 300ms}.lightbox.svelte-717vgh.svelte-717vgh{font-family:"Source Serif Pro";color:hsl(176, 59%, 90%);position:relative;z-index:10;display:grid;place-items:center;height:100%;font-size:0.75rem}.lightbox.svelte-717vgh svg.svelte-717vgh{display:block}.lightbox_controls.svelte-717vgh.svelte-717vgh{position:absolute;cursor:pointer;mix-blend-mode:exclusion}.lightbox_controls.svelte-717vgh.svelte-717vgh:focus-visible{outline:1px solid hsl(176, 59%, 90%)}.lightbox_previous-image-button.svelte-717vgh.svelte-717vgh{left:1em;top:50%;transform:translateY(-50%)}.lightbox_next-image-button.svelte-717vgh.svelte-717vgh{top:50%;right:1em;transform:translateY(-50%)}.lightbox_close-button.svelte-717vgh.svelte-717vgh{top:0;right:0;margin-right:1em;margin-top:1em}.close-icon.svelte-717vgh.svelte-717vgh{width:2em}.chevron-icon.svelte-717vgh.svelte-717vgh{width:2em}.lightboxOpen.svelte-717vgh.svelte-717vgh{opacity:1}',
  map: null
};
const Lightbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $galleryItems, $$unsubscribe_galleryItems;
  let $isVisible, $$unsubscribe_isVisible;
  let $currentItemIndex, $$unsubscribe_currentItemIndex;
  let { galleryItems } = $$props;
  $$unsubscribe_galleryItems = subscribe(galleryItems, (value) => $galleryItems = value);
  let { currentItemIndex } = $$props;
  $$unsubscribe_currentItemIndex = subscribe(currentItemIndex, (value) => $currentItemIndex = value);
  let { isVisible } = $$props;
  $$unsubscribe_isVisible = subscribe(isVisible, (value) => $isVisible = value);
  let { dialog } = $$props;
  if ($$props.galleryItems === void 0 && $$bindings.galleryItems && galleryItems !== void 0)
    $$bindings.galleryItems(galleryItems);
  if ($$props.currentItemIndex === void 0 && $$bindings.currentItemIndex && currentItemIndex !== void 0)
    $$bindings.currentItemIndex(currentItemIndex);
  if ($$props.isVisible === void 0 && $$bindings.isVisible && isVisible !== void 0)
    $$bindings.isVisible(isVisible);
  if ($$props.dialog === void 0 && $$bindings.dialog && dialog !== void 0)
    $$bindings.dialog(dialog);
  $$result.css.add(css$2);
  $$unsubscribe_galleryItems();
  $$unsubscribe_isVisible();
  $$unsubscribe_currentItemIndex();
  return `<dialog class="${["lightbox-container svelte-717vgh", $isVisible === true ? "lightboxOpen" : ""].join(" ").trim()}"${add_attribute("this", dialog, 0)}><div class="lightbox svelte-717vgh">${validate_component(LightboxFigure, "LightboxFigure").$$render($$result, Object.assign({}, $galleryItems[$currentItemIndex]), {}, {})}
		<button class="lightbox_previous-image-button lightbox_controls svelte-717vgh"><svg class="chevron-icon svelte-717vgh" width="100%" height="100%" viewBox="0 0 33 63" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-width="2"><line x1="32" y1="62" x2="1" y2="32"></line><line x1="1" y1="32" x2="32" y2="1"></line></svg></button>
		<button class="lightbox_next-image-button lightbox_controls svelte-717vgh"><svg class="chevron-icon svelte-717vgh" width="100%" height="100%" viewBox="0 0 33 63" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-width="2"><line x1="1" y1="62" x2="32" y2="32"></line><line x1="32" y1="32" x2="1" y2="1"></line></svg></button>
		<form method="dialog"><button class="lightbox_close-button lightbox_controls svelte-717vgh"><svg class="close-icon svelte-717vgh" width="100%" height="100%" viewBox="0 0 63 63" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="white" stroke-width="2"><line x1="1" y1="1" x2="62" y2="62"></line><line x1="62" y1="1" x2="1" y2="62"></line></svg></button></form></div>
</dialog>`;
});
const Masonry_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".svelte-gz1f8p:where(div.masonry){display:flex;justify-content:center;overflow-wrap:anywhere;box-sizing:border-box}.svelte-gz1f8p:where(div.masonry div.col){display:grid;height:max-content;width:100%}",
  map: null
};
const Masonry = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nCols;
  let itemsToCols;
  let { items } = $$props;
  let { minColWidth = 330 } = $$props;
  let { maxColWidth = 500 } = $$props;
  let { gap = 20 } = $$props;
  let { masonryWidth = 0 } = $$props;
  let { masonryHeight = 0 } = $$props;
  let { animate = true } = $$props;
  let { style = `` } = $$props;
  let { duration = 0 } = $$props;
  let { columnClass = `` } = $$props;
  let { idKey = `id` } = $$props;
  let { getId = (item) => {
    if (typeof item === `string`)
      return item;
    if (typeof item === `number`)
      return item;
    return item[idKey];
  } } = $$props;
  let { class: className = `` } = $$props;
  if ($$props.items === void 0 && $$bindings.items && items !== void 0)
    $$bindings.items(items);
  if ($$props.minColWidth === void 0 && $$bindings.minColWidth && minColWidth !== void 0)
    $$bindings.minColWidth(minColWidth);
  if ($$props.maxColWidth === void 0 && $$bindings.maxColWidth && maxColWidth !== void 0)
    $$bindings.maxColWidth(maxColWidth);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.masonryWidth === void 0 && $$bindings.masonryWidth && masonryWidth !== void 0)
    $$bindings.masonryWidth(masonryWidth);
  if ($$props.masonryHeight === void 0 && $$bindings.masonryHeight && masonryHeight !== void 0)
    $$bindings.masonryHeight(masonryHeight);
  if ($$props.animate === void 0 && $$bindings.animate && animate !== void 0)
    $$bindings.animate(animate);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.columnClass === void 0 && $$bindings.columnClass && columnClass !== void 0)
    $$bindings.columnClass(columnClass);
  if ($$props.idKey === void 0 && $$bindings.idKey && idKey !== void 0)
    $$bindings.idKey(idKey);
  if ($$props.getId === void 0 && $$bindings.getId && getId !== void 0)
    $$bindings.getId(getId);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  $$result.css.add(css$1);
  nCols = Math.min(3, Math.min(items.length, Math.floor(masonryWidth / (minColWidth + gap)) || 1));
  itemsToCols = items.reduce(
    (cols, item, idx) => {
      cols[idx % cols.length].push([item, idx]);
      return cols;
    },
    Array(nCols).fill(null).map(() => [])
  );
  return `<div class="${"masonry " + escape(className, true) + " svelte-gz1f8p"}" style="${"gap: " + escape(gap, true) + "px; " + escape(style, true)}">${each(itemsToCols, (col) => {
    return `<div class="${"col " + escape(columnClass, true) + " svelte-gz1f8p"}" style="${"gap: " + escape(gap, true) + "px; max-width: " + escape(maxColWidth, true) + "px;"}">${animate ? `${each(col, ([item, idx]) => {
      return `<div class="svelte-gz1f8p">${slots.default ? slots.default({ idx, item }) : ``}
					</div>`;
    })}` : `${each(col, ([item, idx]) => {
      return `${slots.default ? slots.default({ idx, item }) : ``}`;
    })}`}
		</div>`;
  })}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".gallery-container.svelte-1xd2rrf.svelte-1xd2rrf{overflow-y:auto;height:100%;color:white;padding:20px;scrollbar-width:thin}.gallery-container.svelte-1xd2rrf.svelte-1xd2rrf::-webkit-scrollbar{width:12px}.main-cube.svelte-1xd2rrf.svelte-1xd2rrf{transform-style:preserve-3d;height:calc(180 * 1vw);width:calc(80 * 1vw);position:relative;transform:rotateX(calc(10 * 1deg)) rotateY(calc(-10 * 1deg)) rotateZ(calc(0 * 1deg));margin-bottom:5vw;z-index:2}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(1){position:absolute}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(1){height:calc(180 * 1vw);width:calc(80 * 1vw)}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(2){position:absolute}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(2){height:calc(180 * 1vw);width:calc(80 * 1vw)}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(3){position:absolute}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(3){height:calc(180 * 1vw);width:calc(40 * 1vw)}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(4){position:absolute}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(4){height:calc(180 * 1vw);width:calc(40 * 1vw)}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(5){position:absolute}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(5){height:calc(40 * 1vw);width:calc(80 * 1vw)}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(6){position:absolute}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(6){height:calc(40 * 1vw);width:calc(80 * 1vw)}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(1){transform:translate3d(0, 0, calc(40 * 1vw * -0.5))}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(2){transform:translate3d(0, 0, calc(40 * 1vw * 0.5));z-index:1}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(3){inset:50% auto auto 50%;transform:translate(-50%, -50%) rotateY(90deg) translate3d(0, 0, calc(80 * 1vw * -0.5))}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(4){inset:50% auto auto 50%;transform:translate(-50%, -50%) rotateY(-90deg) translate3d(0, 0, calc(80 * 1vw * -0.5))}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(5){inset:50% auto auto 50%;transform:translate(-50%, -50%) rotateX(-90deg) translate3d(0, 0, calc(180 * 1vw * -0.5))}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(6){inset:50% auto auto 50%;transform:translate(-50%, -50%) rotateX(90deg) translate3d(0, 0, calc(180 * 1vw * -0.5))}.main-cube_side.svelte-1xd2rrf.svelte-1xd2rrf{background-color:var(--primary-color-background);outline:1px solid transparent}.main-cube_border.svelte-1xd2rrf.svelte-1xd2rrf{border:6px solid var(--primary-color);width:100%;height:100%}@media(min-width: 1200px){.main-cube.svelte-1xd2rrf.svelte-1xd2rrf{transform-style:preserve-3d;height:calc(40 * 1vw);width:calc(70 * 1vw);position:relative;transform:rotateX(calc(10 * 1deg)) rotateY(calc(-10 * 1deg)) rotateZ(calc(0 * 1deg));margin-bottom:0}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(1){position:absolute}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(1){height:calc(40 * 1vw);width:calc(70 * 1vw)}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(2){position:absolute}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(2){height:calc(40 * 1vw);width:calc(70 * 1vw)}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(3){position:absolute}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(3){height:calc(40 * 1vw);width:calc(10 * 1vw)}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(4){position:absolute}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(4){height:calc(40 * 1vw);width:calc(10 * 1vw)}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(5){position:absolute}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(5){height:calc(10 * 1vw);width:calc(70 * 1vw)}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(6){position:absolute}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(6){height:calc(10 * 1vw);width:calc(70 * 1vw)}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(1){transform:translate3d(0, 0, calc(10 * 1vw * -0.5))}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(2){transform:translate3d(0, 0, calc(10 * 1vw * 0.5));z-index:1}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(3){inset:50% auto auto 50%;transform:translate(-50%, -50%) rotateY(90deg) translate3d(0, 0, calc(70 * 1vw * -0.5))}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(4){inset:50% auto auto 50%;transform:translate(-50%, -50%) rotateY(-90deg) translate3d(0, 0, calc(70 * 1vw * -0.5))}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(5){inset:50% auto auto 50%;transform:translate(-50%, -50%) rotateX(-90deg) translate3d(0, 0, calc(40 * 1vw * -0.5))}.main-cube.svelte-1xd2rrf>div.svelte-1xd2rrf:nth-child(6){inset:50% auto auto 50%;transform:translate(-50%, -50%) rotateX(90deg) translate3d(0, 0, calc(40 * 1vw * -0.5))}}button.svelte-1xd2rrf.svelte-1xd2rrf{cursor:pointer;display:block}button.svelte-1xd2rrf.svelte-1xd2rrf:focus-visible{outline:1px solid hsl(176, 59%, 90%)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isVisible, $$unsubscribe_isVisible;
  let $galleryItems, $$unsubscribe_galleryItems;
  let { data } = $$props;
  console.log(data);
  const galleryItems = readable(data.galleryItems.map((item, i) => ({ ...item, id: i })));
  $$unsubscribe_galleryItems = subscribe(galleryItems, (value) => $galleryItems = value);
  let currentItemIndex = writable(0);
  let dialog;
  let isVisible = writable(false);
  $$unsubscribe_isVisible = subscribe(isVisible, (value) => $isVisible = value);
  let [minColWidth, maxColWidth, gap] = [250, 800, 20];
  let width, height;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-ak0nwk_START -->${$isVisible ? `<style lang="scss">/* Mixins */
/* Variables */
:root {
  overflow: hidden;
}</style>` : `<style lang="scss">/* Mixins */
/* Variables */
:root {
  overflow: visible;
}</style>`}<!-- HEAD_svelte-ak0nwk_END -->`, ""}
<div class="main-cube svelte-1xd2rrf"><div class="main-cube_side svelte-1xd2rrf"><div class="main-cube_border svelte-1xd2rrf"></div></div>
	<div class="main-cube_side svelte-1xd2rrf"><div class="main-cube_border svelte-1xd2rrf"><div class="gallery-container svelte-1xd2rrf">${validate_component(Masonry, "Masonry").$$render(
      $$result,
      {
        items: $galleryItems,
        minColWidth,
        maxColWidth,
        gap,
        width,
        height
      },
      {
        width: ($$value) => {
          width = $$value;
          $$settled = false;
        },
        height: ($$value) => {
          height = $$value;
          $$settled = false;
        }
      },
      {
        default: ({ item }) => {
          return `<button class="svelte-1xd2rrf">${validate_component(Image, "Image").$$render($$result, Object.assign({}, item), {}, {})}</button>`;
        }
      }
    )}</div></div></div>
	<div class="main-cube_side svelte-1xd2rrf"></div>
	<div class="main-cube_side svelte-1xd2rrf"><div class="main-cube_border svelte-1xd2rrf"></div></div>
	<div class="main-cube_side svelte-1xd2rrf"><div class="main-cube_border svelte-1xd2rrf"></div></div>
	<div class="main-cube_side svelte-1xd2rrf"><div class="main-cube_border svelte-1xd2rrf"></div></div></div>
${validate_component(Lightbox, "Lightbox").$$render(
      $$result,
      {
        currentItemIndex,
        galleryItems,
        isVisible,
        dialog
      },
      {
        dialog: ($$value) => {
          dialog = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_isVisible();
  $$unsubscribe_galleryItems();
  return $$rendered;
});
export {
  Page as default
};
