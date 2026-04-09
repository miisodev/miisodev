'use client'

import Image from 'next/image'
import { useState } from 'react'

type Stat = {
  label: string
  value: string
  highlight?: boolean
}

type Props = {
  image: string
  imageAlt: string
  imagePosition?: string
  rating: number
  title: string
  description: string
  badges: string[]
  stats: Stat[]
  linkLabel: string
  linkHref: string
}

export default function ShowcaseCard({
  image,
  imageAlt,
  imagePosition = 'center',
  rating,
  title,
  description,
  badges,
  stats,
  linkLabel,
  linkHref,
}: Props) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={linkHref}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--surface)',
        border: `1px solid ${hovered ? 'var(--accent)' : 'var(--border)'}`,
        borderRadius: 12,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        textDecoration: 'none',
        transition: 'border-color 0.2s ease',
        cursor: 'pointer',
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
        <Image
          src={image}
          alt={imageAlt}
          fill
          style={{
            objectFit: 'cover',
            objectPosition: imagePosition,
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.35s ease',
          }}
          unoptimized
        />
        <div style={{
          position: 'absolute',
          top: 10,
          right: 10,
          background: 'var(--bg)',
          border: '1px solid var(--border)',
          borderRadius: 6,
          padding: '4px 8px',
          display: 'flex',
          alignItems: 'center',
          gap: 4,
        }}>
          <span style={{ fontSize: 12, color: '#F59E0B' }}>★</span>
          <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 600, color: 'var(--text)' }}>
            {rating.toFixed(1)}
          </span>
        </div>
      </div>

      <div style={{ padding: '20px 20px 20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <p style={{ fontFamily: 'var(--font-outfit)', fontWeight: 600, fontSize: 16, color: 'var(--text)', margin: '0 0 6px' }}>
          {title}
        </p>
        <p style={{ fontFamily: 'var(--font-outfit)', fontWeight: 400, fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, margin: '0 0 14px' }}>
          {description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
          {badges.map((badge) => (
            <span key={badge} style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: 11,
              fontWeight: 500,
              color: 'var(--muted)',
              border: '1px solid var(--border)',
              borderRadius: 4,
              padding: '3px 8px',
            }}>
              {badge}
            </span>
          ))}
        </div>

        <div style={{
          display: 'flex',
          gap: 20,
          paddingTop: 14,
          borderTop: '1px solid var(--border)',
          marginBottom: 16,
        }}>
          {stats.map((stat) => (
            <div key={stat.label}>
              <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, color: 'var(--muted)', margin: '0 0 2px' }}>
                {stat.label}
              </p>
              <p style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: 13,
                fontWeight: 600,
                color: stat.highlight ? '#22c55e' : 'var(--text)',
                margin: 0,
              }}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <span style={{
          fontFamily: 'var(--font-outfit)',
          fontSize: 14,
          fontWeight: 500,
          color: 'var(--accent)',
        }}>
          {linkLabel}
        </span>
      </div>
    </a>
  )
}
