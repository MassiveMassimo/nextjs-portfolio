import Link from "next/link";

export default function Navbar() {
    return (
        <nav id="navbar">
            <ul className="left-nav-list fill-height">
                <li className="fill-height center" style={{ width: '104px' }}>
                    <Link href="/">
                        <a className="fill-height center">
                            <object className="click-through" data="/logo-light.svg" type="image/svg+xml" style={{ height: '36px', width: '100%', opacity: '80%' }}>navbar-logo</object>
                        </a>
                    </Link>
                </li>
                <li className="fill-height center">
                    <div className="separator"></div>
                </li>
                <ul className="nav-items fill-height">
                    <li className="fill-height center">
                        <Link href="/about">
                            <a className="nav-item fill-height center">About me</a>
                        </Link>
                    </li>
                    <li className="fill-height center">
                        <Link href="/about">
                            <a className="nav-item fill-height center">Case studies</a>
                        </Link>
                    </li>
                </ul>
            </ul>
            <Link href="/contact">
                <a className="fill-height center">Contact</a>
            </Link>
        </nav>
    );
}

if (typeof window !== "undefined") {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-72px";
        }
        prevScrollpos = currentScrollPos;
    }
}