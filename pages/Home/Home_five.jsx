
import Link from "next/link";

const Home_five = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-center font-bold text-3xl py-5">Want To Supercharge Your Career Growth With Our AI Tool?</h1>
        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
            <h1 className="font-bold text-xl mb-4">Resume Intellect Builder</h1>
            <div className="flex items-center gap-2 font-medium mb-2">
              <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
              <span>AI Score</span>
            </div>
            <div className="flex items-center gap-2 font-medium mb-2">
              <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
              <span>AI Parsing</span>
            </div>
            <div className="flex items-center gap-2 font-medium mb-2">
              <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
              <span>Resume Building</span>
            </div>
            <div className="flex items-center gap-2 font-medium mb-2">
              <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
              <span>AI Enhancer</span>
            </div>
            <div className="flex items-center gap-2 font-medium mb-2">
              <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
              <span>Match & Apply</span>
            </div>
            <div className="flex items-center gap-2 font-medium mb-2">
              <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
              <span>AI Skill Test</span>
            </div>
            <div className="flex items-center gap-2 font-medium mb-2">
              <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
              <span>Skill Badges</span>
            </div>
            <div className="flex items-center gap-2 font-medium mb-2">
              <i className="fa-solid fa-check border-2 px-2 py-2 rounded-full text-white bg-green-500"></i>
              <span>& More</span>
            </div>
            <div className="flex justify-center mt-6">
            <Link href="/dashboard">
              <button className="px-6 py-3 rounded-2xl font-semibold text-white bg-blue-500 hover:bg-blue-600 shadow-md">
                Get Started For Free
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_five;
