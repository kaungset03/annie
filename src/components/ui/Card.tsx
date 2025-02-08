type CardProps = {
  title: string;
  grid_item_class:
    | "first_item"
    | "second_item"
    | "third_item"
    | "fourth_item"
    | "fifth_item";
  children: React.ReactNode;
};

const Card = ({ title, grid_item_class, children }: CardProps) => {
  //   Soft & Neutral: #F5F5F5 (Light grayish-white) – Keeps things clean and subtle.
  // Elegant & Dark: #1C262B (Very dark blue-gray) – Enhances contrast and depth.
  // Warm Contrast: #F4EAE0 (Soft beige) – Adds warmth without overpowering.
  // Muted Blue: #BFDCE5 (Dusty blue) – Creates a cohesive, soothing look.
  // Deep Teal: #1E4B5C (Rich teal) – Adds depth while staying in theme.
  return (
    <section
      className={`${grid_item_class} w-full h-full bg-background bg-opacity-50 rounded-xl p-4`}
    >
      <h2 className="text-xl uppercase text-center tracking-widest font-semibold mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
};
export default Card;
