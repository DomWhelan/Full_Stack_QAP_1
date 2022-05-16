// Include "OS" Operating System module into this application
const os = require("os");

// operating system details to be printed out via console.log()
console.log(); // For spacing only
console.log("Operating system Details:");
console.log("---------------------------------------------------");
console.log(`Platform Name:                  ${os.platform}`);
console.log(`Release:                        ${os.release}`);
console.log(`Operating System Name:          ${os.type}`);
console.log(`Total Memory:                   ${os.totalmem}`);
console.log(`Free Memory:                    ${os.freemem}`);
console.log(`Temporary Directory:            ${os.tmpdir}`);
console.log(); // For spacing only
