import { togglefavouriteAsync, tracksAtom } from "@/domain/audio/audio";
import { TrackList } from "@/organisms/track-list";
import { MainLayout } from "@/templates/main-layout/";
import { useAction, useAtom } from "@reatom/npm-react";
import s from "./style.module.scss";
import cn from "classnames";
import { PlayIcon, StarIcon } from "@/shared/assets";
import { toast, Bounce } from "react-toastify";

export const AllTracks = () => {
  const [tracks] = useAtom(tracksAtom);
  const togglefavourite = useAction(togglefavouriteAsync);

  return (
    <MainLayout title="Все треки">
      <TrackList
        trackList={tracks}
        cell={(el, playerControl) => (
          <div
            key={el.id}
            className={cn(s.item)}
          >
            <div className={s.itemLeft}>
              <button
                onClick={() => playerControl(el.track_url)}
                className={s.itemIcon}
              >
                <PlayIcon />
              </button>
              <div className={s.itemName}>{el.track_id}</div>
            </div>
            <button
              className={s.itemAuthor}
              onClick={() => {
                togglefavourite(el.track_id);
                toast("Трек добавлен в избранное", {
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
              <StarIcon
                fill="white"
                strokeWidth={1}
              />
            </button>
          </div>
        )}
      />
    </MainLayout>
  );
};
