import { atom } from "@reatom/framework";

export const launchParamsAtom = atom<any>({}, "launchParamsAtom");

export const userAtom = atom<any>({}, "userAtom");

launchParamsAtom.onChange((ctx, state) => {
  userAtom(ctx, state.initData.user);
});
