import React, { ChangeEvent } from "react";
import css from "./Switch.module.scss";

interface SwitchProps {
  isOn: boolean;
  onColor: string;
  handleToggle: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Switch: React.FC<SwitchProps> = (props) => {
  return (
    <>
      <input
        checked={props.isOn}
        onChange={props.handleToggle}
        type="checkbox"
        id={"react-switch-new"}
        className={css["react-switch-checkbox"]}
      />
      <label
        style={{ background: props.isOn ? props.onColor : "#F44336" }}
        className={css["react-switch-label"]}
        htmlFor={"react-switch-new"}
      >
        <span className={css["react-switch-button"]} />
        <span className={css["switch-text"]}>
          {props.isOn ? <span className={css["Text-On"]}>Yes</span> : <span className={css["Text-Off"]}>No</span>}
        </span>
      </label>
    </>
  );
};

export default Switch;
