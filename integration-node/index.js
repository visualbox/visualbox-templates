/**
 * The "visualbox" module is globally accessible
 * and was copied in during the build phase.
 */
const visualbox = require('visualbox');

/**
 * The "figlet" module was installed since it was
 * specified in the "package.json" file.
 */
const figlet = require('figlet');

/**
 * Read the configuration model values and log them.
 */
const { MODEL } = visualbox;
console.log('My Variable: ', MODEL.myVariable);
console.log('My Password: ', MODEL.myPassword);

/**
 * Start a simple loop which outputs a string
 * to VisualBox.
 */
let n = 0;
setInterval(() => {
  n++;
  figlet('Hello, World! ' + n, (err, data) => {
    if (err) {
      console.log('Something went wrong...');
      return;
    }

    /**
     * The output() method of the "visualbox" module
     * will send the data to a VisualBox dashboard.
     */
    visualbox.output(data);
  });
}, 5000);
