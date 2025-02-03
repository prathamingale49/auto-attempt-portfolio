import * as React from 'react';
import { useState } from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import Section from '../Section';
import styles from '../../../css/collapsiblesection.module.css'; // Import the CSS Module

export default function CollapsibleSection(props) {
    const { type, elementId, colors, title, items = [], styles: customStyles = {} } = props;
    return (
        <Section type={type} elementId={elementId} colors={colors} styles={customStyles.self}>
            {title && (
                <h2 className={classNames('text-center text-3xl font-bold mb-6', customStyles.title ? mapStyles(customStyles.title) : null)}>
                    {title}
                </h2>
            )}
            <CollapsibleList items={items} />
        </Section>
    );
}

function CollapsibleList({ items }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={styles.collapsibleSection}>
            {items.map(({ header, content }, index) => (
                <div key={index} className={styles.collapsibleItem}>
                    <button className={styles.collapsibleHeader} onClick={() => toggleItem(index)}>
                        {header}
                        <span>{openIndex === index ? '▲' : '▼'}</span>
                    </button>
                    <div className={`${styles.collapsibleContent} ${openIndex === index ? styles.open : ''}`}>
                        <ul>
                            {content.map((item, i) => (
                                <li key={i} className={styles.listItem}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}
