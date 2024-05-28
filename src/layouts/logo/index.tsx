import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex">
      <Image
        src="/images/logo.svg"
        alt="Logo"
        width={30}
        height={30}
      />
    </Link>
  );
}
