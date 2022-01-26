import What from "../components/what/What";

function Whats() {
  return (
    <div className="w-full flex flex-col items-center">
      <What score={4.25} title="Python" logo={<h1>PY</h1>}>
        <p className="text-lg text-neutral-50 opacity-75">
          Laborum id laborum qui ex magna duis voluptate pariatur veniam minim
          eu id anim. Elit do enim sunt exercitation. Sunt dolore sit laboris
          nulla cupidatat officia consectetur consequat nostrud cupidatat
          adipisicing esse deserunt mollit.
        </p>
      </What>
      <What score={3.5} title="JavaScript" logo={<h1>JS</h1>}>
        <p className="text-lg text-neutral-50 opacity-75">
          Laborum id laborum qui ex magna duis voluptate pariatur veniam minim
          eu id anim. Elit do enim sunt exercitation. Sunt dolore sit laboris
          nulla cupidatat officia consectetur consequat nostrud cupidatat
          adipisicing esse deserunt mollit.
        </p>
      </What>
      <What score={1.8} title="Unity" logo={<h1>PY</h1>}>
        <p className="text-lg text-neutral-50 opacity-75">
          Laborum id laborum qui ex magna duis voluptate pariatur veniam minim
          eu id anim. Elit do enim sunt exercitation. Sunt dolore sit laboris
          nulla cupidatat officia consectetur consequat nostrud cupidatat
          adipisicing esse deserunt mollit.
        </p>
      </What>
    </div>
  );
}

export default Whats;
