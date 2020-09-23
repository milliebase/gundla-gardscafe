import Button from "../Button";
import Link from "next/link";

const LinkButton = ({ href, text }) => {
  return (
    <Link href={href} passHref>
      <Button text={text} />
    </Link>
  );
};

export default LinkButton;
