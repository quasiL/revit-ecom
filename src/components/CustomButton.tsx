import Link from "next/link";

export default function CustomButton({
  children,
  submit,
  href,
}: {
  children: React.ReactNode;
  submit?: boolean;
  href?: string;
}) {
  if (!href) {
    return <Button submit={submit}>{children}</Button>;
  }
  return (
    <Link href={href}>
      <Button>{children}</Button>
    </Link>
  );
}

function Button({
  children,
  submit,
}: {
  children: React.ReactNode;
  submit?: boolean;
}) {
  return (
    <button
      className="group rounded-xl bg-gradient-violet-pink p-[2px]"
      type={submit ? "submit" : "button"}
    >
      <div className="flex h-full w-full items-center justify-center bg-gray-700 px-5 py-3 rounded-xl hover:bg-gradient-violet-pink">
        <p className="text-white group-hover:text-black">{children}</p>
      </div>
    </button>
  );
}
