export default function card({ adhkar }) {
  {
    /* <div className="">
      {adhkar.map((dhikr) => (
        <ul>
          <adhkar adhkar={dhikr} />
        </ul>
      ))}
    </div> */
  }

  return (
    <div className="col-span-6 row-start-5 mx-2 md:w-3/4 md:mx-auto lg:w-3/4">
      {adhkar.map((dhikr) => (
        <div
          key={dhikr.dhikr_id}
          className="grid grid-rows-max grid-cols-max mb-40 gap-6 py-2 bg-gray-100 rounded-xl"
        >
          <div className="row-start-1 col-span-full">
            <p className="ml-4 mt-1 text-sm font-semibold">
              Read <span>{dhikr.read_amount_int} </span>
              {dhikr.read_amount_int > 1 ? "times" : "time"}
            </p>
          </div>
          <div className="row-start-2 px-4">
            <p className="text-4xl rtl font-arabic">{dhikr.arabic_text}</p>
          </div>
          <div className="row-start-3 col-span-full">
            <p className="ml-4 mt-1 text-sm">{dhikr.source}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
