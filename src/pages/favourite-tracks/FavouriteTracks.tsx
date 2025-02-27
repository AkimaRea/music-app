import { favouritesTracksAtom } from "@/domain/audio/audio";
import { TrackList } from "@/organisms/track-list";
import { MainLayout } from "@/templates/main-layout/";
import { useAtom } from "@reatom/npm-react";

export const FavouriteTracks = () => {
  const [tracks] = useAtom(favouritesTracksAtom);

  return (
    <MainLayout title="Любимые треки">
      <TrackList trackList={tracks} />
    </MainLayout>
  );
};
