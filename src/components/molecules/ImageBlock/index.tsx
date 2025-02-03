import * as React from 'react';
import classNames from 'classnames';
import { Annotated } from '@/components/Annotated';

export default function ImageBlock(props) {
    const { elementId, className, url, altText = '', width, height } = props;

    if (!url) {
        return null;
    }

    return (
        <Annotated content={props}>
            <div
                className={classNames(
                    'sb-component',
                    'sb-component-block',
                    'sb-component-image-block',
                    className,
                    'oval-image-container' // Added class for container
                )}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxWidth: width || '400px', // Default size
                    maxHeight: height || 'auto',
                    position: 'relative' // Needed for absolute border
                }}
            >
                <img
                    id={elementId || null}
                    src={url}
                    alt={altText}
                    className="oval-image" // Add class to target with CSS
                    style={{
                        width: width || '100%',
                        height: height || 'auto',
                        objectFit: 'cover',
                        borderRadius: '50% / 60%', // Adjusted for oval shape
                    }}
                />
                <div className="oval-border"></div> {/* Added border */}
            </div>
        </Annotated>
    );
}
