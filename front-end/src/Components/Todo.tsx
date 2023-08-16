import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface propsType {
  title: string;
  description: string;
  id: string;
  lastUpdated: string;
  route: string;
}

export default function Todo({
  title,
  description,
  id,
  route,
  lastUpdated,
}: propsType) {
  return (
    <Link className="w-[45%] " to={`/todoapp/${route}/${id}`}>
      <motion.div
        initial={{
          scale: 0.85,
          opacity: 0,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        className="w-full p-2 text-[#E2E3E7] border-2 border-[#40474D] shadow-md rounded flex justify-center flex-col relative"
      >
        <p className="text-2xl my-1 mb-2">{title}</p>
        <p className="text-xs font-medium">
          {description.length > 40
            ? description.slice(0, 41) + "...."
            : description}
        </p>
        <p className="text-xs mt-2 font-medium">{lastUpdated}</p>
        <p className="text-[8px] mt-2 font-medium">{id}</p>
      </motion.div>
    </Link>
  );
}
