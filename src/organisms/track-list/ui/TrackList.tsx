import { playerControlAction, Track } from "@/domain/audio/audio";
import { Fn } from "@reatom/framework";
import { useAction } from "@reatom/npm-react";
import s from "./style.module.scss";

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
