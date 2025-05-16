import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '@site/src/contexts/AuthContext';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const { currentUser, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
  };

  if (!currentUser) return null;

  return (
    <div className={styles.userMenu} ref={menuRef}>
      <button 
        className={styles.userButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menu do usuário"
      >
        <div className={styles.userAvatar}>
          {currentUser.email.charAt(0).toUpperCase()}
        </div>
      </button>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          <div className={styles.menuHeader}>
            <div className={styles.menuAvatar}>
              {currentUser.email.charAt(0).toUpperCase()}
            </div>
            <div className={styles.menuUserInfo}>
              <span className={styles.menuEmail}>{currentUser.email}</span>
            </div>
          </div>
          <div className={styles.menuDivider} />
          <button 
            className={styles.menuItem}
            onClick={handleLogout}
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className={styles.menuIcon}
            >
              <path d="M11.3333 11.3333L14 8.66667M14 8.66667L11.3333 6M14 8.66667H6M6 14H5.2C4.0799 14 3.51984 14 3.09202 13.782C2.71569 13.5903 2.40973 13.2843 2.21799 12.908C2 12.4802 2 11.9201 2 10.8V5.2C2 4.0799 2 3.51984 2.21799 3.09202C2.40973 2.71569 2.71569 2.40973 3.09202 2.21799C3.51984 2 4.0799 2 5.2 2H6" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            Sair
          </button>
        </div>
      )}
    </div>
  );
} 