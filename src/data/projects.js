import imgBranding1 from '../assets/projects/mockup 1.jpg';
import imgBranding2 from '../assets/projects/tryga.jpg';
import imgEditorial1 from '../assets/projects/39d957204653777.66ac8f65b2db8.jpg';
import imgEditorial2 from '../assets/projects/a7dd6e204654817.66ac9340735ff.jpg';
import imgPackaging1 from '../assets/projects/coco cream.png';
import imgPackaging2 from '../assets/projects/face cream product deign.jpg';
import imgPackaging3 from '../assets/projects/perfume product design.jpg';
import imgDigital1 from '../assets/projects/sony 7m4.jpg';
import imgDigital2 from '../assets/projects/coffee.jpg';
import imgPoster1 from '../assets/projects/fashion poster.jpg';
import imgPoster2 from '../assets/projects/poster guitar.jpg';
import imgPoster3 from '../assets/projects/perfume  poster.jpg';
import imgApp1 from '../assets/projects/nfc card.jpg';
import imgApp2 from '../assets/projects/DMH NFC CARD.jpg';
import imgEditorial3 from '../assets/projects/ffaa04204654633.66ac92928c45d.jpg';
import imgConstruction1 from '../assets/projects/nexit constraction.jpg';
import imgPerfume1 from '../assets/projects/perfume.jpg';
import imgPoster4 from '../assets/projects/poster design 1.jpg';
import imgShoe1 from '../assets/projects/shoe.jpg';
import imgPackaging4 from '../assets/projects/face cream product designs.jpg';
import imgPackaging5 from '../assets/projects/masala chips.jpg';

