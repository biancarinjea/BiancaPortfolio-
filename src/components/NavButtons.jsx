import { IonButton, IonMenuButton } from "@ionic/react";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const NavButtons = () => {
  const history = useHistory()
  const [mQuery, setMQuery] = React.useState({
    matches: window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addListener(setMQuery);

    return () => mediaQuery.removeListener(setMQuery);
  }, []);

  // MediaQueryListEvent { isTrusted: true, media: "(min-width: 768px)", matches: true ...}
  console.log(mQuery.matches);

  return (
    <div>
      {mQuery && !mQuery.matches ? (
        <IonMenuButton />
      ) : (
        <>
          <IonButton routerLink={"/work"}>Portfolio </IonButton>
          <IonButton routerLink={"/aboutUs"}>About Us</IonButton>
          <IonButton routerLink={"/contact"}>Contact</IonButton>
        </>
      )}
    </div>
  );
};