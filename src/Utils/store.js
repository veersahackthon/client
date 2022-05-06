import create from "zustand";
import { persist } from "zustand/middleware";

let store = (set) => ({
  result: null,
  setResult: (newresult) => set((state) => ({ result: newresult })),
  phoneNumber: null,
  setPhoneNumber: (newNumber) => set((state) => ({ phoneNumber: newNumber })),
  isLoggedIn: false,
  login: () => set((state) => ({ isLoggedIn: true })),
  logout: () =>
    set((state) => ({
      isLoggedIn: false,
      user: null,
      jwt: null,
      result: null,
      phoneNumber: null,
    })),
  jwt: null,
  setJwt: (newJwt) => set((state) => ({ jwt: newJwt })),
  user: null,
  setUser: (newUser) => set((state) => ({ user: newUser })),
});

store = persist(store, { name: "veersa_hackathon_user_settings" });

const useStore = create(store);

export default useStore;
