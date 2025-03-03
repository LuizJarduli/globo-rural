export interface AudioPlayer {
  play: (source: string) => void;
  onError: (error: unknown) => void;
  onClose: (code: number) => void;
}
