export default function CustomButton({
  text,
  submit,
}: {
  text: string;
  submit?: boolean;
}) {
  return (
    <button
      className="rounded-xl bg-gradient-violet-pink p-[2px]"
      type={submit ? "submit" : "button"}
    >
      <div className="flex h-full w-full items-center justify-center bg-gray-700 px-5 py-3 rounded-xl hover:bg-gradient-violet-pink">
        <p className="text-white">{text}</p>
      </div>
    </button>
  );
}
