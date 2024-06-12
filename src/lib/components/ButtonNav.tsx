'use client'

import type { GenericProp } from "@/lib/types/props";
import Link from 'next/link';
import styles from '../styles/ButtonNav.module.css';

export default function ButtonNav({ href, color, text, path }: GenericProp) {
  return (
    <Link
      href={href}
      className={`${styles.link} ${styles[color]}
        ${path === href ? styles.notvisible : ''}`}
    >{text}</Link>
  )
}
