import chalk from 'chalk';

// log de informacion
export const Info = (msg: string) => console.log(chalk.blue(msg));

// log de errores
export const Error = (msg: string) => console.log(chalk.red(msg));

// log de advertencias
export const Warn = (msg: string) => console.log(chalk.yellow(msg));

// log de funcionamiento correcto
export const OK = (msg: string) => console.log(chalk.green(msg));

// log de funcionamiento correcto
export const Arrow = (msg: string) => console.log(chalk.magenta(msg));

export default { Info, Error, Warn, OK };
