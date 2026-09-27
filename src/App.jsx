import { useEffect } from "react";
import Navbar from "./components/Navbar";
import MainQuote from "./components/MainQuote";
import QuoteCollection from "./components/QuoteCollection";
import useQuoteStore from "./store/useQuoteStore";

function App() {
  const fetchRandomQuote = useQuoteStore((state) => state.fetchRandomQuote);
  const fetchCollection = useQuoteStore((state) => state.fetchCollection);

  useEffect(() => {
    fetchRandomQuote();
    fetchCollection();
  }, []);

  return (
    <main className="min-h-screen px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <section className="overflow-hidden rounded-[28px] border border-black/5 bg-[#f7f8fc] shadow-[0_20px_70px_rgba(24,24,35,0.08)]">
          <Navbar />

          <div className="px-5 pb-14 pt-14 sm:px-10 sm:pb-20 sm:pt-20 lg:px-16 lg:pt-24">
            <MainQuote />

            <div className="mx-auto mt-20 max-w-6xl border-t border-black/8 pt-10 sm:mt-24">
              <QuoteCollection />
            </div>
          </div>
        </section>

        <footer className="px-2 py-7 text-center text-xs text-slate-500">
          Built with React, Tailwind CSS & DummyJSON
        </footer>
      </div>
    </main>
  );
}

export default App;
