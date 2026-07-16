import { Outlet } from "react-router";
import NavHeader from "~/components/NavHeader";

export default function Layout() {
  return (
    <div>
      <NavHeader />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
