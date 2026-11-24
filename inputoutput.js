

const rl = readline.createInterface({
    input: Process.stdout,
    output: Process.stdout
});
rl.question('Enter your name: ', (name => {
    console.log('Hello, ${name}!');
    rl.close();
}));