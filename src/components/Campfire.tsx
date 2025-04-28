import { useNavigate } from "react-router";
import buttons from "../const";

const Campfire = () => {
  let navigate = useNavigate();

  return (
    <>
      <h1>Campfire</h1>
      <div className="campfire-btn--container">
        {buttons.map((btn) => {
          return (
            <button
              key={btn.path}
              onClick={() => {
                navigate(`/${btn.path}`);
              }}
            >
              {btn.label}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Campfire;
