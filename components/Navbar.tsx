import Link from "next/link";

export default function Navbar() {
    return (
        <nav id="navbar">
            <ul className="left-nav-list fill-height">
                <li className="fill-height center" style={{ width: '104px' }}>
                    <Link href="/">
                        <a className="fill-height fill-width center">
                            <object className="click-through" data="/logo-light.svg" type="image/svg+xml" style={{ height: '36px', width: '100%', opacity: '80%' }}>navbar-logo</object>
                        </a>
                    </Link>
                </li>
                <li className="fill-height center">
                    <div className="separator"></div>
                </li>
                <ul className="nav-items fill-height">
                    <li className="fill-height center">
                        <Link href="/#about">
                            <a className="nav-item fill-height center">About me</a>
                        </Link>
                    </li>
                    <li className="fill-height center">
                        <Link href="#projects">
                            <a className="nav-item fill-height center">Case studies</a>
                        </Link>
                    </li>
                </ul>
            </ul>
            <Link href="/contact">
                <div className="button center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1.9989C6.477 1.9989 2 6.4759 2 11.9989C2 13.1109 2.24099 14.4289 2.59399 15.4679L2.28101 16.7489C1.43801 20.1209 3.807 22.5629 7.188 21.7179L8.562 21.3739C9.637 21.7489 10.885 21.9989 12 21.9989C17.523 21.9989 22 17.5219 22 11.9989C22 6.4759 17.523 1.9989 12 1.9989ZM12 3.9989C16.418 3.9989 20 7.5809 20 11.9989C20 16.4169 16.418 19.9989 12 19.9989C11.007 19.9989 9.953 19.7809 9 19.4049C8.807 19.3289 8.60801 19.3239 8.40601 19.3739L6.71899 19.7799C4.81299 20.2569 3.73499 19.1829 4.21899 17.2489L4.59399 15.5929C4.63999 15.3949 4.637 15.1879 4.562 14.9989C4.198 14.0739 4 13.0189 4 11.9989C4 7.5809 7.582 3.9989 12 3.9989Z" fill="black" fillOpacity="0.4" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12ZM13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12ZM16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z" fill="black" />
                    </svg>
                    <a className="fill-height center">Contact me!</a>
                </div>
            </Link>
        </nav>
    );
}

if (typeof window !== "undefined") {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar")!.style.top = "0";
        } else {
            document.getElementById("navbar")!.style.top = "-72px";
        }
        prevScrollpos = currentScrollPos;
    }
}