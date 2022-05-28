import React from "react";

const ArtikelForm = () => {
  return (
    <div className="ui form">
      <div className="field">
        <label>Artikeltitel</label>
        <input type="text" />
      </div>
      <div class="field">
        <label>Textinhalt</label>
        <textarea rows="3"></textarea>
      </div>

      <div class="ui buttons">
        <button class="ui red button">Absagen</button>
        <div class="or" data-text="<>"></div>
        <button class="ui positive button  ">Speichern</button>
      </div>
    </div>
  );
};

export default ArtikelForm;
