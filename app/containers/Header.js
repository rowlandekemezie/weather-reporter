import React from 'react';
import styles from '../styles';

const Header = () =>
  <div className="nav navbar-default" style={styles.header}>
    <a className="navbar-brand" style={styles.logoText} href="#">Weathy</a>
    <form className="navbar-form navbar-right" role="search">
      <div className="form-group" >
        <input type="text" className="form-control text-center" placeholder="Ikeja, Lagos" />
      </div>
      <button type="submit" className="btn btn-success" style={styles.addMargin}>Submit</button>
    </form>
  </div>;

export default Header;
