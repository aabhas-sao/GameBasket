/* eslint-disable require-jsdoc */
import React, { useState } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../../firebase/firebase";
import Mobile from "./mobile";
import Desktop from "./desktop";

export default function Example() {
  const [open, setOpen] = useState(false);
  const [displayName, setDisplayName] = useState<string | null>("");

  onAuthStateChanged(auth, (user) => {
    // console.log(user?.email);
    if (user) {
      if (user.displayName) setDisplayName(user.displayName);
    } else {
      setDisplayName("");
    }
  });

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Mobile open={open} setOpen={setOpen} />
      <Desktop displayName={displayName} open={open} setOpen={setOpen} />
    </div>
  );
}
