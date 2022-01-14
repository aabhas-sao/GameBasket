/* eslint-disable require-jsdoc */
import React, { useState, useEffect } from "react";
import Mobile from "./mobile";
import Desktop from "./desktop";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export default function Example() {
  const [open, setOpen] = useState(false);
  const [displayName, setDisplayName] = useState<string | null>("");
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (user.uid !== null) {
      setDisplayName(user.firstName + " " + user.lastName);
    } else {
      setDisplayName("");
    }
  }, [user]);

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Mobile open={open} setOpen={setOpen} />
      <Desktop displayName={displayName} open={open} setOpen={setOpen} />
    </div>
  );
}
