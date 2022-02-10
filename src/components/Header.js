import React from 'react'

const Header = ({ toggleTheme }) => {
  const handleToggleTheme = () => {
    toggleTheme()
  };

  return (
    <header>
      <div>
        <h1>Todo</h1>
        <button
          type="button"
          className="toggle-dark-theme"
          aria-label="Change theme"
          onClick={handleToggleTheme}
        >
        </button>
      </div>
    </header>
  )
};

export default Header