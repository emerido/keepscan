import React, { ComponentProps, FC } from 'react'
import styles from './timeline.less'
import { useClasses } from 'shared/hooks/styles'

type TimelineEventProps = ComponentProps<'div'> & {
    icon?: 'check' | 'block'
    state?: 'complete' | 'failure' | 'feature'
    style?: 'violet'
}

export const TimelineEvent: FC<TimelineEventProps> = ({ children, ...props }) => {
    const className = useClasses(styles, 'item', props)

    return (
        <div className={className}>
            <div className={styles.legend}>{children}</div>
        </div>
    )
}
