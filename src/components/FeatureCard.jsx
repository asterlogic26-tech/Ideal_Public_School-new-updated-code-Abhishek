const FeaturedCard = ({ title, desc, img, bg, rotate}) => {
    return (
        <>
          <div
            className={` ${bg} text-white w-[300px] md:w-[330px] rounded-3xl p-6 shadow-xl transition-all duration-300 card-float card-hover relative`}
            style={{ "--rotate": rotate, transform: `rotate(${rotate})` }}
          >
            <h3 className="font-kid text-2xl mb-4">
                {title}
            </h3>

            <p className="text-sm leading-relaxed mb-5">
                {desc}
            </p>

            <img
             src={img}
             alt={title}
             className="rounded-2xl w-full h-[160px] object-cover"
            />
          </div>
        </>
    );
};

export default FeaturedCard;