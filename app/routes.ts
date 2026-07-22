import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  index("routes/welcome.tsx"),

  layout("routes/layout.tsx", [
    route("home", "routes/home.tsx"),
    route("contact", "routes/contact.tsx"),
    route("projects", "routes/projects.tsx"),
  ]),
] satisfies RouteConfig;
