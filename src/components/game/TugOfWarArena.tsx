import teamPull from "@/assets/team-pull.png";

type Props = {
  /** -100 (Takım 1 kazandı) .. 0 (merkez) .. +100 (Takım 2 kazandı) */
  ropePosition: number;
  pulse?: 1 | 2 | null;
};

/** Halatın görsel dokusu: her iki tarafta ve ortada birebir aynı kalınlık/desen. */
const ROPE_STYLE: React.CSSProperties = {
  backgroundColor: "#c8a877",
  backgroundImage:
    "repeating-linear-gradient(115deg, rgba(0,0,0,0.28) 0 2px, rgba(0,0,0,0) 2px 7px, rgba(255,255,255,0.35) 7px 9px, rgba(0,0,0,0) 9px 14px)",
  border: "1px solid rgba(0,0,0,0.75)",
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
        <div className="h-full w-0 border-l-[3px] border-dashed border-foreground/70" />
      </div>

      <div className="relative flex items-center justify-between gap-2 px-1 sm:px-4">
        <img
          src={teamPull}
          alt="Takım 1 öğrencileri halatı çekiyor"
          width={1024}
          height={768}
          className="w-[34%] max-w-[420px] origin-center transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(${shift * 0.6}%) scale(${pulse === 1 ? 1.04 : 1})`,
          }}
        />

        {/* Halat + bayrak — görsellerdeki halatla aynı yükseklikte (görsel ortası) */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center">
          <div
            className="relative flex w-full items-center transition-transform duration-700 ease-out"
            style={{ transform: `translateX(${shift}%)` }}
          >
            <div className="h-[0.75cqw] min-h-[4px] w-full rounded-full" style={ROPE_STYLE} />
            <div className="absolute left-1/2 -translate-x-1/2">
              <div className="relative h-3 w-3 rounded-full bg-foreground">
                <div className="absolute bottom-1 left-1/2 h-9 w-[2px] bg-foreground" />
                <div className="absolute -top-9 left-1/2 h-5 w-8 bg-flag [clip-path:polygon(0_0,100%_28%,0_58%)]" />
              </div>
            </div>
          </div>
        </div>

        <img
          src={teamPull}
          alt="Takım 2 öğrencileri halatı çekiyor"
          width={1024}
          height={768}
          className="w-[34%] max-w-[420px] origin-center -scale-x-100 transition-transform duration-700 ease-out"
          style={{
            transform: `scaleX(-1) translateX(${-shift * 0.6}%) scale(${pulse === 2 ? 1.04 : 1})`,
          }}
        />
      </div>
    </div>
  );
}
