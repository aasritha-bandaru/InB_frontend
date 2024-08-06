import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

const SettingsDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Settings
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/profile-settings">Profile Settings</Dropdown.Item>
        <Dropdown.Item href="/alert-settings">Alert Settings</Dropdown.Item>
        {/* Add more options as needed */}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SettingsDropdown;
