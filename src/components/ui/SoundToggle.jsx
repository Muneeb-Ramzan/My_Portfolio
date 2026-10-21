import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundFX } from '../../utils/audio';

export default function SoundToggle() {
  const [isPlaying, setIsPlaying] = useState(!soundFX.isMuted);

  const handleToggle = () => {
    const active = soundFX.toggleMute();
    setIsPlaying(active);
  };

  return (
    <button
      onClick={handleToggle}
      onMouseEnter={() => soundFX.playHover()}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border border-cyan-500/30 hover:border-cyan-400 text-xs font-mono tracking-wide text-cyan-300 hover:text-white transition-all shadow-sm hover:shadow-cyan-500/20"
      title={isPlaying ? "Mute audio & ambient sound" : "Enable interactive audio & ambient sound"}
    >
      {isPlaying ? (
        <>
          <Volume2 className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span className="hidden sm:inline">AUDIO: ON</span>
          <div className="flex items-center gap-0.5 h-3">
            <span className="w-0.5 h-2 bg-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-0.5 h-3 bg-pink-400 animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-0.5 h-1.5 bg-cyan-400 animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-slate-400" />
          <span className="hidden sm:inline">AUDIO: OFF</span>
        </>
      )}
    </button>
  );
}
