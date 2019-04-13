import webpack from 'webpack';
import config from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minifed bundle for production'));

webpack(config).run((err, stats) => {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    }

    const jsonStats = stats.toJson();
    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(chalk.red(error)));
    }

    if (jsonStats.hasWarnings) {
        return jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
    }

    console.log(`webpack stats: ${webpack.stats}`);

    //build succedeed
    console.log(chalk.green('Your app has been build for production...'));
    return 0;
})