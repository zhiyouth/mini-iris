const fs = require('fs');
const path = require('path');

const currentFilePath = './dist/cjs/mini-iris.js';

const targetFilePath = '../wechat-demo/sdk/mini-iris.js';
deleteFile(targetFilePath)
copyFile(currentFilePath, targetFilePath)
/**
 * @param { copiedPath: String } (被复制文件的地址，相对地址)
 * @param { resultPath: String } (放置复制文件的地址，相对地址)
 */
 function copyFile(copiedPath, resultPath) {
  copiedPath = path.join(__dirname, copiedPath)
  resultPath = path.join(__dirname, resultPath)

  try {
      /**
       * @des 方式一
       */
      // fs.writeFileSync(resultPath, fs.readFileSync(copiedPath))
      /**
       * @des 方式二
       */
      fs.copyFileSync(copiedPath, resultPath)
      console.log('success');
  } catch (error) {
      console.log(error);
  }
}

/**
 * @param { delPath：String } （需要删除文件的地址）
 * @param { direct：Boolean } （是否需要处理地址）
 */
 function deleteFile(delPath, direct) {
  delPath = direct ? delPath : path.join(__dirname, delPath)
  try {
      /**
       * @des 判断文件或文件夹是否存在
       */
      if (fs.existsSync(delPath)) {
          fs.unlinkSync(delPath);
      } else {
          console.log('inexistence path：', delPath);
      }
  } catch (error) {
      console.log('del error', error);
  }
}

function copyFolder(copiedPath, resultPath, direct) {
  if(!direct) {
      copiedPath = path.join(__dirname, copiedPath)
      resultPath = path.join(__dirname, resultPath)
  }
  function createDir (dirPath) {
      fs.mkdirSync(dirPath)        
  }

  if (fs.existsSync(copiedPath)) {
      createDir(resultPath)
      /**
       * @des 方式一：利用子进程操作命令行方式
       */
      // child_process.spawn('cp', ['-r', copiedPath, resultPath])

      /**
       * @des 方式二：
       */
      const files = fs.readdirSync(copiedPath, { withFileTypes: true });
      for (let i = 0; i < files.length; i++) {
          const cf = files[i]
          const ccp = path.join(copiedPath, cf.name)
          const crp = path.join(resultPath, cf.name)  
          if (cf.isFile()) {
              /**
               * @des 创建文件,使用流的形式可以读写大文件
               */
              const readStream = fs.createReadStream(ccp)
              const writeStream = fs.createWriteStream(crp)
              readStream.pipe(writeStream)
          } else {
              try {
                  /**
                   * @des 判断读(R_OK | W_OK)写权限
                   */
                  fs.accessSync(path.join(crp, '..'), fs.constants.W_OK)
                  copyFolder(ccp, crp, true)
              } catch (error) {
                  console.log('folder write error:', error);
              }

          }
      }
  } else {
      console.log('do not exist path: ', copiedPath);
  }
}

