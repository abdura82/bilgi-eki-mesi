import teamLeft from "@/assets/team-left.png";
import teamRight from "@/assets/team-right.png";

type Props = {
  /** -100 (Takım 1 kazandı) .. 0 (merkez) .. +100 (Takım 2 kazandı) */
  ropePosition: number;
  pulse?: 1 | 2 | null;
};

/**
 * Ana oyun alanı: solda ve sağda ikişer öğrenci, ortadan geçen halat,
 * kırmızı bayrak ve dikey kesikli orta çizgi.
 */
export function TugOfWarArena({ ropePosition, pulse }: Props) {
  // Halatın merkezden kayması: -100..100 -> -22%..22%
  const shift = (ropePosition / 100) * 22;

  return (
    <div className="relative w-full select-none overflow-hidden">
      {/* Dikey kesikli orta çizgi */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 flex -translate-x-1/2 justify-center">
        <div className="h-full w-0 border-l-[3px] border-dashed border-foreground/70" />
      </div>

      <div className="relative flex items-end justify-between gap-2 px-1 sm:px-4">
        <img
          src={teamLeft}
          alt="Takım 1 öğrencileri halatı çekiyor"
          width={1024}
          height={768}
          className="w-[34%] max-w-[420px] origin-bottom transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(${shift * 0.6}%) scale(${pulse === 1 ? 1.04 : 1})`,
          }}
        />

        {/* Halat + bayrak */}
        <div className="pointer-events-none absolute inset-x-0 top-[42%] flex items-center">
          <div
            className="relative flex h-[6px] w-full items-center transition-transform duration-700 ease-out"
            style={{ transform: `translateX(${shift}%)` }}
          >
            <div className="h-[6px] w-full rounded-full bg-foreground" />
            <div className="absolute left-1/2 -translate-x-1/2">
              <div className="relative h-3 w-3 rounded-full bg-foreground">
                <div className="absolute bottom-1 left-1/2 h-9 w-[2px] bg-foreground" />
                <div className="absolute -top-9 left-1/2 h-5 w-8 bg-flag [clip-path:polygon(0_0,100%_28%,0_58%)]" />
              </div>
            </div>
          </div>
        </div>

        <img
          src={teamRight}
          alt="Takım 2 öğrencileri halatı çekiyor"
          width={1024}
          height={768}
          className="w-[34%] max-w-[420px] origin-bottom transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(${shift * 0.6}%) scale(${pulse === 2 ? 1.04 : 1})`,
          }}
        />
      </div>

      {/* Zemin çizgisi (merkez) */}
      <div className="mx-auto h-[2px] w-24 bg-gradient-to-r from-transparent via-foreground/40 to-transparent" />
    </div>
  );
}
