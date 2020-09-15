import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLink({path, children}) {

  return (
    <li className="nav-link">
      <Link to={path}>{children}</Link>
    </li>
  );
}