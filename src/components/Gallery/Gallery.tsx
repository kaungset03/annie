const Gallery = () => {
  const images = [0, 1, 2, 3, 4, 5];
  return (
    <section className="fourth_item w-full h-full bg-slate-200/30 rounded-xl font-sans p-4">
      <h2 className="text-lg tracking-[0.3em] font-medium text-center uppercase">
        Gallery
      </h2>
      <ul className="w-full grid grid-cols-3 gap-3 flex-grow mt-6">
        {images.map((image) => (
          <li
            key={image}
            className="border-2 border-secondary rounded-lg w-full aspect-square flex justify-center items-center"
          >
            <span>{image}</span>
          </li>
        ))}
      </ul>
      <button className="w-full bg-secondary text-primary p-3 rounded-xl mt-6 flex items-center justify-center gap-x-2">
        View All
      </button>
    </section>
  );
};
export default Gallery;
