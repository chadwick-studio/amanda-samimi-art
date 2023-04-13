import { c as create_ssr_component, d as compute_rest_props, f as spread, h as escape_attribute_value, i as escape_object, o as onDestroy, j as add_attribute, k as createEventDispatcher, e as escape, v as validate_component, l as compute_slots, p as each } from "../../chunks/index.js";
import imageUrlBuilder from "@sanity/image-url";
const LightboxThumbnail_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "button.svelte-1iwkzpi{cursor:pointer}button.svelte-1iwkzpi:focus-visible{border:1px solid var(--text-color)}",
  map: null
};
const LightboxThumbnail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["isVisible"]);
  let { isVisible } = $$props;
  if ($$props.isVisible === void 0 && $$bindings.isVisible && isVisible !== void 0)
    $$bindings.isVisible(isVisible);
  $$result.css.add(css$7);
  return `<button${spread(
    [
      {
        "aria-expanded": escape_attribute_value(isVisible)
      },
      { "aria-controls": "lightbox" },
      escape_object($$restProps)
    ],
    {
      classes: "lightbox-thumbnail svelte-1iwkzpi"
    }
  )}>${slots.default ? slots.default({}) : ``}
</button>`;
});
const BodyChild = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  let targetElement;
  let child;
  const removeTarget = () => {
    if (typeof document !== "undefined") {
      document.body.removeChild(child);
    }
  };
  onDestroy(removeTarget);
  return `<div${spread(
    [
      { id: "lightbox" },
      { "aria-label": "Image lightbox" },
      { role: "dialog" },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", targetElement, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const LightboxButton_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "button.svelte-1n0huew{--text-color:hsl(176 59% 90%);width:3em;aspect-ratio:1;color:white;position:absolute;top:0.5em;right:0.5em;z-index:5;cursor:pointer}button.svelte-1n0huew:focus-visible{border:2px solid var(--text-color)}.close-icon.svelte-1n0huew{stroke:white}",
  map: null
};
const LightboxButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { closeButtonProps = {} } = $$props;
  let { showCloseButton } = $$props;
  let { enableEscapeToClose } = $$props;
  let { imagePreset } = $$props;
  if ($$props.closeButtonProps === void 0 && $$bindings.closeButtonProps && closeButtonProps !== void 0)
    $$bindings.closeButtonProps(closeButtonProps);
  if ($$props.showCloseButton === void 0 && $$bindings.showCloseButton && showCloseButton !== void 0)
    $$bindings.showCloseButton(showCloseButton);
  if ($$props.enableEscapeToClose === void 0 && $$bindings.enableEscapeToClose && enableEscapeToClose !== void 0)
    $$bindings.enableEscapeToClose(enableEscapeToClose);
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  $$result.css.add(css$6);
  return `

