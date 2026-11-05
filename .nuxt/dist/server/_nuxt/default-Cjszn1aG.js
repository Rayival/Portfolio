import { defineComponent, shallowRef, getCurrentInstance, provide, cloneVNode, h, createElementBlock, mergeProps, useSSRContext } from "vue";
import "C:/Users/Asus/Documents/Rayival/portofolio/Portfolio/node_modules/hookable/dist/index.mjs";
import { d as useHead, f as __nuxt_component_1 } from "../server.mjs";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "C:/Users/Asus/Documents/Rayival/portofolio/Portfolio/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "C:/Users/Asus/Documents/Rayival/portofolio/Portfolio/node_modules/unctx/dist/index.mjs";
import "C:/Users/Asus/Documents/Rayival/portofolio/Portfolio/node_modules/h3/dist/index.mjs";
import "vue-router";
import "C:/Users/Asus/Documents/Rayival/portofolio/Portfolio/node_modules/radix3/dist/index.mjs";
import "C:/Users/Asus/Documents/Rayival/portofolio/Portfolio/node_modules/defu/dist/defu.mjs";
import "C:/Users/Asus/Documents/Rayival/portofolio/Portfolio/node_modules/ufo/dist/index.mjs";
import "C:/Users/Asus/Documents/Rayival/portofolio/Portfolio/node_modules/@unhead/vue/dist/index.mjs";
const clientOnlySymbol = /* @__PURE__ */ Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      meta: [
        {
          name: "google-site-verification",
          content: "JNnU8Hd064hsZcZvwkkAePod9o3w5UkYyXh6lJ7H91E"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_client_only = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-wrapper" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-Cjszn1aG.js.map
