import { playerControlAction, Track } from "@/domain/audio/audio";
import { PlayIcon } from "@/shared/assets";
import { useAction } from "@reatom/npm-react";
import cn from "classnames";
import s from "./style.module.scss";

interface TrackListProps {
  trackList: Track[];
}

export const TrackList = ({ trackList }: TrackListProps) => {
  const playerControl = useAction(playerControlAction);
  return (
    <div>
      <div className={s.track_list__counter}>Найдено {trackList?.length}</div>
      <div className={s.track_list}>
        {trackList?.map((el) => (
          <button
            onClick={() => playerControl(el.track_url)}
            key={el.id}
            className={cn(s.track_list__item)}
          >
            <div className={s.track_list__itemLeft}>
              <div className={s.track_list__itemIcon}>
                <PlayIcon />
              </div>
              <div className={s.track_list__itemName}>{el.track_id}</div>
            </div>
            <div className={s.track_list__itemAuthor}>{el.lead_id}</div>
          </button>
        ))}
      </div>
    </div>
  );
};
