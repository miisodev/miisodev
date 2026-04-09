'use client'

import { useState } from 'react'

export type Review = {
  name: string
  project: string
  remarks: string
  stars: number
}

type Props = {
  reviews: Review[]
  emptyMessage?: string
}

export default function ReviewsCarousel({
  reviews,
  emptyMessage = 'No reviews yet.',
}: Props) {
  const [index, setIndex] = useState(0)

  if (reviews.length === 0) {
    return (
      <div style={{
        border: '1px dashed var(--border)',
        borderRadius: 12,
        padding: '32px 24px',
        textAlign: 'center',
      }}>
        <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 14, color: 'var(--muted)', margin: 0 }}>
          {emptyMessage}
        </p>
      </div>
    )
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: 12, overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: 4 }}>
        {reviews.map((r, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            style={{
              flexShrink: 0,
              width: 260,
              background: 'var(--surface)',
              border: `1px solid ${i === index ? 'var(--accent)' : 'var(--border)'}`,
              borderRadius: 10,
              padding: '18px 20px',
              cursor: reviews.length > 1 ? 'pointer' : 'default',
              scrollSnapAlign: 'start',
              transition: 'border-color 0.15s',
            }}
          >
            <div style={{ display: 'flex', gap: 2, marginBottom: 10 }}>
              {Array.from({ length: 5 }).map((_, si) => (
                <span key={si} style={{ fontSize: 13, color: si < r.stars ? '#F95C4B' : 'var(--border)' }}>★</span>
              ))}
            </div>
            <p style={{
              fontFamily: 'var(--font-outfit)',
              fontSize: 13,
              color: 'var(--muted)',
              lineHeight: 1.65,
              marginBottom: 14,
              display: '-webkit-box',
              WebkitLineClamp: 4,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}>
              "{r.remarks}"
            </p>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, fontWeight: 600, color: 'var(--text)', margin: '0 0 2px' }}>
              {r.name}
            </p>
            <p style={{ fontFamily: 'var(--font-outfit)', fontSize: 11, color: 'var(--muted)', margin: 0 }}>
              {r.project}
            </p>
          </div>
        ))}
      </div>

      {reviews.length > 1 && (
        <div style={{ display: 'flex', gap: 8, marginTop: 14, alignItems: 'center' }}>
          <button
            onClick={() => setIndex((i) => (i - 1 + reviews.length) % reviews.length)}
            style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, color: 'var(--muted)', background: 'none', border: '1px solid var(--border)', borderRadius: 6, padding: '4px 12px', cursor: 'pointer' }}
          >←</button>
          <button
            onClick={() => setIndex((i) => (i + 1) % reviews.length)}
            style={{ fontFamily: 'var(--font-outfit)', fontSize: 13, color: 'var(--muted)', background: 'none', border: '1px solid var(--border)', borderRadius: 6, padding: '4px 12px', cursor: 'pointer' }}
          >→</button>
          <span style={{ fontFamily: 'var(--font-outfit)', fontSize: 12, color: 'var(--muted)' }}>
            {index + 1} / {reviews.length}
          </span>
        </div>
      )}
    </div>
  )
}
