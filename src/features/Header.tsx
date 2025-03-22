import { Button } from "./ui/button";

export function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <Button variant="link" className="font-bold">
          Logo
        </Button>
      </div>
      <div className="flex gap-2">
        <Button variant="outline">Sign up</Button>
        <Button>Login</Button>
      </div>
    </div>
  );
}
