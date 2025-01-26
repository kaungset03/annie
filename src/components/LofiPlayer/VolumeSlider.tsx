const VolumeSlider = () => {
  return (
    <div className="col-span-4 w-full h-1 bg-primary rounded-md relative">
      <div className="absolute left-0 top-0 bottom-0 rounded-l-md bg-secondary w-1/2" />
      <button className="absolute size-[10px] rounded-full bg-secondary top-1/2 transform -translate-y-1/2 left-[49%]" />
    </div>
  );
};
export default VolumeSlider;
