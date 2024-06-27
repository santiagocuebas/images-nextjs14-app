import type { GenericProp } from '@/lib/types/props';
import Link from "next/link";
import NextImage from "next/image";
import { DIR } from '../config';
import styles from '../styles/Image.module.css';

export default function Image({ id, filename, alt }: GenericProp) {
  return (
    <Link href={'/gallery/' + id} className={styles.link}>
      <NextImage 
        src={DIR + '/' + filename}
        alt={alt}
        width={100}
        height={100}
        unoptimized={true}
      />
    </Link>
  )
}
