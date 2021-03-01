var headerNav = React.createElement(
        "nav",
        { className: "d-flex" },
        React.createElement(
                "div",
                { className: "d-flex" },
                React.createElement(
                        "a",
                        { className: "me-3 kd-button kd-work-link", href: "/#work" },
                        "Work"
                ),
                React.createElement(
                        "a",
                        { className: "me-3 kd-button ", href: "/about.html" },
                        "About"
                ),
                React.createElement(
                        "a",
                        { className: "kd-button kd-button-3d", href: "mailto:design@bykassem.com" },
                        "Contact"
                )
        ),
        React.createElement(
                "a",
                { className: "py-2 me-3 ", href: "/" },
                React.createElement(
                        "h1",
                        { className: "site-title kd-h4" },
                        "Digital Product Design",
                        React.createElement(
                                "span",
                                null,
                                "by Kassem"
                        )
                )
        )
);

var domContainer = document.querySelector('header');

ReactDOM.render(headerNav, domContainer);