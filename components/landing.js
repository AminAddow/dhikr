import Img from "../components/img";
import Burger from "../components/svgs/burger";

export default function landing(props) {
  return (
    <>
      <nav className="flow-root">
        <button
          className="pt-2 pr-2 float-right"
          onClick={() => {
            props.onClick(true);
          }}
        >
          <Burger />
        </button>
      </nav>
      <Img />
    </>
  );
}
