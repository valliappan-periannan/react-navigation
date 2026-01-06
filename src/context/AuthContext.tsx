import { createContext, useState } from 'react';

const AuthContext = createContext<{
  isLoggedin: boolean;
  username: string;
  setIsLoggedin: (isLoggedin: boolean) => void;
  updateUsername: (username: string) => void;
}>({
  isLoggedin: false,
  username: '',
  setIsLoggedin: () => {},
  updateUsername: () => {},
});

export default AuthContext;

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState('');
  const [isLoggedin, setIsLoggedin] = useState(false);

  const updateUsername = (name: string) => {
    setUsername(name);
  };
  return (
    <AuthContext.Provider
      value={{ isLoggedin, username, setIsLoggedin, updateUsername }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
