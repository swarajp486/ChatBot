import React from 'react'

function Input({ value, onChange, onClick }) {
  return (
    <div className="input-div">
      <input
        className="text"
        placeholder="Your prompt here..."
        value={value}
        onChange={onChange}
      />
      <button className="btn" onClick={onClick}>
        Go
      </button>
    </div>
  );
}

export default Input