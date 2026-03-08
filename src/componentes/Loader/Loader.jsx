import Spinner from "react-bootstrap/Spinner";
import "./Loader.css"
const Loader = () => {
  return (
    <div className="Loader">
      <Spinner animation="grow" variant="danger" />
    </div>
  );
};

export default Loader;
