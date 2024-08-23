import Link from "next/link";

export default function NavLink({ href, children, onClick }: { href: string, children: string, onClick?: () => void }) {
    return <li className="nav-link" onClick={onClick}>
        <Link href={href}>{children}</Link>
    </li>
}