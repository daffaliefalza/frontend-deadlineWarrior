const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm md:text-base">
              Made with ❤️ by{" "}
              <span className="font-semibold">Deadline Warrior Team</span>
            </p>
            <p className="text-xs text-blue-100 mt-1">
              KADA Participant Batch 1
            </p>
          </div>
        </div>

        <div className="text-center mt-6 pt-6 border-t border-blue-500 border-opacity-30">
          <p className="text-xs text-blue-100">
            © {new Date().getFullYear()} KADA Bootcamp Project. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
