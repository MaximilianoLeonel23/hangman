import React, { useState } from "react";
import { phrases } from "@/contants/phrases";
import { useEffect } from "react";

interface Props {
  game: boolean;
}
const Notifications: React.FC<Props> = ({ game }) => {
  const [notification, setNotification] = useState<string>("");

  useEffect(() => {
    let currentIndex = 0;
    const notificationInterval = setInterval(() => {
      setNotification(phrases[currentIndex]);
      currentIndex = (currentIndex + 1) % phrases.length;

      setTimeout(() => {
        setNotification("");
      }, 8000);
    }, 22000);

    return () => {
      clearInterval(notificationInterval);
    };
  }, []);

  if (!game || !notification) {
    return null;
  }

  return (
    <p className="bg-dark px-4 w-fit py-2 border border-dark rounded text-light text-xs sm:text-sm text-left mt-12 animate-fade-in">
      {notification}
    </p>
  );
};

export default Notifications;
