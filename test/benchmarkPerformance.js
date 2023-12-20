import Benchmark from 'benchmark';
import prettier from 'prettier';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

// Define the path to the 'sample.js' file relative to your script
const filePath = fileURLToPath(new URL('../src/Choices.js', import.meta.url));

// Read the contents of the JavaScript file
const readCode = async () => {
  try {
    const code = await fs.readFile(filePath, 'utf-8');
    return code;
  } catch (error) {
    console.error('Error reading the file:', error);
    return null; // Return null to indicate that an error occurred
  }
};

// Create a benchmark suite
const suite = new Benchmark.Suite();

// Add a benchmark test for Prettier formatting
suite.add('Prettier Formatting', {
  defer: true, // Enable deferred benchmarking for async operations
  fn: async (deferred) => {
    const code = await readCode();
    if (code) { // Ensure code is not null before proceeding
      const formattedCode = prettier.format(code, {
        tabWidth: 4,
        parser: 'babel', // Specify the parser for JavaScript code
      });
    }
    deferred.resolve(); // Resolve the deferred object once done
  }
});

// Add listeners for the 'cycle' and 'complete' events
suite
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', () => {
    console.log('Benchmark completed.');
  });

// Run the benchmark
suite.run({ async: true });
