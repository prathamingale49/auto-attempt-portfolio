import * as React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Annotated } from '@/components/Annotated';
import { ContentObject, PageModelType } from '@/types';

type RegularLinkProps = React.PropsWithChildren & NextLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type LinkProps = RegularLinkProps | (Omit<RegularLinkProps, 'href'> & { href: PageModelType });

const Link: React.FC<LinkProps> = (props) => {
    const { children, href: hrefArgument, ...other } = props;
    let hrefString: string = '';
    let hrefContent: ContentObject = null;

    // If hrefArgument is a string, use it directly
    if (typeof hrefArgument === 'string') {
        hrefString = hrefArgument;
    } else if (hrefArgument && hrefArgument.__metadata && hrefArgument.__metadata.urlPath) {
        // If hrefArgument is an object and has the expected structure, use its urlPath
        hrefContent = hrefArgument;
        hrefString = hrefArgument.__metadata.urlPath;
    } else {
        // Fallback in case hrefArgument doesn't have the expected structure
        hrefString = '';
    }

    // Ensure hrefString is not empty or undefined
    if (!hrefString) {
        console.warn('Invalid href provided, falling back to empty link.');
        hrefString = '#'; // Use a fallback link if href is invalid
    }

    // Determine if it's an internal or external link
    const internal = /^\/(?!\/)/.test(hrefString);

    // Choose the correct tag: Next.js Link for internal, <a> tag for external
    const linkTag = internal ? (
        <NextLink href={hrefString} {...other}>
            {children}
        </NextLink>
    ) : (
        <a href={hrefString} {...other} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );

    // Return annotated content if hrefContent is available
    return hrefContent ? <Annotated content={hrefContent}>{linkTag}</Annotated> : linkTag;
};

export default Link;
