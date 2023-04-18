// import React, { useState } from "react";

// export default function Contact() {
//   function copyToClipboard(text) {
//     navigator.clipboard.writeText(text);
//   }

//   function EmailIcon() {
//     const handleClick = () => {
//       copyToClipboard("weee");
//     };
//   }
//   return (
//     <div id="contact">
//       <div id="contact-container">
//         <div id="github-container">
//           <a href="https://www.github.com/">
//             <img
//               id="github-icon"
//               alt="github cat"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4H3kSxWJ6ATMIjA-l52rsGhHX_op9lusqeetVIaWFxw&s"
//             ></img>
//           </a>
//         </div>
//         <div id="linkedin-container">
//           <a href="https://www.linkedin.com/">
//             <img
//               id="linkedin-icon"
//               alt="linkedin icon"
//               src="https://cdn3.iconfinder.com/data/icons/sociocons/256/linkedin-sociocon.png"
//             ></img>
//           </a>
//         </div>
//         <div id="email-container">
//           <a href="#" onClick={handleClick}>
//             <img
//               id="email-icon"
//               alt="email icon"
//               src="https://downloadr2.apkmirror.com/wp-content/uploads/2020/10/Gmail_round.png"
//             ></img>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function Contact() {
  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }

  function handleEmailClick() {
    copyToClipboard("mroesinger@gmail.com");
    window.alert("mroesinger@gmail.com copied to clipboard");
  }

  return (
    <div id="contact">
      <div id="contact-container">
        <div id="github-container">
          <a href="https://www.github.com/">
            <img
              id="github-icon"
              alt="github cat"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4H3kSxWJ6ATMIjA-l52rsGhHX_op9lusqeetVIaWFxw&s"
            />
          </a>
        </div>
        <div id="linkedin-container">
          <a href="https://www.linkedin.com/">
            <img
              id="linkedin-icon"
              alt="linkedin icon"
              src="https://cdn3.iconfinder.com/data/icons/sociocons/256/linkedin-sociocon.png"
            />
          </a>
        </div>
        <div id="email-container">
          <a href="#" onClick={handleEmailClick}>
            <img
              id="email-icon"
              alt="email icon"
              src="https://downloadr2.apkmirror.com/wp-content/uploads/2020/10/Gmail_round.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
