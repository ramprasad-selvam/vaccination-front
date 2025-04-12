interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick?: () => void;
    style?: string;
    ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({ text, type, disabled, onClick, style, ariaLabel }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={` ${style} my-1 px-4 py-2 bg-indigo-400 rounded-md hover:bg-indigo-300`}
            aria-label={ariaLabel}
        >
            {text}
        </button>
    );
}

export default Button;