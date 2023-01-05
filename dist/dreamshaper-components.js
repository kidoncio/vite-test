import { defineComponent as r, ref as c, openBlock as u, createElementBlock as i, Fragment as d, createElementVNode as e, toDisplayString as s, createTextVNode as t } from "vue";
const p = { class: "card" }, h = /* @__PURE__ */ e("p", { class: "global-test" }, [
  /* @__PURE__ */ t(" Edit "),
  /* @__PURE__ */ e("code", null, "components/HelloWorld.vue"),
  /* @__PURE__ */ t(" to test HMR ")
], -1), m = /* @__PURE__ */ e("p", null, [
  /* @__PURE__ */ t(" Check out "),
  /* @__PURE__ */ e("a", {
    href: "https://vuejs.org/guide/quick-start.html#local",
    target: "_blank"
  }, " create-vue "),
  /* @__PURE__ */ t(", the official Vue + Vite starter ")
], -1), _ = /* @__PURE__ */ e("p", null, [
  /* @__PURE__ */ t(" Install "),
  /* @__PURE__ */ e("a", {
    href: "https://github.com/johnsoncodehk/volar",
    target: "_blank"
  }, "Volar"),
  /* @__PURE__ */ t(" in your IDE for a better DX ")
], -1), g = /* @__PURE__ */ e("p", { class: "read-the-docs" }, " Click on the Vite and Vue logos to learn more ", -1), f = /* @__PURE__ */ r({
  __name: "HelloWorld",
  props: {
    message: null
  },
  setup(o) {
    const a = o, l = c(0);
    return (k, n) => (u(), i(d, null, [
      e("h1", null, s(a), 1),
      e("div", p, [
        e("button", {
          type: "button",
          onClick: n[0] || (n[0] = (v) => l.value++)
        }, " count is " + s(l.value), 1),
        h
      ]),
      m,
      _,
      g
    ], 64));
  }
}), V = {
  install: (o) => {
    o.component("HelloWorld", f);
  }
};
export {
  f as HelloWorld,
  V as default
};
