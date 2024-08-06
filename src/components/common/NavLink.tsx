import Link from "next/link";

export default function NavLink({ href, children }: { href: string, children: string }) {
    return <li className="nav-link">
        <Link href={href}>{children}</Link>
    </li>
}