import React from "react";

function StepRow({ image, title, desc }) {
  return (
    <li className="stepFeatureListItem">
      <div className="stepFeatureListItemImgContent">
        <img src={image} alt="Choose Destination" className="stepFeatureListItemImg" />
      </div>
      <div className="stepFeatureListItemInfoCol">
        <h3 className="stepFeatureListItemTitle">{title}</h3>
        <p className="stepFeatureListItemDesc">{desc}</p>
      </div>
    </li>
  );
}

export default StepRow;
