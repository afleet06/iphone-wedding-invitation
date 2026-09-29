export type MusicTrack = { file: string; title: string; artist: string };

export type MusicApi = {
  track: MusicTrack;
  playing: boolean;
  currentTime: number;
  duration: number;
  togglePlay: () => void;
  prev: () => void;
  next: () => void;
  /** ratio is 0..1 of the current track's duration. */
  seek: (ratio: number) => void;
};
