const GenderCheckBox = ({ onCheckBoxChange, selectedGender }) => {
  const maleLabelClasses = `label gap-2 cursor-pointer ${
    selectedGender === "male" ? "selected" : ""
  }`;
  const femaleLabelClasses = `label gap-2 cursor-pointer ${
    selectedGender === "female" ? "selected" : ""
  }`;
  return (
    <div className="flex mt-2">
      <div className="form-control mr-2">
        <label className={maleLabelClasses}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>

      <div className="form-control">
        <label className={femaleLabelClasses}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
