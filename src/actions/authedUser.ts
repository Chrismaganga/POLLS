interface User {
    id: string;
    password: string;
}

export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const LOGOUT_AUTHED_USER = "LOGOUT_AUTHED_USER";

export function setAuthedUser(authedUser: User) {
    return {
        type: SET_AUTHED_USER,
        authedUser,
    };
}

export function logoutAuthedUser() {
    return {
        type: LOGOUT_AUTHED_USER,
    };
}

export function handleLogin(username: string, password: string) {
    return (dispatch: (arg0: { type: string; authedUser: User; }) => void, getState: () => { users: Record<string, User>; }) => {
        const {users} = getState();

        const user = Object.values(users).find((user: User) => user.id === username && user.password === password);

        if (user) {
            return dispatch(setAuthedUser(user));
        }
    };
}

export function handleLogout() {
    return (dispatch: (arg0: { type: string }) => void) => {
        return dispatch(logoutAuthedUser());
    };
}
