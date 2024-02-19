import Link from "next/link";
// hook 
import { usePathname } from "next/navigation";
const links = [
    { path: '/', name: 'home' },
    { path: '/projects', name: 'my projects' },
    { path: '/contact', name: 'contact' },

]
const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
    const path = usePathname();
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                return <Link key={index} href={link.path} className={`capitalize ${linkStyles}`}> {link.name}</Link>
            })}
        </nav>
    )
}

export default Nav