'use client';

import { UserType } from '@/features/auth/type.auth';

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';
type UserContextType = {
  user: UserType | null;
  addUser: (user: UserType) => void;
  removeUser: () => void;
};

const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserProvider = ({
  children,
  currentUser,
}: {
  children: ReactNode;
  currentUser: UserType;
}) => {
  const [user, setUser] = useState<UserType | null>(currentUser);

  function addUser(user: UserType) {
    setUser(user);
  }
  function removeUser() {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, addUser, removeUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
