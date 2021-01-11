export default function card(props) {
  const selected = props.selectedTranslations;
  const adhkar = props.content;

  const English = (props) => {
    return (
      <div className="">
        <h1 className="text-lg font-semibold">English</h1>
        <p className="">{props.content}</p>
      </div>
    );
  };

  return (
    <div className="mt-24 space-y-24 md:w-3/4 md:mx-auto lg:w-1/2 xl:w-1/3">
      {adhkar.map((dhikr) => (
        <div
          key={dhikr.dhikr_id}
          className="grid grid-rows-max grid-cols-max gap-6 py-2 bg-yellow-10 rounded-xl"
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
          <br />
          <div className="row-start-4 px-4">
            {selected.showEnglish ? (
              <English content={dhikr.translation_eng} />
            ) : (
              ""
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
