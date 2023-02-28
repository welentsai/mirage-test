import { createServer } from "miragejs";

export function mockServer() {
    const server = createServer({
        routes() {
          // this.passthrough();
          this.passthrough("https://api.github.com/**")

          this.passthrough("https://reqres.in/api/**")

          // this.passthrough(request => {
          //   console.warn(`Incoming Unhandle request) ${request.url}`)
          //   if (request.url.includes('https://reqres.in/api/')) {
          //       return true
          //   }
          //   return false
          // })
    
          this.namespace = "/learning";
          this.urlPrefix = "http://localhost:3333"
    
          this.get("/api/users", () => [
            { id: "1", name: "Luke" },
            { id: "2", name: "Leia" },
            { id: "3", name: "Anakin" },
          ]);
        },
    });

    const NativeXMLHttpRequest = window.XMLHttpRequest;
    window.XMLHttpRequest = function XMLHttpRequest() {
      // const request = new NativeXMLHttpRequest(arguments);
      const request :XMLHttpRequest = new NativeXMLHttpRequest();
      delete request.onloadend;
      return request;
    };

    return server
}