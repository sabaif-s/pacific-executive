import Image from "next/image";

const AccountingCard = ({ 
  title = "Accounting Management",
  description = "Positions leading accounting and finance groups. Accounting Manager roles often require both Public Accounting (Big4 CPA) as well as experience in industry.",
  buttonText = "View Opportunities"
}) => {
  return (
    <div className="bg-white rounded-xl flex flex-col items-center gap-8 justify-between p-[1.4%] w-[31.3%] min-h-[342px] shadow-md overflow-hidden border border-gray-200 
      transition-all duration-300 hover:shadow-2xl hover:border-[#b1d28a] hover:-translate-y-2 hover:scale-[1.02]">
      
      <div className="w-full flex flex-col items-start">
        <h3 className="text-[18px] font-bold text-gray-800 mb-3 flex items-center">
          <Image
            src="/images/favicon.webp"
            width={32}
            height={32}
            alt="Favicon"
            className="mr-2"
          />
          {title}
        </h3>
        <p className="text-gray-600 mb-5 text-[16px] text-center">{description}</p>
      </div>
      
      <button className="bg-[#7cb43a] text-white px-6 py-2 cursor-pointer rounded-full transition-all duration-300 
        hover:bg-[#6aa034] hover:shadow-md hover:scale-105">
        {buttonText}
      </button>
    </div>
  );
};

export default AccountingCard;
