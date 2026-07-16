import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  index("routes/welcome.tsx"),

  layout("routes/layout.tsx", [route("home", "routes/home.tsx")]),
] satisfies RouteConfig;
