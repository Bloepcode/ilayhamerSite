interface ButtonPrimaryProps {
    children: React.ReactNode;
    onClick: () => void;
}


function ButtonPrimary(props: ButtonPrimaryProps) {
    return (
        <button className="bg-green-500 m-3 text-white rounded-xl w-40 h-12 transition-all hover:bg-opacity-80 active:bg-opacity-60" onClick={props.onClick}>{props.children}</button>
    )
}


export default ButtonPrimary;
