
const extractSubdomain = () => {
  // https://subdomain.example.com/path/to/resource

  return window.location.href.split('.')[0].split('/')[2]
}

export default extractSubdomain;