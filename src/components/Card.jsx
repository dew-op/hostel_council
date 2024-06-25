const Card = ({name, img, position, org}) => {
    return (
        <div class="w-1/5 bg-white border border-gray-200 rounded-lg shadow">
            <img class="w-full rounded-t-lg" src={img} alt="" />
            <div class="px-5 py-2 bg-[#F6F2F2] text-left">
                <h5 class="text-xl font-lato font-extrabold text-gray-900">{name}</h5>
                <hr className="mb-1 w-1/2 border-b border-black" />
                <p class="font-normal text-gray-700">{position}</p>
                <p class="font-normal text-gray-700">{org}</p>
            </div>
        </div>
    );
}

export default Card;
