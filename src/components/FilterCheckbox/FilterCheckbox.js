import { useState } from "react";

function FilterCheckbox(props) {
  const [isChecked, setIsChecked] = useState(props.checked);

  const handleToggle = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    props.onToggle(newChecked);
    props.onSubmit({ film: props.filmValue });
  };

  return (
    <div className="filter">
      <div className="filter__container">
        <label className="filter__input-label">
          <input
            type="checkbox"
            className="filter__invisible-checkbox"
            id="checkbox"
            name="checkbox"
            checked={isChecked}
            onChange={handleToggle}
          />

          <div
            className="filter__visible-checkbox
        filter__visible-checkbox_type_checked"
          ></div>
        </label>
        <p className="filter__shorts">Короткометражки</p>
      </div>
    </div>
  );
}

export default FilterCheckbox;
