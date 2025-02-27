import { tracksAtom } from "@/domain/audio/audio";
import { TrackList } from "@/organisms/track-list";
import { MainLayout } from "@/templates/main-layout/";
import { useAtom } from "@reatom/npm-react";

export const AllTracks = () => {
  const [tracks] = useAtom(tracksAtom);

  return (
    <MainLayout title="Все треки">
      <TrackList trackList={tracks} />
    </MainLayout>
  );
};
