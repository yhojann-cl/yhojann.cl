#!/bin/bash

cd ../react/;
npm run build;
rsync -tvrz --progress --delete ./build/ root@a.public.devel.rocks:/home/yhojann.cl/public_html/;
ssh root@a.public.devel.rocks '
    chown yhojann.cl:yhojann.cl -R /home/yhojann.cl/public_html/;
';
