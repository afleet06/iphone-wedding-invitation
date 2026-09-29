import { motion, useTransform, type MotionValue } from "framer-motion";
import { Clock } from "../components/Clock";
import { MusicWidget } from "../components/MusicWidget";

interface LockScreenProps {
  y: MotionValue<number>;
  onUnlock: () => void;
}

export default function LockScreen({ y, onUnlock }: LockScreenProps) {
  const radius = useTransform(y, [-150, 0], [48, 0], { clamp: true });

  return (
    <motion.div
      style={{
        borderBottomLeftRadius: radius,
        borderBottomRightRadius: radius,
        backgroundImage: "url('/wallpaper-lock.jpeg')",
      }}
      onClick={onUnlock}
      className="relative w-full h-full font-sans bg-cover bg-center bg-no-repeat overflow-hidden cursor-pointer"
    >
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative h-full flex flex-col justify-between items-center pt-16 pb-12">
        <div className="pointer-events-none">
          <Clock />
        </div>

        <div className="flex flex-col items-center gap-8">
          <MusicWidget onPlay={() => setTimeout(onUnlock, 660)} />

          <div className="flex items-center gap-[180px]">
            <button
              type="button"
              onClick={(e) => e.stopPropagation()}
              aria-label="Đèn pin"
              className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-xl grid place-items-center"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)" }}
            >
              <img src="/icons/lock-flashlight.svg" alt="" className="w-[10px] h-[24px]" />
            </button>
            <button
              type="button"
              onClick={(e) => e.stopPropagation()}
              aria-label="Camera"
              className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-xl grid place-items-center"
              style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.25)" }}
            >
              <img src="/icons/lock-camera.svg" alt="" className="w-[20px] h-[16px]" />
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-white/20" />
      <div className="pointer-events-none absolute bottom-2 left-1/2 -translate-x-1/2 w-[134px] h-[5px] rounded-full bg-white" />
    </motion.div>
  );
}
