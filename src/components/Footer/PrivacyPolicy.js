import React from "react";
import ToggleContent from "../ToggleContent";

function PrivacyPolicy() {
  return (
    <div className="sitemap-privacy-container">
      <h1>Privacy Policy</h1>
      <div className="privacy-parts">
        <p>
          This privacy policy will help you understand how Parents Help Parents
          uses and protects the data you provide to us when you visit and use
          www.parentshelpparents.com. We reserve the right to change this policy
          at any given time, of which you will be promptly updated. If you want
          to make sure that you are up to date with the latest changes, we
          advise you to frequently visit this page.
        </p>
      </div>
      <ToggleContent
        toggle={show => (
          <button className="open-faq" onClick={show}>
            What User Data We Collect?
          </button>
        )}
        content={hide => (
          <div>
            <p>
              When you visit the website, we may collect the following data:
            </p>
            <ul>
              <li>Your IP address.</li>
              <li>Your contact information and email address.</li>
              <li>Other information such as interests and preferences.</li>
              <li>
                Data profile regarding your online behavior on our website.
              </li>
            </ul>
            <div className="close-faq">
              <button className="close-faq-2" onClick={hide}>
                Close
              </button>
            </div>
          </div>
        )}
      />
      <ToggleContent
        toggle={show => (
          <button className="open-faq" onClick={show}>
            Why We Collect Your Data?
          </button>
        )}
        content={hide => (
          <div>
            <p>We are collecting your data for several reasons:</p>
            <ul>
              <li>To better understand your needs</li>
              <li>To improve our services and products</li>
              <li>
                To send you promotional emails containing the information we
                think you will find interesting.
              </li>
              <li>
                To contact you to fill out surveys and participate in other
                types of market research
              </li>
              <li>
                To customize our website according to your online behavior and
                personal preferences.
              </li>
            </ul>
            <div className="close-faq">
              <button className="close-faq-2" onClick={hide}>
                Close
              </button>
            </div>
          </div>
        )}
      />
      <ToggleContent
        toggle={show => (
          <button className="open-faq" onClick={show}>
            Safeguarding and Securing the Data
          </button>
        )}
        content={hide => (
          <div>
            <p>
              Parents Help Parents is committed to securing your data and
              keeping it confidential. Parents help Parents has done all in its
              power to prevent data theft, unauthorized access, and disclosure
              by implementing the latest technologies and software, which help
              us safeguard all the information we collect online.
            </p>
            <div className="close-faq">
              <button className="close-faq-2" onClick={hide}>
                Close
              </button>
            </div>
          </div>
        )}
      />
      <ToggleContent
        toggle={show => (
          <button className="open-faq" onClick={show}>
            Our Cookie Policy
          </button>
        )}
        content={hide => (
          <div>
            <p>
              Once you agree to allow our website to use cookies, you also agree
              to use the data it collects regarding your online behavior
              (analyze web traffic, web pages you spend the most time on, and
              websites you visit). The data we collect by using cookies is used
              to customize our website to your needs. After we use the data for
              statistical analysis, the data is completely removed from our
              systems. Please note that cookies don't allow us to gain control
              of your computer in any way. They are strictly used to monitor
              which pages you find useful and which you do not so that we can
              provide a better experience for you. Terms and conditions template
              by WebsitePolicies.com If you want to disable cookies, you can do
              it by accessing the settings of your internet browser. (Provide
              links for cookie settings for major internet browsers).
            </p>
            <div className="close-faq">
              <button className="close-faq-2" onClick={hide}>
                Close
              </button>
            </div>
          </div>
        )}
      />
      <ToggleContent
        toggle={show => (
          <button className="open-faq" onClick={show}>
            Links to Other Websites
          </button>
        )}
        content={hide => (
          <div>
            <p>
              Our website contains links that lead to other websites. If you
              click on these links Parets help Parents is not held responsible
              for your data and privacy protection. Visiting those websites is
              not governed by this privacy policy agreement. Make sure to read
              the privacy policy documentation of the website you go to from our
              website.
            </p>
            <div className="close-faq">
              <button className="close-faq-2" onClick={hide}>
                Close
              </button>
            </div>
          </div>
        )}
      />
      <ToggleContent
        toggle={show => (
          <button className="open-faq" onClick={show}>
            Restricting the Collection of your Personal Data
          </button>
        )}
        content={hide => (
          <div>
            <p>
              At some point, you might wish to restrict the use and collection
              of your personal data. You can achieve this by doing the
              following: When you are filling the forms on the website, make
              sure to check if there is a box which you can leave unchecked, if
              you don't want to disclose your personal information. If you have
              already agreed to share your information with us, feel free to
              contact us via email and we will be more than happy to change this
              for you. Parents help Parents will not lease, sell or distribute
              your personal information to any third parties, unless we have
              your permission. We might do so if the law forces us. Your
              personal information will be used when we need to send you
              promotional materials if you agree to this privacy policy
            </p>
            <div className="close-faq">
              <button className="close-faq-2" onClick={hide}>
                Close
              </button>
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default PrivacyPolicy;
