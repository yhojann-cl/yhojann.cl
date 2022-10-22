const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

class Deploy {

    constructor(props) {
        this.props = props;
        this.build()
        .then(() => this.upload())
        .then(() => this.fixPerms())
        .then(() => console.log('Success.'))
        .catch(e => { console.log('e...'); throw e });
    }

    async build() {
        console.log('Building project ...');
        return exec('npm run build');
    }

    async upload() {
        console.log('Uploading package to server ...');
        return exec(`rsync -tvrz --progress --delete ./build/ root@${this.props.publicHostname}:${this.props.publicHtml}/`);
    }

    async fixPerms() {
        console.log('Fixing permissions ...');
        return exec(`ssh root@${this.props.publicHostname} 'chown ${this.props.publicCname}:${this.props.publicCname} -R ${this.props.publicHtml}/'`);
    }
}

new Deploy({
    publicHtml: '/home/yhojann.cl/public_html',
    publicHostname: 'a.public.whk.cl',
    publicCname: 'yhojann.cl'
});