${showCloseButton ? `<button${spread([escape_object(closeButtonProps), { title: "Close lightbox" }], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " svelte-1n0huew"
  })}><svg class="close-icon svelte-1n0huew" width="100%" height="100%" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" stroke-width="2"><line x1="16" y1="16" x2="48" y2="48"></line><line x1="48" y1="16" x2="16" y2="48"></line></svg>
		<span class="sr-only">Close lightbox</span></button>` : ``}`;
});
const LightboxFigure_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: '.lightbox-figure.svelte-185t2j5.svelte-185t2j5{font-family:"Source Serif Pro", serif;display:flex;align-items:end;position:relative;height:100vh;height:100svh}.lightbox-figure.expand.svelte-185t2j5>.svelte-185t2j5{flex-grow:1}.lightbox-caption.svelte-185t2j5.svelte-185t2j5{font-size:0.75rem;white-space:nowrap;font-style:normal;color:white;position:absolute;right:0;bottom:0;text-align:right;padding-block:0.5em;padding-inline:1em;background-color:rgba(0, 0, 0, 0.5);transition:opacity 150ms ease-out}.lightbox-caption.svelte-185t2j5 h2.svelte-185t2j5{font-style:italic;line-height:1.5}p.svelte-185t2j5.svelte-185t2j5{display:none}@media(hover: hover){p.svelte-185t2j5.svelte-185t2j5{display:block;position:fixed;font-family:"Le Monde Livre";opacity:1;transform:opacity 150ms ease-out;font-size:0.75rem;bottom:0;right:1rem;bottom:0.25rem;color:white;mix-blend-mode:difference}.lightbox-figure.svelte-185t2j5:hover .lightbox-caption.svelte-185t2j5,.lightbox-figure.svelte-185t2j5:focus-visible .lightbox-caption.svelte-185t2j5{opacity:1}.lightbox-figure.svelte-185t2j5:hover+p.svelte-185t2j5,.lightbox-figure.svelte-185t2j5:focus-visible+p.svelte-185t2j5{opacity:0}.lightbox-caption.svelte-185t2j5.svelte-185t2j5{opacity:0}}',
  map: null
};
const LightboxFigure = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["imagePreset", "enableImageExpand", "title", "description"]);
  let { imagePreset } = $$props;
  let { enableImageExpand } = $$props;
  let { title } = $$props;
  let { description } = $$props;
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  if ($$props.enableImageExpand === void 0 && $$bindings.enableImageExpand && enableImageExpand !== void 0)
    $$bindings.enableImageExpand(enableImageExpand);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  $$result.css.add(css$5);
  return `<figure class="${[
    "lightbox-figure svelte-185t2j5",
    (imagePreset === "fullscreen" ? "fullscreen" : "") + " " + (imagePreset === "scroll" ? "scroll" : "") + " " + (enableImageExpand ? "expand" : "")
  ].join(" ").trim()}" tabindex="0">${slots.default ? slots.default({}) : ``}
	<figcaption${spread([{ class: "lightbox-caption" }, escape_object($$restProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " svelte-185t2j5"
  })}><h2 class="svelte-185t2j5">${escape(title)}</h2>
		<!-- HTML_TAG_START -->${description}<!-- HTML_TAG_END --></figcaption></figure>
<p class="svelte-185t2j5">Hover over or focus on painting to view its title and information</p>`;
});
const ModalCover_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: 'div.lightbox-overlay.svelte-12s1qno{position:fixed;z-index:1000;background-color:rgba(0 0 0 / 0.9);inset:0;overflow:hidden;display:grid;place-items:center}div.lightbox-overlay.svelte-12s1qno::before{content:"";position:absolute;inset:0;opacity:0;z-index:-1}',
  map: null
};
const ModalCover = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["transitionDuration"]);
  let { transitionDuration } = $$props;
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  $$result.css.add(css$4);
  return `<div${spread(
    [
      { class: "lightbox-overlay" },
      { "tab-index": "2" },
      escape_object($$restProps)
    ],
    { classes: "svelte-12s1qno" }
  )}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const Modal_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".lightbox-main.svelte-10xqpz7{display:grid;place-items:center;position:relative}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["transitionDuration", "imagePreset"]);
  let { transitionDuration } = $$props;
  let { imagePreset } = $$props;
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  $$result.css.add(css$3);
  return `<div${spread([{ class: "lightbox-main" }, { "tab-index": "3" }, escape_object($$restProps)], {
    classes: (imagePreset === "fullscreen" ? "fullscreen" : "") + " " + (imagePreset === "scroll" ? "scroll" : "") + " svelte-10xqpz7"
  })}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const Lightbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { title } = $$props;
  let { description } = $$props;
  let { imagePreset } = $$props;
  let { customization = {} } = $$props;
  let { transitionDuration = 300 } = $$props;
  let { keepBodyScroll = false } = $$props;
  let { enableImageExpand = false } = $$props;
  let { enableFallbackThumbnail = true } = $$props;
  let { enableEscapeToClose = true } = $$props;
  let { enableClickToClose = false } = $$props;
  let { showCloseButton = true } = $$props;
  let { isVisible = false } = $$props;
  const toggle = () => {
    isVisible = !isVisible;
  };
  const open = () => {
    isVisible = true;
  };
  const close = () => {
    isVisible = false;
  };
  const programmaticController = { toggle, open, close };
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.imagePreset === void 0 && $$bindings.imagePreset && imagePreset !== void 0)
    $$bindings.imagePreset(imagePreset);
  if ($$props.customization === void 0 && $$bindings.customization && customization !== void 0)
    $$bindings.customization(customization);
  if ($$props.transitionDuration === void 0 && $$bindings.transitionDuration && transitionDuration !== void 0)
    $$bindings.transitionDuration(transitionDuration);
  if ($$props.keepBodyScroll === void 0 && $$bindings.keepBodyScroll && keepBodyScroll !== void 0)
    $$bindings.keepBodyScroll(keepBodyScroll);
  if ($$props.enableImageExpand === void 0 && $$bindings.enableImageExpand && enableImageExpand !== void 0)
    $$bindings.enableImageExpand(enableImageExpand);
  if ($$props.enableFallbackThumbnail === void 0 && $$bindings.enableFallbackThumbnail && enableFallbackThumbnail !== void 0)
    $$bindings.enableFallbackThumbnail(enableFallbackThumbnail);
  if ($$props.enableEscapeToClose === void 0 && $$bindings.enableEscapeToClose && enableEscapeToClose !== void 0)
    $$bindings.enableEscapeToClose(enableEscapeToClose);
  if ($$props.enableClickToClose === void 0 && $$bindings.enableClickToClose && enableClickToClose !== void 0)
    $$bindings.enableClickToClose(enableClickToClose);
  if ($$props.showCloseButton === void 0 && $$bindings.showCloseButton && showCloseButton !== void 0)
    $$bindings.showCloseButton(showCloseButton);
  if ($$props.isVisible === void 0 && $$bindings.isVisible && isVisible !== void 0)
    $$bindings.isVisible(isVisible);
  if ($$props.programmaticController === void 0 && $$bindings.programmaticController && programmaticController !== void 0)
    $$bindings.programmaticController(programmaticController);
  return `${$$slots.thumbnail || enableFallbackThumbnail ? `${validate_component(LightboxThumbnail, "Thumbnail").$$render($$result, Object.assign({}, customization?.thumbnailProps || {}, { isVisible }), {}, {
    default: () => {
      return `${$$slots.thumbnail ? `${slots.thumbnail ? slots.thumbnail({}) : ``}` : `${slots.default ? slots.default({}) : ``}`}`;
    }
  })}` : ``}

${isVisible ? `${validate_component(BodyChild, "BodyChild").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(ModalCover, "ModalCover").$$render($$result, Object.assign({}, { transitionDuration }, customization.coverProps || {}), {}, {
        default: () => {
          return `${validate_component(LightboxButton, "Button").$$render(
            $$result,
            Object.assign(
              {},
              { imagePreset },
              { showCloseButton },
              { enableEscapeToClose },
              {
                closeButtonProps: customization.closeButtonProps
              },
              customization.lightboxHeaderProps || {}
            ),
            {},
            {}
          )}

			${validate_component(Modal, "Modal").$$render($$result, Object.assign({}, { imagePreset }, { transitionDuration }, customization.lightboxProps || {}), {}, {
            default: () => {
              return `${validate_component(LightboxFigure, "Figure").$$render($$result, Object.assign({}, { imagePreset }, { title }, { description }, customization.lightboxFooterProps || {}, { enableImageExpand }), {}, {
                default: () => {
                  return `${slots.default ? slots.default({}) : ``}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}` : ``}`;
});
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
const SanityImage_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "img.svelte-1tyr5x5{width:100%;height:auto;transition:0.15s opacity}img[data-loaded=false].svelte-1tyr5x5{opacity:0}",
  map: null
};
const SanityImage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { image } = $$props;
  let { loading = "lazy" } = $$props;
  let loaded = false;
  let { title } = $$props;
  let { medium } = $$props;
  let { height } = $$props;
  let { width } = $$props;
  let { year } = $$props;
  year = String(year).slice(0, 4);
  const altTag = `${title}. ${medium}. ${height} by ${width} inches. ${year}`;
  const description = `${medium} <br>${height}×${width} inches <br>${year}`;
  if ($$props.image === void 0 && $$bindings.image && image !== void 0)
    $$bindings.image(image);
  if ($$props.loading === void 0 && $$bindings.loading && loading !== void 0)
    $$bindings.loading(loading);
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
  $$result.css.add(css$2);
  return `${validate_component(Lightbox, "Lightbox").$$render($$result, { title, description }, {}, {
    default: () => {
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
        { classes: "svelte-1tyr5x5" }
      )}>`;
    }
  })}`;
});
const Masonry_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".svelte-1jzs15q:where(div.masonry){display:flex;justify-content:center;overflow-wrap:anywhere;box-sizing:border-box}.svelte-1jzs15q:where(div.masonry div.col){display:grid;height:max-content;width:100%}",
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
  let { duration = 200 } = $$props;
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
  nCols = Math.min(items.length, Math.floor(masonryWidth / (minColWidth + gap)) || 1);
  itemsToCols = items.reduce(
    (cols, item, idx) => {
      cols[idx % cols.length].push([item, idx]);
      return cols;
    },
    Array(nCols).fill(null).map(() => [])
  );
  return `<div class="${"masonry " + escape(className, true) + " svelte-1jzs15q"}" style="${"gap: " + escape(gap, true) + "px; " + escape(style, true)}">${each(itemsToCols, (col) => {
    return `<div class="${"col " + escape(columnClass, true) + " svelte-1jzs15q"}" style="${"gap: " + escape(gap, true) + "px; max-width: " + escape(maxColWidth, true) + "px;"}">${animate ? `${each(col, ([item, idx]) => {
      return `<div class="svelte-1jzs15q">${slots.default ? slots.default({ idx, item }) : ``}
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
  code: ".gallery-container.svelte-1mdc7y4{overflow-y:auto;height:100%;color:white;padding:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const images = data.images;
  images.forEach((image, i) => {
    image.id = i + 1;
  });
  let [minColWidth, maxColWidth, gap] = [300, 600, 10];
  let width, height;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="gallery-container svelte-1mdc7y4">${images ? `${validate_component(Masonry, "Masonry").$$render(
      $$result,
      {
        items: images,
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
        default: ({ item: image }) => {
          return `${validate_component(SanityImage, "SanityImage").$$render($$result, Object.assign({}, image, { loading: "eager" }), {}, {})}`;
        }
      }
    )}` : ``}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
