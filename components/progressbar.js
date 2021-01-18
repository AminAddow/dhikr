export default function prograssbar(props) {
  return (
    <div className="fixed">
      <div className="h-2 mb-4 text-xs flex rounded bg-pink-200">
        <div
          style={{ width: "30%" }}
          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
        ></div>
      </div>
    </div>
  );
}
