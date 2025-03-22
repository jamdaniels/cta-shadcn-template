import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { Banana } from "lucide-react";

export function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <Link to="/">
          <Button variant="link" className="font-bold">
            <Banana className="size-6" /> Bananas
          </Button>
        </Link>
      </div>
      <div className="flex gap-2">
        <Button variant="outline">Sign up</Button>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
    </div>
  );
}
