import React, { useEffect, useState } from 'react';
import './index.css';

function UploadZip() {
  const [classHeader, setClassHeader] = useState('');
  const [classShowMenu, setClassShowMenu] = useState('');
  const [classMenuToggle, setClassMenuToggle] = useState('');
  const [menuToggle, setMenuToggle] = useState(true);

  useEffect(() => {});

  function handleMenuToggle(e) {
    setMenuToggle(!menuToggle);
    if (menuToggle) {
      setClassMenuToggle('closeMenu');
      if (classHeader) {
        setClassShowMenu('showMenu top-100');
      } else {
        setClassShowMenu('showMenu');
      }
    } else {
      setClassMenuToggle('');
      setClassShowMenu('');
    }
  }

  return (
    <div>
      <header>
        <nav className={classHeader}>
          <div id='brand'>
            <div id='logo' />
            <div id='word-mark' />
          </div>
          <div id='menu'>
            <div id='menu-toggle' onClick={handleMenuToggle} className={classMenuToggle}>
              <div id='menu-icon'>
                <div className='bar' />
                <div className='bar' />
                <div className='bar' />
              </div>
            </div>
            <ul className={'ul-menu-toggle ' + classShowMenu} id='ul-subMenu'>
              <li>
                <a href='#section00' />
              </li>
              <li>
                <a href='#section01' />
              </li>
              <li>
                <a href='#section02' />
              </li>
              <li>
                <a href='#section03' />
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <ol id='demo-container'>
        <li>
          <label>
            <span className='form-label'>choose a zip file</span>
            <input type='file' accept='application/zip' id='file-input' />
          </label>
        </li>
        <li>
          <label>
            <span className='form-label'>choose temporary storage</span>
            <select id='creation-method-input'>
              <option value='Blob'>RAM</option>
              <option value='File'>HDD</option>
            </select>
          </label>
        </li>
        <li>
          <span className='form-label'>download zip content</span>
          <ul id='file-list'></ul>
        </li>
      </ol>
    </div>
  );
}

export default UploadZip;
