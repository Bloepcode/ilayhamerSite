interface ButtonSecondaryProps {
    children: React.ReactNode;
    onClick: () => void;
}


function ButtonSecondary(props: ButtonSecondaryProps) {
    return (
        <button className="bg-neutral-100 bg-opacity-25 border-4 border-neutral-100 border-opacity-30 text-white rounded-xl w-40 h-12 transition-all m-3 hover:border-opacity-60 active:hover:bg-opacity-40" onClick={props.onClick}>{props.children}</button>
    )
}


export default ButtonSecondary;
