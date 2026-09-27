import useQuoteStore from "../store/useQuoteStore";

function MainQuote() {
  const quote = useQuoteStore((state) => state.quote);
  const loading = useQuoteStore((state) => state.quoteLoading);
  const error = useQuoteStore((state) => state.quoteError);
  const onNewQuote = useQuoteStore((state) => state.fetchRandomQuote);

  return (
    <section
      id="about"
      className="mx-auto flex max-w-4xl flex-col items-center text-center">
      <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.24em] text-[#5b5df0]">
        A thought worth keeping when you think about our services
      </p>

      <div className="min-h-[245px] w-full">
        {loading && (
          <div
            className="mx-auto max-w-3xl animate-pulse pt-3"
            aria-label="Loading quote">
            <div className="mx-auto h-7 max-w-2xl rounded-full bg-slate-200/80 sm:h-10" />

            <div className="mx-auto mt-4 h-7 max-w-xl rounded-full bg-slate-200/80 sm:h-10" />

            <div className="mx-auto mt-4 h-7 max-w-md rounded-full bg-slate-200/80 sm:h-10" />

            <div className="mx-auto mt-8 h-4 w-32 rounded-full bg-slate-200/80" />
          </div>
        )}

        {!loading && error && (
          <div className="mx-auto max-w-md rounded-2xl border border-red-200 bg-red-50 px-5 py-5">
            <p className="text-sm font-semibold text-red-700">
              Couldn't load a quote.
            </p>

            <p className="mt-1 text-xs text-red-600">{error}</p>

            <button
              onClick={onNewQuote}
              className="mt-4 rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400">
              Try again
            </button>
          </div>
        )}
        {!loading && !error && quote && (
          <>
            <blockquote className="mx-auto max-w-[760px] text-balance text-[clamp(2.15rem,5vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-slate-950">
              “{quote.quote}”
            </blockquote>

            <p className="mt-7 text-sm font-medium text-slate-500">
              — {quote.author}
            </p>
          </>
        )}
      </div>
      <button
        onClick={onNewQuote}
        disabled={loading}
        className="group mt-7 inline-flex min-w-36 items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-xs font-bold text-white shadow-[0_10px_25px_rgba(15,23,42,0.15)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#5b5df0] hover:shadow-[0_12px_28px_rgba(91,93,240,0.25)] focus:outline-none focus:ring-2 focus:ring-[#5b5df0]/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:bg-slate-950">
        <span>{loading ? "Loading..." : "New quote"}</span>

        {!loading && (
          <span className="transition group-hover:translate-x-0.5">↗</span>
        )}
      </button>
    </section>
  );
}

export default MainQuote;
