import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@ficc/app-customer",
  app: () => System.import("@ficc/app-customer"),
  activeWhen:(location) => location.pathname === '/customer' ,
});

registerApplication({
  name: "@ficc/app-routes",
  app: () => System.import("@ficc/app-routes"),
  activeWhen: ['/routes'] ,
});

registerApplication({
  name: "@ficc/app-parcel",
  app: () => System.import("@ficc/app-parcel"),
  activeWhen:(location) => location.pathname === '/parcel' ,
});

registerApplication({
  name: "@ficc/app-route",
  app: () => System.import("@ficc/app-route"),
  activeWhen:(location) => location.pathname === '/route' ,
});

registerApplication({
  name: "@ficc/app-lazy",
  app: () => System.import("@ficc/app-lazy"),
  activeWhen:['/app-lazy'] ,
});


registerApplication({
  name: "@ficc/app-navbar",
  app: () => System.import("@ficc/app-navbar"),
  activeWhen:['/'] ,
});

start({
  urlRerouteOnly: true,
});
