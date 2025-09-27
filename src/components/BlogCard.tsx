import React from 'react';
import Link from '@docusaurus/Link';

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  link: string;
  image?: string;
}

export default function BlogCard({ title, description, date, link, image }: BlogCardProps) {
  return (
    <div className="card margin-bottom--lg" style={{ maxWidth: '600px' }}>
      <div className="card__image">
        {image && <img src={image} alt={title} />}
      </div>
      <div className="card__body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card__footer">
        <small>{date}</small>
        <div style={{ marginTop: '0.5rem' }}>
          <Link className="button button--primary button--sm" to={link}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
