import { useState } from 'react';

export default function OptionGroup({ label, options }) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="option-group">
      <span className="option-group__label">{label}</span>
      <div className="option-group__row" role="radiogroup" aria-label={label}>
        {options.map((option, i) => (
          <button
            key={option}
            className={'option-chip' + (i === selected ? ' is-selected' : '')}
            aria-pressed={i === selected}
            onClick={() => setSelected(i)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
