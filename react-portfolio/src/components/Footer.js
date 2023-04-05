import React from 'react';

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-white text-muted">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">ctrl C & ctrl V</h6>
            <p>
              <i className="fas fa-envelope me-3 text-secondary"></i>
              austinmcclarren7@gmail.com
            </p>
            <p><i className="fas fa-phone me-3 text-secondary"></i>352-552-7853</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;