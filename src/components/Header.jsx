import { Languages, User } from "lucide-react";

const Header = () => (
  <div className="px-6 mb-6">
    <div className="flex justify-between items-center mb-2">
      <div className="flex flex-col border-l-4 border-matte-gold pl-2 px-2 justify-center">
        <div className="font-bold font-quicksand">Asr - 4:45pm</div>
        <div className="font-thin font-montserrat text-sm text-off-white">
          Makkah
        </div>
      </div>

      <div className="flex space-x-4">
        <Languages />
        <User />
      </div>
    </div>
  </div>
);

export default Header;
