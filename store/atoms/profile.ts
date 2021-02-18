import { ProfileAtom } from "./../../models/ProfileAtom";
import { atom, AtomOptions } from "recoil";

const defaultData: AtomOptions<ProfileAtom> = {
  key: "profile",
  default: {
    name: "Test",
  },
};
export default atom<ProfileAtom>(defaultData);