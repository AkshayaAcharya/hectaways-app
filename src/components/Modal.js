import React from 'react';

const Modal = ({ handleClose, show, contentTitle}) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const modalBody = contentTitle === "Income Tax" ?
    <div>
        <p>Tax planning and preparation form a winning combination for our successful individual and business clients. Whether you are an individual or a business entity, our experienced staff can develop tax strategies that take advantage of new tax laws and legislation. 
        </p>
        <p>We undertake all filings and compliance activities under the Income Tax Act. such as</p>
        <ul className="listing">
              <li>Preparation and Filing of Income Tax Returns,</li>
              <li>TDS registration</li>
              <li>Filing of TDS Returns,</li>
              <li>Advance tax payments and calculations, etc.,</li>
        </ul></div>: contentTitle === "GST" ?
        <div><p>Our team, comprising expert professionals in all matters of GST, will ensure better compliance of all GST laws and amendments on the part of our clients. </p>
        <p>We also undertake the </p>
        <ul className="listing">
              <li>Filing of all GST returns and</li>
              <li>Consultancy on GST-related matters.</li>
              <li>GST Refund</li>
        </ul>
        </div>:contentTitle === "Accounting & Book Keeping" ?
        <div><p>Providing financial information to our clients in a timely and accurate manner is a commitment that we feel cannot be compromised. Meaningful, well-organized financial records ensure that your business operations will run more efficiently on a daily basis.</p>
        <p>Our firm provides a full range of accounting services, including the following:</p>
        <ul className="listing">
              <li>Financial statement preparation</li>
              <li>Bookkeeping (Monthly/Quarterly/Annually)</li>
              <li>Accounting system setup for new businesses</li>
              <li>Personal financial statements</li>
        </ul>
        </div>:contentTitle === "Payroll Management" ?
        <div>
        <p>We assist our clients in implementing the controls necessary to ensure a reliable, efficient, and effective payroll system. Our firm can also help you develop a payroll system and prepare all the required payroll tax returns on time.</p> 
        <p>Our payroll process includes </p>
        <ul className="listing">
            <li>pre-tax deductions,</li>
            <li>state payroll filings, and related payroll issues.</li>
        </ul>
        </div>:contentTitle === "Statutory Compliance" ?
        <div><p>The landscape of laws and statutes is constantly evolving. It takes special agility to keep abreast of all the latest developments and ensure compliance. Therefore, it is imperative to comply with all legal and statutory norms for businesses to operate successfully in India.  At Hectaways Business Solutions, we offer compliance services that perfectly meet your organization's requirements. No matter what the size of your organization is, we will ensure optimum compliance of applicable laws and statutes.</p>
        <p>To know how we can help your organization with our range of Statutory and Compliance Outsourcing Services, schedule an appointment with us right away.</p>
       </div>:
       <div>
           <ul className="listing">
               <li>Performance Appraisal</li>
               <li>Assistance In decision making</li>
               <li>Design & development Accounting</li>
           </ul>
        </div>
    return ( 
      <div className={showHideClassName} onClick={handleClose}>
        <section className="modal-main">
            <div className="modal-dialog shadow ">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">{contentTitle}</h5>
                    {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button> */}
                </div>
                <div className="modal-body">
                {modalBody}
                </div>
                </div>
            </div>
        </section>
      </div>
    );
  };
export default Modal;