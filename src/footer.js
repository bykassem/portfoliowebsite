const footerNav = (
        <div className="kd-content d-sm-flex justify-content-between py-3">
                <div className="">
                        <small className="d-block mb-3 text-muted">
                                &copy; 2021 Kassem Desing inc. All Rights Reserved
                        </small>
                </div>
                <div className="">
                        <ul className="list-unstyled text-small text-sm-end">
                                <li>
                                        <a className="link-secondary" href="privacy-policy.html">
                                                Privacy Policy
                                        </a>
                                </li>
                        </ul>
                </div>
        </div>
);

const domContainer = document.querySelector('footer');

ReactDOM.render(footerNav, domContainer);
