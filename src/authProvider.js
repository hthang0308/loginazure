import { MsalAuthProvider, LoginType } from 'react-aad-msal';

export const authProvider = new MsalAuthProvider(
    {
        auth: {
            authority: "https://login.microsoftonline.com/common",
            clientId: "8dd1b8e3-ab08-495e-b921-533563a7af3a", //Application (client) ID from Overview blade in App Registration
            redirectUri: "http://localhost:3000" //Redirect URI from Overview blade in App Registration
        },
        cache: {
            cacheLocation: 'sessionStorage',
            storeAuthStateInCookie: true,
        },
    },
    {
        scopes: ['https://graph.microsoft.com/.default']
    },

    LoginType.Popup
);
