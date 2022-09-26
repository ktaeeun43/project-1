import { atom } from "recoil";

const nav = atom({
  key: "Nav",
  default: "",
});

const listPageReLoading = atom({
  key: "listPageReLoading",
  defulat: "",
});

export { listPageReLoading, nav };
