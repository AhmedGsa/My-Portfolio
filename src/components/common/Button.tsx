import Link from "next/link";
import { ReactNode } from "react";

export default function Button({ href, children, onClick }: { href: string, children: ReactNode, onClick?: () => void }) {
    return <Link onClick={onClick} href={href} className='cta'>{children}</Link>
}