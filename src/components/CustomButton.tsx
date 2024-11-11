export default function CustomButton({ text }: { text: string }) {
  return (
    <button className="rounded-xl bg-gradient-violet-pink p-[2px]">
      <div className="flex h-full w-full items-center justify-center bg-gray-700 px-5 py-3 rounded-xl hover:bg-gradient-violet-pink">
        <p className="text-white">{text}</p>
      </div>
    </button>
  );
}
