/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import '@if-design-system/selection-controls';

import classes from './Toggle.module.scss';

export interface IInputProps {
  initialValue: boolean;
}

const Input = ({ initialValue }: IInputProps): JSX.Element => {
  const [isToggled, setIsToggled] = useState(initialValue);

  return (
    <div className=" if selection-controls [horizontal]">
      <input
        data-size="larger"
        className="if toggle"
        id="selection-controls-implementation-toggle-2"
        type="checkbox"
        checked={isToggled}
        onChange={() => setIsToggled(!isToggled)}
      />
      <label
        className={`if ${classes.test}`}
        htmlFor="selection-controls-implementation-toggle-2"
      >
        Auto-brightness
      </label>
    </div>
  );
};

export default Input;
