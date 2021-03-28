import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from "../../store/api-actions";
import PropTypes from 'prop-types';

const Header = ({authorizationStatus, user, onLogout}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to="/" className="header__logo-link">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </ Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list" style={{alignItems: `center`}}>
              <li className="header__nav-item user">
                <Link to="/favorites" className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    {user.avatarUrl && <img src={user.avatarUrl} />}
                  </div>
                  {authorizationStatus ?
                    <span className="header__user-name user__name">{user.email}</span> :
                    <span className="header__login">Sign in</span>
                  }
                </Link>
              </li>
              {authorizationStatus &&
                <li className="header__nav-item user" style={{marginLeft: `20px`}} onClick={onLogout}>
                  <a className="header__nav-link header__nav-link--profile"><span className="header__login">Log Out</span></a>
                </li>
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.bool,
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    isPro: PropTypes.bool
  }),
  onLogout: PropTypes.func,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout: () => dispatch(logout()),
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
