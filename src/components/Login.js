
import React, { useState } from 'react';
import { AzureAD, AuthenticationState } from 'react-aad-msal';
import { authProvider } from '../authProvider';
export function Login(props) {
  return (
    <AzureAD provider={authProvider} forceLogin={true}>
      {
        ({ authenticationState, accountInfo }) => {
          return (
            (authenticationState === AuthenticationState.Authenticated) ?
              <p>Logged in as {accountInfo.account.name}</p> :
              <p>Not logged in</p>
          );
        }
      }
    </AzureAD>
  );
}
