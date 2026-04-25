// /**
//  * @license
//  * SPDX-License-Identifier: Apache-2.0
//  */

// import Header from './components/Header';
// import Hero from './components/Hero';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// export default function App() {
//   return (
//     <div className="relative selection:bg-brand-primary/30 selection:text-brand-primary">
//       <Header />
//       <main>
//         <Hero />
//         <Experience />
//         <Projects />
//         <Skills />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StatusModal from './components/StatusModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const triggerStatusModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="relative selection:bg-brand-primary/30 selection:text-brand-primary">
      <Header />
      <main>
        <Hero onPlaceholderClick={triggerStatusModal} />
        <Experience />
        <Projects onPlaceholderClick={triggerStatusModal} />
        <Skills />
        <Contact />
      </main>
      <Footer onPlaceholderClick={triggerStatusModal} />
      <StatusModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

