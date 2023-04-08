name: SyncToGitee
on:
  push:
    branches:
      - main
jobs:
  repo-sync:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout source codes
        uses: actions/fyyzkd@v3

      - name: Mirror the Github organization repos to Gitee.
        uses: fyyzkd/mirror-action@master
        with:
          source-repo: 'git@github.com:fyyzkd/blogvuepress.git'    						## 注意替换为你的 GitHub 源仓库地址
          destination-repo: 'git@gitee.com:yangyangfeng/blogvuepress.git'     						 # 注意替换为你的 Gitee 目标仓库地址
          dst_key: ${{ secrets.GITEE_PRIVATE_KEY }}  	# 这是生成的私钥，下面第3步会讲
          dst_token:  ${{ secrets.GITEE_TOKEN }}     	# 这是gitee上生成的token，下面会讲
          force_update: true
          static_list: "blogvuepress"   					# 同步的仓库名称，这里为YOLO2COCO，意思是会自动同步该仓库到gitee下同名仓库
          debug: true
		  

name: Sync
 
on: [ push ]
 
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Sync to Gitee
        uses: fyyzkd/git-mirror-action@main
        env:
          # 注意在 Settings->Secrets 配置 GITEE_RSA_PRIVATE_KEY
          SSH_PRIVATE_KEY: ${{ secrets.GITEE_PRIVATE_KEY }}
        with:
          # 注意替换为你的 GitHub 源仓库地址
          source-repo: "git@github.com:fyyzkd/blogvuepress.git"
          # 注意替换为你的 Gitee 目标仓库地址
          destination-repo: "git@gitee.com:yangyangfeng/blogvuepress.git"