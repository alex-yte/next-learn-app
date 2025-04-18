//navigation menu component
import Link from 'next/link';

export default function Logo() {
    return (
        <div className="logo">
            <Link href="/">
                Denis Chirkov.dev
            </Link>
        </div>
    );
}
