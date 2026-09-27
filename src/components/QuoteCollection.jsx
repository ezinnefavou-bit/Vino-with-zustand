import QuoteCard from "./QuoteCard";
import useQuoteStore from "../store/useQuoteStore";

function QuoteCollection() {
  const quotes = useQuoteStore((state) => state.quotes);
  const loading = useQuoteStore((state) => state.collectionLoading);
  const error = useQuoteStore((state) => state.collectionError);
  const selectQuote = useQuoteStore((state) => state.selectQuote);
  const onRetry = useQuoteStore((state) => state.fetchCollection);

  const handleSelectQuote = (selectedQuote) => {
    selectQuote(selectedQuote);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="collection">
      <div className="mb-7 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
            Browse
          </p>

          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-950">
            Quote collection
          </h2>
        </div>

        <p className="max-w-xs text-xs leading-5 text-slate-500 sm:text-right">
          Pick any card and bring its words to the spotlight.
        </p>
      </div>
      {loading && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 9 }).map((_, index) => (
            <div
              key={index}
              className="h-48 animate-pulse rounded-2xl border border-black/5 bg-white/70"
            />
          ))}
        </div>
      )}
      
      {!loading && error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-5 py-6 text-center">
          <p className="text-sm font-semibold text-red-700">{error}</p>

          <button
            onClick={onRetry}
            className="mt-4 rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400">
            Reload collection
          </button>
        </div>
      )}

      {!loading && !error && (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {quotes.map((quote) => (
            <QuoteCard
              key={quote.id}
              quote={quote}
              onClick={() => handleSelectQuote(quote)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default QuoteCollection;
