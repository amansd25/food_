import { IMG_CDN_URL } from "../contants";
const ResturantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
}) => {
    return(
        <div className="card w-60 p-2 m-2 shadow-lg bg-purple-200">
            <img src={IMG_CDN_URL + cloudinaryImageId} alt="" />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(",")}</h3>
        </div>
    );
};
export default ResturantCard;