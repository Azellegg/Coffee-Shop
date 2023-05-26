import React from "react";

function Footersec() {
  return (
    <>
      <div className="w-full h-[35px] flex justify-items-center justify-center text-white text-[11px] font-semibold items-center gap-[10px] mt-[50px]">
        <div className="flex justify-start items-center">
          <img
            src="asset/Copyr.svg"
            alt="CopyRight"
            className="w-[15px] mr-[5px]"
          />
          <p>CopyRight</p>
        </div>
        <img src="asset/linever.svg" alt="Line" />
        <p>Creative by Azellegg.</p>
      </div>
    </>
  );
}

export default Footersec;
