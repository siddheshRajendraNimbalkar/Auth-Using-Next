import authConfig from "./auth.config"
import NextAuth from "next-auth"
import { defaultAuthRedirect,apiAuthPrefix,authRouth,publicRouth} from "./routes"

export const { auth } = NextAuth(authConfig)
 
export default auth((req) => { 
  const { nextUrl } = req;
  const isLoggin = !!req.auth;

  const isapiAuthRouth = nextUrl.pathname.startsWith(apiAuthPrefix)
  const ispublicRouths = publicRouth.includes(nextUrl.pathname)
  const isauthRouth = authRouth.includes(nextUrl.pathname)

  if(isapiAuthRouth){
    return null
  }

  if(isauthRouth){
    if(isLoggin){
      return Response.redirect(new URL(defaultAuthRedirect, nextUrl))
    }
    return null
  }

  if(!isLoggin && !ispublicRouths){
    return Response.redirect(new URL("/auth/login", nextUrl))
  }

  return null;
});
 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};