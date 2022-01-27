import { motion } from "framer-motion";

interface PixelProps {
  value: number;
  delay: number;
}

function Pixel(props: PixelProps) {
  return (
    <div className="w-6 h-6 md:w-12 md:h-12 bg-neutral-100 bg-opacity-40 rounded-md md:rounded-xl overflow-hidden rotate-12 mx-1">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: props.value.toString() + "%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: props.delay }}
        className="h-full bg-amber-500 bg-opacity-60"
      ></motion.div>
    </div>
  );
}

export default Pixel;
