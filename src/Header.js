import React from 'react';

const headerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
  backgroundColor: '#f3f3f3',
  padding: '10px',
  borderBottom: '2px solid #ddd'
};

const logoStyle = {
  width: '50px',
  height: '50px',
  marginRight: '20px'
};

const titleStyle = {
  margin: 0
};

function Header() {
  return (
    <header style={headerStyle}>
      <img src="wangel_logo.jpeg" alt="Logo" style={logoStyle} />
      <h1 style={titleStyle}>装備管理Todo</h1>
    </header>
  );
}

export default Header;
