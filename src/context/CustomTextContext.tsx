import React, { createContext, useEffect, useRef, useState } from 'react';
import { Alert, TextInput } from 'react-native';

const CustomTextContext = createContext<{
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
    inputRef: React.RefObject<TextInput>;
}>({ userName: '', setUserName: () => {}, inputRef: null });

export default CustomTextContext;

const CustomTextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userName, setUserName] = useState<string>('');
const inputRef = useRef<TextInput>(null);
  useEffect(() => {
    if (userName.length > 5) {
      Alert.alert(
        'Name too long',
        'Please enter a name with 10 or fewer characters.',
        [{ text: 'OK', onPress: () => setUserName('') }],
      );
    }
  }, [userName]);

  return (
    <CustomTextContext.Provider value={{ userName, setUserName,inputRef }}>
      {children}
    </CustomTextContext.Provider>
  );
};

export { CustomTextProvider };
