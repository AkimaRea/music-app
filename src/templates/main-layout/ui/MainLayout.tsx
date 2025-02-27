import { activeTrackAtom, playerRefAtom } from "@/domain/audio/audio";
import { Header } from "@/organisms/header/Header";
import { useAtom } from "@reatom/npm-react";
import { useEffect, useRef } from "react";
import { AudioPlayer, AudioPlayerRef } from "react-audio-play";
import s from "./style.module.scss";
import { Link } from "react-router";
import { RouterPaths } from "@/shared/constants/router-paths";

interface MainLayoutProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
}

export const MainLayout = ({ children, title }: MainLayoutProps) => {
  const [activeTrack, setActiveTrack] = useAtom(activeTrackAtom);
  const [, setPlayerRef] = useAtom(playerRefAtom);

  const playerRef = useRef<AudioPlayerRef>(null);

  useEffect(() => {
    if (playerRef) {
      setPlayerRef(playerRef);
    }
  }, [playerRef]);

  return (
    <main className={s.layout}>
      <Header title={title} />
      <div className={s.track_list__player}>
        <AudioPlayer
          volume={20}
          autoPlay={activeTrack !== ""}
          volumePlacement="bottom"
          ref={playerRef}
          src={activeTrack}
          width="100%"
        />
      </div>
      <nav className={s.nav}>
        <Link
          to={RouterPaths.AllTracks}
          onClick={() => {
            setActiveTrack("");
          }}
        >
          Все
        </Link>
        <Link
          to={RouterPaths.FavouriteTracks}
          onClick={() => {
            setActiveTrack("");
          }}
        >
          Избранное
        </Link>
      </nav>
      {children}
    </main>
  );
};
