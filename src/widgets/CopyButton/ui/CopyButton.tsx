"use client";
import { useIsMobile } from "@/shared/hooks/use-mobile";
import { Button } from "@/shared/ui/button";
import { Copy, CopyCheck } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";

export const CopyButton = ({
  children,
  data,
  className,
}: {
  children: ReactNode | string;
  className?: string;
  data: any;
}) => {
  const [copy, setCopy] = useState(false);
  const copyHandler = async () => {
    setCopy(true);
    await navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_URL}/profile/${data}`
    );
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };
  const isMobile = useIsMobile();
  return (
    <Button className={className} onClick={copyHandler}>
      {!isMobile ? children : ""}
      {copy ? <CopyCheck /> : <Copy />}
    </Button>
  );
};
