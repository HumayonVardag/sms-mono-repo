const prepareApiUrl = (url, appendApiV1) => {
  if(!url.startsWith('/')) return 'Add slash at the start'
  
  return appendApiV1 ? 
  process.env.BACKEND_BASE_URL + process.env.BACKEND_API_VERSION + url :
  process.env.BACKEND_BASE_URL + url; 
}

export default prepareApiUrl;