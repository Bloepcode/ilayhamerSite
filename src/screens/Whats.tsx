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
          Mollit ad veniam deserunt exercitation. Minim irure commodo excepteur
          dolore cupidatat sint qui anim nisi officia esse aute nostrud. Ex
          consequat adipisicing laborum ipsum irure est cupidatat in est culpa
          culpa nulla laboris.
        </p>
      </What>
      <What score={2.2} title="Unity" logo={<h1>PY</h1>}>
        <p className="text-lg text-neutral-50 opacity-75">
          Consequat incididunt et ea ullamco duis et fugiat et irure sit. Amet
          pariatur ea qui culpa ex deserunt. Qui quis magna esse esse mollit
          laboris fugiat labore officia ullamco mollit. Velit Lorem exercitation
          voluptate pariatur. Qui aliqua reprehenderit consectetur magna aute.
          Excepteur laborum labore est dolor tempor officia dolore enim
          cupidatat aliqua.
        </p>
      </What>
    </div>
  );
}

export default Whats;
