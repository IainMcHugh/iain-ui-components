import type { ReactNode } from 'react';

interface IButton {
    children: ReactNode;
}

function Button({children}: IButton) {
    return <button>{children}</button>
}

export default Button;