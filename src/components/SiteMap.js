import React from "react";

function SiteMap() {
  return (
    <div className="sitemap-privacy-container">
      <h1>Site Map</h1>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>FAQ</li>
        <li>Private</li>
        <ul>
          <li>Profile</li>
          <li>My family</li>
          <li>Families</li>
        </ul>
        <li>Social Media</li>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Youtube</li>
          <li>instagram</li>
        </ul>
        <li>Newsletter</li>
      </ul>
    </div>
  );
}

export default SiteMap;
