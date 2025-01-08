import React from "react";
import siteConfig from "../../siteconfig";

const Footer = () => {
  const { siteName, logoSrc2, smartLinks, contact, socialLinks, legal } =
    siteConfig;

  return (
    <div id="footer" className="bg-white-300 pt-44 pb-24">
      <footer className="bg-white">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            {/* logoSrc2 Section */}
            <div className="mb-6 md:mb-0">
              <a href="/" className="flex items-center">
                <img
                  src={logoSrc2}
                  className="h-32 me-3"
                  alt={`${siteName} Logo`}
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                  {siteName}
                </span>
              </a>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              {/* Contact Section */}
              <div>
                <h2 className="mb-6 text-sm font-semibold text-black uppercase">
                  Phone
                </h2>
                <ul className="text-black opacity-75 font-medium">
                  <li className="mb-4">
                    <a
                      href={`https://wa.me/${
                        contact.phone.replace(/\s+/g, "").split("+")[1]
                      }`}
                      className="hover:underline"
                    >
                      {contact.phone}
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Links Section */}
              <div>
                <h2 className="mb-6 text-sm font-semibold text-black uppercase">
                  Follow Us
                </h2>
                <div className="flex w-full mt-2 mb-8 -mx-2">
                  {Object.entries(smartLinks).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md"
                    >
                      <img
                        src={`/assets/Icon/${platform}.svg`}
                        alt={`${platform} Icon`}
                        className="h-6 w-6"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Legal Links Section */}
              <div>
                <h2 className="mb-6 text-sm font-semibold text-black uppercase">
                  Legal
                </h2>
                <ul className="text-black opacity-75 font-medium">
                  <li className="mb-4">
                    <a href={legal.privacyPolicy} className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href={legal.termsConditions} className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

          {/* Footer Bottom Section */}
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-black opacity-75 sm:text-center">
              © {new Date().getFullYear()}{" "}
              <a href="/" className="hover:underline">
                {siteName}
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
