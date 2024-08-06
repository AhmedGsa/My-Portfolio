import Link from "next/link";
import { ReactNode } from "react";

export default function Button({ href, children }: { href: string, children: ReactNode }) {
    return <Link href={href} className='cta'>{children}</Link>
}