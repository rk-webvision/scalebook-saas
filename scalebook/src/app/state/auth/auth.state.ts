// state/auth/auth.reducer.ts
export interface AuthState {
  user: any;
}

export const initialState: AuthState = {
  user: null
};