import { memo } from "react";
import Link from "next/link";

function Navigation() {
  return (
    <nav>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default memo(Navigation);
