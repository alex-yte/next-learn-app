//navigation menu component
import Link from 'next/link';

export default function Menu() {
    return (
        <nav>
            {/* <ul  className='flex justify-center gap-[1rem]' >
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
                    <Link className='underline' href="/projects">
                        Projects
                    </Link>
                </li>
                <li>
                    <Link className='underline' href="/contact">
                        Contacts
                    </Link>
                </li>

            </ul> */}
            <ul className="menu flex justify-center gap-[1rem]">
                <li className="menu_item">
                    <Link href="#hero">Home</Link>
                </li>
                <li className="menu_item">
                    <Link href="#about">About</Link>
                </li>
                <li className="menu_item">
                    <Link href="#projects">Projects</Link>
                </li>
                <li className="menu_item">
                    <Link href="#contacts">Contacts</Link>
                </li>
            </ul>
        </nav>
    );
}
