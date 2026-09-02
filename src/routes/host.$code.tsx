import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useEffect, useRef, useState } from "react";
import QRCode from "react-qr-code";
import { TugOfWarArena } from "@/components/game/TugOfWarArena";
import { useCountdown, useGameState } from "@/hooks/useGameState";
import { controlRoom, createRoom } from "@/lib/game.functions";

export const Route = createFileRoute("/host/$code")({
  head: () => ({
    meta: [
      { title: "Ana Ekran — Halat Yarışı" },
      {
        name: "description",
        content: "Büyük ekran için halat çekme yarışması: QR kod, sorular ve canlı halat konumu.",
      },
      { property: "og:title", content: "Ana Ekran — Halat Yarışı" },
      {
        property: "og:description",
        content: "Sınıf ekranından yarışmayı yönet: QR kod, sorular, canlı halat konumu.",
      },
    ],
  }),
  component: HostScreen,
});

function HostScreen() {
  const { code } = Route.useParams();
  const navigate = useNavigate();
  const { data, isError, refetch } = useGameState(code);
  const control = useServerFn(controlRoom);
  const create = useServerFn(createRoom);
  const [pulse, setPulse] = useState<1 | 2 | null>(null);
  const prevPos = useRef(0);

  const q = data?.question ?? null;
  const remaining = useCountdown(q?.startedAt, q?.timeLimit ?? 20, data?.status === "PLAYING");

  useEffect(() => {
    if (!data) return;
    if (data.ropePosition !== prevPos.current) {
      setPulse(data.ropePosition < prevPos.current ? 1 : 2);
      prevPos.current = data.ropePosition;
      const id = setTimeout(() => setPulse(null), 700);
      return () => clearTimeout(id);
    }
    return undefined;
  }, [data?.ropePosition, data]);

  const joinUrl =
    typeof window !== "undefined" ? `${window.location.origin}/play/${code}` : `/play/${code}`;

  const act = (action: string) => void control({ data: { code, action } }).then(() => refetch());

  if (isError)
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-lg font-bold text-foreground">Bağlantı yeniden kuruluyor...</p>
      </main>
    );
  if (!data)
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-lg font-bold text-muted-foreground">Yükleniyor...</p>
      </main>
    );

  const team1 = data.players.find((p) => p.team === 1);
  const team2 = data.players.find((p) => p.team === 2);
  const waiting = data.status === "WAITING" || data.status === "READY";

  return (
    <main className="min-h-screen bg-background px-4 py-6 sm:px-8">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="rounded-[var(--radius)] bg-panel p-5 shadow-[var(--shadow-panel)] sm:p-10">
          {waiting ? (
            <section className="flex flex-col items-center py-6 text-center">
              <p className="text-xs font-semibold tracking-[0.35em] text-muted-foreground">
                ODA KODU
              </p>
              <h1 className="mt-2 text-5xl font-extrabold tracking-[0.2em] text-foreground">
                {code}
              </h1>
              <div className="mt-8 rounded-3xl border-4 border-foreground p-5">
                <QRCode value={joinUrl} size={220} bgColor="transparent" fgColor="#111827" />
              </div>
              <p className="mt-6 text-base font-bold tracking-[0.2em] text-foreground sm:text-lg">
                TELEFONUNUZLA QR KODU OKUTUN
              </p>
              <div className="mt-8 grid w-full max-w-2xl gap-4 sm:grid-cols-2">
                <TeamSlot team={1} name={team1?.name} connected={team1?.connected} />
                <TeamSlot team={2} name={team2?.name} connected={team2?.connected} />
              </div>
              {data.players.length === 2 && (
                <p className="mt-8 text-2xl font-extrabold text-foreground">İKİ OYUNCU HAZIR!</p>
              )}
            </section>
          ) : data.status === "FINISHED" ? (
            <section className="py-10 text-center">
              <h1 className="text-5xl font-extrabold text-foreground sm:text-6xl">
                {data.winner === "TIE"
                  ? "BERABERE!"
                  : `🏆 TAKIM ${data.winner === "TEAM1" ? "1" : "2"} KAZANDI!`}
              </h1>
              <p className="mt-4 text-sm font-semibold tracking-[0.25em] text-muted-foreground">
                {Math.abs(data.ropePosition) >= 100
                  ? "HALAT TAMAMEN ÇEKİLDİ"
                  : `${q?.total ?? 10} SORU TAMAMLANDI`}
              </p>
              <div className="mt-10">
                <TugOfWarArena ropePosition={data.ropePosition} />
              </div>
            </section>
          ) : (
            <section>
              <TugOfWarArena ropePosition={data.ropePosition} pulse={pulse} />
              <div className="mt-8 text-center">
                <p className="text-sm font-semibold tracking-[0.3em] text-muted-foreground sm:text-base">
                  SORU {q?.index ?? 1} / {q?.total ?? 10} • {(q?.category ?? "").toUpperCase()}
                </p>
                <h1 className="mx-auto mt-3 max-w-4xl text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">
                  {q?.question}
                </h1>
                <div className="mx-auto mt-6 grid max-w-4xl gap-3 sm:grid-cols-2">
                  {(["A", "B", "C", "D"] as const).map((l) => (
                    <div
                      key={l}
                      className="flex items-center gap-3 rounded-2xl border-2 border-border px-4 py-3 text-left text-lg font-semibold text-foreground"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-muted text-sm font-extrabold">
                        {l}
                      </span>
                      {q?.options[l]}
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-5xl font-extrabold tabular-nums text-foreground">
                  {data.status === "PAUSED" ? "DURAKLATILDI" : remaining}
                </p>
                <p className="mt-2 text-sm font-semibold text-muted-foreground">
                  Doğru cevabı ilk bulan takım halatı kendine çeker!
                </p>
              </div>
            </section>
          )}
        </div>

        {/* Yönetici paneli */}
        <div className="mt-5 grid gap-4 rounded-[var(--radius)] bg-panel p-5 shadow-[var(--shadow-panel)] sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="flex flex-wrap gap-4 text-sm font-semibold text-foreground">
            <StatusChip label="TAKIM 1" player={team1} />
            <StatusChip label="TAKIM 2" player={team2} />
            <span className="rounded-full bg-muted px-3 py-1 text-muted-foreground">
              HALAT: {data.ropePosition}
            </span>
            <span className="rounded-full bg-muted px-3 py-1 text-muted-foreground">
              DURUM: {data.status}
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {waiting && (
              <Ctrl onClick={() => act("start")} disabled={data.players.length < 2} primary>
                OYUNU BAŞLAT
              </Ctrl>
            )}
            {data.status === "PLAYING" && <Ctrl onClick={() => act("next")}>SONRAKİ SORU</Ctrl>}
            {data.status === "PLAYING" && <Ctrl onClick={() => act("pause")}>DURAKLAT</Ctrl>}
            {data.status === "PAUSED" && <Ctrl onClick={() => act("resume")}>DEVAM ET</Ctrl>}
            {!waiting && <Ctrl onClick={() => act("restart")}>YENİDEN BAŞLAT</Ctrl>}
            {data.status !== "FINISHED" && !waiting && (
              <Ctrl onClick={() => act("finish")}>OYUNU BİTİR</Ctrl>
            )}
            <Ctrl
              onClick={async () => {
                const res = await create();
                void navigate({ to: "/host/$code", params: { code: res.code } });
              }}
            >
              YENİ YARIŞMA
            </Ctrl>
          </div>
        </div>
      </div>
    </main>
  );
}

function TeamSlot({
  team,
  name,
  connected,
}: {
  team: 1 | 2;
  name?: string | undefined;
  connected?: boolean | undefined;
}) {
  return (
    <div className="rounded-2xl border-2 border-border px-5 py-4 text-left">
      <p
        className={`text-xs font-bold tracking-[0.25em] ${team === 1 ? "text-team1" : "text-team2"}`}
      >
        TAKIM {team}
      </p>
      <p className="mt-1 text-lg font-bold text-foreground">
        {name ? `${connected ? "🟢" : "🔴"} ${name}` : "Oyuncu bekleniyor..."}
      </p>
    </div>
  );
}

function StatusChip({
  label,
  player,
}: {
  label: string;
  player?: { name: string; connected: boolean } | undefined;
}) {
  return (
    <span className="rounded-full bg-muted px-3 py-1">
      {label}: {player ? player.name : "—"} •{" "}
      {player ? (player.connected ? "HAZIR" : "BAĞLANTI KESİLDİ") : "BEKLENİYOR"}
    </span>
  );
}

function Ctrl({
  children,
  onClick,
  disabled,
  primary,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  primary?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-xl px-4 py-2.5 text-sm font-bold transition-colors disabled:opacity-40 ${
        primary
          ? "bg-foreground text-background"
          : "border-2 border-border bg-panel text-foreground hover:bg-muted"
      }`}
    >
      {children}
    </button>
  );
}
