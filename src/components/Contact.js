// import React from "react";

// export default function Contact() {
//   function copyToClipboard(text) {
//     navigator.clipboard.writeText(text);
//   }

//   function handleEmailClick() {
//     copyToClipboard("mroesinger@gmail.com");
//   }

//   return (
//     <div id="contact">
//       <div id="contact-container">
//         <div id="github-container">
//           <a href="https://www.github.com/mroesinger">
//             <img
//               id="github-icon"
//               alt="github cat"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4H3kSxWJ6ATMIjA-l52rsGhHX_op9lusqeetVIaWFxw&s"
//             />
//           </a>
//         </div>
//         <div id="linkedin-container">
//           <a href="https://www.linkedin.com/in/michael-roesinger">
//             <img
//               id="linkedin-icon"
//               alt="linkedin icon"
//               src="https://cdn3.iconfinder.com/data/icons/sociocons/256/linkedin-sociocon.png"
//             />
//           </a>
//         </div>
//         <div id="email-container">
//           <a href="#" onClick={handleEmailClick}>
//             <img
//               id="email-icon"
//               alt="email icon"
//               src="https://downloadr2.apkmirror.com/wp-content/uploads/2020/10/Gmail_round.png"
//             />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function Contact() {
  const [isEmailCopied, setIsEmailCopied] = useState(false);

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    setIsEmailCopied(true);
  }

  function handleEmailClick(event) {
    event.preventDefault();
    copyToClipboard("mroesinger@gmail.com");
  }

  return (
    <div id="contact">
      <div id="contact-container">
        <div id="github-container">
          <a href="https://www.github.com/mroesinger">
            <img
              id="github-icon"
              alt="github cat"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4H3kSxWJ6ATMIjA-l52rsGhHX_op9lusqeetVIaWFxw&s"
            />
          </a>
        </div>
        <div id="linkedin-container">
          <a href="https://www.linkedin.com/in/michael-roesinger">
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
        {isEmailCopied && <p>mroesinger@gmail.com copied to clipboard!</p>}
      </div>
    </div>
  );
}
