import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

function Header() {
  const storage = window.localStorage;
  let [location, _] = useLocation();

  const [folder, setFolder] = useState(storage.getItem("folder"));

  useEffect(() => {
    setFolder(storage.getItem("folder"));
    return () => {};
  }, [location]);

  return (
    <header>
      <nav>
        <h1>
          <Link href="/">
            <a>Folders</a>
          </Link>
          {folder ? ` > ${folder}` : ""}
        </h1>
      </nav>
    </header>
  );
}

export default Header;
