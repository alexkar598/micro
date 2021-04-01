const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { name: "checkout", path: "/checkout", component: () => import("pages/checkout.vue")},
      { name: "itemshop", path: "/itemshop/:category", component: () => import("pages/itemshop.vue")},
      { path: "", component: () => import("pages/Index.vue") },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue")
  }
];



export { routes };
