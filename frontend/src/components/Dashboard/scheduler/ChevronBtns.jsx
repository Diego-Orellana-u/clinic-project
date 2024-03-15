import LeftIcon from "../../icons/LeftIcon";
import RightIcon from "../../icons/RightIcon";

export default function ChevronBtns({
  onSmallPrev,
  onSmallNext,
  onBigPrev,
  onBigNext,
}) {
  return (
    <div className="flex gap-x-6">
      <button
        onClick={onBigPrev ?? onSmallPrev}
        className="cursor-pointer text-gray-600"
      >
        <LeftIcon fill={"black"} />
      </button>
      <button
        onClick={onBigNext ?? onSmallNext}
        className="cursor-pointer text-gray-600"
      >
        <RightIcon fill={"black"} />
      </button>
    </div>
  );
}
