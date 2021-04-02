import { BootFileParams } from "@quasar/app";
import VueGtag, { trackRouter } from "vue-gtag-next";

export default function({ app, router }: BootFileParams<unknown>) {
  app.use(VueGtag, {
    property: {
      id: "G-5G6E7VLP4X",
      send_page_view: false,
    }
  })
  trackRouter(router);
}
