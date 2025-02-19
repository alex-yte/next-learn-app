//navigation menu component
import Link from 'next/link';

export default function Menu() {
    return (
        <nav>
            <ul  className='flex justify-center gap-[1rem]' >
                <li>
                    <Link className='underline' href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className='underline' href="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className='underline' href="/contact">
                        Contact
                    </Link>
                </li>
                <li>
                    <Link className='underline' href="/blog">
                        Blog
                    </Link>
                </li>
                <li>
                    <Link className='underline' href="/admin/posts">
                        Admin
                    </Link>
                </li>
                <li>
                    <Link className='underline' href="/admin/dashboard">
                        Dashboard
                    </Link>
                </li>

            </ul>
        </nav>
    );
}
