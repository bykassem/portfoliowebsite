const headerNav = (
        <nav className="d-flex">
                <div className="d-flex">
                        <a className="me-3 kd-button kd-work-link" href="/#work">
                                Work
                        </a>
                        <a className="me-3 kd-button " href="/about.html">
                                About
                        </a>
                        <a className="kd-button kd-button-3d" href="mailto:design@bykassem.com">
                                Contact
                        </a>
                </div>
                <a className="py-2 me-3 " href="/">
                        <h1 className="site-title kd-h4">
                                Digital Product Design<span>by Kassem</span>
                        </h1>
                </a>
        </nav>
);

const domContainer = document.querySelector('header');

ReactDOM.render(headerNav, domContainer);
