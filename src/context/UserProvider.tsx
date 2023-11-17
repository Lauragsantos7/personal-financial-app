import { useState } from "react";
import UserContext from "./UserContext";


type UserProviderProps = {
  children: React.ReactNode;
};

function UserProvider({ children }: UserProviderProps) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    street: "",
    houseNumber: "",
    complement: "",
    city: "",
    state: "",
    birthday: "",
  });

  const handleChange = ({target}: React.ChangeEvent<HTMLInputElement| HTMLSelectElement>) => {
    setUserData({
      ...userData,
      [target.name]: [target.value]
    })
  }

  const values = { userData, handleChange };

  return <UserContext.Provider value={values}>
    { children }
    </UserContext.Provider>;
}

export default UserProvider;
