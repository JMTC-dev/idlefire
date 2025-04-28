import { useNavigate } from "react-router";

const Woodcuting = () => {
  let navigate = useNavigate();
  return (
    <>
      <h1>Woodcutting</h1>
      <button
        onClick={() => {
          navigate(`/`);
        }}
      >
        Go back
      </button>
    </>
  );
};

export default Woodcuting;
