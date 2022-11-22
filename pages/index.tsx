import {useRouter} from "next/router";
import {useEffect} from "react";

export default function Home() {
  const {replace} = useRouter();
  useEffect(() => {
    replace('/startseite/index.html');
  }, [replace]);
  return <></>;
}
