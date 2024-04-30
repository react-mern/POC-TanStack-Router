export const useAuth = () => {
  const signIn = async (username: string) => {
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('username', username);
  };

  const signOut = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
  };

  const getUsername = () => {
    return localStorage.getItem('username') || '';
  };

  const isLogged = () => localStorage.getItem('isAuthenticated') === 'true';

  return { signIn, signOut, getUsername, isLogged };
};

export type AuthContext = ReturnType<typeof useAuth>;
