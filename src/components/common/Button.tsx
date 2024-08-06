export default function Button({ onClick, children }: { onClick: () => void, children: string }) {
    return <button onClick={onClick} className='cta'>{children}</button>
}