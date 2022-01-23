import { motion } from "framer-motion";

interface IntroModalProps {
  onHide: () => void;
}

function IntroModal(props: IntroModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      transition={{ duration: 0.5 }}
      className="bg-neutral-100 bg-opacity-50 backdrop-blur-2xl absolute top-0 left-0 w-full h-screen flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.25 } }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full lg:w-1/2 lg:h-4/5 bg-neutral-100 bg-opacity-30 rounded-3xl border-4 border-neutral-100 border-opacity-30 p-10 text-left"
      >
        <div className="h-full">
          <div className="flex justify-end m-4">
            <button
              onClick={props.onHide}
              className="font-bold hover:opacity-80 active:opacity-60 transition-all"
            >
              Sluit
            </button>
          </div>
          <div className="overflow-y-auto h-full w-full">
            <p className="text-lg text-neutral-800 opacity-75">
              Est pariatur irure in cillum. Pariatur ipsum ad adipisicing aute
              cupidatat. Ut fugiat nostrud consequat duis cillum ullamco. Aute
              nulla incididunt deserunt aute excepteur quis officia cillum
              aliqua aliqua et do.Aliquip sit anim laboris ad aliqua nulla
              aliqua reprehenderit ex laborum. Ad sint fugiat irure proident
              consequat pariatur incididunt mollit et proident cupidatat quis.
              Nostrud cillum ullamco ut nisi excepteur magna cillum amet
              deserunt. Ut mollit adipisicing ut duis deserunt pariatur et. Duis
              elit amet ipsum do consequat id id laboris aliqua sit tempor esse
              ullamco. Elit proident nisi dolore amet. Commodo incididunt do et
              laborum exercitation id sit aute aliqua ut ea.Ex dolor est non
              pariatur mollit velit voluptate esse in nostrud occaecat est
              laboris ullamco. Sunt dolore dolor aute non nisi nisi incididunt
              sit aliqua. Amet tempor minim qui exercitation culpa ex culpa amet
              fugiat quis consectetur. Qui elit consequat laborum adipisicing ex
              aliqua excepteur consectetur ipsum. Nulla anim dolor ullamco
              mollit duis nostrud adipisicing aliqua laborum ea nisi. Irure
              minim quis cillum velit pariatur deserunt in mollit in aliquip.Eu
              nostrud amet sint nostrud mollit enim adipisicing reprehenderit.
              Officia proident quis Lorem sunt adipisicing non laboris esse.
              Duis minim ut culpa elit duis anim. Sint veniam non elit consequat
              deserunt consectetur quis. Veniam culpa ipsum consectetur do
              deserunt nisi aute. Adipisicing quis nostrud aliqua sit in
              consectetur deserunt ullamco laboris elit irure ipsum
              dolore.Pariatur id culpa culpa et duis magna sint qui laboris qui.
              Culpa cillum eiusmod enim dolore irure culpa laboris. Est sint
              nisi et exercitation ullamco magna eu excepteur in mollit sit
              laborum adipisicing nostrud.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default IntroModal;
