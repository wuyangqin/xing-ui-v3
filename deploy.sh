rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M master &&
git remote add origin git@github.com:wuyangqin/xing-ui-v3-dist.git &&
git push -f -u origin master &&
cd -
echo https://wuyangqin.github.io/xing-ui-v3-dist/#/
