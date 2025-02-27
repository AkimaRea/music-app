import {
  favouritesTracksAtom,
  togglefavouriteAsync,
} from "@/domain/audio/audio";
import { TrackList } from "@/organisms/track-list";
import { PlayIcon, StarIcon } from "@/shared/assets";
import { MainLayout } from "@/templates/main-layout/";
import { useAction, useAtom } from "@reatom/npm-react";
import cn from "classnames";
import s from "./style.module.scss";
import { Bounce, toast } from "react-toastify";

export const FavouriteTracks = () => {
  const [tracks] = useAtom(favouritesTracksAtom);
  const togglefavourite = useAction(togglefavouriteAsync);

  return (
    <MainLayout title="Любимые треки">
      <TrackList
        trackList={tracks}
        cell={(el, playerControl) => (
          <div
            key={el.id}
            className={cn(s.item)}
          >
            <div className={s.itemLeft}>
              <button
                className={s.itemIcon}
                onClick={() => playerControl(el.track_url)}
              >
                <PlayIcon />
              </button>
              <div className={s.itemName}>{el.track_id}</div>
            </div>
            <button
              className={s.itemAuthor}
              onClick={() => {
                togglefavourite(el.track_id);
                toast("Трек удален из избранного", {
                  position: "bottom-center",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  transition: Bounce,
                });
              }}
            >
              <StarIcon strokeWidth={1} />
            </button>
          </div>
        )}
      />
    </MainLayout>
  );
};
