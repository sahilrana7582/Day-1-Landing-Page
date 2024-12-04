import React from 'react';
import { communityLinks, platformLinks, resourcesLinks } from '../constants';

const Footer = () => {
  return (
    <>
      <div className="border border-white w-1/2 mx-auto my-20"></div>
      <div className="flex justify-evenly items-center gap-10 flex-wrap lg:flex-row mb-20">
        <div className="space-y-8">
          <h1 className="tracking-tight text-xl">Resources Links</h1>
          <div className="flex flex-col">
            {resourcesLinks.map((link) => (
              <a
                href={link.href}
                className="text-neutral-600 hover:text-neutral-400"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
        <div className="space-y-8">
          <h1 className="tracking-tight text-xl">Platform Links</h1>
          <div className="flex flex-col">
            {platformLinks.map((link) => (
              <a
                href={link.href}
                className="text-neutral-600 hover:text-neutral-400"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>{' '}
        <div className="space-y-8">
          <h1 className="tracking-tight text-xl">Community Links</h1>
          <div className="flex flex-col">
            {communityLinks.map((link) => (
              <a
                href={link.href}
                className="text-neutral-600 hover:text-neutral-400"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
