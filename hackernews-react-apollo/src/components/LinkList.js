import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Link from './Link';

const LinkList = () => {
    const FEED_QUERY = gql `
    {
        feed {
          id
          links {
            createdAt
            description
            url
          }
        }
    }`;

    return (
        <div>
            {linksToRender.map((link) => (
                <Link key={link.id} link={link} />
            ))}
        </div>
    );
};

export default LinkList;