/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";



const Terms =()=>{
    return(
        <>
            <div className="terms">
              <div className="row">
                  <h3 style={{textAlign:'center', color:'dodgerblue', marginBottom:"2rem"}}>Terms and Conditions</h3>
                    <div className="col-12">

                        <p>Welcome to TransOne. By using our website and services, 
                           you agree to comply with the following terms and conditions.
                        </p>

                        <h4>1. Introduction</h4>
                        <p>1.1 These terms govern your use of TransOne services.
                          By accessing our website, you accept these terms in full.
                        </p>

                        <h4>2. User Accounts</h4>
                        <p>2.1 You may need to create an account to
                           use certain features. Provide accurate information and keep it updated.
                        </p>
                        <p>2.2 You are responsible for maintaining the confidentiality
                            of your account and for all activities under your account.
                        </p>

                        <h4>3. Use of Services</h4>
                        <p>3.1 Use TransOne services for lawful purposes only.  </p>
                        <p>3.2 Do not engage in any fraudulent activities, distribute harmful content, or infringe on others' rights.</p>
                      
                        <h4>4. Flight Search and Booking</h4>
                        <p>4.1 TransOne helps you find and compare flight prices but does not operate as a travel agency or airline.</p>
                        <p>4.2 We strive for accuracy but cannot guarantee the availability or accuracy of flight information.</p>
                        <p>4.3 Bookings made through third-party websites are subject to their terms.</p>

                        <h4>5. Health Tips</h4>
                        <p>5.1 Our health tips are for general information only, not professional medical advice.</p>
                        <p>5.2 Consult a healthcare provider for medical advice. TransOne is not responsible for any health issues during travel.</p>
                   
                        <h4>6. Intellectual Property</h4>
                        <p>6.1 TransOne owns the intellectual property rights for all material on this website.</p>
                        <p>6.2 You may use the material for personal purposes only. For other uses, seek written consent from TransOne.</p>

                        <h4>7. Limitation of Liability</h4>
                        <p>7.1 TransOne is not liable for any damages arising from your use of our services.</p>
                        <p>7.2 We do not guarantee the accuracy of the information provided on our website.</p>

                        <h4>8. Modifications</h4>
                        <p>8.1 TransOne may revise these terms. Continued use of services after changes constitutes acceptance of the new terms.</p>
                        
                        <h4>9. Governing Law</h4>
                        <p>9.1 These terms are governed by the laws of Republic Of Biafra</p>

                        <h4> Contact Information</h4>
                        <p>For any questions, contact us at: <Link to="/Contact-page">TransOne</Link></p>
                    </div>
              </div>
                <Link to="/">
                   <button className="btn btn-primary" style={{margin:'0 auto' , display:'block'}}><i className="bi bi-arrow-left-short"></i>Back To Home</button>
                </Link>
              
            </div>
        </>
    )
}

export default Terms;