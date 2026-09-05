import teamPull from "@/assets/team-pull.png";

type Props = {
  /** -100 (Takım 1 kazandı) .. 0 (merkez) .. +100 (Takım 2 kazandı) */
  ropePosition: number;
  pulse?: 1 | 2 | null;
};

/** Halatın görsel dokusu: görsellerdeki halatla aynı renk, kalınlık ve desen. */
const ROPE_STYLE: React.CSSProperties = {
  backgroundColor: "#8f6c48",
  backgroundImage:
    "linear-gradient(to bottom, rgba(255,255,255,0.35) 0 12%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.28) 78%, rgba(255,255,255,0.18) 100%), repeating-linear-gradient(112deg, rgba(0,0,0,0.30) 0 2px, rgba(0,0,0,0) 2px 6px, rgba(255,255,255,0.22) 6px 8px, rgba(0,0,0,0) 8px 13px)",
};

/**
 * Ana oyun alanı: solda ve sağda ikişer öğrenci (aynı görsel, sağ taraf aynalanmış),
 * ortadan geçen tek parça eşit kalınlıkta halat, kırmızı bayrak ve orta çizgi.
 */
export function TugOfWarArena({ ropePosition, pulse }: Props) {
  // Halatın merkezden kayması: -100..100 -> -22%..22%
  const shift = (ropePosition / 100) * 22;

  return (
    <div className="@container relative w-full select-none overflow-hidden">
      {/* Dikey kesikli orta çizgi */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 flex -translate-x-1/2 justify-center">
        <div className="h-full w-0 border-l-[3px] border-dashed border-foreground/20" />
      </div>

      <div className="relative flex items-center justify-between gap-2 px-1 sm:px-4">
        {/* Halat — öğrencilerin arkasında kalır, böylece halat elleri kesmez */}
        <div className="pointer-events-none absolute inset-x-0 top-[40.7%] z-0 flex -translate-y-1/2 items-center">
          <div
            className="relative flex w-full items-center transition-transform duration-700 ease-out"
            style={{ transform: `translateX(${shift}%)` }}
          >
            <div className="h-[0.538cqw] min-h-[4px] w-full rounded-full" style={ROPE_STYLE} />
          </div>
        </div>

        <img
          src={teamPull}
          alt="Takım 1 öğrencileri halatı çekiyor"
          width={1200}
          height={896}
          className="relative z-10 w-[34%] max-w-[420px] origin-center transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(${shift * 0.6}%) scale(${pulse === 1 ? 1.04 : 1})`,
          }}
        />

        {/* Kırmızı bayrak — halatın ortasında, halatın üstünde durur */}
        <div className="pointer-events-none absolute inset-x-0 top-[40.7%] z-20 flex -translate-y-1/2 items-center">
          <div
            className="relative flex w-full items-center transition-transform duration-700 ease-out"
            style={{ transform: `translateX(${shift}%)` }}
          >
            <div className="absolute left-1/2 -translate-x-1/2">
              <div className="relative h-2 w-2 rounded-full bg-foreground/80">
                <div className="absolute -top-8 left-1/2 h-8 w-[2px] bg-foreground/80" />
                <div className="absolute -top-8 left-1/2 h-5 w-8 bg-flag [clip-path:polygon(0_0,100%_28%,0_58%)]" />
              </div>
            </div>
          </div>
        </div>

        <img
          src={teamPull}
          alt="Takım 2 öğrencileri halatı çekiyor"
          width={1200}
          height={896}
          className="relative z-10 w-[34%] max-w-[420px] origin-center transition-transform duration-700 ease-out"
          style={{
            transform: `scaleX(-1) translateX(${-shift * 0.6}%) scale(${pulse === 2 ? 1.04 : 1})`,
          }}
        />
      </div>
    </div>
  );
}
