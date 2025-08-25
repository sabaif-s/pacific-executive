export default function FollowersCard({ count = 12417 }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-[2px]  w-[100px]">
      <div className="flex bg-white items-center w-full border-b-[1px] border-gray-200 ">
        <div className='bg-[#006097]' >
            <span className="text-white font-semibold text-sm m-2">in</span>
        </div>
        <span className="text-[#1D6491] font-semibold text-sm mx-2">Follow</span>
      </div>
      <div className="bg-white bg-transparent px-2 py-1 w-full text-center">
        <span className="text-[#1D6491]  font-bold">{count.toLocaleString()}</span>
      </div>
    </div>
  );
}
