import ImageList from "@/components/Gallery/ImageList";
import Card from "@/components/ui/Card";

const Gallery = () => {
  return (
    <Card title="Gallery" grid_item_class="fourth_item">
      <ImageList />
    </Card>
  );
};
export default Gallery;
