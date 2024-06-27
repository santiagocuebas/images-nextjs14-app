import type { IImage } from "../types/global";
import type { ImagesProp } from "../types/props";
import Link from "next/link";
import Image from "next/image";
import { FaImages } from "react-icons/fa";
import { DIR } from "../config";
import styles from '../styles/ViewedImages.module.css';

export default function ViewedImages({ images }: ImagesProp) {
  return (
    <div className={styles.view}>
      <h2 className="general-header">
        <FaImages size={32} />
        Most vieweds
      </h2>
      {
        images.length > 0
          ? <div>
              {
                images.map((image: IImage) => (
									<Link href={'/gallery/' + image.uniqueId} key={image.uniqueId}>
										<Image 
											src={DIR + '/' + image.filename}
											alt={image.title}
											width={100}
											height={100}
											unoptimized={true}
										/>
									</Link>
                ))
              }
            </div>
          : null
      }
    </div>
  );
}
