import { Request, Response } from "express";
import CreateUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = CreateUser({
    email: "patrik@gmail.com",
    password: "123456",
    techs: ["Node.js", "ReactJS", "React Native"],
  });

  return response.json(user);
}
