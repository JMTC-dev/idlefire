import { useNavigate } from "react-router";

const Campfire = () => {
  let navigate = useNavigate();
  const buttons = [
    "Woodcutting",
    "Fishing",
    "Fletching",
    "Mining",
    "Smithing",
    "Cooking",
    "Combat",
    "Shops",
    "Inventory",
    "Chat",
    "Equipment",
    "Magic",
  ];
  return (
    <>
      <h1>Campfire</h1>
      <div className="campfire-btn--container">
        {buttons.map((btn) => {
          return (
            <button
              onClick={() => {
                navigate(`/${btn}`);
              }}
            >
              {btn}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Campfire;
