var footerNav = React.createElement(
        "div",
        { className: "kd-container" },
        React.createElement(
                "div",
                { className: "kd-content d-sm-flex justify-content-between py-3" },
                React.createElement(
                        "div",
                        { className: "" },
                        React.createElement(
                                "small",
                                { className: "d-block mb-3 text-muted" },
                                "\xA9 2021 Kassem Desing inc. All Rights Reserved"
                        )
                ),
                React.createElement(
                        "div",
                        { className: "" },
                        React.createElement(
                                "ul",
                                { className: "list-unstyled text-small text-sm-end" },
                                React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                                "a",
                                                { className: "link-secondary", href: "privacy-policy.html" },
                                                "Privacy Policy"
                                        )
                                )
                        )
                )
        )
);

var domContainer = document.querySelector('footer');

ReactDOM.render(footerNav, domContainer);