import { createServer, Model } from "miragejs";

import {BasicExercises} from "../myvideos/basicexercises"


export const makeServer = function () {
  return createServer({
    models: {
     basicexercise: Model,
   
    },

    seeds(server) {
      BasicExercises.forEach((item) => {
        server.create("basicexercise", {
        id:item.id,
        description:item.description,
        url:item.url
        });
      });
     
    },

    routes() {
      this.get("/api/basicexercises", (schema) => {
        return schema.basicexercises.all();
      });

    }
  });
};
