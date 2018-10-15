export interface SessionState {
	accessToken: string;
	isAuthorized: boolean;
	sessionId: string;
}

export const initialState: SessionState = {
	accessToken: '',
	isAuthorized: false,
	sessionId: '',
};
