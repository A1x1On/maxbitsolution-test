import { createRouter, createWebHistory } from "vue-router/auto";
import { setupLayouts } from "virtual:generated-layouts";
import { routes } from "vue-router/auto-routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: setupLayouts(routes),
});

router.beforeEach(async (to) => {
  if (!to.matched.length) {
    return "/notFound";
  }

  if (to.path === "/" || to.path.match(/^(\/drinks|\/drinks\/)$/)) {
    return "/drinks/margarita";
  }
});

router.onError((err, to) => {
  console.log("router.onError err", err);
  console.log("router.onError to", to);
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
