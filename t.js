
const fs = require('fs')

fs.readdirSync('code/mine')
  .forEach(name => {
    try {
      fs.mkdirSync(`code/out/${name}`, { recursive: true })
      fs.writeFileSync(`code/out/${name}/mine.link`, fs.readFileSync(`code/mine/${name}/base.link`))
    } catch (e) {}
  })

fs.readdirSync('code/mine/unicode')
  .forEach(name => {
    try {
      fs.mkdirSync(`code/out/unicode/${name}`, { recursive: true })
      fs.writeFileSync(`code/out/unicode/${name}/mine.link`, fs.readFileSync(`code/mine/unicode/${name}/base.link`))
    } catch (e) {}
  })

fs.readdirSync('code/mine/datetime')
  .forEach(name => {
    try {
      fs.mkdirSync(`code/out/datetime/${name}`, { recursive: true })
      fs.writeFileSync(`code/out/datetime/${name}/mine.link`, fs.readFileSync(`code/mine/datetime/${name}/base.link`))
    } catch (e) {}
  })

fs.readdirSync('code/lace/pdf')
  .forEach(name => {
    try {
      fs.mkdirSync(`code/out/pdf/${name}`, { recursive: true })
      fs.writeFileSync(`code/out/pdf/${name}/lace.link`, fs.readFileSync(`code/lace/pdf/${name}/base.link`))
    } catch (e) {}
  })

fs.readdirSync('code/mine/font')
  .forEach(name => {
    try {
      fs.mkdirSync(`code/out/font/${name}`, { recursive: true })
      fs.writeFileSync(`code/out/font/${name}/mine.link`, fs.readFileSync(`code/mine/font/${name}/base.link`))
    } catch (e) {}
  })

fs.readdirSync('code/mine/audio')
  .forEach(name => {
    try {
      fs.mkdirSync(`code/out/audio/${name}`, { recursive: true })
      fs.writeFileSync(`code/out/audio/${name}/mine.link`, fs.readFileSync(`code/mine/audio/${name}/base.link`))
    } catch (e) {}
  })

fs.readdirSync('code/mine/video')
  .forEach(name => {
    try {
      fs.mkdirSync(`code/out/video/${name}`, { recursive: true })
      fs.writeFileSync(`code/out/video/${name}/mine.link`, fs.readFileSync(`code/mine/video/${name}/base.link`))
    } catch (e) {}
  })

fs.readdirSync('code/mine/pdf')
  .forEach(name => {
    try {
      fs.mkdirSync(`code/out/pdf/${name}`, { recursive: true })
      fs.writeFileSync(`code/out/pdf/${name}/mine.link`, fs.readFileSync(`code/mine/pdf/${name}/base.link`))
    } catch (e) {}
  })

fs.readdirSync('code/mine/image')
  .forEach(name => {
    try {
      fs.mkdirSync(`code/out/image/${name}`, { recursive: true })
      fs.writeFileSync(`code/out/image/${name}/mine.link`, fs.readFileSync(`code/mine/image/${name}/base.link`))
    } catch (e) {}
  })

fs.readdirSync('code/mine/font/otf/table')
  .forEach(name => {
    try {
      fs.mkdirSync(`code/out/font/otf/table/${name}`, { recursive: true })
      fs.writeFileSync(`code/out/font/otf/table/${name}/mine.link`, fs.readFileSync(`code/mine/font/otf/table/${name}/base.link`))
    } catch (e) {}
  })

fs.readdirSync('code/mine/http')
  .forEach(name => {
    try {
      fs.mkdirSync(`code/out/http/${name}`, { recursive: true })
      fs.writeFileSync(`code/out/http/${name}/mine.link`, fs.readFileSync(`code/mine/http/${name}/base.link`))
    } catch (e) {}
  })

fs.readdirSync('code/form')
  .forEach(name => {
    try {
      fs.mkdirSync(`code/out/${name}`, { recursive: true })
      fs.writeFileSync(`code/out/${name}/form.link`, fs.readFileSync(`code/form/${name}/base.link`))
    } catch (e) {}
  })

fs.readdirSync('code/lace')
  .forEach(name => {
    try {
      fs.mkdirSync(`code/out/${name}`, { recursive: true })
      fs.writeFileSync(`code/out/${name}/lace.link`, fs.readFileSync(`code/lace/${name}/base.link`))
    } catch (e) {}
  })

fs.readdirSync('code/mint')
  .forEach(name => {
    try {
      fs.mkdirSync(`code/out/${name}`, { recursive: true })
      fs.writeFileSync(`code/out/${name}/mint.link`, fs.readFileSync(`code/mint/${name}/base.link`))
    } catch (e) {}
  })

fs.readdirSync('code/mint/font/otf')
  .forEach(name => {
    try {
      fs.mkdirSync(`code/out/${name}`, { recursive: true })
      fs.writeFileSync(`code/out/font/otf/${name}/mint.link`, fs.readFileSync(`code/mint/font/otf/${name}/base.link`))
    } catch (e) {}
  })
