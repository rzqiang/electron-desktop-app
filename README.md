# electron-desktop-app
使用electron将web站点打包为桌面版App

## 准备工作
将npm包使用国内包
<pre>
npm config set registry https://registry.npm.taobao.org
</pre>
最好使用cnpm
<pre>
npm install -g cnpm --registry=https://registry.npm.taobao.org
</pre>
Electron Forge 是一个用来构建现代化Electron应用的利器，我们这里也采用Electron Forge来构建的项目。
关于Forge的更多信息，请查阅 <a href="https://electronforge.io/">electronforge.io</a>
安装electron-forge
<pre>
cnpm i -g @electron-forge/cli
</pre>
接下来就可以就可以愉快的使用electron-forge来构建项目了，详情可参考 
https://www.electronforge.io/cli

下面的命令在当前目录下建立一个my-project目录，里面就是我们的工程代码了，同时这里指定了使用vue模板，如果不指定的话，默认会使用ES6/7的模板
<pre>
electron-forge init my-project --template=vue
</pre>
运行下面的命令后就会启动我们的应用了，命令没有带路径，表示默认使用当前目录
<pre>
electron-forge start
</pre>
打包，并将打包文件放在out\make目录下
<pre>
electron-forge make
</pre>
需要注意的是只能打包你当前机器的平台包，比如你用OSX是无法打出windows平台安装包的。
## 使用本项目
本项目相当于一个模板，欢迎大家参考和使用，使用方法：
clone 该项目到本地，因为这个项目已经初始化过，所以只需要cnpm install就可以了，然后将configs/example.js中的信息，如URL，图片等替换为自己的即可。
安装好electron-forge后，electron-forge start 就可以启动项目了，electron-forge make便可以轻松打包。
