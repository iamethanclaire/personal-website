import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,

  // add this if you want to make some things load faster
  // easier to predict how the user will see the app
  // prevent some runtime delays
  
  // async prerender() {
  //   return["/", "/about"]
  // }
} satisfies Config;
