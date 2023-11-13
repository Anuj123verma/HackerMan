let a = [
    "Initializing Hack Tool....",
    "Connecting to Instagram....",
    "Connecting to server 1....",
    "Connection failed. Retrying....",
    "Connecting to server 2....",
    "Connected Successfully....",
    "Username found pay_al9044....",
    "Trying Brute Force....",
    "200K passwords tried....",
    "Match not found....",
    "Trying again....",
    "Match found....",
    "Successfully got the password....",
    "Account compromised for username pay_al9044...."
  ]
  
  const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true)
      }, seconds * 1000)
    })
  }
  
  const showHack = async (message) => {
    await sleep(2)
    // console.log(message)
    text.innerHTML = text.innerHTML + message + "<br>"
  }
  
  (async () => {
    for (let i = 0; i < a.length; i++) {
      await showHack(a[i])
    }
  })()