export const isVerified = (data) => {
  const verify = {
    nameBool: true,
    emailBool: true,
    msgBool: true,
  }

  if(data.name.length <= 0) {
    verify.nameBool = false
  }

  if(!(/\S+@\S+\.\S+/.test(data.email))) {
    verify.emailBool = false
  } 

  if(data.message.length <= 0) {
    verify.msgBool = false
  }

  return {
    verify
  }
}