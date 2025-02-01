import ImageList from "@/components/Gallery/ImageList";

const Gallery = () => {
  return (
    <section className="fourth_item w-full h-full bg-slate-200/30 rounded-xl font-sans p-4">
      <h2 className="text-lg tracking-[0.3em] font-semibold text-center uppercase">
        Gallery
      </h2>
      <ImageList />
    </section>
  );
};
export default Gallery;
