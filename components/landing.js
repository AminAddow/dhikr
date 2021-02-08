import Img from "../components/img";
import Burger from "../components/svgs/burger";

export default function landing(props) {
  return (
    <>
      <nav className="flow-root">
        <button
          aria-label="Open menu"
          className="fixed pt-2 pr-2 top-0 right-0"
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
