const crearInterfaz = () => {
    const readline = require("readline");
    return readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
  };

  module.exports = crearInterfaz;