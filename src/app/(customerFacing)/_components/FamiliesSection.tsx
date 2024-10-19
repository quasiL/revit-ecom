import Button from "./Button";

export default function FamiliesSection() {
  return (
    <section>
      <div className='bg-cover h-screen bg-[url("/families.webp")]'>
        <div className="flex flex-col gap-8 pt-60 px-96 w-4/6">
          <h1 className="text-5xl font-bold text-transparent bg-gradient-violet-pink bg-clip-text leading-tight">
            End the Family Hunt: Blocks Plugin Delivers All in One Place
          </h1>
          <div className="flex flex-col gap-4 text-xl">
            <div className="flex gap-4 items-center">
              <span className="mgc_cursor_2_fill text-3xl text-gray-500"></span>
              <h3>
                Seamlessly add families to your project with a single clicklick
              </h3>
            </div>
            <div className="flex gap-4 items-center">
              <span className="mgc_pen_fill text-3xl text-gray-500"></span>
              <h3>Revit-crafted families</h3>
            </div>
            <div className="flex gap-4 items-center">
              <span className="mgc_map_fill text-3xl text-gray-500"></span>
              <h3>
                Stay ahead of trends: Source products from global manufacturers
              </h3>
            </div>
            <div className="flex gap-4 items-center">
              <span className="mgc_ruler_fill text-3xl text-gray-500"></span>
              <h3>Weekly surprises: Get new family collections every week</h3>
            </div>
          </div>
          <div className="flex gap-8 pl-2">
            <Button text="View Plans" />
            <Button text="Free Download" />
          </div>
        </div>
      </div>
    </section>
  );
}
