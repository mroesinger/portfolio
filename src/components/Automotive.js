import React, { useState } from "react";
export default function Automotive() {
  const [titleName, setTitleName] = useState(true);

  function handleTitle() {
    setTitleName(!titleName);
  }
  return (
    <div id="automotive">
      <div id="projects-title">
        <h3>Automotive Projects</h3>
      </div>
      <div id="ej22-container">
        <img id="ej22-image" src="EJ22.jpg" alt="ej22 engine" />
        <div>
          An engine swap that looks and works better than the original, is a
          Subaru EJ22 into a Volkswagen Vanagon 4WD.
        </div>
      </div>
      <div id="ej22-container">
        <img id="ej22-image" src="typeiv.jpeg" alt="ej22 engine" />
        <div>
          A freshly rebuilt VW Type-IV motor going into a classic bay window VW
          bus.
        </div>
      </div>
    </div>
  );
}

// import React, { useState } from "react";

// export default function Automotive() {
//   const [isBeforeImage, setIsBeforeImage] = useState(true);

//   function toggleImage() {
//     setIsBeforeImage(!isBeforeImage);
//   }

//   return (
//     <div id="automotive">
//       <div id="projects-title">
//         <h3>Automotive Projects:</h3>
//       </div>
//       <div id="ej22-container">
//         <img id="ej22-image" src="EJ22.jpg" alt="ej22 engine" />
//         <div>
//           An engine swap that looks and works better than the original, is a
//           Subaru EJ22 into a Volkswagen Vanagon 4WD.
//         </div>
//       </div>
//       <div id="ej22-container">
//         {isBeforeImage ? (
//           <>
//             <img id="ej22-image" src="typeiv.jpeg" alt="ej22 engine" />
//             <div>
//               A freshly rebuilt VW Type-IV motor going into a classic bay window
//               VW bus.
//             </div>
//           </>
//         ) : (
//           <>
//             <img id="ej22-image" src="beforetypeiv.jpg" alt="ej22 engine" />
//             <div>Crusty old motor in need of some love!</div>
//           </>
//         )}
//         <h4 id="switch" onClick={toggleImage}>
//           {isBeforeImage ? "see before" : " see after"}
//         </h4>
//       </div>
//     </div>
//   );
// }
