import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      {/* <NavHeader /> */}

      <main>
        <Outlet />
      </main>
    </div>
  );
}
