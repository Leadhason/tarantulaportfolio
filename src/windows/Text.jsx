import React from "react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { WindowControls } from "#components";
import useWindowStore from "#store/window.js";

const TextFile = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2 className="ml-2 font-medium">{data.name}</h2>
      </div>

      <div className="bg-white flex-1 overflow-y-auto p-6 text-slate-800">
        {data.image && (
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-64 object-cover rounded-xl mb-6 shadow-sm"
          />
        )}

        {data.subtitle && (
          <h1 className="text-3xl font-bold mb-6 text-slate-900 tracking-tight">
            {data.subtitle}
          </h1>
        )}

        <div className="space-y-4 max-w-3xl">
          {data.description &&
            data.description.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
        </div>
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(TextFile, "txtfile");

export default TextWindow;
