export default function Home() {
  const networks = [
    "Sui",
    "ApeChain",
    "Ronin",
    "Immutable",
    "Avalanche",
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-zinc-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <h1 className="text-2xl font-bold">NETWORK WARS</h1>

          <div className="text-sm text-zinc-400">
            Season 1 • 14 Days Left
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="text-6xl font-black tracking-tight">
          FIGHT FOR YOUR CHAIN
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Play games. Set records. Help your network dominate the leaderboard.
        </p>

        <button className="mt-10 rounded-xl bg-white px-8 py-4 font-bold text-black transition hover:scale-105">
          PLAY TETRIS
        </button>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h3 className="mb-6 text-3xl font-bold">Network Standings</h3>

        <div className="grid gap-4 md:grid-cols-5">
          {networks.map((network, index) => (
            <div
              key={network}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <div className="text-sm text-zinc-500">
                #{index + 1}
              </div>

              <div className="mt-2 text-xl font-bold">
                {network}
              </div>

              <div className="mt-4 text-zinc-400">
                0 Points
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <h3 className="mb-6 text-3xl font-bold">Games</h3>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h4 className="text-2xl font-bold">Tetris</h4>
            <p className="mt-3 text-zinc-400">
              Active Now
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h4 className="text-2xl font-bold">Flappy Bird</h4>
            <p className="mt-3 text-zinc-400">
              Coming Soon
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h4 className="text-2xl font-bold">Runner</h4>
            <p className="mt-3 text-zinc-400">
              Coming Soon
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}