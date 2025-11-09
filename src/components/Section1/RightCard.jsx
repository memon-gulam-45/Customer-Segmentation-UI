import React from "react";
import "remixicon/fonts/remixicon.css";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 overflow-hidden relative w-80 rounded-4xl">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightCardContent
        id={props.id}
        intro={props.intro}
        tag={props.tag}
        bg={props.bg}
      />
    </div>
  );
};

export default RightCard;
