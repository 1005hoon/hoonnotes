export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-4 pt-12">{children}</div>;
}
