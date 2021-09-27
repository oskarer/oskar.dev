const TimelineEntry = ({ image, time, title, text }) => (
  <div className="flex flex-col md:flex-row">
    <div className="flex flex-1 justify-center mb-4 lg:mb-0">
      {image}
    </div>
    <div className="w-[190px] timeline hidden md:block" />
    <div className="flex-1 mb-8 lg:mb-20">
      <h2 className="text-2xl font-black">{title}</h2>
      <h3 className="mb-6 text-xl font-normal">{time}</h3>
      <p>{text}</p>
    </div>
  </div>
);

export default TimelineEntry;
