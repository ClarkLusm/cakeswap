import Image from "next/image";
import Link from "next/link";

export function AccountBalance() {
  return (
    <Link href="/" className="flex items-center mr-8">
      <Image
        src="/images/avatar.svg"
        alt=""
        width={24}
        height={24}
        className="mr-1"
      />
      <span className="balance font-bold text-sm">$2.123</span>
    </Link>
  );
}
