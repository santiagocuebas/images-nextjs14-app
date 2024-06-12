'use client'

import { usePathname } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import { ButtonNav } from './index';
import styles from '../styles/Nav.module.css';

export default function Nav() {
  const pathname = usePathname();

	return (
    <nav className={styles.nav}>
      <Link href={'/'} className={styles.link}>
        <Image
          src={"/imgshare-logo.png"}
          alt={'Logo'}
          width={100}
          height={100}
          unoptimized={true}
        />
      </Link>
      <div>
        <ButtonNav text='Gallery' color='green' href='/gallery' path={pathname} />
				<ButtonNav text='Upload' color='violet' href='/' path={pathname} />
      </div>
    </nav>
  );
}
