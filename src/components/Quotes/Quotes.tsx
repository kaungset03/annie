import Card from "@/components/ui/Card";

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
  const quotes: Quote[] = await getDailyQuote();

  return (
    <Card title="Quote of the day" grid_item_class="fifth_item">
      <div className="w-full p-2 flex flex-col gap-y-2">
        <p className="text-center text-lg text-secondary font-medium">
          {quotes[0].q}
        </p>
        <strong className="text-right text-secondary font-medium text-sm">
          - {quotes[0].a}
        </strong>
      </div>
      <p className="text-sm text-center text-secondary">
        Inspirational quotes provided by{" "}
        <a href="https://zenquotes.io/" target="_blank" className="underline">
          ZenQuotes API
        </a>
      </p>
    </Card>
  );
};
export default Quotes;
