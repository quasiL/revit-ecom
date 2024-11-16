import { AdminNavBar, NavLink } from "@/app/admin/_components/AdminNavBar";

export const dynamic = "force-dynamic";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AdminNavBar>
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
        <NavLink href="/admin/users">Customers</NavLink>
        <NavLink href="/admin/orders">Sales</NavLink>
      </AdminNavBar>
      <div className="container my-6 mx-auto">{children}</div>
    </>
  );
}
