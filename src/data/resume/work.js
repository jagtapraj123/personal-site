/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Qualcomm',
    position: 'Engineering Intern',
    url: 'https://www.qualcomm.com',
    startDate: '2023-05-15',
    endDate: '2023-08-11',
    summary: `Qualcomm designs application class processors (Snapdragon) and communication technology (Modems-5G, WiFi, Bluetooth). 
    I was part of System Performance team (SPT). SPT analyzes performance of new processors, finds bottlenecks, compares with current processors in market.
    As intern, I worked on creating automation pipeline to run tests, manage and analyze results. This framework reduces user intervention to almost none and allows users to parallelize multiple tasks.`,
    highlights: [
      'Collaborated in a team of 4 to develop a comprehensive software framework used by 50 engineers to enable competitive analysis across Qualcomm and competitor SoCs, to identify performance bottlenecks in 1 click with no manual intervention.',
      'Created a central server that hosts Flask APIs, MySQL Database, and PHP Laravel WebApp for storage and visualization.',
      'Implemented Python package to enable minimal code integration between new framework and existing test environments.',
    ],
  },
  {
    name: 'Wunderman Thompson',
    position: 'Software Developer',
    url: 'https://www.wundermanthompson.com',
    startDate: '2021-06-23',
    endDate: '2022-05-23',
    summary: `WTC is a consultancy-technology company that manages various aspects of businesses including e-commerce, data analytics and advertisements.
    I was part of the Data Science R&D team where I worked on automated ads generation system and business analytics software.`,
    highlights: [
      ['bold', 'CAIP (Context-Aware Image Processing System)'],
      'Developed image processing software in Python3 to serve variable-sized ads in real-time reducing manual work by 90%.',
      'Trained and fine-tuned ML model to detect client company products and symbols to improve accuracy and alignment of ads.',
      'Implemented Seam Carving method to extend images for fitting screen sizes with larger aspect ratios than raw images.',
      'Improved detection accuracy, product alignment, and visual quality of extension than previous tool used by client.',
      ['bold', 'Online Marketplace Analysis Software'],
      'Built business analysis framework in Python3 to analyze online marketplace data and extract actionable business insights.',
      'Utilized NLP models on product comments which automated suggestions for product improvements.',
      'Built competitor sales estimation model with an R2-score of ~95% using popularity rankings and price changes as inputs.',
      'Created scalable high throughput data engineering pipeline to scrape, preprocess, and show results for 1 million products.',
    ],
  },
  {
    name: 'Arm',
    position: 'Engineering Intern',
    url: 'https://www.arm.com/',
    startDate: '2020-06-01',
    endDate: '2020-11-27',
    summary: `Arm is a processor IP company that powers processors such as Snapdragon, Apple M, etc.
    I was part of CT-CPU team working on performance modeling using functional simulator Fast Models. Fast Models are detailed simulators of processors in development phase to allow users to design compilers and applications.
    Fast models provide details of execution such as instruction trace, memory trace, cache hit-miss, etc. that can be used to estimate performance.
    I built plugins for Fast Models that can provide additional information such as Instruction Execution Summary, Memory Access Pattern and Working Set Size simulation.`,
    highlights: [
      'Formulated and developed tools to analyze benchmark workload for performance analysis and optimization.',
      'Developed Instruction Summary plugin using C++ to analyze first-level characterization of the workload to find CPU units stressed for unit-wise performance analysis. Created an automator in Python3 to update plugin for newer instruction sets.',
      'Designed and implemented Working Set Size Time Series algorithm combining Ballooning Method and Stack Distance Approach to estimate optimal cache size for minimizing cache misses for a workload.',
      'Presented a white paper on plugin results analyzing GeekBench, AnTuTu, and SPEC-CPU-2006 benchmarks.',
    ],
  },
];

export default work;
