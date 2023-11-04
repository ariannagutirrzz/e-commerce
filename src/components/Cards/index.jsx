const Card = () => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg ">
      <figure className="relative w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg  text-black text-xs m-2 px-3 py-0.5">Games</span>
        <img className="w-full h-full object-cover rounded-lg rounded-b-none" src="https://images.alphacoders.com/128/thumbbig-1282982.webp" alt="valorant" />
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white/80 w-6 h-6 m-2 p-1 rounded-lg">
            +
        </div>
      </figure>
      <p className="flex justify-between items-center rounded-lg rounded-t-none bg-black/10 px-2 h-18">
        <span className="text-sm font-medium">Valorant</span>
        <span className="text-lg font-medium">30$</span>
      </p>
    </div>
  );
};

export default Card;
