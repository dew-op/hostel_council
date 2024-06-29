const Card = ({name, img, position, org}) => {
    return (
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 border bg-[#F6F2F2] border-gray-200 rounded-lg shadow">
        <img className="w-full rounded-t-lg" src={img} alt={name} />
        <div className="px-5 py-2 text-left">
          <h5 className="text-xl font-lato font-extrabold text-gray-900">{name}</h5>
          <hr className="mb-1 w-1/2 border-b border-black" />
          <p className="font-normal text-gray-700">{position}</p>
          <p className="font-normal text-gray-700">{org}</p>
        </div>
      </div>
    );
  }
  
  export default Card;
  