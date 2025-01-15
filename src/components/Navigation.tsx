"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { memo } from "react";

import styles from "@/styles/navigation.module.css";

function Navigation() {
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <div>
        <Link href="/">Home</Link> {path === "/" && "🔥"}
      </div>
      <div>
        <Link href="/about">About</Link>
        {path === "/about" && "🔥"}
      </div>
    </nav>
  );
}

export default memo(Navigation);
