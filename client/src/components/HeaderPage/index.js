import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

function HeaderPage() {
  const [classHeader, setClassHeader] = useState('');
  const [classShowMenu, setClassShowMenu] = useState('');
  const [classMenuToggle, setClassMenuToggle] = useState('');
  const [menuToggle, setMenuToggle] = useState(true);

  useEffect(() => {
    let scrollPage = () => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
          setClassHeader('navShadow');
          document.getElementById('ul-subMenu').classList.add('top-100');
        } else {
          setClassHeader('');
          document.getElementById('ul-subMenu').classList.remove('top-100');
        }
      });
    };
    scrollPage();
  });

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
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/new-asset'>Publish</Link>
            </li>
            <li>
              <Link to='/'>MyAssets</Link>
            </li>
            <li>
              <Link to='/'></Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HeaderPage;
