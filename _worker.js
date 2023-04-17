export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/")) {
      return Response.json({
        source: "api"
      });
    }   
    
    return env.ASSETS.fetch(request);
  }
}