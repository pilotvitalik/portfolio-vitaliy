import type { NextPage } from 'next';

interface Props{
    title? : string;
}

const Button: NextPage<Props> = ({title}) => {
    return (
        <button>{title}</button>
    )
}

export default Button
