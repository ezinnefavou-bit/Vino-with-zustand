import { create } from "zustand";

const RANDOM_URL = "https://dummyjson.com/quotes/random";
const COLLECTION_URL = "https://dummyjson.com/quotes?limit=9";

const useQuoteStore = create((set) => ({
  quote: null,
  quotes: [],

  quoteLoading: true,
  collectionLoading: true,

  quoteError: "",
  collectionError: "",

  fetchRandomQuote: async () => {
    set({ quoteLoading: true, quoteError: "" });

    try {
      const response = await fetch(RANDOM_URL);

      if (!response.ok) {
        throw new Error("Unable to fetch a new quote.");
      }

      const data = await response.json();

      set({ quote: data });
    } catch (error) {
      set({ quoteError: error.message || "Something went wrong." });
    } finally {
      set({ quoteLoading: false });
    }
  },

  fetchCollection: async () => {
    set({ collectionLoading: true, collectionError: "" });

    try {
      const response = await fetch(COLLECTION_URL);

      if (!response.ok) {
        throw new Error("Unable to load the quote collection.");
      }

      const data = await response.json();

      set({ quotes: data.quotes });
    } catch (error) {
      set({ collectionError: error.message || "Something went wrong." });
    } finally {
      set({ collectionLoading: false });
    }
  },

  selectQuote: (selectedQuote) => {
    set({ quote: selectedQuote, quoteError: "" });
  },
}));

export default useQuoteStore;
