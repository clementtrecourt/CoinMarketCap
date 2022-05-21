import React from 'react'
import Image from 'next/image'

const TrendingCard = ({ title, icon, trendingData }) => {
  return (
    <div className={styles.trendingCard}>
      <div className={styles.trendingCardWrapper}>
        <div className="flex">
          {icon && <Image src={icon} width={27} height={27} alt="icon" />}
          &nbsp;&nbsp;
          <p className="font-bold">{title}</p>
        </div>
        {/* MoreButton */}
      </div>
    </div>
  )
}

export default TrendingCard
