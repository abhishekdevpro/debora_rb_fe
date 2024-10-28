import { MdPictureAsPdf } from "react-icons/md";

const WinPrint = () => {

const print = () => {
    window.print();
  };

  return (
    <button
      aria-label="Print Resume"
      className="rounded-lg border-2 border-purple-800 px-10 p-2 font-bold  bg-white text-purple-800"
      onClick={print}
    >
      Print
    </button>
  );
};

export default WinPrint;
