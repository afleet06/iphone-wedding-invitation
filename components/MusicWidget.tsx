import { useRef } from "react";
import { motion } from "framer-motion";
import { useMusic } from "../src/music";

function formatTime(sec: number) {
  const safe = Number.isFinite(sec) && sec > 0 ? sec : 0;
  const m = Math.floor(safe / 60);
  const s = Math.floor(safe % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

interface MusicWidgetProps {
  onPlay?: () => void;
}

export function MusicWidget({ onPlay }: MusicWidgetProps = {}) {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const { track, playing, currentTime, duration, togglePlay, prev, next, seek } =
    useMusic();

  const handleTogglePlay = () => {
    if (!playing) onPlay?.();
    togglePlay();
  };

  const onSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = progressBarRef.current;
    if (!bar) return;
    const rect = bar.getBoundingClientRect();
    seek((e.clientX - rect.left) / rect.width);
  };

  const remaining = Math.max(0, duration - currentTime);
  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="w-[363px] rounded-3xl bg-white/15 backdrop-blur-2xl px-4 pt-3 pb-3.5"
      style={{
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.25), 0 8px 32px rgba(0,0,0,0.18)",
      }}
    >
      <div className="flex items-center justify-between gap-3 h-[38px]">
        <img src="/icons/music-waveform.svg" alt="" className="w-[18px] h-[21px] opacity-0" />
        <div className="flex-1 text-center leading-tight">
          <div className="text-white text-[15px] font-semibold tracking-tight">
            {track.title}
          </div>
          <div className="text-white/65 text-[14px]">{track.artist}</div>
        </div>
        <img src="/icons/music-waveform.svg" alt="" className="w-[18px] h-[21px]" />
      </div>

      <div className="mt-2 flex items-center gap-2">
        <span className="text-white/70 text-[11px] tabular-nums w-[26px]">
          {formatTime(currentTime)}
        </span>
        <div
          ref={progressBarRef}
          onClick={onSeek}
          className="flex-1 h-2 rounded-full bg-white/20 overflow-hidden cursor-pointer"
        >
          <div
            className="h-full bg-white rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="text-white/70 text-[11px] tabular-nums w-[31px] text-right">
          -{formatTime(remaining)}
        </span>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <button
          type="button"
          className="w-9 h-9 grid place-items-center text-white/90"
          aria-label="Yêu thích"
        >
          <img src="/icons/music-star.svg" alt="" className="w-[22px] h-[21px]" />
        </button>

        <div className="flex items-center gap-7">
          <motion.button
            type="button"
            onClick={prev}
            aria-label="Bài trước"
            className="grid place-items-center"
            whileTap={{ scale: 0.88 }}
            transition={{ type: "spring", stiffness: 700, damping: 22 }}
          >
            <img src="/icons/music-prev.svg" alt="" className="w-[33px] h-[19px]" />
          </motion.button>
          <motion.button
            type="button"
            onClick={handleTogglePlay}
            aria-label={playing ? "Tạm dừng" : "Phát"}
            className="relative grid place-items-center w-8 h-8"
            whileTap={{ scale: 0.88 }}
            transition={{ type: "spring", stiffness: 700, damping: 22 }}
          >
            <motion.img
              src="/icons/music-play.svg"
              alt=""
              className="absolute inset-0 m-auto h-[32px] w-auto"
              animate={{
                opacity: playing ? 0 : 1,
                scale: playing ? 0.3 : 1,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 24 }}
            />
            <motion.img
              src="/icons/music-pause.svg"
              alt=""
              className="absolute inset-0 m-auto h-[32px] w-auto"
              animate={{
                opacity: playing ? 1 : 0,
                scale: playing ? 1 : 0.3,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 24 }}
            />
          </motion.button>
          <motion.button
            type="button"
            onClick={next}
            aria-label="Bài tiếp"
            className="grid place-items-center"
            whileTap={{ scale: 0.88 }}
            transition={{ type: "spring", stiffness: 700, damping: 22 }}
          >
            <img src="/icons/music-next.svg" alt="" className="w-[33px] h-[19px]" />
          </motion.button>
        </div>

        <button
          type="button"
          className="w-9 h-9 grid place-items-center text-white/90"
          aria-label="AirPods"
        >
          <img src="/icons/music-airpods.svg" alt="" className="w-[27px] h-[18px]" />
        </button>
      </div>
    </div>
  );
}
