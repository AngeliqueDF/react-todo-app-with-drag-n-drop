import React from 'react'

const Header = () => {
  return (
    <header>
      <div>
        <h1>Todo</h1>
        <button type="button" className="toggle-dark-theme" aria-label="Change theme">
        </button>
      </div>
    </header>
  )
};

export default Header