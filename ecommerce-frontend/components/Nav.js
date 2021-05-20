import Link from 'next/link'

export default function Nav() {
    return (
        <ul>
            <li>
                <Link href='/home'>
                    <a> Home </a>
                </Link>
            </li>
            <li>
                <Link href='/men'>
                    <a> Men </a>
                </Link>
            </li>
            <li>
                <Link href='/woman'>
                    <a> Woman </a>
                </Link>
            </li>
            <li>
                <Link href='/children'>
                    <a> Children </a>
                </Link>
            </li>
      </ul>
    )
}
