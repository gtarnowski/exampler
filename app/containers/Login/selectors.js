import { createSelector } from 'reselect';

const selectLoginDomain = state => state.login;

const makeSelectUser = () => createSelector(
    selectLoginDomain,
    state => state.get('user')
);

export {
    makeSelectUser
}
