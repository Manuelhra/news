import React, { useState } from 'react'

export const useSelect = (initialState,options) => {
  const [state, setState] = useState(initialState);

  const newsSelect = () => (
    <select
      className="browser-default"
      onChange={(event) => setState(event.target.value)}
      value={state}

    >
      {options.map((option) => (
        <option
        key={option.value}
        value={option.value}

        >
          {option.label}
        </option>
      ))}
    </select>
  )

  return [state, newsSelect];
};