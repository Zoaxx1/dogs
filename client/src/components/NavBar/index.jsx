import React from "react";
import cc from "classcat";

const NavBar = (props) => {
  const [active, setActive] = React.useState(true);

  const changeView = () => {
    props.set({
      search: !active,
      save: active,
    });
    setActive(!active);
  };

  return (
    <div className="bg-blue-400 w-full h-32 flex items-end justify-center">
      <div className="flex">
        {[
          {
            field: "Buscar imágenes",
            active: true,
          },
          {
            field: "Mis imágenes",
            active: false,
          },
        ].map((buttn) => (
          <button
            className={cc([
              "p-4 text-lg text-blue-900",
              {
                "border-b-8 border-blue-900": buttn.active === active,
                "pb-6": buttn.active !== active,
              },
            ])}
            onClick={changeView}
            style={{ outline: "none" }}
          >
            {buttn.field}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
