import { atom } from "@reatom/framework";

export const launchParamsAtom = atom<any>({}, "launchParamsAtom");
export const userAtom = atom<any>((ctx) => {
  return ctx.spy(launchParamsAtom).initData.user;
}, "launchParamsAtom");
