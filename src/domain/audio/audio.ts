import { instance } from "@/shared/api/instance";
import { action, atom, onConnect, reatomAsync } from "@reatom/framework";
import { RefObject } from "react";
import { AudioPlayerRef } from "react-audio-play";

export interface GetAllTracksDTO {
  audios: Track[];
}

export interface Track {
  id: number;
  track_id: string;
  lead_id: number;
  track_url: string;
}

export const tracksAtom = atom<Track[]>([], "tracksAtom");
export const favouritesTracksAtom = atom<Track[]>([], "favouritesTracksAtom");

export const getAllTracksAsync = reatomAsync(
  async () => instance.post<GetAllTracksDTO>("/call/audio/get-all"),
  {
    name: "getAllTracksAsync",
    onFulfill: (_ctx, { data }) => {
      tracksAtom(_ctx, data.audios);
    },
  }
);

export const getFavouritesTracksAsync = reatomAsync(
  async () => instance.post<GetAllTracksDTO>("/call/audio/favourites"),
  {
    name: "getAllTracksAsync",
    onFulfill: (_ctx, { data }) => {
      tracksAtom(_ctx, data.audios);
    },
  }
);

onConnect(tracksAtom, getAllTracksAsync);
onConnect(favouritesTracksAtom, getFavouritesTracksAsync);

type PlayerActions = "play" | "pause" | "stop" | "focus";

export const activeTrackAtom = atom("", "activeTrackAtom");
export const playerStateAtom = atom<PlayerActions>("stop", "playerStateAtom");
export const playerRefAtom = atom<RefObject<AudioPlayerRef> | null>(
  null,
  "playerRefAtom"
);

playerStateAtom.onChange((ctx, newState) => {
  const ref = ctx.get(playerRefAtom);
  if (ref?.current) {
    ref.current[newState]();
  }
});

export const playerControlAction = action((ctx, url: string) => {
  const ref = ctx.get(playerRefAtom);
  const playerState = ctx.get(playerStateAtom);
  if (url !== "" && ref?.current) {
    if (
      playerState === "stop" ||
      playerState === "pause" ||
      url !== ctx.get(activeTrackAtom)
    ) {
      activeTrackAtom(ctx, url);
      playerStateAtom(ctx, "play");
    } else if (playerState === "play" && url === ctx.get(activeTrackAtom)) {
      playerStateAtom(ctx, "pause");
    }
  }
});

/* 
{
      id: 1,
      track_id: "string",
      lead_id: 0,
      track_url: "https://vk.com/audio474499284_456834392_1c3a1e478a853ab047",
    },

    {
      id: 1,
      track_id: "string",
      lead_id: 0,
      track_url: "https://vk.com/audio474499284_456834392_1c3a1e478a853ab047",
    },
    {
      id: 1,
      track_id: "string",
      lead_id: 0,
      track_url: "https://vk.com/audio474499284_456834392_1c3a1e478a853ab047",
    },
    {
      id: 1,
      track_id: "string",
      lead_id: 0,
      track_url: "https://vk.com/audio474499284_456834392_1c3a1e478a853ab047",
    },
*/
