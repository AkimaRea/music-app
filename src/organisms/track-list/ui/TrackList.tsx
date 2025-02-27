import { playerControlAction, Track } from "@/domain/audio/audio";
import { PlayIcon } from "@/shared/assets";
import { useAction } from "@reatom/npm-react";
import cn from "classnames";
import s from "./style.module.scss";
import { Fn } from "@reatom/framework";

interface TrackListProps {
  trackList: Track[];
  cell: (arg0: Track, arg1: Fn<[url: string], void>) => React.ReactNode;
}

export const TrackList = ({ trackList, cell }: TrackListProps) => {
  const playerControl = useAction(playerControlAction);

  return (
    <div>
      <div className={s.track_list__counter}>Найдено {trackList?.length}</div>
      <div className={s.track_list}>
        {trackList?.map((el) => cell(el, playerControl))}
      </div>
    </div>
  );
};
