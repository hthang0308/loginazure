import React from 'react';
import { authProvider } from '../authProvider';
//rewrite using function
export function Logout(props) {
  //log out from microsoft azure
  authProvider.logout();
  //redirect to home page
  window.location.href = '/';

  return (
    <div>
      <h1>Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
    </div>
  );
}
