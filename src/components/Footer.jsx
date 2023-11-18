const Footer = () => {
  return (
    <>
      <div className="py-5 border bg-gray-100 flex justify-between px-72 ">
        <div className="flex justify-center">
          <p>@2023 Md Aftab Alam All Rights Reserved</p>
        </div>
        <div className="space-x-5">
          <a href="/about" className="hover:underline">
            About
          </a>
          <a href="/policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/licens" className="hover:underline">
            Licensing
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;
