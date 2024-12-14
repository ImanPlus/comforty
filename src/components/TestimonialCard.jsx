import PropTypes from "prop-types";
import doubleQuote from "../assets/double_quotes.png";

export default function TestimonialCard({ image, content, name, job }) {
  return (
    <div className="flex-1 mx-auto bg-white shadow-lg rounded-lg p-10 border border-gray-200 h-[400px]">
      <div className="border-l-4 border-cyan-600">
        <p className="ml-6 text-zinc-500 text-xl">{content}</p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-3">
          <img src={image} />
          <div>
            <h3 className="font-medium text-xl text-slate-800">{name}</h3>
            <p className="text-base text-zinc-400">{job}</p>
          </div>
        </div>
        <div>
          <img src={doubleQuote} alt="doubleQuote" />
        </div>
      </div>
    </div>
  );
}

TestimonialCard.propTypes = {
  image: PropTypes.string,
  content: PropTypes.string,
  name: PropTypes.string,
  job: PropTypes.string,
};