const projects = [
  {
    id: 22,
    slug: 'gooddoc-mobile-app',
    title: 'GoodDoc Mobile App',
    category: 'App Design & Video',
    year: '2024',
    client: 'GoodDoc Healthcare',
    role: 'UI/UX Designer & Motion Designer',
    thumbnail: imgApp1,
    videos: [],
    images: [imgApp1, imgApp2],
    description: 'A comprehensive mobile healthcare platform designed to bridge the gap between patients and doctors through intuitive design and seamless interaction.',
    overview: 'GoodDoc provides a streamlined experience for booking appointments, managing medical records, and consulting with specialists virtually. The goal was to create a calm, trust-inspiring interface that remains highly functional for all age groups.',
    process: [
      { step: 'User Research', detail: 'Conducted interviews with patients and healthcare providers to identify pain points in current digital health solutions.' },
      { step: 'Prototyping', detail: 'Developed high-fidelity interactive prototypes to test navigation flows and appointment booking sequences.' },
      { step: 'Motion Design', detail: 'Created detailed walkthrough videos to showcase the app\'s core features and user experience.' }
    ],
    results: 'The app concept received high praise for its accessibility and clarity in presenting complex medical information.',
    color: '#4A90E2',
  },
  {
    id: 1,
    slug: 'aurora-brand-identity',
    title: 'Aurora Brand Identity',
    category: 'Branding',
    year: '2024',
    client: 'Aurora Wellness Co.',
    role: 'Brand Designer & Art Director',
    thumbnail: imgBranding1,
    images: [imgBranding1, imgBranding2],
    description:
      'A complete brand identity system for a premium wellness company. The project encompassed logo design, typography selection, color palette development, and a comprehensive brand guidelines document.',
    overview:
      'Aurora Wellness needed a brand that felt both luxurious and approachable — rooted in nature but elevated through design. We crafted an identity system that balances organic warmth with modern sophistication.',
    process: [
      { step: 'Research & Discovery', detail: 'Deep-dive into the wellness industry landscape, competitor analysis, and target audience interviews.' },
      { step: 'Concept Development', detail: 'Exploration of 40+ logo concepts, mood boards, and typography pairings.' },
      { step: 'Design Refinement', detail: 'Meticulous refinement of the chosen direction — kerning, proportions, color calibration.' },
      { step: 'Brand System', detail: 'Delivered a comprehensive brand guidelines document covering usage rules and social templates.' },
    ],
    results: 'The rebrand led to a 35% increase in brand recognition within the first quarter.',
    color: '#C67B5C',
  },
  {
    id: 20,
    slug: 'masala-chips-packaging',
    title: 'Masala Chips Packaging',
    category: 'Packaging',
    year: '2024',
    client: 'Spice Route',
    role: 'Lead Designer',
    thumbnail: imgPackaging5,
    images: [imgPackaging5],
    description: 'A vibrant and culturally rich packaging design for a premium masala chips brand, capturing the essence of traditional spices.',
    overview: 'The goal was to create a packaging system that feels authentic and high-energy, using bold colors and intricate patterns to reflect the intense flavors of the product.',
    process: [
      { step: 'Cultural Research', detail: 'Exploring traditional motifs and color palettes that resonate with the target audience.' },
      { step: 'Illustration', detail: 'Developing custom spice illustrations and vibrant background patterns.' }
    ],
    results: 'The new packaging significantly increased shelf visibility and consumer engagement.',
    color: '#B36B4E',
  },
  {
    id: 2,
    slug: 'meridian-editorial',
    title: 'Meridian Editorial',
    category: 'Editorial Design',
    year: '2024',
    client: 'Meridian Publishing',
    role: 'Lead Designer',
    thumbnail: imgEditorial1,
    images: [imgEditorial1],
    description:
      'Art direction and layout design for a quarterly culture magazine. Each issue features a unique visual language while maintaining brand cohesion.',
    overview:
      'Meridian is a quarterly publication exploring the intersection of culture, travel, and design.',
    process: [
      { step: 'Editorial Planning', detail: 'Collaborated with editors to understand each story arc, developing visual hierarchies.' },
      { step: 'Grid System', detail: 'Designed a flexible 12-column grid that accommodates photography-heavy spreads.' },
    ],
    results: 'The redesigned magazine saw a 45% increase in newsstand sales.',
    color: '#A8B5A0',
  },
  {
    id: 15,
    slug: 'experimental-poster-series',
    title: 'Experimental Poster Series',
    category: 'Poster Design',
    year: '2024',
    client: 'Studio Project',
    role: 'Art Director',
    thumbnail: imgEditorial3,
    images: [imgEditorial3, imgEditorial2],
    description: 'A series of avant-garde posters exploring the intersection of fashion photography and experimental typography.',
    overview: 'This series pushes the boundaries of traditional poster design, using high-fashion imagery as a canvas for typographic exploration.',
    process: [
      { step: 'Concept Development', detail: 'Selecting high-impact imagery that allows for complex typographic layering.' },
      { step: 'Typography', detail: 'Experimenting with distorted and overlapping letterforms to create a sense of movement.' }
    ],
    results: 'Recognized for its bold and unconventional approach to visual communication.',
    color: '#2A2A2A',
  },
  {
    id: 3,
    slug: 'terra-packaging',
    title: 'Terra Packaging',
    category: 'Packaging',
    year: '2023',
    client: 'Terra Botanicals',
    role: 'Packaging Designer',
    thumbnail: imgPackaging1,
    images: [imgPackaging1, imgPackaging2],
    description:
      'Sustainable packaging design for an artisan skincare line. The system uses recycled materials and soy-based inks while maintaining a luxury feel.',
    overview:
      'Terra Botanicals challenged us to create packaging that embodies sustainability without sacrificing the premium experience.',
    process: [
      { step: 'Material Research', detail: 'Extensive sourcing of eco-friendly substrates — recycled kraft and plant-based plastics.' },
      { step: 'Structural Design', detail: 'Developed custom die-cut templates that minimize waste while creating a memorable unboxing.' },
      { step: 'Visual Language', detail: 'Hand-illustrated botanical elements combined with clean typography.' },
      { step: 'Production', detail: 'Oversaw production using soy-based inks, achieving a 40% reduction in environmental impact.' },
    ],
    results: 'The packaging won a Dieline Award for sustainability.',
    color: '#8C8577',
  },
  {
    id: 8,
    slug: 'perfume-product-design',
    title: 'Perfume Product Design',
    category: 'Product Design',
    year: '2024',
    client: 'Essence Co.',
    role: 'Product Designer',
    thumbnail: imgPackaging3,
    images: [imgPackaging3, imgPerfume1, imgPoster3],
    description: 'A comprehensive product design and visual campaign for a luxury fragrance.',
    overview: 'This project involved the structural design of the perfume bottle, packaging, and a series of promotional posters that capture the essence of the scent.',
    process: [
      { step: 'Industrial Design', detail: 'Developing the form factor of the bottle to feel ergonomic and elegant.' },
      { step: 'Visual Storytelling', detail: 'Creating a mood through lighting and photography that aligns with the scent profile.' }
    ],
    results: 'The design was lauded for its cohesive visual language across product and promotion.',
    color: '#8C8577',
  },
  {
    id: 4,
    slug: 'lumiere-web-experience',
    title: 'Lumière Web Experience',
    category: 'Digital Design',
    year: '2024',
    client: 'Lumière Interiors',
    role: 'UI/UX Designer',
    thumbnail: imgDigital1,
    images: [imgDigital1],
    description:
      'An immersive e-commerce experience for a luxury furniture brand. The website features cinematic product showcases and an intuitive shopping flow.',
    overview:
      'Lumière Interiors needed a digital presence that matched the tactile luxury of their physical showrooms.',
    process: [
      { step: 'UX Research', detail: 'User journey mapping and interviews with high-value customers.' },
      { step: 'Wireframing', detail: 'Low-fidelity prototypes tested with users, iterating on information architecture.' },
      { step: 'Visual Design', detail: 'High-fidelity designs featuring cinematic product photography and generous white space.' },
      { step: 'Development', detail: 'Detailed design specs and a component library in Figma for the development team.' },
    ],
    results: 'Post-launch, the site achieved a 60% increase in average session duration.',
    color: '#C67B5C',
  },
  {
    id: 14,
    slug: 'coffee-product-design',
    title: 'Coffee Product Design',
    category: 'Product Design',
    year: '2024',
    client: 'Brew & Co.',
    role: 'Product Designer',
    thumbnail: imgDigital2,
    images: [imgDigital2],
    description: 'A refined product design and visual identity for a premium coffee brand.',
    overview: 'This project explored the sensory experience of coffee through minimalist product design and warm, inviting visual storytelling.',
    process: [
      { step: 'Product Concept', detail: 'Developing a visual language that reflects the artisanal quality of the coffee.' },
      { step: 'Photography', detail: 'Capturing the rich textures and tones of the product in a studio setting.' }
    ],
    results: 'The design was featured in several prominent design publications.',
    color: '#8C8577',
  },

  {
    id: 13,
    slug: 'guitar-poster-design',
    title: 'Guitar Poster Design',
    category: 'Poster Design',
    year: '2023',
    client: 'Music & Co.',
    role: 'Lead Designer',
    thumbnail: imgPoster2,
    images: [imgPoster2],
    description: 'A vibrant and expressive poster design for a music event, featuring a stylized guitar illustration.',
    overview: 'The goal was to capture the energy and passion of live music through a combination of bold illustration and dynamic typography.',
    process: [
      { step: 'Illustration', detail: 'Developing a unique, hand-drawn guitar icon as the focal point.' },
      { step: 'Color Palette', detail: 'Selecting high-contrast colors to ensure visibility and impact.' }
    ],
    results: 'The poster became a highly sought-after collector\'s item.',
    color: '#C67B5C',
  },
  {
    id: 6,
    slug: 'haven-app-design',
    title: 'Haven App Design',
    category: 'App Design',
    year: '2024',
    client: 'Haven Wellness',
    role: 'Product Designer',
    thumbnail: imgApp1,
    images: [imgApp1, imgApp2],
    description:
      'A meditation and wellness app with an organic, calming interface. The design prioritizes accessibility and creates a sense of tranquility.',
    overview:
      'Haven aims to make mindfulness accessible to everyone.',
    process: [
      { step: 'User Research', detail: 'Surveyed 200+ meditation practitioners understanding pain points.' },
      { step: 'Design System', detail: 'Created a component library with rounded, organic shapes and fluid animations.' },
      { step: 'Prototyping', detail: 'Built interactive prototypes in Figma testing navigation flows and session tracking.' },
      { step: 'Accessibility', detail: 'Ensured WCAG 2.1 AA compliance including voice-over support.' },
    ],
    results: 'Haven launched with a 4.8-star rating on the App Store.',
    color: '#8C8577',
  },
  {
    id: 7,
    slug: 'nexit-identity',
    title: 'Nexit Construction',
    category: 'Branding',
    year: '2023',
    client: 'Nexit Construction',
    role: 'Lead Designer',
    thumbnail: imgConstruction1,
    images: [imgConstruction1],
    description: 'A visual identity for a modern construction firm focusing on sustainable building practices.',
    overview: 'Nexit Construction required a robust and forward-thinking identity that reflects their commitment to structural integrity and environmental responsibility.',
    process: [
      { step: 'Discovery', detail: 'Researching industrial branding trends and competitor landscapes.' },
      { step: 'Sketching', detail: 'Developing bold, geometric logo marks that symbolize stability.' }
    ],
    results: 'The new identity successfully positioned Nexit as a premium player in the regional market.',
    color: '#2A2A2A',
  },
  {
    id: 8,
    slug: 'essence-perfume',
    title: 'Essence Perfume',
    category: 'Packaging',
    year: '2024',
    client: 'Essence Co.',
    role: 'Art Director',
    thumbnail: imgPerfume1,
    images: [imgPerfume1],
    description: 'Minimalist bottle and packaging design for a new fragrance line.',
    overview: 'The goal was to create a design that captures the ethereal nature of the fragrance through transparency and light.',
    process: [
      { step: 'Visual Direction', detail: 'Moodboarding based on light, glass, and shadows.' }
    ],
    results: 'Selected for feature in Global Design Review.',
    color: '#8C8577',
  },
  {
    id: 9,
    slug: 'stride-footwear',
    title: 'Stride Footwear',
    category: 'Product Design',
    year: '2024',
    client: 'Stride',
    role: 'Visual Designer',
    thumbnail: imgShoe1,
    images: [imgShoe1],
    description: 'Dynamic product photography and promotional design for an athletic footwear launch.',
    overview: 'Stride wanted a high-energy visual campaign for their latest running shoe line.',
    process: [
      { step: 'Conceptualization', detail: 'Designing layout systems that emphasize speed and movement.' }
    ],
    results: 'Campaign resulted in a 20% increase in pre-orders.',
    color: '#C67B5C',
  },
  {
    id: 11,
    slug: 'pure-skin-packaging',
    title: 'Pure Skin Packaging',
    category: 'Packaging',
    year: '2024',
    client: 'Pure Skin',
    role: 'Visual Designer',
    thumbnail: imgPackaging4,
    images: [imgPackaging4],
    description: 'Clean and modern packaging design for a dermatological skincare brand.',
    overview: 'The challenge was to communicate clinical efficacy while maintaining a sense of luxury and approachability.',
    process: [
      { step: 'Visual Language', detail: 'Developing a typographic system that feels both professional and elegant.' }
    ],
    results: 'Helped the brand secure placement in top-tier retailers.',
    color: '#8C8577',
  },
  {
    id: 12,
    slug: 'echo-poster-series',
    title: 'Echo Poster Series',
    category: 'Poster Design',
    year: '2023',
    client: 'Echo Music Fest',
    role: 'Graphic Designer',
    thumbnail: imgPoster4,
    images: [imgPoster4],
    description: 'A series of vibrant, abstract posters for an independent music festival.',
    overview: 'Each poster captures the energy of a different musical genre through abstract shapes and bold color palettes.',
    process: [
      { step: 'Creative Exploration', detail: 'Using sound waves and rhythm as inspiration for the visual elements.' }
    ],
    results: 'Increased social media engagement by 40% during the festival promotion.',
    color: '#C67B5C',
  },

  {
    id: 21,
    slug: 'modern-couture',
    title: 'Modern Couture',
    category: 'Fashion Photography',
    year: '2025',
    client: 'Vogue France',
    role: 'Art Director & Designer',
    thumbnail: imgPoster1,
    images: [imgPoster1],
    description: 'A sophisticated visual study exploring the intersection of architectural forms and high-fashion editorial photography.',
    overview: 'Modern Couture was born from a desire to blend structural rigidity with the fluid grace of avant-garde fashion.',
    process: [
      { step: 'Visual Research', detail: 'Curating mood boards that bridge the gap between Brutalist architecture and modern tailoring.' },
      { step: 'Art Direction', detail: 'Collaborating with photographers to achieve a high-contrast, cinematic aesthetic.' }
    ],
    results: 'The series was featured as a double-page spread in the Spring/Summer 2025 digital edition.',
    color: '#2A2A2A',
  },
];

export default projects;
