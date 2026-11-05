import { computed, ref, useAttrs, useTemplateRef, mergeProps, useSSRContext, defineComponent, shallowRef, watch, h, nextTick, unref } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderTeleport, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
import { defu } from "C:/Users/Asus/Documents/Rayival/portofolio/Portfolio/node_modules/defu/dist/defu.mjs";
import { withLeadingSlash, hasProtocol, joinURL, parseURL, encodeParam, encodePath } from "C:/Users/Asus/Documents/Rayival/portofolio/Portfolio/node_modules/ufo/dist/index.mjs";
import { a as useNuxtApp, b as useRuntimeConfig, e as createError, d as useHead, _ as _export_sfc } from "../server.mjs";
import { ArrowTopRightOnSquareIcon } from "@heroicons/vue/24/outline";
import "C:/Users/Asus/Documents/Rayival/portofolio/Portfolio/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/Asus/Documents/Rayival/portofolio/Portfolio/node_modules/hookable/dist/index.mjs";
import "C:/Users/Asus/Documents/Rayival/portofolio/Portfolio/node_modules/unctx/dist/index.mjs";
import "C:/Users/Asus/Documents/Rayival/portofolio/Portfolio/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Asus/Documents/Rayival/portofolio/Portfolio/node_modules/radix3/dist/index.mjs";
import "C:/Users/Asus/Documents/Rayival/portofolio/Portfolio/node_modules/@unhead/vue/dist/index.mjs";
function useRequestEvent(nuxtApp) {
  nuxtApp ||= useNuxtApp();
  return nuxtApp.ssrContext?.event;
}
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import("image-meta").then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return ((key) => key !== void 0 ? map[key] || key : map.missingValue);
}
function createOperationsGenerator(config = {}) {
  const formatter = config.formatter;
  const keyMap = config.keyMap && typeof config.keyMap !== "function" ? createMapper(config.keyMap) : config.keyMap;
  const map = {};
  for (const key in config.valueMap) {
    const valueKey = key;
    const value = config.valueMap[valueKey];
    map[valueKey] = typeof value === "object" ? createMapper(value) : value;
  }
  return (modifiers) => {
    const operations = [];
    for (const _key in modifiers) {
      const key = _key;
      if (typeof modifiers[key] === "undefined") {
        continue;
      }
      const value = typeof map[key] === "function" ? map[key](modifiers[key]) : modifiers[key];
      operations.push([keyMap ? keyMap(key) : key, value]);
    }
    if (formatter) {
      return operations.map((entry) => formatter(...entry)).join(config.joinWith ?? "&");
    }
    return new URLSearchParams(operations).toString();
  };
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = Number.parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input, 10);
    }
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function prerenderStaticImages(src = "", srcset = "", event) {
  if (!import.meta.prerender || !event) {
    return;
  }
  const paths = [
    src,
    ...srcset.split(", ").map((s) => s.trim().split(" ")[0].trim())
  ].filter((s) => s && s.includes("/_ipx/"));
  if (!paths.length) {
    return;
  }
  const value = paths.map((p) => encodeURIComponent(p)).join(", ");
  if ("headers" in event.res) {
    event.res.headers.append("x-nitro-prerender", value);
  } else {
    event.node.res.appendHeader("x-nitro-prerender", value);
  }
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    if (import.meta.prerender && globalOptions.event) {
      prerenderStaticImages(image.url, void 0, globalOptions.event);
    }
    return image;
  };
  const $img = ((input, modifiers, options) => getImage(input, defu({ modifiers }, options)).url);
  for (const presetName in globalOptions.presets) {
    $img[presetName] = ((source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options }));
  }
  $img.options = globalOptions;
  $img.getImage = getImage;
  $img.getMeta = ((input, options) => getMeta(ctx, input, options));
  $img.getSizes = ((input, options) => getSizes(ctx, input, options));
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  if (input && typeof input !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (!input || input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { setup, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const provider = setup();
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        const alias = ctx.options.alias[base];
        if (alias) {
          input = joinURL(alias, input.slice(base.length));
        }
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  const resolvedOptions = {
    ..._options,
    modifiers: {
      ..._options.modifiers,
      width: _options.modifiers?.width ? parseSize(_options.modifiers.width) : void 0,
      height: _options.modifiers?.height ? parseSize(_options.modifiers.height) : void 0
    }
  };
  const image = provider.getImage(input, resolvedOptions, ctx);
  image.format ||= resolvedOptions.modifiers.format || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  const preset = getPreset(ctx, opts.preset);
  const merged = defu(opts, preset);
  const width = parseSize(merged.modifiers?.width);
  const height = parseSize(merged.modifiers?.height);
  const sizes = merged.sizes ? parseSizes(merged.sizes) : {};
  const _densities = merged.densities?.trim();
  const densities = _densities ? parseDensities(_densities) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth - 1}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = key ? getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx) : void 0;
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: opts.modifiers?.width,
          _cHeight: opts.modifiers?.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant?.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = sizeVariants[i + 1]?.media || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
function defineProvider(setup) {
  let result;
  return () => {
    if (result) {
      return result;
    }
    result = typeof setup === "function" ? setup() : setup;
    return result;
  };
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b",
    position: "pos"
  },
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val.toString())
});
const ipxRuntime_36N_4515c6591_450Z7DWyWjtiRXUE1Xyz9GaY5Hn1I_45W6NUs = defineProvider({
  validateDomains: true,
  supportsAlias: true,
  getImage: (src, { modifiers, baseURL }, ctx) => {
    if (modifiers.width && modifiers.height) {
      modifiers.resize = `${modifiers.width}x${modifiers.height}`;
      delete modifiers.width;
      delete modifiers.height;
    }
    const params = operationsGenerator(modifiers) || "_";
    if (!baseURL) {
      baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
    }
    return {
      url: joinURL(baseURL, params, encodePath(src))
    };
  }
});
const imageOptions = {
  screens: { "sm": 640, "md": 768, "lg": 1024, "xl": 1280, "2xl": 1536 },
  presets: {},
  domains: [],
  alias: {},
  densities: [1, 2],
  format: ["webp", "avif"],
  quality: 80,
  /** @type {"ipx"} */
  provider: "ipx",
  providers: {
    ["ipx"]: { setup: ipxRuntime_36N_4515c6591_450Z7DWyWjtiRXUE1Xyz9GaY5Hn1I_45W6NUs, defaults: {} }
  }
};
const useImage = (event) => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    event: nuxtApp.ssrContext?.event,
    nuxt: {
      baseURL: config.app.baseURL,
      createError
    },
    runtimeConfig: config
  }));
};
const useImageProps = (props) => {
  const $img = useImage();
  const providerOptions = computed(() => ({
    provider: props.provider,
    preset: props.preset
  }));
  const normalizedAttrs = computed(() => ({
    width: parseSize(props.width),
    height: parseSize(props.height),
    crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
    nonce: props.nonce
  }));
  const imageModifiers = computed(() => {
    return {
      ...props.modifiers,
      width: props.width,
      height: props.height,
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return { providerOptions, normalizedAttrs, imageModifiers };
};
const _sfc_main$1 = {
  __name: "NuxtImg",
  __ssrInlineRender: true,
  props: {
    custom: { type: Boolean, required: false },
    placeholder: { type: [Boolean, String, Number, Array], required: false },
    placeholderClass: { type: String, required: false },
    src: { type: String, required: false },
    format: { type: String, required: false },
    quality: { type: [String, Number], required: false },
    background: { type: String, required: false },
    fit: { type: String, required: false },
    modifiers: { type: Object, required: false },
    preset: { type: String, required: false },
    provider: { type: null, required: false },
    sizes: { type: [String, Object], required: false },
    densities: { type: String, required: false },
    preload: { type: [Boolean, Object], required: false },
    width: { type: [String, Number], required: false },
    height: { type: [String, Number], required: false },
    crossorigin: { type: [String, Boolean], required: false },
    nonce: { type: String, required: false }
  },
  emits: ["load", "error"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const $img = useImage();
    const { providerOptions, normalizedAttrs, imageModifiers } = useImageProps(props);
    const sizes = computed(() => $img.getSizes(props.src, {
      ...providerOptions.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: imageModifiers.value
    }));
    const placeholderLoaded = ref(false);
    const attrs = useAttrs();
    const imgAttrs = computed(() => ({
      ...normalizedAttrs.value,
      "data-nuxt-img": "",
      ...!props.placeholder || placeholderLoaded.value ? { sizes: sizes.value.sizes, srcset: sizes.value.srcset } : {},
      ...{ onerror: "this.setAttribute('data-error', 1)" },
      ...attrs
    }));
    const placeholder = computed(() => {
      if (placeholderLoaded.value) {
        return false;
      }
      const placeholder2 = props.placeholder === "" ? [10, 10] : props.placeholder;
      if (!placeholder2) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const [width = 10, height = width, quality = 50, blur = 3] = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2] : [];
      return $img(props.src, {
        ...imageModifiers.value,
        width,
        height,
        quality,
        blur
      }, providerOptions.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, imageModifiers.value, providerOptions.value)
    );
    const src = computed(() => placeholder.value || mainSrc.value);
    if (props.preload) {
      const hasMultipleDensities = sizes.value.srcset.includes("x, ");
      const isResponsive = hasMultipleDensities || !!sizes.value.sizes;
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          crossorigin: normalizedAttrs.value.crossorigin,
          href: isResponsive ? sizes.value.src : src.value,
          ...sizes.value.sizes && { imagesizes: sizes.value.sizes },
          ...isResponsive && { imagesrcset: sizes.value.srcset },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    if (import.meta.prerender) {
      prerenderStaticImages(src.value, sizes.value.srcset, useRequestEvent());
    }
    useNuxtApp().isHydrating;
    const imgEl = useTemplateRef("imgEl");
    __expose({ imgEl });
    return (_ctx, _push, _parent, _attrs) => {
      if (!__props.custom) {
        _push(`<img${ssrRenderAttrs(mergeProps({
          ref_key: "imgEl",
          ref: imgEl,
          class: placeholder.value ? __props.placeholderClass : void 0
        }, imgAttrs.value, { src: src.value }, _attrs))}>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {
          imgAttrs: imgAttrs.value,
          isLoaded: placeholderLoaded.value,
          src: src.value
        }, null, _push, _parent);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const matchIconName = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const stringToIcon = (value, validate, allowSimpleName, provider = "") => {
  const colonSeparated = value.split(":");
  if (value.slice(0, 1) === "@") {
    if (colonSeparated.length < 2 || colonSeparated.length > 3) {
      return null;
    }
    provider = colonSeparated.shift().slice(1);
  }
  if (colonSeparated.length > 3 || !colonSeparated.length) {
    return null;
  }
  if (colonSeparated.length > 1) {
    const name2 = colonSeparated.pop();
    const prefix = colonSeparated.pop();
    const result = {
      // Allow provider without '@': "provider:prefix:name"
      provider: colonSeparated.length > 0 ? colonSeparated[0] : provider,
      prefix,
      name: name2
    };
    return validate && !validateIconName(result) ? null : result;
  }
  const name = colonSeparated[0];
  const dashSeparated = name.split("-");
  if (dashSeparated.length > 1) {
    const result = {
      provider,
      prefix: dashSeparated.shift(),
      name: dashSeparated.join("-")
    };
    return validate && !validateIconName(result) ? null : result;
  }
  if (allowSimpleName && provider === "") {
    const result = {
      provider,
      prefix: "",
      name
    };
    return validate && !validateIconName(result, allowSimpleName) ? null : result;
  }
  return null;
};
const validateIconName = (icon, allowSimpleName) => {
  if (!icon) {
    return false;
  }
  return !!// Check prefix: cannot be empty, unless allowSimpleName is enabled
  // Check name: cannot be empty
  ((allowSimpleName && icon.prefix === "" || !!icon.prefix) && !!icon.name);
};
const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});
function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}
function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}
function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  Object.keys(icons).concat(Object.keys(aliases)).forEach(resolve);
  return resolved;
}
function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function parseIconSet(data, callback) {
  const names = [];
  if (typeof data !== "object" || typeof data.icons !== "object") {
    return names;
  }
  if (data.not_found instanceof Array) {
    data.not_found.forEach((name) => {
      callback(name, null);
      names.push(name);
    });
  }
  const tree = getIconsTree(data);
  for (const name in tree) {
    const item = tree[name];
    if (item) {
      callback(name, internalGetIconData(data, name, item));
      names.push(name);
    }
  }
  return names;
}
const optionalPropertyDefaults = {
  provider: "",
  aliases: {},
  not_found: {},
  ...defaultIconDimensions
};
function checkOptionalProps(item, defaults) {
  for (const prop in defaults) {
    if (prop in item && typeof item[prop] !== typeof defaults[prop]) {
      return false;
    }
  }
  return true;
}
function quicklyValidateIconSet(obj) {
  if (typeof obj !== "object" || obj === null) {
    return null;
  }
  const data = obj;
  if (typeof data.prefix !== "string" || !obj.icons || typeof obj.icons !== "object") {
    return null;
  }
  if (!checkOptionalProps(obj, optionalPropertyDefaults)) {
    return null;
  }
  const icons = data.icons;
  for (const name in icons) {
    const icon = icons[name];
    if (
      // Name cannot be empty
      !name || // Must have body
      typeof icon.body !== "string" || // Check other props
      !checkOptionalProps(
        icon,
        defaultExtendedIconProps
      )
    ) {
      return null;
    }
  }
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  for (const name in aliases) {
    const icon = aliases[name];
    const parent = icon.parent;
    if (
      // Name cannot be empty
      !name || // Parent must be set and point to existing icon
      typeof parent !== "string" || !icons[parent] && !aliases[parent] || // Check other props
      !checkOptionalProps(
        icon,
        defaultExtendedIconProps
      )
    ) {
      return null;
    }
  }
  return data;
}
const dataStorage = /* @__PURE__ */ Object.create(null);
function newStorage(provider, prefix) {
  return {
    provider,
    prefix,
    icons: /* @__PURE__ */ Object.create(null),
    missing: /* @__PURE__ */ new Set()
  };
}
function getStorage(provider, prefix) {
  const providerStorage = dataStorage[provider] || (dataStorage[provider] = /* @__PURE__ */ Object.create(null));
  return providerStorage[prefix] || (providerStorage[prefix] = newStorage(provider, prefix));
}
function addIconSet(storage2, data) {
  if (!quicklyValidateIconSet(data)) {
    return [];
  }
  return parseIconSet(data, (name, icon) => {
    if (icon) {
      storage2.icons[name] = icon;
    } else {
      storage2.missing.add(name);
    }
  });
}
let simpleNames = false;
function allowSimpleNames(allow) {
  if (typeof allow === "boolean") {
    simpleNames = allow;
  }
  return simpleNames;
}
function getIconData(name) {
  const icon = typeof name === "string" ? stringToIcon(name, true, simpleNames) : name;
  if (icon) {
    const storage2 = getStorage(icon.provider, icon.prefix);
    const iconName = icon.name;
    return storage2.icons[iconName] || (storage2.missing.has(iconName) ? null : void 0);
  }
}
const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});
const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}
function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index2 = content.indexOf("<" + tag);
  while (index2 >= 0) {
    const start = content.indexOf(">", index2);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index2).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}
const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}
const regex = /\sid="(\S+)"/g;
const randomPrefix = "IconifyId" + Date.now().toString(16) + (Math.random() * 16777216 | 0).toString(16);
let counter = 0;
function replaceIDs(body, prefix = randomPrefix) {
  const ids = [];
  let match;
  while (match = regex.exec(body)) {
    ids.push(match[1]);
  }
  if (!ids.length) {
    return body;
  }
  const suffix = "suffix" + (Math.random() * 16777216 | Date.now()).toString(16);
  ids.forEach((id) => {
    const newID = typeof prefix === "function" ? prefix(id) : prefix + (counter++).toString();
    const escapedID = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    body = body.replace(
      // Allowed characters before id: [#;"]
      // Allowed characters after id: [)"], .[a-z]
      new RegExp('([#;"])(' + escapedID + ')([")]|\\.[a-z])', "g"),
      "$1" + newID + suffix + "$3"
    );
  });
  body = body.replace(new RegExp(suffix, "g"), "");
  return body;
}
const storage = /* @__PURE__ */ Object.create(null);
function setAPIModule(provider, item) {
  storage[provider] = item;
}
function getAPIModule(provider) {
  return storage[provider] || storage[""];
}
function createAPIConfig(source) {
  let resources;
  if (typeof source.resources === "string") {
    resources = [source.resources];
  } else {
    resources = source.resources;
    if (!(resources instanceof Array) || !resources.length) {
      return null;
    }
  }
  const result = {
    // API hosts
    resources,
    // Root path
    path: source.path || "/",
    // URL length limit
    maxURL: source.maxURL || 500,
    // Timeout before next host is used.
    rotate: source.rotate || 750,
    // Timeout before failing query.
    timeout: source.timeout || 5e3,
    // Randomise default API end point.
    random: source.random === true,
    // Start index
    index: source.index || 0,
    // Receive data after time out (used if time out kicks in first, then API module sends data anyway).
    dataAfterTimeout: source.dataAfterTimeout !== false
  };
  return result;
}
const configStorage = /* @__PURE__ */ Object.create(null);
const fallBackAPISources = [
  "https://api.simplesvg.com",
  "https://api.unisvg.com"
];
const fallBackAPI = [];
while (fallBackAPISources.length > 0) {
  if (fallBackAPISources.length === 1) {
    fallBackAPI.push(fallBackAPISources.shift());
  } else {
    if (Math.random() > 0.5) {
      fallBackAPI.push(fallBackAPISources.shift());
    } else {
      fallBackAPI.push(fallBackAPISources.pop());
    }
  }
}
configStorage[""] = createAPIConfig({
  resources: ["https://api.iconify.design"].concat(fallBackAPI)
});
function getAPIConfig(provider) {
  return configStorage[provider];
}
const detectFetch = () => {
  let callback;
  try {
    callback = fetch;
    if (typeof callback === "function") {
      return callback;
    }
  } catch (err) {
  }
};
let fetchModule = detectFetch();
function calculateMaxLength(provider, prefix) {
  const config = getAPIConfig(provider);
  if (!config) {
    return 0;
  }
  let result;
  if (!config.maxURL) {
    result = 0;
  } else {
    let maxHostLength = 0;
    config.resources.forEach((item) => {
      const host = item;
      maxHostLength = Math.max(maxHostLength, host.length);
    });
    const url = prefix + ".json?icons=";
    result = config.maxURL - maxHostLength - config.path.length - url.length;
  }
  return result;
}
function shouldAbort(status) {
  return status === 404;
}
const prepare = (provider, prefix, icons) => {
  const results = [];
  const maxLength = calculateMaxLength(provider, prefix);
  const type = "icons";
  let item = {
    type,
    provider,
    prefix,
    icons: []
  };
  let length = 0;
  icons.forEach((name, index2) => {
    length += name.length + 1;
    if (length >= maxLength && index2 > 0) {
      results.push(item);
      item = {
        type,
        provider,
        prefix,
        icons: []
      };
      length = name.length;
    }
    item.icons.push(name);
  });
  results.push(item);
  return results;
};
function getPath(provider) {
  if (typeof provider === "string") {
    const config = getAPIConfig(provider);
    if (config) {
      return config.path;
    }
  }
  return "/";
}
const send = (host, params, callback) => {
  if (!fetchModule) {
    callback("abort", 424);
    return;
  }
  let path = getPath(params.provider);
  switch (params.type) {
    case "icons": {
      const prefix = params.prefix;
      const icons = params.icons;
      const iconsList = icons.join(",");
      const urlParams = new URLSearchParams({
        icons: iconsList
      });
      path += prefix + ".json?" + urlParams.toString();
      break;
    }
    case "custom": {
      const uri = params.uri;
      path += uri.slice(0, 1) === "/" ? uri.slice(1) : uri;
      break;
    }
    default:
      callback("abort", 400);
      return;
  }
  let defaultError = 503;
  fetchModule(host + path).then((response) => {
    const status = response.status;
    if (status !== 200) {
      setTimeout(() => {
        callback(shouldAbort(status) ? "abort" : "next", status);
      });
      return;
    }
    defaultError = 501;
    return response.json();
  }).then((data) => {
    if (typeof data !== "object" || data === null) {
      setTimeout(() => {
        if (data === 404) {
          callback("abort", data);
        } else {
          callback("next", defaultError);
        }
      });
      return;
    }
    setTimeout(() => {
      callback("success", data);
    });
  }).catch(() => {
    callback("next", defaultError);
  });
};
const fetchAPIModule = {
  prepare,
  send
};
function sortIcons(icons) {
  const result = {
    loaded: [],
    missing: [],
    pending: []
  };
  const storage2 = /* @__PURE__ */ Object.create(null);
  icons.sort((a, b) => {
    if (a.provider !== b.provider) {
      return a.provider.localeCompare(b.provider);
    }
    if (a.prefix !== b.prefix) {
      return a.prefix.localeCompare(b.prefix);
    }
    return a.name.localeCompare(b.name);
  });
  let lastIcon = {
    provider: "",
    prefix: "",
    name: ""
  };
  icons.forEach((icon) => {
    if (lastIcon.name === icon.name && lastIcon.prefix === icon.prefix && lastIcon.provider === icon.provider) {
      return;
    }
    lastIcon = icon;
    const provider = icon.provider;
    const prefix = icon.prefix;
    const name = icon.name;
    const providerStorage = storage2[provider] || (storage2[provider] = /* @__PURE__ */ Object.create(null));
    const localStorage = providerStorage[prefix] || (providerStorage[prefix] = getStorage(provider, prefix));
    let list;
    if (name in localStorage.icons) {
      list = result.loaded;
    } else if (prefix === "" || localStorage.missing.has(name)) {
      list = result.missing;
    } else {
      list = result.pending;
    }
    const item = {
      provider,
      prefix,
      name
    };
    list.push(item);
  });
  return result;
}
function removeCallback(storages, id) {
  storages.forEach((storage2) => {
    const items = storage2.loaderCallbacks;
    if (items) {
      storage2.loaderCallbacks = items.filter((row) => row.id !== id);
    }
  });
}
function updateCallbacks(storage2) {
  if (!storage2.pendingCallbacksFlag) {
    storage2.pendingCallbacksFlag = true;
    setTimeout(() => {
      storage2.pendingCallbacksFlag = false;
      const items = storage2.loaderCallbacks ? storage2.loaderCallbacks.slice(0) : [];
      if (!items.length) {
        return;
      }
      let hasPending = false;
      const provider = storage2.provider;
      const prefix = storage2.prefix;
      items.forEach((item) => {
        const icons = item.icons;
        const oldLength = icons.pending.length;
        icons.pending = icons.pending.filter((icon) => {
          if (icon.prefix !== prefix) {
            return true;
          }
          const name = icon.name;
          if (storage2.icons[name]) {
            icons.loaded.push({
              provider,
              prefix,
              name
            });
          } else if (storage2.missing.has(name)) {
            icons.missing.push({
              provider,
              prefix,
              name
            });
          } else {
            hasPending = true;
            return true;
          }
          return false;
        });
        if (icons.pending.length !== oldLength) {
          if (!hasPending) {
            removeCallback([storage2], item.id);
          }
          item.callback(
            icons.loaded.slice(0),
            icons.missing.slice(0),
            icons.pending.slice(0),
            item.abort
          );
        }
      });
    });
  }
}
let idCounter = 0;
function storeCallback(callback, icons, pendingSources) {
  const id = idCounter++;
  const abort = removeCallback.bind(null, pendingSources, id);
  if (!icons.pending.length) {
    return abort;
  }
  const item = {
    id,
    icons,
    callback,
    abort
  };
  pendingSources.forEach((storage2) => {
    (storage2.loaderCallbacks || (storage2.loaderCallbacks = [])).push(item);
  });
  return abort;
}
function listToIcons(list, validate = true, simpleNames2 = false) {
  const result = [];
  list.forEach((item) => {
    const icon = typeof item === "string" ? stringToIcon(item, validate, simpleNames2) : item;
    if (icon) {
      result.push(icon);
    }
  });
  return result;
}
var defaultConfig = {
  resources: [],
  index: 0,
  timeout: 2e3,
  rotate: 750,
  random: false,
  dataAfterTimeout: false
};
function sendQuery(config, payload, query, done) {
  const resourcesCount = config.resources.length;
  const startIndex = config.random ? Math.floor(Math.random() * resourcesCount) : config.index;
  let resources;
  if (config.random) {
    let list = config.resources.slice(0);
    resources = [];
    while (list.length > 1) {
      const nextIndex = Math.floor(Math.random() * list.length);
      resources.push(list[nextIndex]);
      list = list.slice(0, nextIndex).concat(list.slice(nextIndex + 1));
    }
    resources = resources.concat(list);
  } else {
    resources = config.resources.slice(startIndex).concat(config.resources.slice(0, startIndex));
  }
  const startTime = Date.now();
  let status = "pending";
  let queriesSent = 0;
  let lastError;
  let timer = null;
  let queue = [];
  let doneCallbacks = [];
  if (typeof done === "function") {
    doneCallbacks.push(done);
  }
  function resetTimer() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  }
  function abort() {
    if (status === "pending") {
      status = "aborted";
    }
    resetTimer();
    queue.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue = [];
  }
  function subscribe(callback, overwrite) {
    if (overwrite) {
      doneCallbacks = [];
    }
    if (typeof callback === "function") {
      doneCallbacks.push(callback);
    }
  }
  function getQueryStatus() {
    return {
      startTime,
      payload,
      status,
      queriesSent,
      queriesPending: queue.length,
      subscribe,
      abort
    };
  }
  function failQuery() {
    status = "failed";
    doneCallbacks.forEach((callback) => {
      callback(void 0, lastError);
    });
  }
  function clearQueue() {
    queue.forEach((item) => {
      if (item.status === "pending") {
        item.status = "aborted";
      }
    });
    queue = [];
  }
  function moduleResponse(item, response, data) {
    const isError = response !== "success";
    queue = queue.filter((queued) => queued !== item);
    switch (status) {
      case "pending":
        break;
      case "failed":
        if (isError || !config.dataAfterTimeout) {
          return;
        }
        break;
      default:
        return;
    }
    if (response === "abort") {
      lastError = data;
      failQuery();
      return;
    }
    if (isError) {
      lastError = data;
      if (!queue.length) {
        if (!resources.length) {
          failQuery();
        } else {
          execNext();
        }
      }
      return;
    }
    resetTimer();
    clearQueue();
    if (!config.random) {
      const index2 = config.resources.indexOf(item.resource);
      if (index2 !== -1 && index2 !== config.index) {
        config.index = index2;
      }
    }
    status = "completed";
    doneCallbacks.forEach((callback) => {
      callback(data);
    });
  }
  function execNext() {
    if (status !== "pending") {
      return;
    }
    resetTimer();
    const resource = resources.shift();
    if (resource === void 0) {
      if (queue.length) {
        timer = setTimeout(() => {
          resetTimer();
          if (status === "pending") {
            clearQueue();
            failQuery();
          }
        }, config.timeout);
        return;
      }
      failQuery();
      return;
    }
    const item = {
      status: "pending",
      resource,
      callback: (status2, data) => {
        moduleResponse(item, status2, data);
      }
    };
    queue.push(item);
    queriesSent++;
    timer = setTimeout(execNext, config.rotate);
    query(resource, payload, item.callback);
  }
  setTimeout(execNext);
  return getQueryStatus;
}
function initRedundancy(cfg) {
  const config = {
    ...defaultConfig,
    ...cfg
  };
  let queries = [];
  function cleanup() {
    queries = queries.filter((item) => item().status === "pending");
  }
  function query(payload, queryCallback, doneCallback) {
    const query2 = sendQuery(
      config,
      payload,
      queryCallback,
      (data, error) => {
        cleanup();
        if (doneCallback) {
          doneCallback(data, error);
        }
      }
    );
    queries.push(query2);
    return query2;
  }
  function find(callback) {
    return queries.find((value) => {
      return callback(value);
    }) || null;
  }
  const instance = {
    query,
    find,
    setIndex: (index2) => {
      config.index = index2;
    },
    getIndex: () => config.index,
    cleanup
  };
  return instance;
}
function emptyCallback$1() {
}
const redundancyCache = /* @__PURE__ */ Object.create(null);
function getRedundancyCache(provider) {
  if (!redundancyCache[provider]) {
    const config = getAPIConfig(provider);
    if (!config) {
      return;
    }
    const redundancy = initRedundancy(config);
    const cachedReundancy = {
      config,
      redundancy
    };
    redundancyCache[provider] = cachedReundancy;
  }
  return redundancyCache[provider];
}
function sendAPIQuery(target, query, callback) {
  let redundancy;
  let send2;
  if (typeof target === "string") {
    const api = getAPIModule(target);
    if (!api) {
      callback(void 0, 424);
      return emptyCallback$1;
    }
    send2 = api.send;
    const cached = getRedundancyCache(target);
    if (cached) {
      redundancy = cached.redundancy;
    }
  } else {
    const config = createAPIConfig(target);
    if (config) {
      redundancy = initRedundancy(config);
      const moduleKey = target.resources ? target.resources[0] : "";
      const api = getAPIModule(moduleKey);
      if (api) {
        send2 = api.send;
      }
    }
  }
  if (!redundancy || !send2) {
    callback(void 0, 424);
    return emptyCallback$1;
  }
  return redundancy.query(query, send2, callback)().abort;
}
function emptyCallback() {
}
function loadedNewIcons(storage2) {
  if (!storage2.iconsLoaderFlag) {
    storage2.iconsLoaderFlag = true;
    setTimeout(() => {
      storage2.iconsLoaderFlag = false;
      updateCallbacks(storage2);
    });
  }
}
function checkIconNamesForAPI(icons) {
  const valid = [];
  const invalid = [];
  icons.forEach((name) => {
    (name.match(matchIconName) ? valid : invalid).push(name);
  });
  return {
    valid,
    invalid
  };
}
function parseLoaderResponse(storage2, icons, data) {
  function checkMissing() {
    const pending = storage2.pendingIcons;
    icons.forEach((name) => {
      if (pending) {
        pending.delete(name);
      }
      if (!storage2.icons[name]) {
        storage2.missing.add(name);
      }
    });
  }
  if (data && typeof data === "object") {
    try {
      const parsed = addIconSet(storage2, data);
      if (!parsed.length) {
        checkMissing();
        return;
      }
    } catch (err) {
      console.error(err);
    }
  }
  checkMissing();
  loadedNewIcons(storage2);
}
function parsePossiblyAsyncResponse(response, callback) {
  if (response instanceof Promise) {
    response.then((data) => {
      callback(data);
    }).catch(() => {
      callback(null);
    });
  } else {
    callback(response);
  }
}
function loadNewIcons(storage2, icons) {
  if (!storage2.iconsToLoad) {
    storage2.iconsToLoad = icons;
  } else {
    storage2.iconsToLoad = storage2.iconsToLoad.concat(icons).sort();
  }
  if (!storage2.iconsQueueFlag) {
    storage2.iconsQueueFlag = true;
    setTimeout(() => {
      storage2.iconsQueueFlag = false;
      const { provider, prefix } = storage2;
      const icons2 = storage2.iconsToLoad;
      delete storage2.iconsToLoad;
      if (!icons2 || !icons2.length) {
        return;
      }
      const customIconLoader = storage2.loadIcon;
      if (storage2.loadIcons && (icons2.length > 1 || !customIconLoader)) {
        parsePossiblyAsyncResponse(
          storage2.loadIcons(icons2, prefix, provider),
          (data) => {
            parseLoaderResponse(storage2, icons2, data);
          }
        );
        return;
      }
      if (customIconLoader) {
        icons2.forEach((name) => {
          const response = customIconLoader(name, prefix, provider);
          parsePossiblyAsyncResponse(response, (data) => {
            const iconSet = data ? {
              prefix,
              icons: {
                [name]: data
              }
            } : null;
            parseLoaderResponse(storage2, [name], iconSet);
          });
        });
        return;
      }
      const { valid, invalid } = checkIconNamesForAPI(icons2);
      if (invalid.length) {
        parseLoaderResponse(storage2, invalid, null);
      }
      if (!valid.length) {
        return;
      }
      const api = prefix.match(matchIconName) ? getAPIModule(provider) : null;
      if (!api) {
        parseLoaderResponse(storage2, valid, null);
        return;
      }
      const params = api.prepare(provider, prefix, valid);
      params.forEach((item) => {
        sendAPIQuery(provider, item, (data) => {
          parseLoaderResponse(storage2, item.icons, data);
        });
      });
    });
  }
}
const loadIcons = (icons, callback) => {
  const cleanedIcons = listToIcons(icons, true, allowSimpleNames());
  const sortedIcons = sortIcons(cleanedIcons);
  if (!sortedIcons.pending.length) {
    let callCallback = true;
    if (callback) {
      setTimeout(() => {
        if (callCallback) {
          callback(
            sortedIcons.loaded,
            sortedIcons.missing,
            sortedIcons.pending,
            emptyCallback
          );
        }
      });
    }
    return () => {
      callCallback = false;
    };
  }
  const newIcons = /* @__PURE__ */ Object.create(null);
  const sources = [];
  let lastProvider, lastPrefix;
  sortedIcons.pending.forEach((icon) => {
    const { provider, prefix } = icon;
    if (prefix === lastPrefix && provider === lastProvider) {
      return;
    }
    lastProvider = provider;
    lastPrefix = prefix;
    sources.push(getStorage(provider, prefix));
    const providerNewIcons = newIcons[provider] || (newIcons[provider] = /* @__PURE__ */ Object.create(null));
    if (!providerNewIcons[prefix]) {
      providerNewIcons[prefix] = [];
    }
  });
  sortedIcons.pending.forEach((icon) => {
    const { provider, prefix, name } = icon;
    const storage2 = getStorage(provider, prefix);
    const pendingQueue = storage2.pendingIcons || (storage2.pendingIcons = /* @__PURE__ */ new Set());
    if (!pendingQueue.has(name)) {
      pendingQueue.add(name);
      newIcons[provider][prefix].push(name);
    }
  });
  sources.forEach((storage2) => {
    const list = newIcons[storage2.provider][storage2.prefix];
    if (list.length) {
      loadNewIcons(storage2, list);
    }
  });
  return callback ? storeCallback(callback, sortedIcons, sources) : emptyCallback;
};
function mergeCustomisations(defaults, item) {
  const result = {
    ...defaults
  };
  for (const key in item) {
    const value = item[key];
    const valueType = typeof value;
    if (key in defaultIconSizeCustomisations) {
      if (value === null || value && (valueType === "string" || valueType === "number")) {
        result[key] = value;
      }
    } else if (valueType === typeof result[key]) {
      result[key] = key === "rotate" ? value % 4 : value;
    }
  }
  return result;
}
const separator = /[\s,]+/;
function flipFromString(custom, flip) {
  flip.split(separator).forEach((str) => {
    const value = str.trim();
    switch (value) {
      case "horizontal":
        custom.hFlip = true;
        break;
      case "vertical":
        custom.vFlip = true;
        break;
    }
  });
}
function rotateFromString(value, defaultValue = 0) {
  const units = value.replace(/^-?[0-9.]*/, "");
  function cleanup(value2) {
    while (value2 < 0) {
      value2 += 4;
    }
    return value2 % 4;
  }
  if (units === "") {
    const num = parseInt(value);
    return isNaN(num) ? 0 : cleanup(num);
  } else if (units !== value) {
    let split = 0;
    switch (units) {
      case "%":
        split = 25;
        break;
      case "deg":
        split = 90;
    }
    if (split) {
      let num = parseFloat(value.slice(0, value.length - units.length));
      if (isNaN(num)) {
        return 0;
      }
      num = num / split;
      return num % 1 === 0 ? cleanup(num) : 0;
    }
  }
  return defaultValue;
}
function iconToHTML(body, attributes) {
  let renderAttribsHTML = body.indexOf("xlink:") === -1 ? "" : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
  for (const attr in attributes) {
    renderAttribsHTML += " " + attr + '="' + attributes[attr] + '"';
  }
  return '<svg xmlns="http://www.w3.org/2000/svg"' + renderAttribsHTML + ">" + body + "</svg>";
}
function encodeSVGforURL(svg) {
  return svg.replace(/"/g, "'").replace(/%/g, "%25").replace(/#/g, "%23").replace(/</g, "%3C").replace(/>/g, "%3E").replace(/\s+/g, " ");
}
function svgToData(svg) {
  return "data:image/svg+xml," + encodeSVGforURL(svg);
}
function svgToURL(svg) {
  return 'url("' + svgToData(svg) + '")';
}
const defaultExtendedIconCustomisations = {
  ...defaultIconCustomisations,
  inline: false
};
const svgDefaults = {
  "xmlns": "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": true,
  "role": "img"
};
const commonProps = {
  display: "inline-block"
};
const monotoneProps = {
  backgroundColor: "currentColor"
};
const coloredProps = {
  backgroundColor: "transparent"
};
const propsToAdd = {
  Image: "var(--svg)",
  Repeat: "no-repeat",
  Size: "100% 100%"
};
const propsToAddTo = {
  webkitMask: monotoneProps,
  mask: monotoneProps,
  background: coloredProps
};
for (const prefix in propsToAddTo) {
  const list = propsToAddTo[prefix];
  for (const prop in propsToAdd) {
    list[prefix + prop] = propsToAdd[prop];
  }
}
const customisationAliases = {};
["horizontal", "vertical"].forEach((prefix) => {
  const attr = prefix.slice(0, 1) + "Flip";
  customisationAliases[prefix + "-flip"] = attr;
  customisationAliases[prefix.slice(0, 1) + "-flip"] = attr;
  customisationAliases[prefix + "Flip"] = attr;
});
function fixSize(value) {
  return value + (value.match(/^[-0-9.]+$/) ? "px" : "");
}
const render = (icon, props) => {
  const customisations = mergeCustomisations(defaultExtendedIconCustomisations, props);
  const componentProps = { ...svgDefaults };
  const mode = props.mode || "svg";
  const style = {};
  const propsStyle = props.style;
  const customStyle = typeof propsStyle === "object" && !(propsStyle instanceof Array) ? propsStyle : {};
  for (let key in props) {
    const value = props[key];
    if (value === void 0) {
      continue;
    }
    switch (key) {
      // Properties to ignore
      case "icon":
      case "style":
      case "onLoad":
      case "mode":
      case "ssr":
        break;
      // Boolean attributes
      case "inline":
      case "hFlip":
      case "vFlip":
        customisations[key] = value === true || value === "true" || value === 1;
        break;
      // Flip as string: 'horizontal,vertical'
      case "flip":
        if (typeof value === "string") {
          flipFromString(customisations, value);
        }
        break;
      // Color: override style
      case "color":
        style.color = value;
        break;
      // Rotation as string
      case "rotate":
        if (typeof value === "string") {
          customisations[key] = rotateFromString(value);
        } else if (typeof value === "number") {
          customisations[key] = value;
        }
        break;
      // Remove aria-hidden
      case "ariaHidden":
      case "aria-hidden":
        if (value !== true && value !== "true") {
          delete componentProps["aria-hidden"];
        }
        break;
      default: {
        const alias = customisationAliases[key];
        if (alias) {
          if (value === true || value === "true" || value === 1) {
            customisations[alias] = true;
          }
        } else if (defaultExtendedIconCustomisations[key] === void 0) {
          componentProps[key] = value;
        }
      }
    }
  }
  const item = iconToSVG(icon, customisations);
  const renderAttribs = item.attributes;
  if (customisations.inline) {
    style.verticalAlign = "-0.125em";
  }
  if (mode === "svg") {
    componentProps.style = {
      ...style,
      ...customStyle
    };
    Object.assign(componentProps, renderAttribs);
    let localCounter = 0;
    let id = props.id;
    if (typeof id === "string") {
      id = id.replace(/-/g, "_");
    }
    componentProps["innerHTML"] = replaceIDs(item.body, id ? () => id + "ID" + localCounter++ : "iconifyVue");
    return h("svg", componentProps);
  }
  const { body, width, height } = icon;
  const useMask = mode === "mask" || (mode === "bg" ? false : body.indexOf("currentColor") !== -1);
  const html = iconToHTML(body, {
    ...renderAttribs,
    width: width + "",
    height: height + ""
  });
  componentProps.style = {
    ...style,
    "--svg": svgToURL(html),
    "width": fixSize(renderAttribs.width),
    "height": fixSize(renderAttribs.height),
    ...commonProps,
    ...useMask ? monotoneProps : coloredProps,
    ...customStyle
  };
  return h("span", componentProps);
};
allowSimpleNames(true);
setAPIModule("", fetchAPIModule);
const emptyIcon = {
  ...defaultIconProps,
  body: ""
};
const Icon = defineComponent((props, { emit }) => {
  const loader = ref(null);
  function abortLoading() {
    if (loader.value) {
      loader.value.abort?.();
      loader.value = null;
    }
  }
  const rendering = ref(!!props.ssr);
  const lastRenderedIconName = ref("");
  const iconData = shallowRef(null);
  function getIcon2() {
    const icon = props.icon;
    if (typeof icon === "object" && icon !== null && typeof icon.body === "string") {
      lastRenderedIconName.value = "";
      return {
        data: icon
      };
    }
    let iconName;
    if (typeof icon !== "string" || (iconName = stringToIcon(icon, false, true)) === null) {
      return null;
    }
    let data = getIconData(iconName);
    if (!data) {
      const oldState = loader.value;
      if (!oldState || oldState.name !== icon) {
        if (data === null) {
          loader.value = {
            name: icon
          };
        } else {
          loader.value = {
            name: icon,
            abort: loadIcons([iconName], updateIconData)
          };
        }
      }
      return null;
    }
    abortLoading();
    if (lastRenderedIconName.value !== icon) {
      lastRenderedIconName.value = icon;
      nextTick(() => {
        emit("load", icon);
      });
    }
    const customise = props.customise;
    if (customise) {
      data = Object.assign({}, data);
      const customised = customise(data.body, iconName.name, iconName.prefix, iconName.provider);
      if (typeof customised === "string") {
        data.body = customised;
      }
    }
    const classes = ["iconify"];
    if (iconName.prefix !== "") {
      classes.push("iconify--" + iconName.prefix);
    }
    if (iconName.provider !== "") {
      classes.push("iconify--" + iconName.provider);
    }
    return { data, classes };
  }
  function updateIconData() {
    const icon = getIcon2();
    if (!icon) {
      iconData.value = null;
    } else if (icon.data !== iconData.value?.data) {
      iconData.value = icon;
    }
  }
  if (rendering.value) {
    updateIconData();
  }
  watch(() => props.icon, updateIconData);
  return () => {
    const icon = iconData.value;
    if (!icon) {
      return render(emptyIcon, props);
    }
    let newProps = props;
    if (icon.classes) {
      newProps = {
        ...props,
        class: icon.classes.join(" ")
      };
    }
    return render({
      ...defaultIconProps,
      ...icon.data
    }, newProps);
  };
}, {
  props: [
    // Icon and render mode
    "icon",
    "mode",
    "ssr",
    // Layout and style
    "width",
    "height",
    "style",
    "color",
    "inline",
    // Transformations
    "rotate",
    "hFlip",
    "horizontalFlip",
    "vFlip",
    "verticalFlip",
    "flip",
    // Misc
    "id",
    "ariaHidden",
    "customise",
    "title"
  ],
  emits: ["load"]
});
const fotoProfil = "/ival1.jpg";
const avaValdes = "/ava-valdes.png";
const tibImage = "/tib.png";
const Mindtrack = "/mindtrack.png";
const valdexImage = "/valdex.png";
const robloxImage = "/roblox.png";
const perpusImage = "/Perpus.png";
const profilImage = "/profil.png";
const agroImage = "/agro.png";
const sdnLogo = "/schools/sdn.png";
const smpnLogo = "/schools/smpn.png";
const smkn4Logo = "/schools/smkn4.png";
const unperLogo = "/schools/unper.png";
const dicodingCert = "/certificates/dicoding-ai.png";
const bnspCert = "/certificates/bnsp-webdev.png";
const geminiCert = "/certificates/gemini.jpg";
const webinarGFECert = "/certificates/webinarGFE.jpg";
const overlay1 = "/content/overlay1.jpg";
const overlay2 = "/content/overlay2.jpg";
const overlay3 = "/content/overlay3.jpg";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isAvaToggled = ref(false);
    useHead({
      title: "VALDES — Rayival Dede Saputra | Junior Web Developer",
      meta: [
        { name: "description", content: "Rayival Dede Saputra (VALDES) — Junior Web Developer & Tech Enthusiast specializing in Vue, Nuxt, Laravel, and creative development. Open for collaboration." },
        { property: "og:title", content: "VALDES — Rayival Dede Saputra | Junior Web Developer" },
        { property: "og:description", content: "Portfolio of Rayival Dede Saputra — Web Developer, Tech Enthusiast, and Content Creator." },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://rayival.vercel.app" },
        { property: "og:image", content: "https://rayival.vercel.app/og-image.jpg" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "VALDES — Rayival Dede Saputra | Junior Web Developer" },
        { name: "twitter:description", content: "Junior Web Developer & Tech Enthusiast building modern digital experiences." },
        { name: "twitter:image", content: "https://rayival.vercel.app/og-image.png" }
      ],
      script: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Rayival Dede Saputra",
          "alternateName": "VALDES",
          "url": "https://rayival.vercel.app",
          "image": "https://rayival.vercel.app/og-image.png",
          "jobTitle": ["Junior Web Developer", "Tech Enthusiast", "Content Creator"],
          "description": "Mahasiswa Teknik Informatika, spesialis Vue/Nuxt/Laravel dan Roblox Developer.",
          "affiliation": { "@type": "Organization", "name": "Universitas Perjuangan Tasikmalaya" },
          "alumniOf": [
            { "@type": "CollegeOrUniversity", "name": "Universitas Perjuangan Tasikmalaya" },
            { "@type": "School", "name": "SMKN 4 Tasikmalaya" }
          ],
          "knowsAbout": ["Vue.js", "Nuxt", "Laravel", "Tailwind CSS", "Roblox Studio", "AI", "JavaScript", "Figma"],
          "sameAs": [
            "https://github.com/Rayival",
            "https://www.linkedin.com/in/rayival-dede-saputra-3a06892b3/",
            "https://instagram.com/rayivaldedesaputra_",
            "https://tiktok.com/@ryvlzz",
            "https://youtube.com/@rayivaldedesaputra"
          ]
        })
      }]
    });
    ref(null);
    ref(null);
    ref(null);
    const activeCert = ref(null);
    ref([]);
    const heroStats = ref([
      { label: "Projects", target: 7, displayed: 0, suffix: "+" },
      { label: "Yrs Learning", target: 4, displayed: 0, suffix: "+" },
      { label: "Certifications", target: 4, displayed: 0, suffix: "" }
    ]);
    const heroSkills = [
      { name: "Vue.js", icon: "logos:vue" },
      { name: "Nuxt", icon: "logos:nuxt-icon" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "Laravel", icon: "logos:laravel" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "Figma", icon: "logos:figma" },
      { name: "Roblox", icon: "simple-icons:roblox" }
    ];
    const techStack = ["Vue.js", "Nuxt", "JavaScript", "Laravel", "Tailwind CSS", "Git", "Figma", "Roblox Studio"];
    const roles = [
      { icon: "⚡", name: "Web Developer", desc: "Vue · Nuxt · Laravel · Tailwind" },
      { icon: "🎮", name: "Roblox Developer", desc: "Gameplay systems · Level design · Lua" },
      { icon: "📡", name: "Content Creator", desc: "Tech · Dev journey · YouTube · TikTok" }
    ];
    const education = [
      { level: "University", school: "Universitas Perjuangan Tasikmalaya", major: "Informatics Engineering", year: "2025–Now", logo: unperLogo },
      { level: "SMK", school: "SMKN 4 Tasikmalaya", major: "Software & Game Dev", year: "2022–2025", logo: smkn4Logo },
      { level: "SMP", school: "SMPN 11 Tasikmalaya", major: null, year: "2019–2022", logo: smpnLogo },
      { level: "SD", school: "SDN Pahlawan Tasikmalaya", major: null, year: "2013–2019", logo: sdnLogo }
    ];
    const projects = [
      {
        title: "MindTrack AI",
        titleHtml: '<em style="font-style:normal">MindTrack</em> AI',
        description: "An emotionally intelligent AI platform to help students overcome burnout, overthinking, and emotional exhaustion. Built for #JuaraVibeCoding Indonesia with Gemini AI & Google Cloud Run.",
        link: "https://mindtrackai.vercel.app/",
        stack: ["React", "TailwindCSS", "Gemini AI", "Google Cloud"],
        badge: "AI · Featured",
        badgeClass: "badge--teal",
        image: Mindtrack
      },
      {
        title: "VΛLDEX",
        titleHtml: 'VΛ<em style="font-style:normal">LDEX</em>',
        description: "A modern digital photo booth system designed for real-time capture, smart composition, and instant export. Turning moments into art.",
        link: "https://valdx.vercel.app/",
        stack: ["Vue", "Tailwind", "Vercel"],
        badge: "UI · System",
        badgeClass: "badge--violet",
        image: valdexImage
      },
      {
        title: "V4TAS",
        description: "A Roblox simulation of SMKN 4 Tasikmalaya — bringing a real school into an interactive virtual world.",
        link: "https://www.roblox.com/games/139533647854536/V4TAS",
        stack: ["Roblox Studio", "Lua", "Game Design"],
        badge: "Game · Roblox",
        badgeClass: "badge--rose",
        image: robloxImage
      },
      {
        title: "TI-B",
        description: "Digital ecosystem of Informatics Engineering Class B 2025 — student directory, class structure, and visual memories.",
        link: "https://ti-b.vercel.app/",
        stack: ["Vue", "Tailwind", "Vercel"],
        badge: "Community",
        badgeClass: "badge--violet",
        image: tibImage
      },
      {
        title: "Perpus Digital",
        description: "Vue-based digital library application for managing and browsing books.",
        link: "https://perpus-digital-valzzz.vercel.app/",
        stack: ["Vue", "Bootstrap"],
        badge: "Web App",
        badgeClass: "badge--gray",
        image: perpusImage
      },
      {
        title: "AgroKulit",
        description: "Company profile website built with teamwork — modern, clean, professional brand presence.",
        link: "https://agro-kulit.vercel.app/",
        stack: ["Vue", "Teamwork"],
        badge: "Team Project",
        badgeClass: "badge--gold",
        image: agroImage
      },
      {
        title: "SMKN 4 Profile",
        description: "School profile website showcasing programs, facilities, and achievements of SMKN 4 Tasikmalaya.",
        link: "https://ukk-2025-ival.vercel.app/",
        stack: ["Vue", "Bootstrap"],
        badge: "Web App",
        badgeClass: "badge--gray",
        image: profilImage
      }
    ];
    const creativeContents = [
      {
        platform: "TikTok",
        icon: "ic:baseline-tiktok",
        tag: "@ryvlzz",
        title: "Algoritma & Struktur Data",
        description: "Edukasi konsep penting pemrograman: Stack, Queue, LIFO, FIFO, Binary Tree, hingga kompleksitas logika dasar.",
        handle: "@ryvlzz",
        link: "https://www.tiktok.com/@ryvlzz/video/7666803352516168978",
        image: overlay1
      },
      {
        platform: "TikTok",
        icon: "ic:baseline-tiktok",
        tag: "@ryvlzz",
        title: "Google Student Ambassador Showcase",
        description: "Prototype & eksperimen interaktif menggunakan Gemini Canvas saat proses pendaftaran program Google Student Ambassador.",
        handle: "@ryvlzz",
        link: "https://www.tiktok.com/@ryvlzz/video/7680379403720871175",
        image: overlay2
      },
      {
        platform: "TikTok",
        icon: "ic:baseline-tiktok",
        tag: "@ryvlzz",
        title: "Perspective: Mindset Belajar Coding",
        description: "Pengalaman lulusan PPLG SMK ke Informatika UNPER. Menjawab kebingungan mahasiswa: Coding bukan soal hafalan, tapi melatih problem solving & logika.",
        handle: "@ryvlzz",
        link: "https://www.tiktok.com/@ryvlzz/video/7633400034188365063",
        image: overlay3
      }
    ];
    const certifications = [
      {
        icon: "🤖",
        type: "AI Certification",
        typeClass: "text-emerald-400",
        accentClass: "bg-emerald-400",
        title: "Gemini Certified Student",
        issuer: "Google for Education",
        year: "2026",
        description: "Certified in foundational AI knowledge and practical usage of Google AI tools.",
        image: geminiCert,
        link: "https://edu.google.accredible.com/a3b0eb86-f648-4fde-8a39-6058d3551431"
      },
      {
        icon: "🏆",
        type: "National Certification",
        typeClass: "text-amber-400",
        accentClass: "bg-amber-400",
        title: "Junior Web Developer",
        issuer: "BNSP – LSP Media Informatika",
        year: "2025",
        description: "National professional certification validating competence in Programming and Software Development.",
        image: bnspCert,
        link: "https://drive.google.com/file/d/1CdI4l_mwP1xUq4DijvA5pKhK-q44rEEO/view"
      },
      {
        icon: "💡",
        type: "Online Certification",
        typeClass: "text-sky-400",
        accentClass: "bg-sky-400",
        title: "Belajar Dasar AI",
        issuer: "Dicoding Indonesia",
        year: "2025",
        description: "Fundamental understanding of Artificial Intelligence concepts, use cases, and basic implementation.",
        image: dicodingCert,
        link: "https://www.dicoding.com/certificates/N9ZO2OK1RPG5"
      },
      {
        icon: "📡",
        type: "Webinar Certification",
        typeClass: "text-rose-400",
        accentClass: "bg-rose-400",
        title: "Google for Education Webinar",
        issuer: "Google for Education",
        year: "2026",
        description: "Participant in official Google for Education webinar on digital transformation and educational tools.",
        image: webinarGFECert,
        link: "#"
      }
    ];
    const certMeanings = [
      { icon: "⚙️", title: "Technical Foundation", desc: "Strong fundamentals in programming, software development, and AI concepts." },
      { icon: "🛡️", title: "Industry Standards", desc: "Certified against national competency standards by BNSP." },
      { icon: "🚀", title: "Professional Readiness", desc: "Ready to collaborate, learn fast, and adapt in professional teams." }
    ];
    const socials = [
      { label: "GitHub", handle: "Rayival", href: "https://github.com/Rayival", icon: "mdi:github" },
      { label: "LinkedIn", handle: "rayival-dede-saputra", href: "https://linkedin.com/in/rayival-dede-saputra-3a06892b3/", icon: "mdi:linkedin" },
      { label: "Instagram", handle: "@rayivaldedesaputra_", href: "https://instagram.com/rayivaldedesaputra_", icon: "mdi:instagram" },
      { label: "TikTok", handle: "@ryvlzz", href: "https://tiktok.com/@ryvlzz", icon: "ic:baseline-tiktok" },
      { label: "YouTube", handle: "Tech & Dev content", href: "https://youtube.com/@rayivaldedesaputra", icon: "mdi:youtube" },
      { label: "Email", handle: "dederayival19@gmail.com", href: "mailto:dederayival19@gmail.com", icon: "mdi:email-outline" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      _push(`<!--[-->`);
      ssrRenderTeleport(_push, (_push2) => {
        if (activeCert.value) {
          _push2(`<div class="fixed inset-0 z-[200] flex items-center justify-center p-4" data-v-abceed73><div class="absolute inset-0 bg-black/80 backdrop-blur-sm" data-v-abceed73></div><div class="relative bg-zinc-900 border border-zinc-800 max-w-2xl w-full rounded-lg overflow-hidden shadow-2xl z-10" data-v-abceed73><div class="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950" data-v-abceed73><div class="flex items-center gap-3" data-v-abceed73><span class="font-medium text-zinc-100 text-sm tracking-wide" data-v-abceed73>${ssrInterpolate(activeCert.value.title)}</span><span class="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/50 font-mono tracking-widest uppercase" data-v-abceed73> ✔ VERIFIED </span></div><button class="w-7 h-7 flex items-center justify-center rounded border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-700 transition-all text-xs font-mono" data-v-abceed73> ✕ </button></div><div class="p-6 bg-zinc-900" data-v-abceed73>`);
          _push2(ssrRenderComponent(_component_NuxtImg, {
            src: activeCert.value.image,
            alt: "Certificate Preview",
            format: "webp",
            quality: "80",
            class: "w-full rounded border border-zinc-800 mb-6 object-contain max-h-72 bg-zinc-950"
          }, null, _parent));
          _push2(`<div class="flex justify-between items-center" data-v-abceed73><p class="font-mono text-xs text-zinc-400 tracking-wider" data-v-abceed73>${ssrInterpolate(activeCert.value.issuer)} · ${ssrInterpolate(activeCert.value.year)}</p><a${ssrRenderAttr("href", activeCert.value.link)} target="_blank" rel="noopener" class="inline-flex items-center gap-2 px-4 py-2 rounded bg-zinc-100 hover:bg-white text-zinc-950 text-xs font-semibold tracking-wider font-mono uppercase transition-all" data-v-abceed73> OPEN ORIGINAL `);
          _push2(ssrRenderComponent(unref(ArrowTopRightOnSquareIcon), { class: "w-3.5 h-3.5" }, null, _parent));
          _push2(`</a></div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`<div class="cursor-dot hidden lg:block" aria-hidden="true" data-v-abceed73></div><div class="cursor-ring hidden lg:block" aria-hidden="true" data-v-abceed73></div><div class="bg-zinc-950 text-zinc-200 font-sans selection:bg-zinc-800 selection:text-zinc-100 overflow-x-hidden min-h-screen" data-v-abceed73><section id="home" class="relative min-h-[100dvh] flex items-center pt-24 sm:pt-28 pb-16 border-b border-zinc-800/80" data-v-abceed73><div class="max-w-7xl mx-auto px-6 w-full" data-v-abceed73><div class="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center" data-v-abceed73><div class="lg:col-span-7 flex flex-col items-start" data-v-abceed73><div class="valdes-reveal inline-flex items-center gap-2.5 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 mb-6" data-v-abceed73><span class="relative flex h-2 w-2" data-v-abceed73><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" data-v-abceed73></span><span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" data-v-abceed73></span></span><span class="font-mono text-[11px] tracking-wider text-zinc-300 uppercase" data-v-abceed73>// STATUS: READY TO WORK</span></div><h1 class="valdes-reveal valdes-delay-1 font-display font-semibold text-zinc-100 tracking-tight leading-none mb-3 text-[36px] xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl" data-v-abceed73> Rayival Dede Saputra </h1><div class="valdes-reveal valdes-delay-1 inline-block mb-4" data-v-abceed73><span class="font-mono text-xs uppercase tracking-wider text-zinc-400 px-2 py-0.5 bg-zinc-900 border border-zinc-800 rounded" data-v-abceed73> — also known as Valdes — </span></div><p class="valdes-reveal valdes-delay-2 font-mono text-xs tracking-wider uppercase text-zinc-400 mb-6" data-v-abceed73> WEB DEVELOPER · ROBLOX DEVELOPER · CONTENT CREATOR </p><p class="valdes-reveal valdes-delay-3 text-base text-zinc-400 max-w-xl leading-relaxed mb-8" data-v-abceed73> Blending technology and creativity to build digital experiences that are not only functional, but meaningful — from Tasikmalaya to the world. </p><div class="valdes-reveal valdes-delay-4 flex flex-wrap items-center gap-4 mb-10" data-v-abceed73><a href="#projects" class="px-6 py-3 bg-zinc-100 hover:bg-white text-zinc-950 font-mono text-xs uppercase tracking-wider rounded font-semibold transition-all flex items-center gap-2" data-v-abceed73><span data-v-abceed73>VIEW PROJECTS</span><span class="text-xs" data-v-abceed73>↓</span></a><a href="#content" class="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-800 font-mono text-xs uppercase tracking-wider rounded font-semibold transition-all flex items-center gap-2" data-v-abceed73><span data-v-abceed73>CREATIVE CONTENT</span><span class="text-xs" data-v-abceed73>↗</span></a></div><div class="valdes-reveal valdes-delay-4 grid grid-cols-3 gap-3 w-full max-w-md" data-v-abceed73><!--[-->`);
      ssrRenderList(heroStats.value, (stat) => {
        _push(`<div class="p-3.5 bg-zinc-900/60 border border-zinc-800/80 rounded flex flex-col" data-v-abceed73><span class="font-display text-3xl font-semibold text-zinc-100 tracking-tight" data-v-abceed73>${ssrInterpolate(stat.displayed)}`);
        if (stat.suffix) {
          _push(`<span class="text-zinc-400" data-v-abceed73>${ssrInterpolate(stat.suffix)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span><span class="font-mono text-[10px] uppercase text-zinc-400 tracking-wider mt-1" data-v-abceed73>${ssrInterpolate(stat.label)}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="lg:col-span-5 valdes-reveal valdes-delay-2 flex justify-center lg:justify-end" data-v-abceed73><div class="relative w-full max-w-sm" data-v-abceed73><div class="relative p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg shadow-2xl overflow-hidden group cursor-pointer select-none" data-v-abceed73><div class="flex items-center justify-between px-3 py-2 border-b border-zinc-800/80 mb-2.5 bg-zinc-900/60 rounded-t font-mono text-[11px]" data-v-abceed73><div class="flex items-center gap-2" data-v-abceed73><span class="inline-block w-2 h-2 rounded-full bg-zinc-600" data-v-abceed73></span><span class="text-zinc-400" data-v-abceed73>[ SPEC_ID // 0x4892 ]</span></div><span class="text-zinc-300 font-semibold" data-v-abceed73>VALDES_AVATAR</span></div><div class="relative aspect-[3/4] w-full overflow-hidden rounded bg-zinc-900" data-v-abceed73>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: fotoProfil,
        alt: "Rayival Dede Saputra",
        format: "webp",
        quality: "80",
        class: ["absolute inset-0 w-full h-full object-cover object-center filter grayscale contrast-125 transition-all duration-700 ease-out", {
          "opacity-0 scale-105": isAvaToggled.value,
          "lg:group-hover:opacity-0 lg:group-hover:scale-105": !isAvaToggled.value
        }]
      }, null, _parent));
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: avaValdes,
        alt: "Valdes Avatar",
        format: "webp",
        quality: "80",
        class: ["absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out opacity-0 scale-95", {
          "opacity-100 scale-100": isAvaToggled.value,
          "lg:group-hover:opacity-100 lg:group-hover:scale-100": !isAvaToggled.value
        }]
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent pointer-events-none" data-v-abceed73></div><div class="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none font-mono text-[10px]" data-v-abceed73><div class="px-2 py-1 bg-zinc-950/90 border border-zinc-800 rounded text-zinc-200" data-v-abceed73> [ ${ssrInterpolate(isAvaToggled.value ? "AVATAR_MODE" : "REAL_PROFILE")} ] </div><div class="px-2 py-1 bg-emerald-950/80 border border-emerald-800/60 rounded text-emerald-400 font-semibold uppercase" data-v-abceed73> TAP TO TOGGLE </div></div></div><div class="mt-2.5 pt-2 border-t border-zinc-800/60 flex items-center justify-between text-zinc-400 font-mono text-[10px]" data-v-abceed73><span data-v-abceed73>RES: 1792x2390 // AR 0.75</span><span data-v-abceed73>ORIGIN: TASIKMALAYA, ID</span></div></div></div></div></div></div></section><div class="w-full bg-zinc-950 border-b border-zinc-800/80 py-3.5" data-v-abceed73><div class="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4" data-v-abceed73><span class="font-mono text-xs uppercase text-zinc-400 tracking-wider" data-v-abceed73>// CORE_TOOLCHAIN:</span><div class="flex flex-wrap items-center gap-2" data-v-abceed73><!--[-->`);
      ssrRenderList(heroSkills, (skill) => {
        _push(`<div class="flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded font-mono text-xs text-zinc-300 hover:border-zinc-700 transition-colors" data-v-abceed73>`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: skill.icon,
          class: "text-sm text-zinc-400"
        }, null, _parent));
        _push(`<span data-v-abceed73>${ssrInterpolate(skill.name)}</span></div>`);
      });
      _push(`<!--]--></div></div></div><section id="about" class="scroll-mt-20 py-12 sm:py-20 border-b border-zinc-800/80" data-v-abceed73><div class="max-w-7xl mx-auto px-4 sm:px-6" data-v-abceed73><div class="valdes-reveal flex flex-col sm:flex-row sm:items-end justify-between gap-2 sm:gap-4 pb-4 border-b border-zinc-800 mb-8 sm:mb-12" data-v-abceed73><div data-v-abceed73><span class="font-mono text-xs text-zinc-400 uppercase tracking-widest" data-v-abceed73>// 01 // ABOUT ME</span><h2 class="font-display text-2xl sm:text-4xl font-semibold text-zinc-100 tracking-tight mt-1" data-v-abceed73> Disciplined systems &amp; clean logic. </h2></div><span class="font-mono text-xs text-zinc-400 uppercase" data-v-abceed73>INDEX_ARCH // 01</span></div><div class="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start" data-v-abceed73><div class="lg:col-span-7 flex flex-col gap-6" data-v-abceed73><div class="valdes-reveal p-4 sm:p-6 bg-zinc-900/60 border border-zinc-800 rounded-lg" data-v-abceed73><h3 class="font-display text-base sm:text-xl text-zinc-100 font-medium mb-2.5 sm:mb-3" data-v-abceed73>Undergraduate Systems Thinker</h3><p class="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4" data-v-abceed73> An Informatics Engineering student at Universitas Perjuangan Tasikmalaya, having grounded technical foundations at SMKN 4 Tasikmalaya (PPLG). I view software engineering as spatial problem-solving — delivering clean user interfaces, reliable server components, and immersive virtual environments. </p><div class="flex flex-wrap gap-1.5 sm:gap-2 pt-1" data-v-abceed73><!--[-->`);
      ssrRenderList(techStack, (tech) => {
        _push(`<span class="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-zinc-950 border border-zinc-800 rounded font-mono text-[10px] sm:text-[11px] text-zinc-400" data-v-abceed73>${ssrInterpolate(tech)}</span>`);
      });
      _push(`<!--]--></div></div><div class="grid grid-cols-1 gap-3" data-v-abceed73><!--[-->`);
      ssrRenderList(roles, (role) => {
        _push(`<div class="valdes-reveal p-3.5 sm:p-4 bg-zinc-900/40 border border-zinc-800/80 rounded-lg hover:border-zinc-700 transition-all flex items-start gap-3 sm:gap-4" data-v-abceed73><div class="w-9 h-9 sm:w-10 sm:h-10 rounded bg-zinc-950 border border-zinc-800 flex items-center justify-center text-base sm:text-lg shrink-0" data-v-abceed73>${ssrInterpolate(role.icon)}</div><div data-v-abceed73><h4 class="font-display text-xs sm:text-base font-semibold text-zinc-100" data-v-abceed73>${ssrInterpolate(role.name)}</h4><p class="font-mono text-[10px] sm:text-xs text-zinc-400 mt-0.5" data-v-abceed73>${ssrInterpolate(role.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></div><div class="lg:col-span-5 w-full" data-v-abceed73><div class="valdes-reveal p-4 sm:p-6 bg-zinc-900/60 border border-zinc-800 rounded-lg" data-v-abceed73><div class="flex items-center justify-between pb-3 sm:pb-4 border-b border-zinc-800 mb-4 sm:mb-6" data-v-abceed73><span class="font-mono text-[11px] sm:text-xs text-zinc-400 uppercase tracking-wider" data-v-abceed73>// EDUCATION JOURNEY</span><span class="font-mono text-[10px] sm:text-xs text-zinc-400" data-v-abceed73>2013 — PRESENT</span></div><div class="flex flex-col gap-2.5 sm:gap-4" data-v-abceed73><!--[-->`);
      ssrRenderList(education, (edu) => {
        _push(`<div class="p-2.5 sm:p-3 bg-zinc-950 border border-zinc-800/80 rounded-lg flex items-center gap-3 sm:gap-4 hover:border-zinc-700 transition-colors" data-v-abceed73><div class="w-8 h-8 sm:w-10 sm:h-10 rounded bg-zinc-900 border border-zinc-800 p-1 flex items-center justify-center shrink-0" data-v-abceed73>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: edu.logo,
          alt: edu.school,
          width: "40",
          height: "40",
          format: "webp",
          loading: "lazy",
          class: "w-full h-full object-contain"
        }, null, _parent));
        _push(`</div><div class="flex-1 min-w-0" data-v-abceed73><div class="flex items-center justify-between gap-1 sm:gap-2" data-v-abceed73><h4 class="font-display text-xs sm:text-sm text-zinc-100 font-medium truncate" data-v-abceed73>${ssrInterpolate(edu.school)}</h4><span class="font-mono text-[9px] sm:text-[10px] text-zinc-400 shrink-0" data-v-abceed73>${ssrInterpolate(edu.year)}</span></div><div class="flex items-center gap-1.5 mt-0.5" data-v-abceed73>`);
        if (edu.major) {
          _push(`<span class="font-mono text-[9px] sm:text-[10px] text-zinc-400 truncate" data-v-abceed73>${ssrInterpolate(edu.major)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="font-mono text-[8px] sm:text-[9px] px-1.5 py-0.2 rounded bg-zinc-900 text-zinc-400 border border-zinc-800 uppercase ml-auto shrink-0" data-v-abceed73>${ssrInterpolate(edu.level)}</span></div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></section><section id="projects" class="scroll-mt-20 py-20 border-b border-zinc-800/80" data-v-abceed73><div class="max-w-7xl mx-auto px-6" data-v-abceed73><div class="valdes-reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-zinc-800 mb-10" data-v-abceed73><div data-v-abceed73><span class="font-mono text-xs text-zinc-400 uppercase tracking-widest" data-v-abceed73>// 02 // PROJECTS</span><h2 class="font-display text-3xl sm:text-4xl font-semibold text-zinc-100 tracking-tight mt-1" data-v-abceed73> Production Works &amp; Interactive Engines </h2></div><span class="font-mono text-xs text-zinc-400 uppercase" data-v-abceed73>INDEX_ARCH // 02</span></div><div class="grid md:grid-cols-2 gap-6 mb-6" data-v-abceed73><!--[-->`);
      ssrRenderList(projects.slice(0, 2), (project, idx) => {
        _push(`<div class="valdes-reveal p-6 bg-zinc-900/60 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all flex flex-col justify-between group" data-v-abceed73><div data-v-abceed73><div class="flex items-center justify-between font-mono text-xs text-zinc-400 border-b border-zinc-800 pb-3 mb-4" data-v-abceed73><span data-v-abceed73>PRJ_0${ssrInterpolate(idx + 1)}</span><span class="text-zinc-300 font-semibold uppercase" data-v-abceed73>${ssrInterpolate(project.badge)}</span></div><h3 class="font-display text-2xl text-zinc-100 font-semibold group-hover:text-white transition-colors mb-2" data-v-abceed73>${(project.titleHtml || project.title) ?? ""}</h3><p class="text-sm text-zinc-400 leading-relaxed mb-6" data-v-abceed73>${ssrInterpolate(project.description)}</p></div><div class="pt-4 border-t border-zinc-800 flex items-center justify-between" data-v-abceed73><div class="flex flex-wrap gap-1.5" data-v-abceed73><!--[-->`);
        ssrRenderList(project.stack, (s) => {
          _push(`<span class="px-2 py-0.5 bg-zinc-950 border border-zinc-800/80 rounded font-mono text-[10px] text-zinc-400" data-v-abceed73>${ssrInterpolate(s)}</span>`);
        });
        _push(`<!--]--></div><a${ssrRenderAttr("href", project.link)} target="_blank" rel="noopener" class="font-mono text-xs text-zinc-200 hover:text-white flex items-center gap-1 uppercase tracking-wider" data-v-abceed73><span data-v-abceed73>VIEW</span><span data-v-abceed73>↗</span></a></div></div>`);
      });
      _push(`<!--]--></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" data-v-abceed73><!--[-->`);
      ssrRenderList(projects.slice(2), (project, idx) => {
        _push(`<div class="valdes-reveal p-5 bg-zinc-900/40 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all flex flex-col justify-between group" data-v-abceed73><div data-v-abceed73><div class="flex items-center justify-between font-mono text-[11px] text-zinc-400 border-b border-zinc-800 pb-2.5 mb-3" data-v-abceed73><span data-v-abceed73>PRJ_0${ssrInterpolate(idx + 3)}</span><span class="text-zinc-400" data-v-abceed73>${ssrInterpolate(project.badge)}</span></div><h3 class="font-display text-lg text-zinc-100 font-semibold mb-2" data-v-abceed73>${(project.titleHtml || project.title) ?? ""}</h3><p class="text-xs text-zinc-400 leading-relaxed mb-4" data-v-abceed73>${ssrInterpolate(project.description)}</p></div><div class="pt-3 border-t border-zinc-800 flex items-center justify-between" data-v-abceed73><div class="flex flex-wrap gap-1" data-v-abceed73><!--[-->`);
        ssrRenderList(project.stack, (s) => {
          _push(`<span class="px-1.5 py-0.5 bg-zinc-950 border border-zinc-800/80 rounded font-mono text-[9px] text-zinc-400" data-v-abceed73>${ssrInterpolate(s)}</span>`);
        });
        _push(`<!--]--></div><a${ssrRenderAttr("href", project.link)} target="_blank" rel="noopener" class="font-mono text-[11px] text-zinc-300 hover:text-white flex items-center gap-1" data-v-abceed73><span data-v-abceed73>↗</span></a></div></div>`);
      });
      _push(`<!--]--></div></div></section><section id="content" class="scroll-mt-20 py-20 border-b border-zinc-800/80" data-v-abceed73><div class="max-w-7xl mx-auto px-6" data-v-abceed73><div class="valdes-reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-zinc-800 mb-10" data-v-abceed73><div data-v-abceed73><span class="font-mono text-xs text-zinc-400 uppercase tracking-widest" data-v-abceed73>// 03 // CREATIVE CONTENT</span><h2 class="font-display text-3xl sm:text-4xl font-semibold text-zinc-100 tracking-tight mt-1" data-v-abceed73> Creative Ideas, Stories &amp; Digital Media </h2></div><span class="font-mono text-xs text-zinc-400 uppercase" data-v-abceed73>INDEX_ARCH // 03</span></div><div class="grid md:grid-cols-3 gap-6" data-v-abceed73><!--[-->`);
      ssrRenderList(creativeContents, (item) => {
        _push(`<div class="valdes-reveal valdes-delay-1 p-5 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all flex flex-col justify-between group" data-v-abceed73><div data-v-abceed73><div class="flex items-center justify-between font-mono text-[11px] text-zinc-400 pb-3 border-b border-zinc-800 mb-4" data-v-abceed73><div class="flex items-center gap-2" data-v-abceed73>`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: item.icon,
          class: "text-base text-zinc-300"
        }, null, _parent));
        _push(`<span data-v-abceed73>${ssrInterpolate(item.platform)}</span></div><span class="text-emerald-400 font-semibold" data-v-abceed73>${ssrInterpolate(item.tag)}</span></div><a${ssrRenderAttr("href", item.link)} target="_blank" rel="noopener" class="relative aspect-[9/16] max-h-[380px] w-full rounded bg-zinc-950 border border-zinc-800 overflow-hidden mb-4 group-hover:border-zinc-700 transition-all flex flex-col justify-between p-5 group/card text-left cursor-pointer" data-v-abceed73>`);
        if (item.image) {
          _push(ssrRenderComponent(_component_NuxtImg, {
            src: item.image,
            alt: item.title,
            format: "webp",
            quality: "80",
            loading: "lazy",
            class: "absolute inset-0 w-full h-full object-cover object-center group-hover/card:scale-105 transition-transform duration-500"
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-zinc-950/30 z-10" data-v-abceed73></div><div class="relative z-20 flex items-center justify-between" data-v-abceed73><span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950/80 border border-zinc-800 text-[10px] font-mono text-zinc-300 backdrop-blur" data-v-abceed73>`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "ic:baseline-tiktok",
          class: "text-xs text-emerald-400"
        }, null, _parent));
        _push(`<span data-v-abceed73>TIKTOK REELS</span></span><span class="font-mono text-[10px] text-zinc-400 px-2 py-0.5 rounded bg-zinc-950/80 border border-zinc-800/80 backdrop-blur" data-v-abceed73>HD 1080P</span></div><div class="relative z-20 my-auto flex flex-col items-center gap-2" data-v-abceed73><div class="w-14 h-14 rounded-full bg-white/90 text-zinc-950 flex items-center justify-center shadow-2xl backdrop-blur group-hover/card:scale-110 group-hover/card:bg-white transition-all duration-300" data-v-abceed73>`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: "mdi:play",
          class: "text-3xl ml-1 text-zinc-950"
        }, null, _parent));
        _push(`</div><span class="font-mono text-[11px] text-zinc-300 group-hover/card:text-white transition-colors bg-zinc-950/60 px-2.5 py-0.5 rounded backdrop-blur" data-v-abceed73>WATCH ON TIKTOK</span></div><div class="relative z-20 pt-2 border-t border-zinc-800/80 flex items-center justify-between" data-v-abceed73><span class="font-mono text-[11px] text-emerald-400 font-semibold" data-v-abceed73>${ssrInterpolate(item.handle)}</span><span class="font-mono text-[10px] text-zinc-300 flex items-center gap-1" data-v-abceed73> PLAY VIDEO <span data-v-abceed73>↗</span></span></div></a><h3 class="font-display text-lg font-semibold text-zinc-100 mb-1 group-hover:text-white transition-colors" data-v-abceed73>${ssrInterpolate(item.title)}</h3><p class="text-xs text-zinc-400 leading-relaxed mb-4" data-v-abceed73>${ssrInterpolate(item.description)}</p></div><div class="pt-3 border-t border-zinc-800 flex items-center justify-between" data-v-abceed73><span class="font-mono text-[10px] text-zinc-500" data-v-abceed73>${ssrInterpolate(item.handle)}</span><a${ssrRenderAttr("href", item.link)} target="_blank" rel="noopener" class="font-mono text-xs text-zinc-300 hover:text-white inline-flex items-center gap-1 uppercase tracking-wider" data-v-abceed73><span data-v-abceed73>Watch</span><span data-v-abceed73>↗</span></a></div></div>`);
      });
      _push(`<!--]--></div></div></section><section id="certifications" class="scroll-mt-20 py-20 border-b border-zinc-800/80" data-v-abceed73><div class="max-w-7xl mx-auto px-6" data-v-abceed73><div class="valdes-reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-zinc-800 mb-10" data-v-abceed73><div data-v-abceed73><span class="font-mono text-xs text-zinc-400 uppercase tracking-widest" data-v-abceed73>// 04 // CERTIFICATIONS</span><h2 class="font-display text-3xl sm:text-4xl font-semibold text-zinc-100 tracking-tight mt-1" data-v-abceed73> Verified Credentials &amp; Accreditations </h2></div><span class="font-mono text-xs text-zinc-400 uppercase" data-v-abceed73>INDEX_ARCH // 04</span></div><div class="grid md:grid-cols-2 gap-4 mb-10" data-v-abceed73><!--[-->`);
      ssrRenderList(certifications, (cert) => {
        _push(`<div class="valdes-reveal p-5 bg-zinc-900/60 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-all cursor-pointer flex items-start gap-4 group" data-v-abceed73><div class="w-10 h-10 rounded bg-zinc-950 border border-zinc-800 flex items-center justify-center text-lg shrink-0" data-v-abceed73>${ssrInterpolate(cert.icon)}</div><div class="flex-1 min-w-0" data-v-abceed73><div class="flex items-center justify-between" data-v-abceed73><span class="font-mono text-[10px] text-zinc-400 uppercase tracking-wider" data-v-abceed73>${ssrInterpolate(cert.issuer)}</span><span class="font-mono text-[10px] text-zinc-300 font-semibold" data-v-abceed73>${ssrInterpolate(cert.year)}</span></div><h3 class="font-display text-base font-semibold text-zinc-100 mt-1 group-hover:text-white transition-colors" data-v-abceed73>${ssrInterpolate(cert.title)}</h3><p class="text-xs text-zinc-400 line-clamp-2 mt-1" data-v-abceed73>${ssrInterpolate(cert.description)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="grid sm:grid-cols-3 gap-4" data-v-abceed73><!--[-->`);
      ssrRenderList(certMeanings, (item) => {
        _push(`<div class="valdes-reveal p-4 bg-zinc-900/30 border border-zinc-800/80 rounded-lg" data-v-abceed73><div class="font-mono text-xs text-zinc-300 font-semibold mb-1.5 flex items-center gap-2" data-v-abceed73><span data-v-abceed73>${ssrInterpolate(item.icon)}</span><span data-v-abceed73>${ssrInterpolate(item.title)}</span></div><p class="text-xs text-zinc-400 leading-relaxed" data-v-abceed73>${ssrInterpolate(item.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section id="contact" class="scroll-mt-20 py-20" data-v-abceed73><div class="max-w-7xl mx-auto px-6" data-v-abceed73><div class="valdes-reveal flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-zinc-800 mb-10" data-v-abceed73><div data-v-abceed73><span class="font-mono text-xs text-zinc-400 uppercase tracking-widest" data-v-abceed73>// 05 // COMMS &amp; NETWORK</span><h2 class="font-display text-3xl sm:text-4xl font-semibold text-zinc-100 tracking-tight mt-1" data-v-abceed73> Let&#39;s Build Something Together </h2></div><span class="font-mono text-xs text-zinc-400 uppercase" data-v-abceed73>INDEX_ARCH // 05</span></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8" data-v-abceed73><!--[-->`);
      ssrRenderList(socials, (social) => {
        _push(`<a${ssrRenderAttr("href", social.href)} target="_blank" rel="noopener" class="valdes-reveal p-4 bg-zinc-900/60 border border-zinc-800 rounded-lg hover:border-zinc-700 hover:bg-zinc-900 transition-all flex items-center justify-between group" data-v-abceed73><div class="flex items-center gap-3" data-v-abceed73><div class="w-9 h-9 rounded bg-zinc-950 border border-zinc-800 flex items-center justify-center text-lg" data-v-abceed73>`);
        _push(ssrRenderComponent(unref(Icon), {
          icon: social.icon,
          class: "text-zinc-300"
        }, null, _parent));
        _push(`</div><div class="flex flex-col" data-v-abceed73><span class="font-display text-sm font-semibold text-zinc-100" data-v-abceed73>${ssrInterpolate(social.label)}</span><span class="font-mono text-[11px] text-zinc-400 truncate max-w-[180px]" data-v-abceed73>${ssrInterpolate(social.handle)}</span></div></div><span class="font-mono text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors" data-v-abceed73>↗</span></a>`);
      });
      _push(`<!--]--></div><div class="valdes-reveal p-4 bg-zinc-900/40 border border-zinc-800 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4" data-v-abceed73><div class="flex items-center gap-3" data-v-abceed73><span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" data-v-abceed73></span><span class="font-mono text-xs text-zinc-300" data-v-abceed73>SYS_COMM: ACTIVE</span><span class="text-zinc-700 hidden sm:inline" data-v-abceed73>|</span><span class="font-mono text-xs text-zinc-400 hidden sm:inline" data-v-abceed73>RESPONSE WINDOW: &lt; 24 HRS</span></div><span class="font-mono text-xs text-zinc-400" data-v-abceed73>RAYIVAL DEDE SAPUTRA (VALDES) · 2026</span></div></div></section></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-abceed73"]]);
export {
  index as default
};
//# sourceMappingURL=index-BSkkbKLb.js.map
