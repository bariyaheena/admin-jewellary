const Footer = () => {
  return (
    <div className="flex w-full  items-center px-1 pb-8 pt-3 lg:px-8 xl:flex-row">
     
        <p className="mb-4 text-center text-sm text-white sm:!mb-0 md:text-base">
          ©{1900 + new Date().getYear()} Dhyana Jewellers All Rights Reserved.
        </p>
  
      </div>
     
  );
};

export default Footer;
