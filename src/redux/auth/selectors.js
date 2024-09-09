export const selectUser = (state) => state.auth.user;
export const selectLoggedIn = (state) => state.auth.isLoggedIn;
export const selectToken = (state) => state.auth.token;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
export const selectOAuthURL = (state) => state.auth.OAuthURL;
