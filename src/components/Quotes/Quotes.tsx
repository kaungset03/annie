type Quote = {
  q: string;
  a: string;
  h: string;
};

const getDailyQuote = async (): Promise<Quote[]> => {
  const apiUrl = process.env.NEXT_QUOTE_API_URL as string;
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

const Quotes = async () => {
  const quotes = await getDailyQuote();

  return (
    <section className="fifth_item w-full h-full bg-slate-200/30 rounded-xl font-sans p-4">
      <h2 className="text-xl tracking-[0.3em] font-medium text-center uppercase">
        Quotes
      </h2>
      <div className="w-full p-2 mt-4 flex flex-col gap-y-2">
        <p className="text-center text-secondary font-medium">{quotes[0].q}</p>
        <strong className="text-right text-secondary font-medium text-sm">
          {quotes[0].a}
        </strong>
      </div>
      <p className="text-sm text-center text-secondary mt-4">
        Inspirational quotes provided by{" "}
        <a href="https://zenquotes.io/" target="_blank" className="underline">
          ZenQuotes API
        </a>
      </p>
    </section>
  );
};
export default Quotes;
