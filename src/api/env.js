let env = {
  // dev: 'http://192.168.9.83:9093',
  dev: 'http://127.0.0.1:9093',
  // dev: 'http://192.168.107.94:9093',
  build: 'http://192.168.184.25:9093'
}

export const getUrl = url => {
  return process.env.NODE_ENV == 'development' ? (env.dev+url) : (env.build+url)
}

export const getParams = parmas => {
  let str = ''
  for(let i in parmas){
    str += i+'='+ parmas[i]+'&'
  }
  return str.substring(0, str.length-1)
}
